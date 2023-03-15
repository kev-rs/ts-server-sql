export interface UserInput {
  name: string;
  email: string;
  role?: 'admin' | 'client';
};