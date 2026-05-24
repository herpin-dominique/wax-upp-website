<script>
  import { onMount } from 'svelte';

  let scrolled  = false;
  let menuOpen  = false;

  onMount(() => {
    const onScroll = () => { scrolled = window.scrollY > 60; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });

  function close() { menuOpen = false; }
</script>

<nav class:scrolled class:open={menuOpen}>
  <div class="container">

    <a href="/" class="logo" on:click={close}>
      <img src="/logo.png" alt="Wax Upp" class="logo-img" />
    </a>

    <button
      class="burger"
      on:click={() => menuOpen = !menuOpen}
      aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
      aria-expanded={menuOpen}
    >
      <span></span><span></span><span></span>
    </button>

    <ul class="links" class:open={menuOpen}>
      <li><a href="#shows"   on:click={close}>Shows</a></li>
      <li><a href="#musique" on:click={close}>Musique</a></li>
      <li><a href="#groupe"  on:click={close}>Groupe</a></li>
      <li><a href="#galerie" on:click={close}>Galerie</a></li>
      <li><a href="#shop"    on:click={close}>Shop</a></li>
      <li><a href="#contact" class="btn btn-ghost nav-cta" on:click={close}>Booking</a></li>
    </ul>

  </div>
</nav>

<style>
nav {
  position: fixed;
  inset: 0 0 auto;
  z-index: 100;
  padding: 22px 0;
  border-bottom: 1px solid transparent;
  transition: background 0.35s, padding 0.35s, border-color 0.35s;
}
nav.scrolled {
  padding: 14px 0;
  background: rgba(242,237,228,0.94);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-color: var(--border);
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

/*
  Le logo a un fond blanc — on utilise un filtre CSS pour l'adapter
  au site sombre :
    invert(1)          : blanc→noir, rouge→cyan, noir→blanc
    hue-rotate(180deg) : cyan→rouge  (la couleur rouge est restaurée)
  Résultat : fond blanc → noir (fond du site), rouge reste rouge, texte noir → blanc
*/
.logo-img {
  height: 52px;
  width: auto;
  mix-blend-mode: multiply;
  transition: opacity 0.2s;
}
.logo:hover .logo-img { opacity: 0.85; }

/* Taille réduite quand la nav est scrollée */
nav.scrolled .logo-img { height: 40px; }

/* Links */
.links {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
}
.links a {
  font-family: var(--f-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--smoke);
  padding: 8px 14px;
  transition: color 0.2s;
  position: relative;
}
.links a:not(.nav-cta)::after {
  content: '';
  position: absolute;
  bottom: 4px; left: 14px; right: 14px;
  height: 1px;
  background: var(--orange);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.22s;
}
.links a:not(.nav-cta):hover { color: var(--cream); }
.links a:not(.nav-cta):hover::after { transform: scaleX(1); }

.nav-cta {
  padding: 8px 18px !important;
  color: var(--cream) !important;
}

/* Burger */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 8px;
}
.burger span {
  display: block;
  width: 24px; height: 2px;
  background: var(--cream);
  transition: transform 0.3s, opacity 0.3s;
  transform-origin: center;
}
nav.open .burger span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
nav.open .burger span:nth-child(2) { opacity: 0; transform: scaleX(0); }
nav.open .burger span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile */
@media (max-width: 768px) {
  .burger { display: flex; }

  .links {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(242,237,228,0.98);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
  }
  .links.open { display: flex; }

  .links a { font-size: 14px; }
}
</style>
