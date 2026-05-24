<svelte:head>
  <title>Ton ticket — WAX UPP à Cresserons</title>
</svelte:head>

<div class="page">
  <div class="ticket">

    <!-- Haut du ticket -->
    <div class="ticket-top">
      <div class="event-logo">
        <img src="/WAXUPP.jpg" alt="Wax Upp" class="logo" />
      </div>
      <div class="event-info">
        <p class="event-label">CONCERT OFFICIEL</p>
        <h1 class="event-name">WAX UPP LIVE</h1>
        <p class="event-sub">Fête à Cresserons — Calvados</p>
      </div>
    </div>

    <!-- Détails -->
    <div class="details">
      <div class="detail-col">
        <span class="lbl">DATE</span>
        <span class="val">20 JUIN 2026</span>
      </div>
      <div class="detail-col">
        <span class="lbl">LIEU</span>
        <span class="val">Cresserons (14)</span>
      </div>
      <div class="detail-col">
        <span class="lbl">HEURE</span>
        <span class="val">20H30</span>
      </div>
      <div class="detail-col">
        <span class="lbl">PLACEMENT</span>
        <span class="val">Libre</span>
      </div>
    </div>

    <!-- Séparateur dentelé -->
    <div class="tear"></div>

    <!-- Talon du ticket (le fake) -->
    <div class="stub">
      <div class="stub-icons" aria-hidden="true">
        <span class="icon">🌭</span>
        <span class="plus">+</span>
        <span class="icon">🍟</span>
      </div>
      <div class="stub-text">
        <p class="stub-title">BON DE COMMANDE OFFICIEL</p>
        <p class="stub-desc">
          Valable pour <strong>1 saucisse grillée</strong><br/>
          + <strong>1 cornet de frites</strong><br/>
          sauce au choix (ketchup / mayo / wax-sauce secrète)
        </p>
        <p class="stub-note">⚠ Ce ticket ne donne accès à aucun concert.<br/>WAX UPP décline toute responsabilité en cas de moutarde sur la chemise.</p>
      </div>
      <div class="barcode" aria-hidden="true">
        <div class="bars">
          {#each Array(28) as _, i}
            <div class="bar" style="height: {30 + Math.sin(i * 1.7) * 18}px"></div>
          {/each}
        </div>
        <p class="barcode-num">WXPP-2026-FRTES-0001</p>
      </div>
    </div>

  </div>

  <a href="/" class="back">← Retour au site</a>
</div>

<style>
.page {
  min-height: 100vh;
  background: #F2EDE4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  gap: 24px;
  font-family: 'DM Mono', monospace;
}

/* ── Ticket ── */
.ticket {
  width: 100%;
  max-width: 560px;
  background: #fff;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15), 0 4px 12px rgba(0,0,0,0.08);
  border-radius: 4px;
  overflow: hidden;
}

/* Haut */
.ticket-top {
  background: #D40000;
  padding: 32px 32px 28px;
  display: flex;
  align-items: center;
  gap: 24px;
}
.event-logo .logo {
  width: 90px;
  height: 90px;
  object-fit: contain;
  background: #fff;
  border-radius: 50%;
  padding: 6px;
}
.event-label {
  font-size: 9px;
  letter-spacing: 0.3em;
  color: rgba(255,255,255,0.65);
  text-transform: uppercase;
  margin-bottom: 4px;
}
.event-name {
  font-family: 'Bebas Neue', Impact, sans-serif;
  font-size: 48px;
  color: #fff;
  line-height: 1;
  letter-spacing: 0.04em;
}
.event-sub {
  font-size: 11px;
  color: rgba(255,255,255,0.8);
  letter-spacing: 0.12em;
  margin-top: 6px;
}

/* Détails */
.details {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  border-bottom: 1px solid #eee;
}
.detail-col {
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  border-right: 1px solid #eee;
}
.detail-col:last-child { border-right: none; }
.lbl {
  font-size: 8px;
  letter-spacing: 0.25em;
  color: #999;
  text-transform: uppercase;
}
.val {
  font-size: 12px;
  font-weight: 500;
  color: #1A1714;
  letter-spacing: 0.06em;
}

/* Séparateur dentelé */
.tear {
  height: 24px;
  background:
    radial-gradient(circle at 0 50%, #F2EDE4 10px, transparent 10px),
    radial-gradient(circle at 100% 50%, #F2EDE4 10px, transparent 10px);
  background-color: #fff;
  border-top: 2px dashed #ddd;
  border-bottom: 2px dashed #ddd;
  margin: 0;
}

/* Stub */
.stub {
  padding: 28px 32px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  text-align: center;
}
.stub-icons {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 52px;
}
.plus {
  font-size: 28px;
  color: #999;
  font-family: sans-serif;
}
.stub-title {
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: #D40000;
  margin-bottom: 8px;
}
.stub-desc {
  font-size: 14px;
  line-height: 1.8;
  color: #1A1714;
}
.stub-note {
  font-size: 10px;
  color: #999;
  line-height: 1.7;
  border-top: 1px solid #eee;
  padding-top: 14px;
  max-width: 360px;
}

/* Code-barres CSS */
.barcode { margin-top: 4px; }
.bars {
  display: flex;
  align-items: flex-end;
  gap: 2px;
  height: 60px;
  justify-content: center;
}
.bar {
  width: 2px;
  background: #1A1714;
}
.bar:nth-child(3n)   { width: 4px; }
.bar:nth-child(5n)   { width: 1px; background: #555; }
.barcode-num {
  font-size: 9px;
  letter-spacing: 0.2em;
  color: #999;
  margin-top: 6px;
  text-align: center;
}

/* Retour */
.back {
  font-size: 11px;
  letter-spacing: 0.15em;
  color: #9A9288;
  text-decoration: none;
  transition: color 0.2s;
}
.back:hover { color: #D40000; }

@media (max-width: 500px) {
  .ticket-top { flex-direction: column; text-align: center; }
  .details { grid-template-columns: repeat(2, 1fr); }
  .detail-col:nth-child(2) { border-right: none; }
}
</style>
