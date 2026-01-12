import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EcommercePlatform from "./pages/EcommercePlatform";
import AIDashboard from "./pages/AIDashboard";
import SocialMediaApp from "./pages/SocialMediaApp";
import InstaReelPlatform from "./pages/InstaReelPlatform";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/ecommerce" element={<EcommercePlatform />} />
          <Route path="/projects/ai-dashboard" element={<AIDashboard />} />
          <Route path="/projects/social-media" element={<SocialMediaApp />} />
          <Route path="/projects/insta-reel" element={<InstaReelPlatform />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
