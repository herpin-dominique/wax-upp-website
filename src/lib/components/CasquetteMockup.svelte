<div class="mockup">
  <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" aria-label="Casquette Wax Upp">

    <!-- Ombre -->
    <ellipse cx="195" cy="312" rx="130" ry="7" fill="rgba(0,0,0,0.12)" />

    <!-- Visière / brim -->
    <path d="M 58 222 Q 60 246 80 252 Q 160 268 290 256 Q 318 250 322 234 L 310 226 Q 270 244 160 248 Q 90 248 70 230 Z"
          fill="#111"/>
    <!-- Reflet visière -->
    <path d="M 68 228 Q 100 242 160 244 Q 240 244 306 230"
          fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>

    <!-- Panneau gauche -->
    <path d="M 58 222 Q 50 180 62 140 Q 72 108 100 90 L 200 78 L 200 248 Q 120 250 70 230 Z"
          fill="#1A1714"/>

    <!-- Panneau central (face) -->
    <path d="M 100 90 Q 150 72 200 70 Q 250 72 300 90 L 312 140 Q 310 192 310 226 Q 255 244 200 248 Q 145 244 90 226 Z"
          fill="#222018"/>

    <!-- Couture panneau gauche / central -->
    <path d="M 100 90 Q 96 160 90 226"
          fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="1.5"/>

    <!-- Panneau droit -->
    <path d="M 200 78 L 300 90 Q 328 108 338 140 Q 350 180 342 222 L 310 226 Q 310 192 312 140 L 200 248 Z"
          fill="#1A1714"/>

    <!-- Couture panneau droit / central -->
    <path d="M 300 90 Q 304 160 310 226"
          fill="none" stroke="rgba(255,255,255,0.10)" stroke-width="1.5"/>

    <!-- Bouton sommet -->
    <circle cx="200" cy="74" r="10" fill="#111"/>
    <circle cx="200" cy="74" r="6"  fill="#1A1714"/>
    <circle cx="200" cy="74" r="3"  fill="#333"/>

    <!-- Bandeau intérieur (sweatband line) -->
    <path d="M 90 226 Q 145 244 200 248 Q 255 244 310 226"
          fill="none" stroke="rgba(255,255,255,0.07)" stroke-width="3"/>

    <!-- Fermeture arrière (snap) -->
    <path d="M 335 218 Q 345 200 338 140"
          fill="none" stroke="#111" stroke-width="8" stroke-linecap="round"/>

    <!-- Logo sur la face -->
    <foreignObject x="118" y="118" width="164" height="100">
      <div xmlns="http://www.w3.org/1999/xhtml"
           style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
        <img src="/WAXUPP.jpg" alt="Wax Upp"
             style="width:86%;height:86%;object-fit:contain;mix-blend-mode:screen;filter:brightness(1.05);"/>
      </div>
    </foreignObject>

  </svg>
</div>

<style>
.mockup {
  width: 100%;
  padding: 20px 16px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
svg {
  width: 100%;
  max-width: 280px;
  height: auto;
  filter: drop-shadow(0 8px 20px rgba(0,0,0,0.18));
}
</style>
