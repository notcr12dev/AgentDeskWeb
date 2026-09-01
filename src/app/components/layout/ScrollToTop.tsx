"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const { isScrolled } = useScrollPosition();
  const reducedMotion = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const animation = {
      opacity: isScrolled ? 1 : 0,
      scale: isScrolled ? 1 : 0.8,
      y: isScrolled ? 0 : 20,
      duration: reducedMotion ? 0.001 : 0.3,
      ease: "power2.out",
    };

    gsap.to(buttonRef.current, animation);
  }, [isScrolled, reducedMotion]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      ref={buttonRef}
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className="fixed bottom-6 lg:bottom-8 right-6 lg:right-8 z-50 opacity-0 pointer-events-none bg-background/80 backdrop-blur-md border-border/50"
      aria-label="Scroll to top"
      style={{ pointerEvents: isScrolled ? "auto" : "none" }}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
}