
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Set up SEO meta tags
    const metaTags = [
      { name: 'description', content: 'Professional portfolio of Dylan Sharp, a skilled Full Stack Developer specializing in modern web technologies.' },
      { name: 'keywords', content: 'full stack developer, web development, frontend, backend, react, javascript, portfolio' },
      { name: 'author', content: 'Dylan Sharp' },
      { property: 'og:title', content: 'Dylan Sharp | Full Stack Developer' },
      { property: 'og:description', content: 'Professional portfolio of Dylan Sharp, a skilled Full Stack Developer specializing in modern web technologies.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://dylansharp.dev' },
      { property: 'og:image', content: 'https://dylansharp.dev/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Dylan Sharp | Full Stack Developer' },
      { name: 'twitter:description', content: 'Professional portfolio of Dylan Sharp, a skilled Full Stack Developer specializing in modern web technologies.' },
      { name: 'twitter:image', content: 'https://dylansharp.dev/twitter-image.jpg' }
    ];

    metaTags.forEach(tag => {
      let metaElement = document.querySelector(`meta[${tag.name ? 'name' : 'property'}="${tag.name || tag.property}"]`);
      
      if (!metaElement) {
        metaElement = document.createElement('meta');
        metaElement.setAttribute(tag.name ? 'name' : 'property', tag.name || tag.property);
        document.head.appendChild(metaElement);
      }
      
      metaElement.setAttribute('content', tag.content);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
