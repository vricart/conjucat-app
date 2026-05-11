"use client";

import { useState, useRef } from "react";
import { useLanguage, Lang } from "@/context/LanguageContext";

const PLACEHOLDERS: Record<Lang, string> = {
  ca: 'Try "tenir", "fer", "anar"...',
  es: 'Try "tener", "hacer", "ir"...',
};

const LANG_LABELS: Record<Lang, string> = {
  ca: "Catalan",
  es: "Spanish",
};

const CHIPS: Record<Lang, string[]> = {
  ca: ["ser", "tenir", "anar", "fer", "poder"],
  es: ["ser", "tener", "ir", "hacer", "poder"],
};

export default function SearchBar() {
  const { lang, setLang } = useLanguage();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function toggleLang() {
    setLang(lang === "ca" ? "es" : "ca");
  }

  function handleChip(verb: string) {
    setValue(verb);
    inputRef.current?.focus();
  }

  function handleConjugate() {
    if (!value.trim()) return;
    // routing will be wired up when the verb page is ready
    console.log("conjugate:", value.trim(), "lang:", lang);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleConjugate();
  }

  return (
    <div className="search-wrap">

      {/* Search box */}
      <div className="search-box">

        {/* Language selector */}
        <button className="search-lang-btn" onClick={toggleLang} type="button" aria-label="Toggle language">
          <span className={`search-flag search-flag-${lang}`} />
          {LANG_LABELS[lang]}
          <span className="search-chev" />
        </button>

        {/* Text input */}
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={PLACEHOLDERS[lang]}
          autoComplete="off"
          spellCheck={false}
          aria-label="Search for a verb"
        />

        {/* Conjugate button */}
        <button className="search-go" type="button" onClick={handleConjugate}>
          Conjugate <span className="search-go-arrow">→</span>
        </button>

      </div>

      {/* Quick-try chips */}
      <div className="chips-row">
        <span className="chips-label">Try</span>
        {CHIPS[lang].map((verb) => (
          <button
            key={verb}
            className="chip"
            type="button"
            onClick={() => handleChip(verb)}
          >
            {verb}
          </button>
        ))}
      </div>

    </div>
  );
}
