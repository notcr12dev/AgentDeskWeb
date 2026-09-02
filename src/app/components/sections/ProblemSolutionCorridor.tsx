"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProblemPanel } from "./ProblemSection";
import { SolutionHeroPanel } from "./SolutionSection";

gsap.registerPlugin(ScrollTrigger);

/** Horizontal corridor: Problem (panel 1) slides right into Solution (panel 2)
 *  while the user scrolls down. On small screens, reduced motion, or before
 *  hydration the two panels simply stack vertically — no pin, native scroll. */
export function ProblemSolutionCorridor() {
  const [horizontal, setHorizontal] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<ScrollTrigger | null>(null);

  // Corridor only on generous, pointer-driven viewports with motion allowed.
  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 1280px) and (min-height: 720px) and (prefers-reduced-motion: no-preference)"
    );
    const update = () => setHorizontal(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Pin the stage and scrub track.x along the vertical scroll.
  useEffect(() => {
    if (!horizontal) return;
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!stage || !track) return;

    const tween = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: () => -(track.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: stage,
          start: "top top",
          end: () => {
            const amount = track.scrollWidth - window.innerWidth;
            return "+=" + Math.min(amount, Math.round(window.innerHeight * 1.4));
          },
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      }
    );
    stRef.current = tween.scrollTrigger as ScrollTrigger;

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      stRef.current = null;
      ScrollTrigger.refresh();
    };
  }, [horizontal]);

  // Keep nav anchors working while the track is translated horizontally:
  // #problem → pin start (panel 1), #solution → pin end (panel 2 in view).
  useEffect(() => {
    if (!horizontal) return;

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href="#problem"], a[href="#solution"]') as
        | HTMLAnchorElement
        | null;
      if (!link) return;
      const st = stRef.current;
      if (!st) return;

      const href = link.getAttribute("href");
      e.preventDefault();
      const top = href === "#solution" ? st.end - 1 : st.start;
      window.scrollTo({ top, behavior: "smooth" });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [horizontal]);

  return (
    <div className={horizontal ? "journey horizontal" : "journey"}>
      <div ref={stageRef} className="journey-stage">
        <div ref={trackRef} className="journey-track">
          <ProblemPanel screen={horizontal} />
          <SolutionHeroPanel screen={horizontal} />
        </div>
      </div>
    </div>
  );
}
