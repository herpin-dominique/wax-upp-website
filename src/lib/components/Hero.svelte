<script>
  import { onMount }  from 'svelte';
  import { bandInfo } from '$lib/data.js';

  let visible      = false;
  let vinylPaused  = false;

  onMount(() => {
    requestAnimationFrame(() => { visible = true; });
  });
</script>

<section class="hero" id="home" class:visible>

  <!-- Groove texture radiale en fond -->
  <div class="bg-groove" aria-hidden="true"></div>

  <div class="container hero-inner">

    <!-- ── Texte gauche ── -->
    <div class="hero-text">
      <p class="badge">
        <span class="dot"></span>
        {bandInfo.genre} · {bandInfo.city}
      </p>

      <div class="hero-logo">
        <img src="/logo.png" alt="Wax Upp" class="hero-logo-img" />
      </div>

      <p class="tagline">"{bandInfo.tagline}"</p>

      <div class="actions">
        <a href="#shows"   class="btn btn-primary">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Voir les dates
        </a>
        <a href="#musique" class="btn btn-ghost">Écouter</a>
      </div>

      <div class="stats">
        <div class="stat">
          <span class="num">{bandInfo.stats.albums}</span>
          <span class="lbl">Albums</span>
        </div>
        <span class="sep"></span>
        <div class="stat">
          <span class="num">{bandInfo.stats.shows}</span>
          <span class="lbl">Concerts</span>
        </div>
        <span class="sep"></span>
        <div class="stat">
          <span class="num">{bandInfo.stats.members}</span>
          <span class="lbl">Musiciens</span>
        </div>
      </div>
    </div>

    <!-- ── Vinyle droit ── -->
    <div class="vinyl-wrap">
      <div class="glow" aria-hidden="true"></div>
      <div
        class="vinyl"
        class:paused={vinylPaused}
        on:mouseenter={() => vinylPaused = true}
        on:mouseleave={() => vinylPaused = false}
        role="img"
        aria-label="Disque vinyle WAX UPP — survole pour mettre en pause"
      >
        <div class="label">
          <img src="/WAXUPP.jpg" alt="Wax Upp" class="l-logo" />
        </div>
      </div>
      <p class="vinyl-hint">Survole pour mettre en pause</p>
    </div>

  </div>

  <!-- Indicateur de scroll -->
  <div class="scroll-hint" aria-hidden="true">
    <span>Scroll</span>
    <div class="scroll-line"></div>
  </div>

</section>

<!-- ── Ticker / Bandeau défilant ── -->
<div class="ticker" aria-hidden="true">
  <div class="ticker-track">
    {#each {length: 8} as _}
      <span>WAX UPP</span>
      <span class="t-sep">◆</span>
      <span>ROCK POP FUNK</span>
      <span class="t-sep">◆</span>
      <span>{bandInfo.city}</span>
      <span class="t-sep">◆</span>
    {/each}
  </div>
</div>

<style>
/* ── Section ── */
.hero {
  min-height: 100svh;
  min-height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.bg-groove {
  position: absolute;
  inset: 0;
  background: repeating-radial-gradient(
    circle at 75% 50%,
    transparent 0px,        transparent 28px,
    rgba(180,0,0,0.06) 28px, rgba(180,0,0,0.06) 29px
  );
  pointer-events: none;
}

/* ── Grid hero ── */
.hero-inner {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: clamp(32px, 6vw, 100px);
  padding-top:    clamp(32px, 5vw, 56px);
  padding-bottom: clamp(60px, 8vw, 90px);
}

/* ── Texte ── */
.hero-text {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.9s ease, transform 0.9s ease;
}
.hero.visible .hero-text { opacity: 1; transform: translateY(0); }

.badge {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 24px;
}
.dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--orange);
  flex-shrink: 0;
  animation: pulse-dot 2.2s ease-in-out infinite;
}

.hero-logo {
  margin-bottom: 28px;
}
.hero-logo-img {
  height: clamp(90px, 16vw, 220px);
  width: auto;
  mix-blend-mode: multiply;
}

.tagline {
  font-family: var(--f-mono);
  font-size: clamp(12px, 1.4vw, 15px);
  color: var(--smoke);
  font-style: italic;
  letter-spacing: 0.05em;
  margin-bottom: 36px;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.stats {
  display: flex;
  align-items: center;
  gap: 24px;
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.num {
  font-family: var(--f-display);
  font-size: 34px;
  line-height: 1;
}
.lbl {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--smoke);
}
.sep {
  width: 1px;
  height: 36px;
  background: var(--border);
}

/* ── Vinyle ── */
.vinyl-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  opacity: 0;
  transition: opacity 1s ease 0.4s;
  position: relative;
}
.hero.visible .vinyl-wrap { opacity: 1; }

.glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 120%; height: 120%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,77,0,0.18) 0%, transparent 70%);
  filter: blur(24px);
  pointer-events: none;
}

/* Le disque — 3 couches de gradient empilées */
.vinyl {
  width:  clamp(240px, 30vw, 440px);
  height: clamp(240px, 30vw, 440px);
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;
  cursor: grab;
  animation: vinyl-spin 10s linear infinite;

  background:
    /* Sillons */
    repeating-radial-gradient(circle at 50% 50%,
      #141412 0px,   #141412 1.5px,
      #1d1d1a 1.5px, #1d1d1a 4px,
      #161614 4px,   #161614 5.5px,
      #222220 5.5px, #222220 8.5px);

  box-shadow:
    0 0 0 1px rgba(255,255,255,0.04),
    0 24px 80px rgba(0,0,0,0.75),
    inset 0 0 50px rgba(0,0,0,0.35);
}

/* Trou central au-dessus du label image */
.vinyl::before {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 5%; height: 5%;
  border-radius: 50%;
  background: #0a0a08;
  z-index: 2;
  pointer-events: none;
}

/* Reflet brillant via pseudo-élément */
.vinyl::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(255,255,255,0.07) 0%,
    transparent 50%,
    rgba(0,0,0,0.08) 100%
  );
  z-index: 3;
  pointer-events: none;
}

.vinyl.paused { animation-play-state: paused; cursor: grabbing; }

/* Étiquette */
.label {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 52%; height: 52%;
  border-radius: 50%;
  overflow: hidden;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.l-logo {
  width: 90%;
  height: 90%;
  object-fit: contain;
  object-position: center;
  display: block;
}

.vinyl-hint {
  font-size: 10px;
  color: var(--dim);
  letter-spacing: 0.1em;
}

/* ── Scroll hint ── */
.scroll-hint {
  position: absolute;
  bottom: 32px; left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: var(--f-mono);
  font-size: 9px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--dim);
  opacity: 0;
  animation: fade-in 1s ease 2s forwards;
}
.scroll-line {
  width: 1px; height: 42px;
  background: linear-gradient(to bottom, var(--dim), transparent);
}

/* ── Ticker ── */
.ticker {
  background: var(--orange);
  overflow: hidden;
  padding: 9px 0;
  white-space: nowrap;
}
.ticker-track {
  display: inline-flex;
  animation: marquee 22s linear infinite;
}
.ticker-track span {
  font-family: var(--f-display);
  font-size: 14px;
  letter-spacing: 0.15em;
  color: #fff;
  padding: 0 20px;
}
.t-sep { opacity: 0.45; padding: 0 6px !important; }

/* ── Responsive ── */
@media (max-width: 860px) {
  .hero-inner {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .badge, .actions, .stats { justify-content: center; }
  .title  { align-items: center; }

  .vinyl-wrap { order: -1; }
  .vinyl {
    width:  clamp(180px, 58vw, 280px);
    height: clamp(180px, 58vw, 280px);
  }
}

@media (max-width: 480px) {
  .outline { -webkit-text-stroke-width: 2px; }
}
</style>
