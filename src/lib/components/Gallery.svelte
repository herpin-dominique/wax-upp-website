<!--
  Galerie photo — remplace les dégradés CSS par tes vraies photos :
  <img src="/photos/ma-photo.jpg" alt="..." />  dans chaque .photo
-->

<section id="galerie">
  <div class="container">

    <p class="section-badge">SCÈNE & COULISSES</p>
    <h2 class="section-title">GALERIE</h2>

    <div class="grid">

      <!-- Chaque .photo est un placeholder CSS qui simule une photo de concert.
           Remplace le style inline par une vraie image quand tu en auras. -->

      <div class="photo p1" aria-label="Concert Paris 2025">
        <div class="overlay"><span>Paris · 2025</span></div>
      </div>

      <div class="photo p2 tall" aria-label="Backstage Lyon">
        <div class="overlay"><span>Lyon · 2024</span></div>
      </div>

      <div class="photo p3" aria-label="Festival Toulouse">
        <div class="overlay"><span>Toulouse · 2024</span></div>
      </div>

      <div class="photo p4 wide" aria-label="Scène Olympia">
        <div class="overlay"><span>L'Olympia · 2024</span></div>
      </div>

      <div class="photo p5" aria-label="Studio">
        <div class="overlay"><span>Studio · 2024</span></div>
      </div>

      <div class="photo p6" aria-label="Francofolies">
        <div class="overlay"><span>Francofolies · 2025</span></div>
      </div>

      <div class="photo p7 tall" aria-label="Répétition">
        <div class="overlay"><span>Répétition · 2025</span></div>
      </div>

      <div class="photo p8" aria-label="After-show">
        <div class="overlay"><span>After-show · 2024</span></div>
      </div>

      <div class="photo p9" aria-label="Garorock">
        <div class="overlay"><span>Garorock · 2025</span></div>
      </div>

    </div>

  </div>
</section>

<style>
section { padding: var(--section-v) 0; }

/* ── Masonry grid CSS columns ── */
.grid {
  columns: 3;
  column-gap: 6px;
}

.photo {
  break-inside: avoid;
  margin-bottom: 6px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

/* Hauteurs variées pour l'effet masonry */
.photo          { height: 220px; }
.photo.tall     { height: 360px; }
.photo.wide     { height: 200px; }

/* ── Overlay hover ── */
.overlay {
  position: absolute;
  inset: 0;
  background: rgba(10,10,8,0.7);
  display: flex;
  align-items: flex-end;
  padding: 16px;
  opacity: 0;
  transition: opacity 0.3s;
}
.photo:hover .overlay { opacity: 1; }
.overlay span {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--cream);
}

/* ── Photos CSS — lumières de scène ── */
/* Remplace ces backgrounds par tes vraies images :
   background-image: url('/photos/concert-1.jpg');
   background-size: cover;
   background-position: center;
*/

.p1 {
  background:
    radial-gradient(ellipse at 30% 80%, rgba(255,77,0,0.85) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(240,192,64,0.55) 0%, transparent 45%),
    #080808;
}
.p2 {
  background:
    radial-gradient(ellipse at 50% 95%, rgba(107,63,160,0.9) 0%, transparent 55%),
    radial-gradient(ellipse at 20% 10%, rgba(255,77,0,0.15) 0%, transparent 40%),
    #060608;
}
.p3 {
  background:
    radial-gradient(ellipse at 70% 60%, rgba(240,192,64,0.7) 0%, transparent 45%),
    radial-gradient(ellipse at 20% 30%, rgba(255,77,0,0.4) 0%, transparent 40%),
    #090907;
}
.p4 {
  background:
    radial-gradient(ellipse at 20% 50%, rgba(255,77,0,0.7) 0%, transparent 40%),
    radial-gradient(ellipse at 50% 50%, rgba(240,192,64,0.2) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 50%, rgba(107,63,160,0.7) 0%, transparent 40%),
    #060606;
}
.p5 {
  background:
    radial-gradient(ellipse at 40% 40%, rgba(26,154,106,0.6) 0%, transparent 50%),
    radial-gradient(ellipse at 70% 70%, rgba(107,63,160,0.5) 0%, transparent 40%),
    #040a08;
}
.p6 {
  background:
    radial-gradient(ellipse at 50% 20%, rgba(240,192,64,0.8) 0%, transparent 50%),
    radial-gradient(ellipse at 30% 80%, rgba(255,77,0,0.45) 0%, transparent 40%),
    #0a0804;
}
.p7 {
  background:
    radial-gradient(ellipse at 60% 70%, rgba(200,48,96,0.8) 0%, transparent 55%),
    radial-gradient(ellipse at 30% 20%, rgba(107,63,160,0.4) 0%, transparent 40%),
    #080408;
}
.p8 {
  background:
    radial-gradient(ellipse at 50% 50%, rgba(255,77,0,0.3) 0%, transparent 60%),
    radial-gradient(ellipse at 20% 80%, rgba(240,192,64,0.4) 0%, transparent 40%),
    #0a0a08;
}
.p9 {
  background:
    radial-gradient(ellipse at 30% 30%, rgba(26,154,106,0.5) 0%, transparent 45%),
    radial-gradient(ellipse at 75% 70%, rgba(240,192,64,0.55) 0%, transparent 45%),
    #040808;
}

/* ── Effet zoom-in subtil au hover ── */
.photo::before {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.photo:hover::before { transform: scale(1.04); }

/* Responsive */
@media (max-width: 768px) {
  .grid { columns: 2; }
  .photo.wide { height: 180px; }
}
@media (max-width: 480px) {
  .grid { columns: 1; }
  .photo, .photo.tall, .photo.wide { height: 220px; }
}
</style>
