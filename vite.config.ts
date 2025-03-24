import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    // Load env file based on `mode` in the current directory.
    // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
    const env = loadEnv(mode, process.cwd(), '');
    
    return {
        server: {
            host: "::",
            port: 8080,
        },
        plugins: [
            react(),
        ].filter(Boolean),
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        // Define environment variables to expose to the client
        define: {
            // Expose specific environment variables to the client
            // Only variables with the VITE_ prefix are automatically exposed to client
            // To ensure environment variables are properly exposed during build
            __POSTHOG_HOST__: JSON.stringify(env.VITE_PUBLIC_POSTHOG_HOST || ''),
            __POSTHOG_KEY__: JSON.stringify(env.VITE_PUBLIC_POSTHOG_KEY || ''),
        },
    };
});
