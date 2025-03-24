import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PostHogProvider } from 'posthog-js/react'

// Declare the variables defined in vite.config.ts
declare const __POSTHOG_HOST__: string;
declare const __POSTHOG_KEY__: string;

// Use the variables defined in vite.config.ts
const options = {
    api_host: __POSTHOG_HOST__
}

createRoot(document.getElementById("root")!).render(
    <PostHogProvider
        apiKey={__POSTHOG_KEY__}
        options={options}
    >
        <App />
    </PostHogProvider>
);
