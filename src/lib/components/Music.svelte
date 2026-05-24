<script>
  import { releases, bandInfo } from '$lib/data.js';
</script>

<section id="musique">
  <div class="container">

    <p class="section-badge">SIDE B</p>
    <h2 class="section-title">MUSIQUE</h2>

    <div class="grid">
      {#each releases as rel}
        <article class="card" class:latest={rel.latest}>

          {#if rel.youtubeId}
            <!-- Vidéo YouTube -->
            <div class="video-wrap">
              <iframe
                src="https://www.youtube.com/embed/{rel.youtubeId}"
                title={rel.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              {#if rel.latest}
                <span class="new-sticker">NEW</span>
              {/if}
            </div>
          {:else}
            <!-- Pochette abstraite CSS -->
            <div
              class="cover"
              style="background: linear-gradient(135deg, {rel.cover.from} 0%, {rel.cover.via} 50%, {rel.cover.to} 100%);"
              aria-hidden="true"
            >
              <div class="cover-grooves"></div>
              <div class="cover-center"></div>
              {#if rel.latest}
                <span class="new-sticker">NEW</span>
              {/if}
            </div>
          {/if}

          <div class="card-body">
            <div class="meta">
              <span class="type">{rel.type}</span>
              <span class="year">{rel.year}</span>
            </div>
            <h3 class="title">{rel.title}</h3>
            <p class="artist">{bandInfo.name}</p>

            <a href={rel.streamUrl} class="btn btn-primary stream-btn" target="_blank" rel="noopener">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M3 2l7 4-7 4V2z" fill="currentColor"/>
              </svg>
              Écouter
            </a>
          </div>

        </article>
      {/each}
    </div>

  </div>
</section>

<style>
section { padding: var(--section-v) 0; }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

/* ── Card ── */
.card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 48px rgba(0,0,0,0.5);
}
.card.latest {
  border-color: var(--orange);
}

/* ── Vidéo YouTube ── */
.video-wrap {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #000;
}
.video-wrap iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.video-wrap .new-sticker {
  position: absolute;
  top: 12px; right: 12px;
  z-index: 1;
}

/* ── Pochette ── */
.cover {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Sillons concentriques sur la pochette */
.cover-grooves {
  position: absolute;
  inset: 0;
  background: repeating-radial-gradient(
    circle at 50% 50%,
    rgba(0,0,0,0)       0px, rgba(0,0,0,0)       8px,
    rgba(0,0,0,0.12)    8px, rgba(0,0,0,0.12)    9px,
    rgba(0,0,0,0)       9px, rgba(0,0,0,0)        16px,
    rgba(255,255,255,0.04) 16px, rgba(255,255,255,0.04) 17px
  );
  pointer-events: none;
}

/* Point central */
.cover-center {
  position: absolute;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.1);
}

/* Badge NEW */
.new-sticker {
  position: absolute;
  top: 16px; right: 16px;
  background: var(--orange);
  color: #fff;
  font-family: var(--f-display);
  font-size: 18px;
  letter-spacing: 0.1em;
  padding: 4px 12px;
  transform: rotate(3deg);
  box-shadow: 0 4px 12px rgba(255,77,0,0.5);
}

/* ── Body ── */
.card-body {
  padding: 24px;
}

.meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.type {
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--orange);
}
.year {
  font-family: var(--f-mono);
  font-size: 11px;
  color: var(--smoke);
}

.title {
  font-family: var(--f-display);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1;
  letter-spacing: 0.04em;
  color: var(--cream);
  margin-bottom: 6px;
}

.artist {
  font-family: var(--f-mono);
  font-size: 12px;
  color: var(--smoke);
  margin-bottom: 20px;
}

.stream-btn {
  padding: 10px 22px;
  font-size: 10px;
}
</style>
