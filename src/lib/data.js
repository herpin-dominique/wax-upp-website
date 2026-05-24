// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  WAX UPP — Données du groupe
//  Modifie ce fichier avec tes vraies infos !
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export const bandInfo = {
  name:        'WAX UPP',
  tagline:     'Live. Groove. Feel the wax.',
  genre:       'Rock · Pop · Funk',
  city:        'Paris',
  founded:     '2020',
  description: `Groupe caennais ancré dans le Calvados, Wax Upp navigue dans les eaux du rock, du funk et du groove avec cinq musiciens soudés par une même obsession : embarquer le public dans un voyage sonore à chaque concert. Influencés par les constructions quasi cinématiques de Pink Floyd et Led Zeppelin, l'énergie brute des Kings of Leon et les syncopes funk de Vulfpeck, ils ont forgé une identité propre — énergique, groovy, émotionnelle. Leur premier CD "We Are Colourful", véritable manifeste du Funk Made in Normandie, pose les bases d'un son taillé pour la scène.`,
  stats: {
    albums:  3,
    shows:   '200+',
    members: 5,
  },
};

export const shows = [
  { date: '20 JUIN 2026', venue: 'Fête à Cresserons',   city: 'Cresserons (Calvados)', ticketUrl: '/faux-ticket', soldOut: false, free: false },
  { date: '21 JUIN 2026', venue: 'Fête de la Musique',  city: 'Cormelles-le-Royal',    ticketUrl: null,           soldOut: false, free: true  },
];

export const releases = [
  {
    title:     'FUNK YOU',
    type:      'SINGLE',
    year:      '2025',
    streamUrl: 'https://www.youtube.com/watch?v=iiblFyMc4mE',
    youtubeId: 'iiblFyMc4mE',
    cover:     { from: '#D40000', via: '#8B0000', to: '#1A1714' },
    latest:    true,
  },
  {
    title:     'HOW WE LIVE HERE',
    type:      'SINGLE',
    year:      '2024',
    streamUrl: 'https://www.youtube.com/watch?v=lqQ0Kw7vqv0',
    youtubeId: 'lqQ0Kw7vqv0',
    cover:     { from: '#6B3FA0', via: '#3A1870', to: '#0D0020' },
    latest:    false,
  },
  {
    title:     'VEINES',
    type:      'SINGLE',
    year:      '2023',
    streamUrl: 'https://youtu.be/yp6P60w6yMk',
    youtubeId: 'yp6P60w6yMk',
    cover:     { from: '#0a4a2a', via: '#0f3a40', to: '#040e1a' },
    latest:    false,
  },
];

export const members = [
  { name: 'Héloïse Tanboul',    role: 'Chant',    color: '#D40000', initials: 'HT', bio: 'Une voix qui prend la salle à la gorge dès le premier couplet. Entre soul brûlante et énergie punk, Héloïse ne chante pas — elle convainc.' },
  { name: 'Dominique Tamaire',  role: 'Guitare',  color: '#8B4FE8', initials: 'DT', bio: `Riffs ciselés, solos qui durent juste ce qu'il faut. Dominique a le don de trouver la note qui fait tout basculer.` },
  { name: 'Christophe Fanssif', role: 'Guitare',  color: '#1a9a6a', initials: 'CF', bio: `L'autre guitare, et pas la moindre. Christophe tisse les harmonies et les textures qui donnent au son de Wax Upp sa profondeur.` },
  { name: 'François Naturelle', role: 'Basse',    color: '#C87820', initials: 'FN', bio: `Le socle sur lequel tout repose. Sa basse est à la fois fondation et conversation — on l'entend autant qu'on la ressent.` },
  { name: 'Alain Stin',         role: 'Batterie', color: '#C83060', initials: 'AS', bio: 'Pocket béton, groove infaillible. Alain ne joue pas derrière le groupe — il le propulse.' },
];

export const social = {
  instagram: 'https://instagram.com/waxupp',
  facebook:  'https://facebook.com/waxuppmusic',
  spotify:   'https://open.spotify.com',
  youtube:   'https://www.youtube.com/@waxupp5040',
};

export const merch = [
  {
    id:          1,
    name:        'T-Shirt Homme',
    description: 'Logo sérigraphié, coton bio 180g',
    price:       10,
    badge:       null,
    video:       '/videos/tshirt-homme.mp4',
  },
  {
    id:          7,
    name:        'T-Shirt Femme',
    description: 'Logo sérigraphié, coton bio 180g, coupe féminine',
    price:       10,
    badge:       null,
    video:       '/videos/tshirt-femme.mp4',
  },
  {
    id:          2,
    name:        'CD Édition Limitée',
    description: 'Wax Upp — édition numérotée, livret inclus',
    price:       10,
    badge:       'LIMITÉ',
  },
  {
    id:          3,
    name:        'Tote Bag',
    description: 'Coton naturel, impression recto-verso',
    price:       10,
    badge:       null,
  },
  {
    id:          4,
    name:        'Casquette',
    description: 'Broderie logo, réglable, snapback',
    price:       15,
    badge:       'NOUVEAU',
  },
  {
    id:          5,
    name:        'Pack Scène',
    description: 'T-shirt + CD édition limitée + sticker pack',
    price:       25,
    badge:       'OFFRE',
  },
  {
    id:          6,
    name:        'Sticker Pack',
    description: '6 stickers vinyle, imperméables',
    price:       5,
    badge:       null,
  },
];

export const booking = {
  email:   'waxuppmusic@gmail.com',
  phone:   '+33 6 XX XX XX XX',
  contact: 'Agent : [Votre contact]',
};
