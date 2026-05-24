<script>
  import { members, bandInfo } from '$lib/data.js';
</script>

<section id="groupe">
  <div class="container">

    <p class="section-badge">LES MUSICIENS</p>
    <h2 class="section-title">LE<br/>GROUPE</h2>

    <p class="intro">{bandInfo.description}</p>

    <div class="grid">
      {#each members as member}
        <article class="card">
          <!-- Avatar avec initiales -->
          <div class="avatar" style="--color: {member.color};">
            <div class="avatar-ring"></div>
            <span class="initials">{member.initials}</span>
          </div>

          <div class="info">
            <p class="role">{member.role}</p>
            <h3 class="name">{member.name}</h3>
            <p class="bio">{member.bio}</p>
          </div>
        </article>
      {/each}
    </div>

  </div>
</section>

<style>
section { padding: var(--section-v) 0; }

.intro {
  font-family: var(--f-mono);
  font-size: clamp(13px, 1.5vw, 16px);
  color: var(--smoke);
  max-width: 600px;
  line-height: 1.9;
  margin-bottom: clamp(48px, 7vw, 80px);
  border-left: 2px solid var(--orange);
  padding-left: 24px;
}

/* ── Grid ── */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2px;
}

/* ── Card ── */
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: clamp(28px, 4vw, 48px) 24px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  transition: background 0.25s, transform 0.25s;
  position: relative;
  overflow: hidden;
}
.card::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: var(--color, var(--orange));
  transform: scaleX(0);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.card:hover {
  background: rgba(255,77,0,0.03);
  transform: translateY(-4px);
}
.card:hover::before {
  transform: scaleX(1);
}

/* ── Avatar ── */
.avatar {
  position: relative;
  width: 100px; height: 100px;
  margin-bottom: 20px;
  flex-shrink: 0;
}

/* Anneau décoratif animé au hover */
.avatar-ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid var(--color, var(--orange));
  opacity: 0.3;
  transition: opacity 0.3s, transform 0.6s;
}
.card:hover .avatar-ring {
  opacity: 0.7;
  transform: rotate(45deg) scale(1.05);
}

/* Cercle coloré avec initiales */
.initials {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: color-mix(in srgb, var(--color) 20%, var(--bg-card));
  border: 1px solid var(--color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--f-display);
  font-size: 32px;
  letter-spacing: 0.05em;
  color: var(--color);
}

/* ── Info ── */
.role {
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color, var(--orange));
  margin-bottom: 6px;
}
.name {
  font-family: var(--f-sub);
  font-size: clamp(15px, 2vw, 18px);
  color: var(--cream);
  margin-bottom: 12px;
  line-height: 1.2;
}
.bio {
  font-family: var(--f-mono);
  font-size: 12px;
  color: var(--smoke);
  line-height: 1.8;
  font-weight: 300;
}

/* Responsive */
@media (max-width: 600px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 360px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
