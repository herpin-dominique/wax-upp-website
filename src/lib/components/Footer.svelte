<script>
  import { bandInfo, booking, social } from '$lib/data.js';

  let formData = { name: '', email: '', message: '' };
  let submitted = false;

  function handleSubmit(e) {
    e.preventDefault();
    // Remplace ici par ton vrai backend ou un service type Formspree / Netlify Forms
    console.log('Booking request:', formData);
    submitted = true;
  }
</script>

<footer id="contact">

  <!-- Bande orange avec le nom du groupe -->
  <div class="footer-banner">
    <div class="banner-text" aria-hidden="true">
      {#each {length: 6} as _}
        <span>WAX UPP</span><span class="sep">◆</span>
      {/each}
    </div>
  </div>

  <div class="footer-body">
    <div class="container footer-grid">

      <!-- Colonne gauche : contact booking -->
      <div class="col-booking">
        <img src="/logo.png" alt="Wax Upp" class="footer-logo" />
        <p class="section-badge">BOOKING & CONTACT</p>
        <h2 class="footer-title">ON JOUE<br/>CHEZ TOI ?</h2>
        <p class="footer-desc">
          Pour tout renseignement sur les dates, les conditions
          et la réservation du groupe, contacte-nous directement.
        </p>

        <div class="contact-details">
          <a href="mailto:{booking.email}" class="contact-link">
            <span class="icon">✉</span>
            {booking.email}
          </a>
          <a href="tel:{booking.phone.replace(/\s/g,'')}" class="contact-link">
            <span class="icon">◎</span>
            {booking.phone}
          </a>
        </div>

        <!-- Réseaux sociaux -->
        <div class="socials">
          <a href={social.instagram} class="social-btn" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href={social.facebook} class="social-btn" target="_blank" rel="noopener" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a href={social.spotify} class="social-btn" target="_blank" rel="noopener" aria-label="Spotify">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.07 14.23c-.18.3-.57.39-.87.21-2.39-1.46-5.4-1.79-8.94-.98-.34.08-.69-.13-.77-.47-.08-.34.13-.69.47-.77 3.87-.88 7.19-.5 9.89 1.14.3.18.39.57.22.87zm1.09-2.43c-.23.37-.71.49-1.08.26-2.73-1.68-6.89-2.17-10.12-1.18-.41.12-.85-.11-.97-.52-.12-.41.11-.85.52-.97 3.69-1.12 8.28-.57 11.4 1.35.36.22.49.7.25 1.06zm.09-2.53c-3.27-1.94-8.67-2.12-11.79-1.17-.5.15-1.02-.13-1.17-.63-.15-.5.13-1.02.63-1.17 3.59-1.09 9.56-.88 13.33 1.35.46.27.61.86.34 1.32-.27.46-.86.61-1.34.3z"/>
            </svg>
          </a>
          <a href={social.youtube} class="social-btn" target="_blank" rel="noopener" aria-label="YouTube">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96C23 15.86 23 12 23 12s0-3.86-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Colonne droite : formulaire -->
      <div class="col-form">
        {#if submitted}
          <div class="thank-you">
            <span class="ty-icon">◆</span>
            <h3>Message envoyé !</h3>
            <p>On te répond dans les 48h. À bientôt sur scène.</p>
          </div>
        {:else}
          <form on:submit={handleSubmit} novalidate>
            <div class="field">
              <label for="name">Nom / Organisateur</label>
              <input id="name" type="text" bind:value={formData.name}
                     placeholder="Les Nuits de la Scène" required />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input id="email" type="email" bind:value={formData.email}
                     placeholder="contact@festival.fr" required />
            </div>
            <div class="field">
              <label for="message">Message / Date souhaitée</label>
              <textarea id="message" rows="4" bind:value={formData.message}
                        placeholder="Date, lieu, type d'événement…" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary submit-btn">
              Envoyer la demande
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" stroke-width="1.5"
                      stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </form>
        {/if}
      </div>

    </div>
  </div>

  <!-- Copyright -->
  <div class="footer-bottom">
    <div class="container">
      <span>© {new Date().getFullYear()} {bandInfo.name} — All rights reserved</span>
      <span class="made-with">Site fait avec ♥ et SvelteKit</span>
    </div>
  </div>

</footer>

<style>
footer {
  background: var(--bg-2);
  border-top: 1px solid var(--border);
}

/* ── Bandeau ── */
.footer-banner {
  background: var(--bg);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  padding: 18px 0;
}
.banner-text {
  display: flex;
  white-space: nowrap;
  animation: marquee 18s linear infinite reverse;
}
.banner-text span {
  font-family: var(--f-display);
  font-size: clamp(3rem, 6vw, 6rem);
  color: var(--dim);
  padding: 0 24px;
  line-height: 1;
  letter-spacing: 0.05em;
}
.sep { color: var(--border) !important; padding: 0 8px !important; }

/* ── Body ── */
.footer-body {
  padding: clamp(60px, 10vw, 100px) 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(48px, 8vw, 100px);
  align-items: start;
}

/* ── Gauche ── */
.footer-logo {
  height: 80px;
  width: auto;
  margin-bottom: 24px;
  mix-blend-mode: multiply;
}

.footer-title {
  font-family: var(--f-display);
  font-size: clamp(3rem, 6vw, 6rem);
  line-height: 0.9;
  letter-spacing: 0.03em;
  margin-bottom: 20px;
}

.footer-desc {
  font-family: var(--f-mono);
  font-size: 13px;
  color: var(--smoke);
  line-height: 1.9;
  margin-bottom: 32px;
  max-width: 420px;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 36px;
}
.contact-link {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--f-mono);
  font-size: 13px;
  color: var(--cream);
  transition: color 0.2s;
}
.contact-link:hover { color: var(--orange); }
.icon {
  color: var(--orange);
  font-style: normal;
  width: 20px;
  text-align: center;
}

.socials {
  display: flex;
  gap: 8px;
}
.social-btn {
  width: 40px; height: 40px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--smoke);
  transition: color 0.2s, border-color 0.2s, background 0.2s;
}
.social-btn:hover {
  color: var(--cream);
  border-color: var(--orange);
  background: rgba(255,77,0,0.1);
}

/* ── Formulaire ── */
form { display: flex; flex-direction: column; gap: 16px; }

.field { display: flex; flex-direction: column; gap: 6px; }

label {
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--smoke);
}

input, textarea {
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--cream);
  font-family: var(--f-mono);
  font-size: 13px;
  padding: 12px 16px;
  outline: none;
  transition: border-color 0.2s;
  resize: vertical;
  width: 100%;
}
input::placeholder, textarea::placeholder { color: var(--dim); }
input:focus, textarea:focus { border-color: var(--orange); }

.submit-btn { align-self: flex-start; margin-top: 4px; }

/* Thank you */
.thank-you {
  text-align: center;
  padding: 60px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border: 1px solid var(--border);
}
.ty-icon { font-size: 28px; color: var(--orange); }
.thank-you h3 {
  font-family: var(--f-display);
  font-size: 2.4rem;
}
.thank-you p { color: var(--smoke); font-size: 13px; }

/* ── Bottom ── */
.footer-bottom {
  border-top: 1px solid var(--border);
  padding: 20px 0;
}
.footer-bottom .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  font-family: var(--f-mono);
  font-size: 11px;
  color: var(--dim);
  letter-spacing: 0.08em;
}
.made-with { color: var(--smoke); }

/* Responsive */
@media (max-width: 760px) {
  .footer-grid { grid-template-columns: 1fr; }
}
</style>
