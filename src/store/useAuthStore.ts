import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'user' | 'admin';
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    login: (credentials: { email: string }) => Promise<void>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            login: async ({ email }) => {
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 800));

                // Mock logic: admin@petshop.cl -> Admin Role
                const role = email.includes('admin') ? 'admin' : 'user';

                set({
                    user: {
                        id: '1',
                        name: email.split('@')[0],
                        email,
                        role,
                    },
                    isAuthenticated: true,
                });
            },
            logout: () => set({ user: null, isAuthenticated: false }),
        }),
        {
            name: 'auth-storage',
        }
    )
);
