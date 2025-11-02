import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [activeTab, setActiveTab] = useState("hero");

  return (
    <>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <AnimatePresence mode="wait">
        {activeTab === "hero" ? (
          <motion.div
            key="hero"
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(8px)" }}
            transition={{ duration: 0.6 }}
          >
            <Hero />
          </motion.div>
        ) : (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.97, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.97, filter: "blur(12px)" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 mt-24 mb-20"
          >
            {activeTab === "projects" && <Projects />}
            {activeTab === "contact" && <Contact />}
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default Index;   // ← IMPORTANT