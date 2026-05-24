<script>
  import { merch } from '$lib/data.js';
  import TshirtMockup   from '$lib/components/TshirtMockup.svelte';
  import ToteBagMockup  from '$lib/components/ToteBagMockup.svelte';
  import CasquetteMockup from '$lib/components/CasquetteMockup.svelte';
</script>

<section id="shop">
  <div class="container">

    <p class="section-badge">MERCH</p>
    <h2 class="section-title">LA BOUTIQUE</h2>

    <div class="grid">
      {#each merch as item}
        <article class="card">
          {#if item.badge}
            <span class="badge">{item.badge}</span>
          {/if}

          <!-- Visuel produit -->
          <div class="visual">
            {#if item.video}
              <video
                src={item.video}
                autoplay
                muted
                loop
                playsinline
                class="product-video"
              ></video>
            {:else if item.id === 3}
              <ToteBagMockup />
            {:else if item.id === 4}
              <CasquetteMockup />
            {:else}
              <div class="vinyl-deco" aria-hidden="true">
                <img src="/WAXUPP.jpg" alt="" class="deco-logo" />
              </div>
            {/if}
          </div>

          <div class="info">
            <h3 class="name">{item.name}</h3>
            <p class="desc">{item.description}</p>
            <div class="footer">
              <span class="price">{item.price} €</span>
              <span class="soon">Bientôt dispo</span>
            </div>
          </div>
        </article>
      {/each}
    </div>

    <p class="shipping-note">
      ◆ Tu craques sur un article ? <a href="#contact" class="contact-link">Contacte-nous</a> — on s'occupe de toi.
    </p>

  </div>
</section>

<style>
section {
  padding: var(--section-v) 0;
}

/* ── Grille ── */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}

/* ── Carte ── */
.card {
  border: 1px solid var(--border);
  background: var(--bg-card);
  position: relative;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s, box-shadow 0.25s;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.12);
}

/* Badge */
.badge {
  position: absolute;
  top: 12px; right: 12px;
  background: var(--orange);
  color: #fff;
  font-family: var(--f-mono);
  font-size: 9px;
  letter-spacing: 0.2em;
  padding: 4px 10px;
  z-index: 1;
}

/* Visuel */
.visual {
  aspect-ratio: 4/3;
  background: var(--bg-2);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid var(--border);
}
.product-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Demi-cercle décoratif façon étiquette vinyle */
.vinyl-deco {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.10);
  overflow: hidden;
}
.deco-logo {
  width: 90%;
  height: 90%;
  object-fit: contain;
  mix-blend-mode: multiply;
}

/* Info */
.info {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.name {
  font-family: var(--f-sub);
  font-size: 15px;
  letter-spacing: 0.04em;
  color: var(--cream);
  text-transform: uppercase;
}

.desc {
  font-family: var(--f-mono);
  font-size: 11px;
  color: var(--smoke);
  line-height: 1.6;
  flex: 1;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid var(--border);
}

.price {
  font-family: var(--f-display);
  font-size: 28px;
  color: var(--orange);
  line-height: 1;
}

.soon {
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  color: var(--smoke);
  text-transform: uppercase;
  border: 1px solid var(--border);
  padding: 6px 12px;
}

.contact-link {
  color: var(--orange);
  text-decoration: underline;
  text-underline-offset: 3px;
}

/* Note livraison */
.shipping-note {
  text-align: center;
  font-family: var(--f-mono);
  font-size: 11px;
  color: var(--smoke);
  letter-spacing: 0.1em;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

/* Responsive */
@media (max-width: 900px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
