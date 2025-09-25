export type UserRole = 'admin' | 'seller' | 'client' | null;

export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
}
