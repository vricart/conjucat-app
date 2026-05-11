"use client";

import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Conjugate", href: "/" },
];

export default function NavHeader() {
  const [lang, setLang] = useState<"ca" | "es">("ca");

  return (
    <header className="nav-header">

      {/* Brand */}
      <div className="nav-brand">
        <div className="nav-brand-mark">
          <div className="nav-brand-mark-strip" />
          <span className="nav-brand-mark-letter">C</span>
        </div>
        <span className="nav-brand-name">
          conju<em>cat</em>
        </span>
      </div>

      {/* Nav links */}
      <nav className="nav-links">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="nav-link nav-link-active"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Right controls */}
      <div className="nav-right">

        {/* Language toggle */}
        <div className="lang-pill" role="tablist" aria-label="Language">
          {(["ca", "es"] as const).map((l) => (
            <button
              key={l}
              role="tab"
              aria-selected={lang === l}
              onClick={() => setLang(l)}
              className={`lang-pill-btn ${lang === l ? "active" : ""}`}
            >
              <span className="lang-pill-dot" />
              {l.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Sign in */}
        <a href="#" className="nav-signin">Sign in</a>

      </div>
    </header>
  );
}
