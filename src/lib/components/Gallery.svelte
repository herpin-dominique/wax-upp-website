<script>
  const photos = [
    { src: '/photos/groupe-2025.jpg',            alt: 'WAX UPP groupe 2025',  caption: 'WAX UPP · 2025'      },
    { src: '/photos/heloise.jpg',                alt: 'Héloïse Tanboul',      caption: 'Héloïse · Chant'     },
    { src: '/photos/scene.jpg',                  alt: 'WAX UPP sur scène',    caption: 'Sur scène'            },
    { src: '/photos/concert-1.jpg',              alt: 'WAX UPP en concert',   caption: 'En concert'           },
    { src: '/photos/heloise2.jpg',               alt: 'Héloïse Tanboul',      caption: 'Héloïse · Chant'     },
    { src: '/photos/francois.jpg',               alt: 'François · Basse',     caption: 'François · Basse'    },
    { src: '/photos/portrait.jpg',               alt: 'WAX UPP portrait',     caption: 'Le groupe'            },
    { src: '/photos/concert-2.jpg',              alt: 'WAX UPP sur scène',    caption: 'Sur scène'            },
    { src: '/photos/20250321_155540000_iOS.jpg', alt: 'WAX UPP coulisses',    caption: 'Coulisses'            },
  ];

  let selected = null;

  function open(i)  { selected = i; }
  function close()  { selected = null; }
  function prev()   { selected = (selected - 1 + photos.length) % photos.length; }
  function next()   { selected = (selected + 1) % photos.length; }

  function onKeydown(e) {
    if (selected === null) return;
    if (e.key === 'Escape')      close();
    if (e.key === 'ArrowLeft')   prev();
    if (e.key === 'ArrowRight')  next();
  }
</script>

<svelte:window on:keydown={onKeydown} />

<section id="galerie">
  <div class="container">

    <p class="section-badge">SCÈNE & COULISSES</p>
    <h2 class="section-title">GALERIE</h2>

    <div class="grid">
      {#each photos as photo, i}
        <button class="thumb" on:click={() => open(i)} aria-label={photo.caption}>
          <img src={photo.src} alt={photo.alt} />
          <div class="overlay"><span>{photo.caption}</span></div>
        </button>
      {/each}
    </div>

  </div>
</section>

{#if selected !== null}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="lightbox" on:click={close} role="dialog" aria-modal="true">

    <button class="lb-close" on:click={close} aria-label="Fermer">✕</button>

    <button class="lb-prev" on:click|stopPropagation={prev} aria-label="Précédent">‹</button>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="lb-content" on:click|stopPropagation role="presentation">
      <img src={photos[selected].src} alt={photos[selected].alt} class="lb-img" />
      <p class="lb-caption">{photos[selected].caption}</p>
    </div>

    <button class="lb-next" on:click|stopPropagation={next} aria-label="Suivant">›</button>

  </div>
{/if}

<style>
section { padding: var(--section-v) 0; }

/* ── Grille vignettes ── */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
}

.thumb {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  cursor: pointer;
  background: var(--bg-card);
  border: none;
  padding: 0;
  display: block;
  width: 100%;
}
.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.thumb:hover img { transform: scale(1.06); }

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(10,10,8,0.55);
  display: flex;
  align-items: flex-end;
  padding: 14px;
  opacity: 0;
  transition: opacity 0.3s;
}
.thumb:hover .overlay { opacity: 1; }
.overlay span {
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #fff;
}

/* ── Lightbox ── */
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: rgba(10, 10, 8, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 20px;
}

.lb-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-width: calc(100vw - 160px);
  max-height: 90vh;
}

.lb-img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  display: block;
  box-shadow: 0 8px 60px rgba(0,0,0,0.6);
}

.lb-caption {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
}

.lb-close {
  position: fixed;
  top: 20px;
  right: 24px;
  font-size: 22px;
  color: rgba(255,255,255,0.7);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  line-height: 1;
  transition: color 0.2s;
}
.lb-close:hover { color: #fff; }

.lb-prev,
.lb-next {
  font-family: var(--f-display);
  font-size: 56px;
  color: rgba(255,255,255,0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0 12px;
  line-height: 1;
  flex-shrink: 0;
  transition: color 0.2s;
  user-select: none;
}
.lb-prev:hover,
.lb-next:hover { color: var(--orange); }

/* ── Responsive ── */
@media (max-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
  .lb-content { max-width: calc(100vw - 100px); }
  .lb-prev, .lb-next { font-size: 40px; padding: 0 6px; }
}
@media (max-width: 480px) {
  .grid { grid-template-columns: 1fr; }
  .lb-content { max-width: 100vw; }
  .lb-prev, .lb-next { display: none; }
}
</style>
