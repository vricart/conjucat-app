import SearchBar from "@/components/SearchBar";

export default function HeroSection() {
  return (
    <section className="hero">

      {/* Decorative background blobs */}
      <div className="hero-band hero-band-yellow" />
      <div className="hero-band hero-band-red" />

      <div className="hero-inner">

        {/* Heading */}
        <h1 className="hero-title">
          Conjugate <span className="hero-title-accent">any verb</span>
          <br />
          in Catalan <span className="hero-title-amp">&amp;</span> Spanish.
        </h1>

        {/* Subtitle */}
        <p className="hero-sub">
          Type a verb in any tense, mood or person. Switch languages with one
          tap and compare conjugations side by side.
        </p>

        {/* Search */}
        <SearchBar />

      </div>
    </section>
  );
}
