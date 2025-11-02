import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto animate-fade-in">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-gradient mb-4 animate-glow">404</h1>
          <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Oops! The page you're looking for seems to have vanished into the digital void.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="default"
            size="lg"
            className="bg-gradient-primary hover:shadow-neon-cyan/30 hover:shadow-lg transition-all duration-300"
            onClick={() => window.location.href = "/"}
          >
            <Home className="h-4 w-4 mr-2" />
            Go Home
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-neon-purple/30 text-neon-purple hover:bg-neon-purple/10 hover:border-neon-purple transition-all duration-300"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
