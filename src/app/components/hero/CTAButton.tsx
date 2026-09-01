"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "../../../hooks/useReducedMotion";
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "cta" | "outline" | "ghost";
  className?: string;
}

export function CTAButton({ href, children, variant = "cta", className }: CTAButtonProps) {
  const reducedMotion = useReducedMotion();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current || reducedMotion) return;

    const button = buttonRef.current;

    const handleMouseEnter = () => {
      gsap.to(button, { scale: 1.02, duration: 0.15, ease: "power2.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(button, { scale: 1, duration: 0.15, ease: "power2.out" });
    };

    const handleMouseDown = () => {
      gsap.to(button, { scale: 0.98, duration: 0.1, ease: "power2.in" });
    };

    const handleMouseUp = () => {
      gsap.to(button, { scale: 1.02, duration: 0.1, ease: "power2.out" });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousedown", handleMouseDown);
    button.addEventListener("mouseup", handleMouseUp);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousedown", handleMouseDown);
      button.removeEventListener("mouseup", handleMouseUp);
    };
  }, [reducedMotion]);

  return (
    <Button ref={buttonRef} variant={variant} size="lg" asChild className={className}>
      <a href={href}>{children}</a>
    </Button>
  );
}