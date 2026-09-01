"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FOOTER_LINKS, SOCIAL_LINKS, CTAS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "done">("idle");

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setStatus(valid ? "done" : "error");
  }
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Newsletter CTA */}
        <div className="mb-12 lg:mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span className="inline-block h-3 w-0.5 bg-primary" aria-hidden />
              Signal
            </p>
            <h3 className="mt-3 font-display text-xl lg:text-2xl font-medium text-foreground">
              Stay in the loop
            </h3>
            <p className="mt-2 text-muted-foreground">
              Get updates on new features, integrations, and community highlights.
            </p>
          </div>
          <form onSubmit={handleSubscribe} noValidate className="w-full md:w-auto">
            <div className="flex w-full gap-2">
              <Input
                type="email"
                placeholder="you@company.com"
                className="w-full md:w-[280px]"
                aria-label="Email for newsletter"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                aria-invalid={status === "error"}
              />
              <Button variant={CTAS.primary.variant} size="lg">
                Subscribe
              </Button>
            </div>
            <p className={`mt-2 font-mono text-[10px] uppercase tracking-[0.16em] ${
              status === "error" ? "text-destructive" : "text-muted-foreground"
            }`}>
              {status === "error"
                ? "Enter a valid email address."
                : status === "done"
                  ? "Subscribed. Signal on its way."
                  : "Low traffic. No spam."}
            </p>
          </form>
        </div>

        <Separator className="mb-12 lg:mb-16" />

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-foreground mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-12 lg:my-16" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="AgentDesk logo"
              width={1278}
              height={1230}
              className="h-7 w-7 object-cover"
              sizes="28px"
            />
            <span className="font-display font-medium text-lg tracking-tight">AgentDesk</span>
            <span className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={link.label}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}