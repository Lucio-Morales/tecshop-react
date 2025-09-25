import type { User } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useState } from 'react';
import type { UserProfile } from '../types';
import type { UserRole } from '../../../types/User';
import { supabase } from '../../../lib/supabaseClient';

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  role: UserRole;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);

      if (user) {
        // Fetch user role from a custom table
        const { data, error } = await supabase
          .from('profiles') // Replace with your profiles table name
          .select('id, username, email, role')
          .eq('id', user.id)
          .single();

        if (error) {
          console.error('Error fetching user profile:', error.message);
        } else {
          setProfile(data as UserProfile);
        }
      }

      setLoading(false);
    };

    fetchUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) {
        fetchUser();
      } else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  const role = profile?.role || null;

  return <AuthContext.Provider value={{ user, profile, loading, role, signOut }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
