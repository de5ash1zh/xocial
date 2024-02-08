// Import required dependencies
import { AppProps } from 'next/app';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Define your App component
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="">
            {/* Provide the Google OAuth client ID as a prop to the GoogleOAuthProvider */}
            <GoogleOAuthProvider clientId='845481435406-84tj2tgdonj3dv3ob6klcgdai90v1vm3.apps.googleusercontent.com'>
                {/* Render the main component and its props */}
                <Component {...pageProps} />
            </GoogleOAuthProvider>
        </div>
    );
}

// Export the App component as the default export
export default MyApp;
