<div class="mockup">
  <svg viewBox="0 0 400 440" xmlns="http://www.w3.org/2000/svg" aria-label="Tote Bag Wax Upp">

    <!-- Ombre -->
    <ellipse cx="200" cy="434" rx="120" ry="7" fill="rgba(0,0,0,0.10)" />

    <!-- Anses -->
    <path d="M 138 118 C 134 60, 134 28, 152 24 C 168 20, 178 20, 190 24 C 202 28, 202 60, 198 118"
          fill="none" stroke="#8B7355" stroke-width="14" stroke-linecap="round"/>
    <path d="M 202 118 C 198 60, 198 28, 216 24 C 230 20, 240 20, 252 24 C 264 28, 264 60, 260 118"
          fill="none" stroke="#8B7355" stroke-width="14" stroke-linecap="round"/>

    <!-- Corps du sac — fond -->
    <path d="M 68 118 L 52 400 Q 52 418 70 418 L 330 418 Q 348 418 348 400 L 332 118 Z"
          fill="#C8B89A"/>

    <!-- Pli / volume lateral gauche -->
    <path d="M 68 118 L 52 400 Q 52 418 70 418 L 90 418 L 108 118 Z"
          fill="#B8A888" />

    <!-- Pli / volume lateral droit -->
    <path d="M 332 118 L 348 400 Q 348 418 330 418 L 310 418 L 292 118 Z"
          fill="#B8A888" />

    <!-- Face avant (légèrement plus claire) -->
    <path d="M 108 118 L 92 410 L 308 410 L 292 118 Z"
          fill="#D4C4A8"/>

    <!-- Couture du bas -->
    <line x1="92" y1="410" x2="308" y2="410" stroke="#B8A888" stroke-width="2"/>

    <!-- Couture verticale centrale -->
    <line x1="200" y1="118" x2="200" y2="410"
          stroke="#BCA88A" stroke-width="1.5" stroke-dasharray="5 7"/>

    <!-- Logo -->
    <foreignObject x="110" y="190" width="180" height="130">
      <div xmlns="http://www.w3.org/1999/xhtml"
           style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
        <img src="/WAXUPP.jpg" alt="Wax Upp"
             style="width:88%;height:88%;object-fit:contain;mix-blend-mode:multiply;opacity:0.85;"/>
      </div>
    </foreignObject>

  </svg>
</div>

<style>
.mockup {
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
svg {
  width: 100%;
  max-width: 260px;
  height: auto;
  filter: drop-shadow(0 8px 20px rgba(0,0,0,0.14));
}
</style>
