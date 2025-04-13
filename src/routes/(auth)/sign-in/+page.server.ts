import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import { dev } from '$app/environment';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();
        const username = data.get('username')?.toString();
        const password = data.get('password')?.toString();
        const rememberMe = data.has('remember');

        // Validation
        if (!username || !password) {
            return fail(400, {
                error: 'Username and password are required',
                username: username || ''
            });
        }

        try {
            // Simulate a delay for authentication
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Commented out supabase code as requested
            /*
            const { data: authData, error } = await supabase.auth.signInWithPassword({
                email: username,
                password: password
            });

            if (error) {
                return fail(401, {
                    error: 'Invalid credentials',
                    username
                });
            }

            // Set auth cookie
            if (authData?.session) {
                cookies.set('session', authData.session.access_token, {
                    path: '/',
                    httpOnly: true,
                    sameSite: 'strict',
                    secure: !dev,
                    maxAge: rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24 // 30 days or 1 day
                });
            }
            */

            // For template purposes, simulate successful login
            // In a real app with Supabase, we would use the session from Supabase
            
            // Set a dummy session cookie for demonstration
            if (rememberMe) {
                cookies.set('demo_session', 'dummy_token', {
                    path: '/',
                    httpOnly: true,
                    sameSite: 'strict',
                    secure: !dev,
                    maxAge: 60 * 60 * 24 * 30 // 30 days
                });
            }

            // Success - redirect to dashboard
            // If you want to redirect, uncomment the following line:
            // return redirect(303, '/dashboard');
            
            // For template, just return success without redirect
            return { success: true };
        } catch (error) {
            console.error('Login error:', error);
            return fail(500, {
                error: 'An unexpected error occurred',
                username
            });
        }
    }
} satisfies Actions;