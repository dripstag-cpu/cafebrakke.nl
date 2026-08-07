/**
 * De kaart als data, tweetalig.
 *
 * BELANGRIJK: prijzen zijn taal-neutraal en staan hier één keer. De bron van
 * waarheid blijft de vier PDF-kaarten van de eigenaar (ontbijt/lunch,
 * burgers/gerechten, cocktails, dranken). Verandert de kaart, dan wint de PDF.
 * Notatie met komma blijft ook op de Engelse pagina staan — dat is wat er op de
 * kaart en de rekening in de zaak staat.
 *
 * Een `name`/`desc` die in beide talen gelijk is (Espresso, Negroni, Duvel)
 * schrijf je als kale string; alleen waar het verschilt wordt het {nl, en}.
 */
import type { I18nValue } from './index';

export interface MenuItem {
  name: I18nValue;
  /** Cursieve toevoeging achter de naam, bv. "(vegan)". */
  nameEm?: I18nValue;
  /** Gedimde toevoeging achter de naam, bv. "— Aperol, Limoncello of Watermelon". */
  nameNote?: I18nValue;
  price?: string;
  /** Meerdere prijskolommen (wings 6/12/18, wijn glas/fles). */
  prices?: string[];
  desc?: I18nValue;
}

export interface MenuGroup {
  title?: I18nValue;
  /** Kleine kolomkop rechts in de <h3>, bv. "glas / fles". */
  titleNote?: I18nValue;
  /** Dichte, tweekoloms lijst zonder omschrijvingen. */
  compact?: boolean;
  items: MenuItem[];
}

export interface MenuCategory {
  id: string;
  /** Bevat inline <em>. */
  titleHtml: I18nValue;
  note?: I18nValue;
  /** 'grid' = .groups-2 wrapper, 'single' = losse groepen onder elkaar. */
  layout: 'grid' | 'single';
  /** Label in de categorie-navigatie bovenaan. */
  navLabel: I18nValue;
  groups: MenuGroup[];
}

export const menu: MenuCategory[] = [
  /* ============ ONTBIJT ============ */
  {
    id: 'ontbijt',
    navLabel: { nl: 'Ontbijt', en: 'Breakfast' },
    titleHtml: { nl: 'Ontbijt &amp; <em>eieren</em>', en: 'Breakfast &amp; <em>eggs</em>' },
    note: { nl: 'Tot in de middag · all day breakfast', en: 'Until the afternoon · all day breakfast' },
    layout: 'grid',
    groups: [
      {
        title: 'Croissants',
        items: [
          {
            name: 'Croissant Naturel',
            price: '6,50',
            desc: { nl: 'Met jam, honing en boter.', en: 'With jam, honey and butter.' },
          },
          {
            name: { nl: 'Croissant Kaas', en: 'Croissant Cheese' },
            price: '7,90',
            desc: { nl: 'Botercroissant met kaas.', en: 'Butter croissant with cheese.' },
          },
          {
            name: { nl: 'Croissant Ham & Kaas', en: 'Croissant Ham & Cheese' },
            price: '9,90',
            desc: { nl: 'Warm, met gesmolten kaas.', en: 'Warm, with melted cheese.' },
          },
          {
            name: { nl: 'Croissant Zalm', en: 'Croissant Salmon' },
            price: '9,90',
            desc: {
              nl: 'Gerookte zalm, roomkaas en dille.',
              en: 'Smoked salmon, cream cheese and dill.',
            },
          },
          {
            name: 'Croissant Nutella',
            price: '9,90',
            desc: { nl: 'Gevuld met romige Nutella.', en: 'Filled with creamy Nutella.' },
          },
        ],
      },
      {
        title: { nl: 'Pannenkoeken — zoet', en: 'Pancakes — sweet' },
        items: [
          { name: 'Classic', price: '9,90' },
          { name: 'Nutella', price: '11,90' },
          { name: { nl: 'Banaan', en: 'Banana' }, price: '12,50' },
          { name: { nl: 'Kaneel', en: 'Cinnamon' }, price: '12,50' },
          { name: { nl: 'Appel & honing', en: 'Apple & honey' }, price: '12,50' },
        ],
      },
      {
        title: { nl: 'Pannenkoeken — hartig', en: 'Pancakes — savoury' },
        items: [
          { name: { nl: 'Kaas', en: 'Cheese' }, price: '10,90' },
          { name: { nl: 'Ham & kaas', en: 'Ham & cheese' }, price: '12,50' },
          { name: { nl: 'Bacon & kaas', en: 'Bacon & cheese' }, price: '12,50' },
          { name: { nl: 'Ham, kaas & ei', en: 'Ham, cheese & egg' }, price: '13,50' },
        ],
      },
      {
        title: { nl: 'Wentelteefjes', en: 'French toast' },
        items: [
          {
            name: 'Classic French Toast',
            price: '9,90',
            desc: { nl: 'Licht bestoven met poedersuiker.', en: 'Lightly dusted with icing sugar.' },
          },
          {
            name: 'Nutella French Toast',
            price: '11,90',
            desc: { nl: 'Gevuld met warme Nutella.', en: 'Filled with warm Nutella.' },
          },
          {
            name: { nl: 'Banaan-karamel French Toast', en: 'Banana-caramel French Toast' },
            price: '12,90',
            desc: { nl: 'Banaan met karameldrizzle.', en: 'Banana with a caramel drizzle.' },
          },
          {
            name: { nl: 'Kaneel French Toast', en: 'Cinnamon French Toast' },
            price: '10,90',
            desc: { nl: 'Met kaneelsuiker.', en: 'With cinnamon sugar.' },
          },
        ],
      },
      {
        title: { nl: 'Omeletten', en: 'Omelettes' },
        items: [
          {
            name: 'Classic',
            price: '10,90',
            desc: { nl: 'Simpel en luchtig.', en: 'Simple and fluffy.' },
          },
          {
            name: { nl: 'Kaas', en: 'Cheese' },
            price: '11,90',
            desc: { nl: 'Gesmolten cheddar of Gouda.', en: 'Melted cheddar or Gouda.' },
          },
          {
            name: 'Veggie',
            price: '12,90',
            desc: { nl: 'Paprika, ui en champignons.', en: 'Bell pepper, onion and mushrooms.' },
          },
          {
            name: { nl: 'Ham & kaas', en: 'Ham & cheese' },
            price: '12,90',
            desc: { nl: 'Gerookte ham en kaas.', en: 'Smoked ham and cheese.' },
          },
          {
            name: { nl: 'Mediterraan', en: 'Mediterranean' },
            price: '14,90',
            desc: {
              nl: 'Feta, spinazie, olijven en tomaat.',
              en: 'Feta, spinach, olives and tomato.',
            },
          },
          {
            name: { nl: 'Zalm', en: 'Salmon' },
            price: '14,90',
            desc: { nl: 'Luchtig ei met gerookte zalm.', en: 'Fluffy egg with smoked salmon.' },
          },
        ],
      },
      {
        title: { nl: 'Ontbijtschotels', en: 'Breakfast plates' },
        items: [
          {
            name: 'Classic English Breakfast',
            price: '10,90',
            desc: { nl: 'Toast, eieren, bacon, tomaat.', en: 'Toast, eggs, bacon, tomato.' },
          },
          {
            name: 'Full English Breakfast',
            price: '14,90',
            desc: {
              nl: 'Toast, eieren, bacon, tomaat, bonen, champignons en worst.',
              en: 'Toast, eggs, bacon, tomato, beans, mushrooms and sausage.',
            },
          },
          {
            name: 'Continental Breakfast',
            price: '10,90',
            desc: {
              nl: 'Toast, ham, kaas, honing, jam en boter.',
              en: 'Toast, ham, cheese, honey, jam and butter.',
            },
          },
          {
            name: 'Veggie English Breakfast',
            price: '12,90',
            desc: {
              nl: 'Toast, eieren, gegrilde groenten en bonen.',
              en: 'Toast, eggs, grilled vegetables and beans.',
            },
          },
        ],
      },
    ],
  },

  /* ============ LUNCH ============ */
  {
    id: 'lunch',
    navLabel: 'Lunch',
    titleHtml: { nl: 'Lunch &amp; <em>salades</em>', en: 'Lunch &amp; <em>salads</em>' },
    note: { nl: 'Panini · salades', en: 'Panini · salads' },
    layout: 'grid',
    groups: [
      {
        title: 'Panini',
        items: [
          {
            name: 'Caprese',
            price: '9,50',
            desc: {
              nl: 'Gesmolten mozzarella, tomaat en basilicumpesto.',
              en: 'Melted mozzarella, tomato and basil pesto.',
            },
          },
          {
            name: { nl: 'Ham & kaas', en: 'Ham & cheese' },
            price: '9,50',
            desc: { nl: 'Gerookte ham en gesmolten cheddar.', en: 'Smoked ham and melted cheddar.' },
          },
          {
            name: 'Chicken Pesto',
            price: '12,50',
            desc: { nl: 'Gegrilde kip, pesto en mozzarella.', en: 'Grilled chicken, pesto and mozzarella.' },
          },
          {
            name: 'Tuna Melt',
            price: '11,50',
            desc: { nl: 'Tonijnsalade met gesmolten kaas.', en: 'Tuna salad with melted cheese.' },
          },
          {
            name: 'Veggie',
            price: '11,50',
            desc: {
              nl: 'Gegrilde paprika, ui, courgette en mozzarella.',
              en: 'Grilled bell pepper, onion, courgette and mozzarella.',
            },
          },
        ],
      },
      {
        title: { nl: 'Salades', en: 'Salads' },
        items: [
          {
            name: 'Mix Salad',
            price: '5,75',
            desc: {
              nl: 'Gemengde sla met tomaat en komkommer, lichte huisdressing.',
              en: 'Mixed leaves with tomato and cucumber, light house dressing.',
            },
          },
          {
            name: 'Caesar Salad',
            price: '10,90',
            desc: {
              nl: 'Romaine, croutons en parmezaan in klassieke caesardressing.',
              en: 'Romaine, croutons and parmesan in classic caesar dressing.',
            },
          },
          {
            name: 'Caesar Chicken Salad',
            price: '13,90',
            desc: {
              nl: 'Gegrilde kipfilet op romaine met croutons en parmezaan.',
              en: 'Grilled chicken breast on romaine with croutons and parmesan.',
            },
          },
          {
            name: 'Greek Salad',
            price: '10,90',
            desc: {
              nl: 'Sla, tomaat, komkommer, rode ui, olijven en feta.',
              en: 'Leaves, tomato, cucumber, red onion, olives and feta.',
            },
          },
          {
            name: 'Chicken Avocado Salad',
            price: '15,50',
            desc: {
              nl: 'Gegrilde kip, avocado, pijnboompitten en parmezaan.',
              en: 'Grilled chicken, avocado, pine nuts and parmesan.',
            },
          },
        ],
      },
    ],
  },

  /* ============ BURGERS ============ */
  {
    id: 'burgers',
    navLabel: 'Burgers',
    titleHtml: 'Burgers',
    note: {
      nl: 'Double smashed Irish beef, tenzij anders vermeld',
      en: 'Double smashed Irish beef, unless stated otherwise',
    },
    layout: 'grid',
    groups: [
      {
        items: [
          {
            name: 'The Classic Drip',
            price: '13,90',
            desc: {
              nl: 'Dubbele smashed beef, cheddar, augurk, ui, ketchup, mosterd.',
              en: 'Double smashed beef, cheddar, pickle, onion, ketchup, mustard.',
            },
          },
          {
            name: 'BBQ Bacon Burger',
            price: '15,90',
            desc: {
              nl: 'Smashed beef, cheddar, smoky bacon, BBQ-saus, uienring.',
              en: 'Smashed beef, cheddar, smoky bacon, BBQ sauce, onion ring.',
            },
          },
          {
            name: 'Mushroom Swiss Burger',
            price: '16,90',
            desc: {
              nl: 'Smashed beef, Zwitserse kaas, gebakken champignons, knoflookmayo.',
              en: 'Smashed beef, Swiss cheese, fried mushrooms, garlic mayo.',
            },
          },
          {
            name: 'Spicy Jalapeño Burger',
            price: '14,90',
            desc: {
              nl: 'Smashed beef, cheddar, jalapeños, pittige mayo.',
              en: 'Smashed beef, cheddar, jalapeños, spicy mayo.',
            },
          },
          {
            name: 'The Truffle Philly',
            price: '17,50',
            desc: {
              nl: 'Gegrilde steak, cheddar, ui, truffelmayo.',
              en: 'Grilled steak, cheddar, onion, truffle mayo.',
            },
          },
        ],
      },
      {
        items: [
          {
            name: 'The Crispy Thigh',
            price: '13,90',
            desc: {
              nl: 'Buttermilk fried chicken thigh, slaw, augurk, pittige mayo.',
              en: 'Buttermilk fried chicken thigh, slaw, pickle, spicy mayo.',
            },
          },
          {
            name: 'Korean Fried Chicken Burger',
            price: '13,90',
            desc: {
              nl: 'Krokante kip, gochujang-glaze, sesam.',
              en: 'Crispy chicken, gochujang glaze, sesame.',
            },
          },
          {
            name: 'The Grilled Thigh',
            price: '13,90',
            desc: {
              nl: 'Gegrilde chicken thigh, slaw, augurk, knoflookmayo.',
              en: 'Grilled chicken thigh, slaw, pickle, garlic mayo.',
            },
          },
          {
            name: "Brakke's Signature Combo",
            price: '18,50',
            desc: {
              nl: 'Irish beef + fried chicken, cheddar, sla, truffelmayo, drip sauce.',
              en: 'Irish beef + fried chicken, cheddar, lettuce, truffle mayo, drip sauce.',
            },
          },
          {
            name: 'The Beyond Dream',
            nameEm: '(vegan)',
            price: '13,90',
            desc: {
              nl: 'Vegan patty, vegan kaas, sla, tomaat, augurk, krokante ui.',
              en: 'Vegan patty, vegan cheese, lettuce, tomato, pickle, crispy onion.',
            },
          },
        ],
      },
    ],
  },

  /* ============ GERECHTEN ============ */
  {
    id: 'gerechten',
    navLabel: { nl: 'Gerechten', en: 'Mains' },
    titleHtml: { nl: 'Gerechten', en: 'Mains' },
    note: { nl: 'Inclusief friet en salade', en: 'Includes fries and salad' },
    layout: 'grid',
    groups: [
      {
        items: [
          {
            name: 'Fish & Chips',
            price: '19,90',
            desc: {
              nl: 'Witvis in huisgemaakt bierbeslag, friet, coleslaw en huisgemaakte citroen-tartaar.',
              en: 'White fish in house-made beer batter, fries, coleslaw and house-made lemon tartare.',
            },
          },
          {
            name: { nl: 'Kipsaté van de dij', en: 'Chicken thigh satay' },
            price: '19,50',
            desc: {
              nl: 'Gegrilde chicken thigh, romige pindasaus, friet en frisse salade.',
              en: 'Grilled chicken thigh, creamy peanut sauce, fries and a fresh salad.',
            },
          },
          {
            name: { nl: 'Gegrilde chicken thigh', en: 'Grilled chicken thigh' },
            price: '18,50',
            desc: {
              nl: 'Gemarineerd met kruiden, friet en frisse salade.',
              en: 'Marinated with herbs, fries and a fresh salad.',
            },
          },
        ],
      },
      {
        items: [
          {
            name: 'Spareribs',
            price: '20,90',
            desc: {
              nl: 'Langzaam gegaard, geglazuurd met huisgemaakte BBQ-saus, friet en salade.',
              en: 'Slow-cooked, glazed with house-made BBQ sauce, fries and salad.',
            },
          },
          {
            name: 'Steak',
            price: '23,90',
            desc: {
              nl: 'Gegrilde steak, romige champignonsaus, friet en frisse salade.',
              en: 'Grilled steak, creamy mushroom sauce, fries and a fresh salad.',
            },
          },
        ],
      },
    ],
  },

  /* ============ SNACKS & WINGS ============ */
  {
    id: 'snacks',
    navLabel: { nl: 'Snacks & Wings', en: 'Snacks & Wings' },
    titleHtml: {
      nl: 'Snacks, dirty fries &amp; <em>wings</em>',
      en: 'Snacks, dirty fries &amp; <em>wings</em>',
    },
    note: { nl: 'Voor bij de borrel · om te delen', en: 'To go with drinks · for sharing' },
    layout: 'grid',
    groups: [
      {
        title: 'Sides',
        items: [
          { name: { nl: 'Huisgemaakte friet', en: 'House-made fries' }, price: '5,25' },
          { name: 'Mozzarella sticks', price: '7,90' },
          { name: { nl: 'Huisgemaakte uienringen', en: 'House-made onion rings' }, price: '8,90' },
          { name: 'Nachos', price: '10,90' },
          {
            name: {
              nl: 'Loaded Nachos + pulled chicken of beef',
              en: 'Loaded Nachos + pulled chicken or beef',
            },
            price: '14,90',
          },
          { name: { nl: 'Bitterballen (6 st.)', en: 'Bitterballen (6 pcs.)' }, price: '7,50' },
          {
            name: 'Jalapeño Poppers',
            price: '8,90',
            desc: { nl: 'Gevuld met kaas, pittig.', en: 'Filled with cheese, spicy.' },
          },
        ],
      },
      {
        title: 'Dirty Fries',
        items: [
          {
            name: 'Sticky Cheese Jalapeño',
            price: '9,90',
            desc: {
              nl: 'Friet, cheddarsaus, jalapeños, gebakken ui.',
              en: 'Fries, cheddar sauce, jalapeños, fried onion.',
            },
          },
          {
            name: 'Truffle Parmesan Fries',
            price: '9,90',
            desc: { nl: 'Friet, truffelmayo, parmezaan.', en: 'Fries, truffle mayo, parmesan.' },
          },
          {
            name: 'Smash Fries',
            price: '14,90',
            desc: {
              nl: 'Friet met smashed beef, cheddar, augurk, ui, drip sauce.',
              en: 'Fries with smashed beef, cheddar, pickle, onion, drip sauce.',
            },
          },
          {
            name: 'Chili Cheese Fries',
            price: '14,90',
            desc: {
              nl: 'Friet met chili beef, cheddarsaus, zure room.',
              en: 'Fries with chili beef, cheddar sauce, sour cream.',
            },
          },
          {
            name: 'Pulled Chicken Fries',
            price: '14,90',
            desc: {
              nl: 'Friet, pulled chicken, BBQ-saus, kaas.',
              en: 'Fries, pulled chicken, BBQ sauce, cheese.',
            },
          },
          {
            name: 'Buffalo Fries',
            price: '14,90',
            desc: {
              nl: 'Friet met buffalo chicken en blauwe kaas.',
              en: 'Fries with buffalo chicken and blue cheese.',
            },
          },
        ],
      },
      {
        title: { nl: 'Streetfood & bites', en: 'Street food & bites' },
        items: [
          {
            name: "Smashed Beef Taco's",
            price: '14,90',
            desc: {
              nl: "Tortilla's met smashed beef, cheddar, sla, tomaat, huissaus.",
              en: 'Tortillas with smashed beef, cheddar, lettuce, tomato, house sauce.',
            },
          },
          {
            name: 'Mixed Dutch Snacks',
            price: '16,90',
            desc: {
              nl: 'Klassieke Hollandse snacks om te delen, met sauzen.',
              en: 'Classic Dutch snacks for sharing, with sauces.',
            },
          },
          {
            name: 'Chicken Quesadillas',
            price: '15,90',
            desc: {
              nl: 'Gegrilde kip en kaas in krokante tortilla, met sla, tomaat, huissaus.',
              en: 'Grilled chicken and cheese in a crispy tortilla, with lettuce, tomato, house sauce.',
            },
          },
          {
            name: 'Chicken Tenders',
            price: '8,90',
            desc: {
              nl: 'Huisgemaakt van chicken thigh, goudbruin gefrituurd, met dipsaus.',
              en: 'House-made from chicken thigh, fried golden brown, with a dip.',
            },
          },
        ],
      },
      {
        title: 'Homemade Wings',
        titleNote: { nl: '6 / 12 / 18 st.', en: '6 / 12 / 18 pcs.' },
        items: [
          {
            name: 'Brakke Wings',
            prices: ['10,50', '18,50', '26,50'],
            desc: { nl: 'Sticky soja-knoflook glaze, sesam.', en: 'Sticky soy-garlic glaze, sesame.' },
          },
          {
            name: 'Hot Brakke Wings',
            prices: ['10,50', '18,50', '26,50'],
            desc: { nl: 'Pittige chiliglaze, rode peper.', en: 'Spicy chili glaze, red pepper.' },
          },
          {
            name: 'Sweet BBQ Wings',
            prices: ['10,50', '18,50', '26,50'],
            desc: { nl: 'Smoky honing-BBQ.', en: 'Smoky honey BBQ.' },
          },
          {
            name: 'Buffalo Wings',
            prices: ['10,50', '18,50', '26,50'],
            desc: {
              nl: 'Klassieke buffalosaus, blauwekaasdip.',
              en: 'Classic buffalo sauce, blue cheese dip.',
            },
          },
          {
            name: 'Garlic Parmesan Wings',
            prices: ['10,50', '18,50', '26,50'],
            desc: { nl: 'Knoflookboter en parmezaan.', en: 'Garlic butter and parmesan.' },
          },
          {
            name: 'Honey Mustard Wings',
            prices: ['10,50', '18,50', '26,50'],
            desc: { nl: 'Zoete honing-mosterdglaze.', en: 'Sweet honey-mustard glaze.' },
          },
        ],
      },
    ],
  },

  /* ============ COCKTAILS ============ */
  {
    id: 'cocktails',
    navLabel: 'Cocktails',
    titleHtml: { nl: 'Cocktails &amp; <em>shots</em>', en: 'Cocktails &amp; <em>shots</em>' },
    note: {
      nl: "Cheers! · ook 's ochtends bij het ontbijt",
      en: 'Cheers! · also in the morning with breakfast',
    },
    layout: 'single',
    groups: [
      {
        title: 'Cocktails',
        compact: true,
        items: [
          {
            name: 'Spritz',
            nameNote: {
              nl: '— Aperol, Limoncello of Watermelon',
              en: '— Aperol, Limoncello or Watermelon',
            },
            price: '12,50',
          },
          { name: 'Tequila Sunrise', price: '11,90' },
          { name: 'Moscow Mule', price: '12,50' },
          { name: 'Cuba Libre', price: '12,50' },
          { name: 'Dark & Stormy', price: '12,50' },
          { name: 'Mojito', price: '13,50' },
          { name: 'Negroni', price: '14,50' },
          { name: 'Amaretto Sour', price: '14,50' },
          { name: 'Whiskey Sour', price: '14,50' },
          { name: 'Margarita', price: '13,50' },
          { name: 'Manhattan', price: '14,50' },
          { name: 'Espresso Martini', price: '14,50' },
          { name: 'Porn Star Martini', price: '14,50' },
          { name: 'Long Island Ice Tea', price: '16,50' },
          { name: 'Sex on the Beach', price: '14,50' },
          { name: 'Orgasm', price: '12,50' },
          { name: 'Cosmopolitan', price: '14,50' },
          { name: 'Bloody Mary', price: '11,95' },
          { name: 'Mimosa', price: '8,95' },
        ],
      },
      {
        title: 'Special Shots',
        compact: true,
        items: [
          { name: 'Baby Guinness', price: '7,00' },
          { name: 'Apple Pie', price: '7,00' },
          { name: 'Kamikaze', price: '7,00' },
          { name: 'Ice Tea Green', price: '7,00' },
          { name: 'Jäger Bomb', price: '—' },
        ],
      },
    ],
  },

  /* ============ BIER & WIJN ============ */
  {
    id: 'bier',
    navLabel: { nl: 'Bier & Wijn', en: 'Beer & Wine' },
    titleHtml: { nl: 'Bier &amp; <em>wijn</em>', en: 'Beer &amp; <em>wine</em>' },
    note: {
      nl: 'Van de tap · op fles · per glas of fles',
      en: 'On tap · bottled · by the glass or bottle',
    },
    layout: 'grid',
    groups: [
      {
        title: { nl: 'Tapbier', en: 'On tap' },
        items: [
          { name: 'Amstel Fluitje · 0,22 L', price: '3,60' },
          { name: 'Amstel Vaasje · 0,25 L', price: '4,00' },
          { name: 'Amstel Pint · 0,5 L', price: '8,00' },
          { name: 'La Chouffe · 0,25 L', price: '6,75' },
          { name: 'La Chouffe Pint · 0,5 L', price: '11,50' },
          { name: "Brouwerij 't IJ — IJwit · 0,25 L", price: '6,75' },
          { name: 'IJwit Pint · 0,5 L', price: '11,50' },
          { name: 'Apple Bandit · 0,25 L', price: '6,75' },
          { name: 'Apple Bandit Pint · 0,5 L', price: '11,50' },
          { name: 'Mokum · 0,25 L', price: '6,75' },
          { name: 'Mokum Pint · 0,5 L', price: '11,50' },
        ],
      },
      {
        title: { nl: 'Flesbier', en: 'Bottled beer' },
        items: [
          { name: 'Amstel Radler', price: '5,75' },
          { name: 'Amstel Radler 0.0%', price: '5,75' },
          { name: 'Mort Subite Kriek', price: '6,75' },
          { name: 'IPA', price: '6,75' },
          { name: 'Duvel', price: '6,75' },
          { name: 'Corona', price: '6,75' },
          { name: 'Somersby Cider', price: '6,75' },
          { name: 'Affligem Dubbel', price: '6,75' },
          { name: 'Heineken Silver', price: '5,75' },
          { name: 'Heineken 0.0%', price: '5,75' },
          { name: 'Desperados', price: '6,75' },
        ],
      },
      {
        title: { nl: 'Wijn', en: 'Wine' },
        titleNote: { nl: 'glas / fles', en: 'glass / bottle' },
        items: [
          { name: { nl: 'Huiswijn rood', en: 'House red' }, prices: ['5,75', '34,00'] },
          { name: { nl: 'Huiswijn wit', en: 'House white' }, prices: ['5,75', '34,00'] },
          { name: { nl: 'Huiswijn rosé', en: 'House rosé' }, prices: ['5,75', '34,00'] },
          { name: 'Baby Prosecco · 0,2 L', price: '10,50' },
          { name: 'Prosecco · 0,75 L', price: '38,50' },
        ],
      },
    ],
  },

  /* ============ STERKE DRANK ============ */
  {
    id: 'sterk',
    navLabel: { nl: 'Sterke drank', en: 'Spirits' },
    titleHtml: { nl: 'Sterke <em>drank</em>', en: 'Spirits &amp; <em>liqueurs</em>' },
    note: { nl: 'Bar gezellig', en: 'At the bar' },
    layout: 'grid',
    groups: [
      {
        title: 'Whisky',
        items: [
          { name: 'Johnnie Walker Red Label', price: '7,50' },
          { name: 'Johnnie Walker Black Label', price: '8,50' },
          { name: "Jack Daniel's", price: '7,50' },
          { name: 'Jameson', price: '7,50' },
          { name: 'Chivas', price: '8,50' },
          { name: 'The Famous Grouse', price: '7,00' },
          { name: 'Four Roses', price: '7,50' },
          { name: "Ballantine's", price: '7,50' },
          { name: 'Glenfiddich', price: '8,50' },
        ],
      },
      {
        title: 'Rum',
        items: [
          { name: 'Bacardí Carta Blanca', price: '6,25' },
          { name: 'Bacardí Carta Negra', price: '7,25' },
          { name: 'Bacardí Limón', price: '6,25' },
          { name: 'Captain Morgan White', price: '7,75' },
          { name: 'Captain Morgan Spiced Gold', price: '7,75' },
          { name: 'Havana Club 3 Años', price: '7,00' },
          { name: 'Havana Club 7 Años', price: '8,50' },
          { name: 'Havana Especial', price: '6,50' },
        ],
      },
      {
        title: 'Gin, Vodka & Tequila',
        items: [
          { name: "Gordon's Gin", price: '6,75' },
          { name: 'Bombay Gin', price: '7,75' },
          { name: 'Beefeater Gin', price: '7,50' },
          { name: 'Smirnoff Vodka', price: '6,50' },
          { name: 'Absolut Vodka', price: '7,00' },
          { name: 'Grey Goose Vodka', price: '7,50' },
          { name: 'Sierra Silver Tequila', price: '6,50' },
          { name: 'Sierra Gold Tequila', price: '6,50' },
        ],
      },
      {
        title: { nl: 'Cognac & likeur', en: 'Cognac & liqueurs' },
        items: [
          { name: 'Rémy Martin', price: '8,75' },
          { name: 'Ansac Cognac', price: '8,50' },
          { name: 'Hennessy', price: '8,50' },
          { name: 'Malibu', price: '6,50' },
          { name: 'Jägermeister', price: '4,50' },
          { name: 'Vieux', price: '4,50' },
          { name: 'Salmari', price: '4,75' },
          { name: 'Baileys', price: '6,50' },
          { name: 'Sambuca', price: '6,50' },
          { name: 'Kahlúa', price: '6,00' },
          { name: 'Licor 43', price: '6,50' },
          { name: 'Amaretto Disaronno', price: '6,50' },
          { name: { nl: 'Jonge jenever', en: 'Jonge jenever (young Dutch gin)' }, price: '4,50' },
          { name: { nl: 'Oude jenever', en: 'Oude jenever (aged Dutch gin)' }, price: '5,00' },
          { name: 'Limoncello', price: '4,50' },
        ],
      },
    ],
  },

  /* ============ KOFFIE & WARM ============ */
  {
    id: 'koffie',
    navLabel: { nl: 'Koffie & Warm', en: 'Coffee & Hot' },
    titleHtml: {
      nl: 'Koffie &amp; <em>warme dranken</em>',
      en: 'Coffee &amp; <em>hot drinks</em>',
    },
    note: {
      nl: 'Oat- / amandelmelk +0,50 · extra shot +1,00',
      en: 'Oat / almond milk +0,50 · extra shot +1,00',
    },
    layout: 'grid',
    groups: [
      {
        title: { nl: 'Koffie', en: 'Coffee' },
        items: [
          { name: 'Espresso', price: '3,25' },
          { name: { nl: 'Dubbele espresso', en: 'Double espresso' }, price: '3,90' },
          { name: 'Espresso Macchiato', price: '3,90' },
          { name: 'Americano', price: '3,50' },
          { name: 'Cappuccino', price: '3,90' },
          { name: 'Caffè Latte', price: '4,50' },
          { name: 'Flat White', price: '4,75' },
          { name: 'Latte Macchiato', price: '4,75' },
          { name: 'Cortado', price: '4,50' },
          { name: 'Caffè Mocha', price: '4,90' },
        ],
      },
      {
        title: 'Iced coffee',
        titleNote: { nl: 'extra topping +0,50', en: 'extra topping +0,50' },
        items: [
          { name: 'Iced Americano', price: '4,20' },
          { name: 'Iced Latte', price: '4,90' },
          { name: 'Iced Cappuccino', price: '4,90' },
          { name: 'Iced Vanilla Latte', price: '5,40' },
          { name: 'Iced Caramel Latte', price: '5,40' },
          { name: 'Iced Mocha', price: '5,40' },
          { name: 'Iced Matcha Latte', price: '6,50' },
        ],
      },
      {
        title: { nl: 'Thee & warm', en: 'Tea & hot drinks' },
        items: [
          { name: { nl: 'Thee', en: 'Tea' }, price: '3,50' },
          { name: { nl: 'Verse gember-thee', en: 'Fresh ginger tea' }, price: '4,90' },
          { name: { nl: 'Verse munt-thee', en: 'Fresh mint tea' }, price: '4,90' },
          { name: 'Chai Latte', price: '5,50' },
          { name: 'Matcha Latte', price: '6,00' },
        ],
      },
      {
        title: { nl: 'Warme chocolademelk', en: 'Hot chocolate' },
        items: [
          {
            name: { nl: 'Warme chocolademelk', en: 'Hot chocolate' },
            price: '4,90',
            desc: { nl: 'Extra slagroom +0,50.', en: 'Extra whipped cream +0,50.' },
          },
          {
            name: {
              nl: 'Deluxe — slagroom & marshmallow',
              en: 'Deluxe — whipped cream & marshmallow',
            },
            price: '6,50',
          },
          { name: { nl: 'Met Malibu', en: 'With Malibu' }, price: '10,50' },
          { name: { nl: 'Met Baileys', en: 'With Baileys' }, price: '10,50' },
          { name: { nl: 'Met rum', en: 'With rum' }, price: '10,50' },
          { name: { nl: 'Met Kahlúa', en: 'With Kahlúa' }, price: '10,50' },
        ],
      },
      {
        title: 'Coffee Specials',
        titleNote: { nl: 'met slagroom', en: 'with whipped cream' },
        items: [
          { name: 'Irish Coffee — Jameson', price: '10,50' },
          { name: 'Baileys Coffee', price: '10,50' },
          { name: 'French Coffee — Grand Marnier', price: '10,50' },
          { name: 'Spanish Coffee — Quaranta y Trés', price: '10,50' },
          { name: 'Jamaican Coffee — Tia Maria', price: '10,50' },
          { name: 'Italian Coffee — Amaretto', price: '10,50' },
        ],
      },
    ],
  },

  /* ============ FRIS ============ */
  {
    id: 'fris',
    navLabel: { nl: 'Fris', en: 'Soft drinks' },
    titleHtml: { nl: 'Frisdrank &amp; <em>sappen</em>', en: 'Soft drinks &amp; <em>juices</em>' },
    layout: 'single',
    groups: [
      {
        compact: true,
        items: [
          { name: 'Coca-Cola', price: '3,80' },
          { name: 'Coca-Cola Zero', price: '3,80' },
          { name: 'Sprite', price: '3,80' },
          { name: 'Fanta Orange', price: '3,80' },
          { name: 'Fanta Cassis', price: '3,80' },
          { name: { nl: 'Appelsap', en: 'Apple juice' }, price: '3,80' },
          { name: { nl: "Jus d'orange", en: 'Orange juice' }, price: '3,80' },
          { name: 'Ice Tea Green', price: '3,80' },
          { name: 'Ice Tea Sparkling', price: '3,80' },
          { name: 'Ice Tea Peach', price: '3,80' },
          { name: 'Bitter Lemon', price: '3,80' },
          { name: 'Ginger Ale', price: '3,80' },
          { name: 'Tonic', price: '3,80' },
          { name: 'Ginger Beer', price: '3,80' },
          { name: { nl: 'Spa blauw / rood', en: 'Spa still / sparkling' }, price: '3,80' },
          {
            name: 'Red Bull',
            nameNote: {
              nl: '— ook sugar free / watermelon',
              en: '— also sugar free / watermelon',
            },
            price: '4,80',
          },
        ],
      },
    ],
  },
];
