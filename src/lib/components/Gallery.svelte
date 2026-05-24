<!--
  Galerie photo — remplace les dégradés CSS par tes vraies photos :
  <img src="/photos/ma-photo.jpg" alt="..." />  dans chaque .photo
-->

<section id="galerie">
  <div class="container">

    <p class="section-badge">SCÈNE & COULISSES</p>
    <h2 class="section-title">GALERIE</h2>

    <div class="grid">

      <div class="photo" aria-label="WAX UPP 2025">
        <img src="/photos/groupe-2025.jpg" alt="WAX UPP groupe 2025" />
        <div class="overlay"><span>WAX UPP · 2025</span></div>
      </div>

      <div class="photo tall" aria-label="Héloïse">
        <img src="/photos/heloise.jpg" alt="Héloïse Tanboul" />
        <div class="overlay"><span>Héloïse · Chant</span></div>
      </div>

      <div class="photo" aria-label="Concert 1">
        <img src="/photos/concert-1.jpg" alt="WAX UPP en concert" />
        <div class="overlay"><span>En concert</span></div>
      </div>

      <div class="photo" aria-label="François">
        <img src="/photos/francois.jpg" alt="François Naturelle" />
        <div class="overlay"><span>François · Basse</span></div>
      </div>

      <div class="photo tall" aria-label="Portrait">
        <img src="/photos/portrait.jpg" alt="WAX UPP portrait" />
        <div class="overlay"><span>Le groupe</span></div>
      </div>

      <div class="photo" aria-label="Concert 2">
        <img src="/photos/concert-2.jpg" alt="WAX UPP sur scène" />
        <div class="overlay"><span>Sur scène</span></div>
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
  background: var(--bg-card);
}
.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.photo:hover img { transform: scale(1.04); }

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
