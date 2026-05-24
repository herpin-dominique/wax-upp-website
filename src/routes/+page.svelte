<script>
  import Nav     from '$lib/components/Nav.svelte';
  import Hero    from '$lib/components/Hero.svelte';
  import Shows   from '$lib/components/Shows.svelte';
  import Music   from '$lib/components/Music.svelte';
  import Band    from '$lib/components/Band.svelte';
  import Gallery from '$lib/components/Gallery.svelte';
  import Shop    from '$lib/components/Shop.svelte';
  import Footer  from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>WAX UPP — Rock Pop Funk</title>
  <meta name="description" content="WAX UPP — Groupe de Rock Pop Funk basé à Paris. Concerts, musique, booking." />
  <meta property="og:title"       content="WAX UPP — Rock Pop Funk" />
  <meta property="og:description" content="Live. Groove. Feel the wax." />
</svelte:head>

<Nav />

<main>
  <Hero />
  <hr class="section-sep" />
  <Shows />
  <hr class="section-sep" />
  <Music />
  <hr class="section-sep" />
  <Band />
  <hr class="section-sep" />
  <Gallery />
  <hr class="section-sep" />
  <Shop />
</main>

<Footer />
