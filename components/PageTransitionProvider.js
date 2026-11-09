"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function PageTransitionProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState("idle");
  const navigatingRef = useRef(false);

  useEffect(() => {
    if (!navigatingRef.current) return;
    setPhase("reveal");
    const timer = window.setTimeout(() => {
      navigatingRef.current = false;
      setPhase("idle");
    }, 330);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target.closest?.("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.hash || url.pathname === window.location.pathname || navigatingRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      event.preventDefault();
      event.stopPropagation();
      navigatingRef.current = true;
      setPhase("enter");

      window.setTimeout(() => {
        setPhase("covered");
        router.push(url.pathname + url.search, { scroll: true });
      }, 285);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return <>
    {children}
    <div className="page-transition" data-phase={phase} aria-hidden="true">
      <div className="transition-brand">
        <div className="transition-logo-shell">
          <img className="transition-logo" src="/brand/matchstick-logo.jpeg" alt="" />
        </div>
        <span className="transition-wordmark">Matchstick Design Studio</span>
      </div>
    </div>
  </>;
}
