"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/hooks/useTheme";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, CTAS } from "@/lib/constants";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Header() {
  const { isDark, toggleTheme } = useTheme();
  const { isScrolled } = useScrollPosition();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 font-display text-lg lg:text-xl text-foreground">
            <Image
              src="/logo.png"
              alt="AgentDesk logo"
              width={1278}
              height={1230}
              className="h-8 w-8 shrink-0 object-cover"
              sizes="32px"
              priority
            />
            <span className="font-medium tracking-tight">AgentDesk</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="h-10 w-10 border border-border bg-elevated text-foreground hover:border-primary/60 hover:text-primary"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <Button variant={CTAS.primary.variant} size="lg" asChild>
              <Link href={CTAS.primary.href}>{CTAS.primary.label}</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                className="h-10 w-10 border border-border bg-elevated text-foreground hover:border-primary/60 hover:text-primary"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            )}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="h-10 w-10">
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 border-l border-border">
                <div className="p-6 lg:p-8">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <nav className="flex flex-col gap-5 mt-8">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="font-mono text-sm uppercase tracking-[0.16em] text-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="border-t border-border pt-6 mt-2">
                      {mounted && (
                        <Button
                          variant="ghost"
                          className="w-full justify-start gap-3 border border-border bg-elevated"
                          onClick={toggleTheme}
                        >
                          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                          <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
                        </Button>
                      )}
                    </div>
                    <Button variant={CTAS.primary.variant} className="mt-4 w-full">
                      <Link href={CTAS.primary.href} onClick={() => setOpen(false)}>
                        {CTAS.primary.label}
                      </Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
