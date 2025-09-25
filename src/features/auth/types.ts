export type LoginFormProps = {
  setSession: any;
  // onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
};

export interface UserCredentials {
  email: string;
  password: string;
}

export interface UserProfile {
  id: string;
  email: string;
  role: 'admin' | 'seller' | 'client';
}
