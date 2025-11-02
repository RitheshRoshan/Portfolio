import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[70%] backdrop-blur-xl bg-background/30 border border-white/10 rounded-2xl shadow-lg transition-all duration-300">
      <div className="px-6 py-3 flex items-center justify-between">

        <div className="flex items-center gap-6">
            <div className="w-12 h-12 overflow-hidden rounded-full">
            <img
              src="/avatar.jpg"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div 
            className="text-xl font-bold font-mono cursor-pointer transition-transform duration-300 hover:scale-[1.06]"
            onClick={() => setActiveTab("hero")}
          >
            <span className="text-foreground">&lt;RitheshRoshan</span>
            <span className="text-neon-purple"> /&gt;</span>
          </div>

        </div>

        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`transition-transform duration-300 hover:scale-[1.08] ${
                activeTab === item.id ? "text-white font-bold text-lg" : "hover:text-neon-purple"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/40 backdrop-blur-xl border-b border-white/10 px-6 py-4">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setIsMobileMenuOpen(false); }}
              className={`block w-full text-left py-2 transition-transform hover:scale-[1.06] ${
                activeTab === item.id ? "text-neon-cyan" : "text-muted-foreground hover:text-neon-cyan"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;