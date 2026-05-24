<script>
  import { shows } from '$lib/data.js';
</script>

<section id="shows">
  <div class="container">

    <p class="section-badge">SIDE A</p>
    <h2 class="section-title">LIVE<br/>DATES</h2>

    <ol class="list">
      {#each shows as show, i}
        <li class="row" class:sold-out={show.soldOut}>
          <span class="track-num">{String(i + 1).padStart(2, '0')}</span>

          <time class="date" datetime={show.date}>{show.date}</time>

          <div class="venue-info">
            <span class="venue">{show.venue}</span>
            <span class="city">— {show.city}</span>
          </div>

          <div class="action">
            {#if show.soldOut}
              <span class="badge-sold">Complet</span>
            {:else if show.free}
              <span class="badge-free">Entrée libre</span>
            {:else}
              <a href={show.ticketUrl} class="btn btn-outline-orange ticket-btn">
                Tickets
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2.5 9.5l7-7M9.5 2.5H4M9.5 2.5V8"
                        stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
                </svg>
              </a>
            {/if}
          </div>
        </li>
      {/each}
    </ol>

    <p class="more-soon">
      <span>◆</span>
      Nouvelles dates bientôt — abonne-toi pour être le premier informé
      <span>◆</span>
    </p>

  </div>
</section>

<style>
section { padding: var(--section-v) 0; }

.list {
  list-style: none;
  border-top: 1px solid var(--border);
}

.row {
  display: grid;
  grid-template-columns: 40px 160px 1fr auto;
  align-items: center;
  gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid var(--border);
  transition: background 0.2s;
}
.row:hover {
  background: rgba(255,77,0,0.04);
  padding-left: 12px;
  padding-right: 12px;
  margin: 0 -12px;
}
.row.sold-out { opacity: 0.45; }

.track-num {
  font-family: var(--f-display);
  font-size: 22px;
  color: var(--dim);
  line-height: 1;
  flex-shrink: 0;
}

.date {
  font-family: var(--f-mono);
  font-size: 12px;
  letter-spacing: 0.12em;
  color: var(--smoke);
  white-space: nowrap;
}

.venue-info {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex-wrap: wrap;
}
.venue {
  font-family: var(--f-sub);
  font-size: clamp(15px, 2vw, 20px);
  color: var(--cream);
}
.city {
  font-family: var(--f-mono);
  font-size: 13px;
  color: var(--smoke);
}

.ticket-btn {
  font-size: 10px;
  padding: 8px 16px;
  white-space: nowrap;
}

.badge-sold {
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--dim);
  border: 1px solid var(--border);
  padding: 7px 14px;
}
.badge-free {
  font-family: var(--f-mono);
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--orange);
  border: 1px solid var(--orange);
  padding: 7px 14px;
}

.more-soon {
  margin-top: 40px;
  text-align: center;
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.15em;
  color: var(--smoke);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}
.more-soon span { color: var(--orange); font-size: 9px; }

/* Responsive */
@media (max-width: 700px) {
  .row {
    grid-template-columns: 32px 1fr auto;
    grid-template-rows: auto auto;
  }
  .date {
    grid-column: 2 / -1;
    font-size: 10px;
    margin-bottom: -8px;
  }
  .venue-info { grid-column: 2; }
  .action     { grid-column: 3; grid-row: 2; }
}

@media (max-width: 480px) {
  .row {
    grid-template-columns: 1fr auto;
    gap: 12px;
  }
  .track-num { display: none; }
  .date      { grid-column: 1; }
}
</style>
