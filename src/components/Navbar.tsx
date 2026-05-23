"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ← add this import
import { Menu, X, Shield } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Papers", href: "/papers" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // ← get current route

  // Lock body scroll when menu is open (prevents background scrolling)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Helper to determine active link
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <>
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-text-primary font-semibold hover:text-cyan-DEFAULT transition-colors"
          >
            <Shield size={18} className="text-cyan-muted" />
            <span className="font-mono text-sm">
              sanskar<span className="text-cyan-muted">.sec</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                      active
                        ? "text-cyan-DEFAULT"                         // active: cyan text only
                        : "text-text-secondary hover:text-text-primary" // inactive: gray, turns white on hover
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-text-secondary hover:text-text-primary transition-colors p-2 relative z-50"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile overlay menu (fixed, scrollable) */}
      {open && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-surface/95 backdrop-blur-sm"
          style={{ top: "4rem" }} // below the navbar (h-16 = 4rem)
          onClick={(e) => {
            // Close when clicking on the overlay background
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="h-full overflow-y-auto pb-20">
            <ul className="px-6 py-4 space-y-2">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 text-lg rounded-lg transition-colors ${
                        active
                          ? "text-cyan-DEFAULT"                         // active: cyan text only
                          : "text-text-primary hover:text-cyan-DEFAULT" // inactive: white, turns cyan on hover
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}