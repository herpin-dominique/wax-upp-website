<script>
  export let color = '#1A1714';
</script>

<div class="mockup">
  <svg viewBox="0 0 400 420" xmlns="http://www.w3.org/2000/svg" aria-label="T-shirt Wax Upp">

    <!-- Ombre portée -->
    <ellipse cx="200" cy="415" rx="110" ry="8" fill="rgba(0,0,0,0.12)" />

    <!-- Corps du t-shirt -->
    <path
      d="
        M 148 28
        C 158 20, 172 14, 200 14
        C 228 14, 242 20, 252 28

        L 310 52
        L 340 60
        C 355 64, 368 72, 374 84
        L 390 128
        C 393 136, 390 144, 383 148
        L 340 162
        C 332 165, 323 162, 318 155
        L 308 138

        L 308 390
        C 308 400, 300 408, 290 408
        L 110 408
        C 100 408, 92 400, 92 390
        L 92 138

        L 82 155
        C 77 162, 68 165, 60 162
        L 17 148
        C 10 144, 7 136, 10 128
        L 26 84
        C 32 72, 45 64, 60 60
        L 90 52
        Z
      "
      fill={color}
    />

    <!-- Col rond (découpe) -->
    <path
      d="M 148 28 C 160 48, 176 58, 200 60 C 224 58, 240 48, 252 28 C 242 20, 228 14, 200 14 C 172 14, 158 20, 148 28 Z"
      fill="#F2EDE4"
    />

    <!-- Couture encolure -->
    <path
      d="M 152 30 C 163 50, 178 59, 200 61 C 222 59, 237 50, 248 30"
      fill="none"
      stroke="rgba(255,255,255,0.12)"
      stroke-width="1.5"
    />

    <!-- Couture épaules / manches -->
    <line x1="92" y1="138" x2="92" y2="148"  stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
    <line x1="308" y1="138" x2="308" y2="148" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>

    <!-- Couture centrale verticale subtile -->
    <line x1="200" y1="62" x2="200" y2="408" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-dasharray="4 6"/>

    <!-- Logo centré sur la poitrine (zone cliquable / foreignObject) -->
    <foreignObject x="110" y="130" width="180" height="130">
      <div xmlns="http://www.w3.org/1999/xhtml" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;">
        <img
          src="/WAXUPP.jpg"
          alt="Wax Upp"
          style="width:90%;height:90%;object-fit:contain;mix-blend-mode:screen;filter:brightness(1.1);"
        />
      </div>
    </foreignObject>

  </svg>
</div>

<style>
.mockup {
  width: 100%;
  padding: 24px 16px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
svg {
  width: 100%;
  max-width: 280px;
  height: auto;
  filter: drop-shadow(0 8px 24px rgba(0,0,0,0.18));
}
</style>
