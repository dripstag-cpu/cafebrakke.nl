/**
 * Alle site-copy, per taal naast elkaar. Sleutels zijn identiek in `nl` en `en`,
 * zodat een ontbrekende vertaling meteen opvalt (TS klaagt op de key).
 *
 * Keys die op `Html` eindigen bevatten opzettelijk inline-markup (<em>, <br>,
 * <span>) en worden met `set:html` gerenderd. De rest is platte tekst.
 */
import type { Lang } from './index';

const nl = {
  /* ---------------- meta ---------------- */
  home: {
    title: 'Café Brakke · Bruin café aan de Rozengracht in de Jordaan',
    description:
      'Café Brakke — bruin café aan de Rozengracht 16 in de Jordaan, Amsterdam. Bier van de tap, burgers en borrelhapjes, cocktails, Ajax op het scherm en een terras op het zuiden. Loop binnen.',
    ogTitle: 'Café Brakke · Bruin café in de Jordaan',
    ogDescription:
      'Bier van de tap, burgers, cocktails en Ajax op het scherm. Rozengracht 16, Amsterdam. Loop binnen voor één biertje — twee uur later ben je er nog.',
    jsonLdDescription:
      'Bruin café aan de Rozengracht 16 in de Jordaan, Amsterdam. Bier van de tap, burgers en borrelhapjes, cocktails en Ajax op het scherm.',
    servesCuisine: ['Bar food', 'Burgers', 'Ontbijt', 'Cocktails'],
  },
  menuMeta: {
    title: 'De kaart · Café Brakke — ontbijt, burgers, cocktails & dranken',
    description:
      'De volledige kaart van Café Brakke aan de Rozengracht 16 in de Jordaan: ontbijt, lunch, burgers, gerechten, borrelhapjes, cocktails, bier, wijn en koffie.',
    ogTitle: 'De kaart · Café Brakke',
    ogDescription:
      'Ontbijt, burgers, cocktails en dranken — de volledige kaart van Café Brakke in de Jordaan.',
    breadcrumbHome: 'Home',
    breadcrumbMenu: 'De kaart',
  },

  /* ---------------- chrome ---------------- */
  langName: 'Nederlands',
  langSwitchLabel: 'Taal',
  langBannerText: 'This site is also available in English.',
  langBannerCta: 'View in English',
  langBannerDismiss: 'Sluiten',

  nav: {
    ariaLabel: 'Hoofd-navigatie',
    openMenu: 'Open menu',
    closeMenu: 'Sluit menu',
    menu: 'Kaart',
    borrels: 'Borrels',
    voetbal: 'Voetbal',
    over: 'Over',
    locatie: 'Locatie',
    aanvraag: 'Aanvraag',
  },

  footer: {
    address: 'Adres',
    contact: 'Contact',
    open: 'Open',
    hoursHtml: 'Ma t/m Do, Zo · 09:00&nbsp;tot&nbsp;01:00<br>Vr en Za · 09:00&nbsp;tot&nbsp;03:00',
    colofon: '© Café Brakke · Bruin café aan de Rozengracht 16 in de Jordaan',
    legal: 'Algemene voorwaarden · Privacy · Cookies',
    credit: 'Gemaakt door',
  },

  /* ---------------- hero ---------------- */
  hero: {
    kicker: 'Bruin café · Jordaan',
    taglineHtml:
      'Aan de <em>Rozengracht</em>. Voor een hapje of een drankje,<br>voetbal op het scherm of je team borrelen na het werk.',
    ctaMenu: 'Bekijk de kaart',
    ctaBorrels: 'Naar bedrijfsborrels',
    ctaVoetbal: 'Voetbal kijken',
  },

  /* ---------------- collage ---------------- */
  slots: {
    rozengracht: {
      label: 'Rozengracht 16',
      alt: 'Tafel in Café Brakke met koffie, notitieboek en zonlicht — Rozengracht 16, Jordaan',
    },
    burger: { label: 'Brakke Burger', alt: 'Brakke Burger op tafel' },
    ajax: { label: 'Voetbal staat aan', alt: 'Wedstrijd op het scherm bij Café Brakke' },
    borrel: { label: 'Bedrijfsborrel', alt: "Bedrijfsborrel met collega's" },
    terras: { label: 'Terras', alt: 'Terras op de Rozengracht in de zon' },
    vedett: { label: 'Aan de bar', alt: 'Vedett op de tap' },
  },
  boxCaption: {
    tag: '№ 16 · Rozengracht',
    titleHtml: 'Bruin café.<br><em>Op de Rozengracht</em>.',
  },

  /* ---------------- over ons ---------------- */
  over: {
    label: 'Over ons · Achter de bar',
    pullquoteLead: 'Albart runt Brakke.',
    pullquoteLiftHtml:
      'Hij onthoudt je naam na drie bezoeken. <em>Niet omdat het moet</em>, omdat dat hier zo werkt.',
    p1: "Bij Brakke staat geen 17e-eeuws verhaal op de gevel. Wel een bar waar Albart meestal zelf staat: overdag, 's avonds laat, ook op zondag. Geen service-protocol, geen kelner-script.",
    p2Html:
      'Het team eromheen wisselt. Reviewers noemen door de jaren namen. <strong>Samuel</strong>, <strong>Percy</strong>, <strong>Mario</strong>, <strong>Ella</strong>. Iedereen die er staat staat er voor de gasten.',
    p3: 'Dat is misschien wel het enige dat we wél bij ons houden.',
    rosterLabel: 'In het boek',
  },

  /* ---------------- reviews ---------------- */
  reviews: {
    kicker: 'Wat gasten zeggen',
    titleHtml: '4,7 op <em>Tripadvisor</em>.<br>4,6 op <em>Google</em>.',
    strap: 'Niet ons verhaal. Hun woorden.',
    cta: 'Lees alle reviews',
    items: [
      {
        quote:
          '"Lekker gezellig Amsterdams stamkroegje met uiterst vriendelijk personeel. En zoals het hoort in Amsterdam worden de wedstrijden van Ajax uitgezonden."',
        name: 'Jan',
        meta: 'TripAdvisor',
      },
      { quote: '"Very homey feel where you\'re always family."', name: 'Manuel C', meta: 'TripAdvisor' },
      {
        quote: '"De lekkerste clubsandwich die ik tot nu toe in mijn leven heb gegeten."',
        name: 'Elisabeth P',
        meta: 'TripAdvisor',
      },
      {
        quote: '"The best burger in Amsterdam, it tastes homemade, and the wings were amazing."',
        name: 'Raya Dark',
        meta: 'Google',
      },
      {
        quote: '"Tastiest pints and best music in Amsterdam. Friendliest and quickest barman in the Dam."',
        name: 'Padraig K',
        meta: 'TripAdvisor',
      },
      {
        quote: '"Een echt Amsterdams café waar het personeel je bijna behandelt als een familielid."',
        name: 'Youri T',
        meta: 'TripAdvisor',
      },
    ],
  },

  /* ---------------- kaart-preview ---------------- */
  kaart: {
    kicker: 'Kaart',
    titleHtml: 'De Brakke Burger.<br><em>En al het andere</em>.',
    strap: 'Bier op tap. Hapjes erbij. Plek voor een gesprek.',
    colKitchen: 'Uit de keuken',
    colBar: 'Aan de bar',
    kitchenItems: [
      'The Classic Drip burger',
      "Brakke's Signature Combo",
      'Spareribs (incl. friet & salade)',
      'Fish & Chips',
      'Brakke Wings (12 st.)',
      'Bitterballen (6 st.)',
    ],
    barItems: [
      'Amstel van de tap (vaasje)',
      'La Chouffe',
      "'t IJ — IJwit",
      'Huiswijn (glas)',
      'Espresso Martini',
      'Espresso',
    ],
    foot: 'Een greep uit de kaart. Ontbijt, burgers, gerechten, cocktails en dranken — de hele lijst staat op de menupagina. Pin, contant en creditcards. Allemaal goed.',
    cta: 'Bekijk de volledige kaart',
  },

  /* ---------------- borrels ---------------- */
  borrels: {
    kicker: 'Borrels & bedrijfsborrels',
    titleHtml: 'Met je team<br><em>na het werk</em>.',
    strap: 'Voor tien tot vijfenveertig. Geen vergaderzaal-energie.',
    cardA: {
      title: 'Onbeperkt drankarrangement',
      priceHtml: 'vanaf <strong>€ 27,50</strong> p.p.<br>voor 2 uur',
      body: 'Bier, wijn, fris, koffie. Wij houden bij, jij hoeft niet te tellen.',
      extras: [
        'Bittergarnituur · + € 8,50 p.p.',
        'Borrelplank · + € 12,50 p.p.',
        'Uitgebreide borrelplank · + € 17,50 p.p.',
      ],
    },
    cardB: {
      title: 'Rekening achteraf',
      priceHtml: '<strong>Vrij bestellen</strong><br>één bon, één tekent',
      body: 'Geen arrangement vooraf. Iedereen bestelt wat hij wil, één rekening op het kantoor.',
      extras: ['Factuur op kantoor-adres', 'BTW-specificatie', 'Geen aanbetaling tot 30 personen'],
    },
    foot: 'Mailtje terug binnen één werkdag. Geen offerte-loop.',
    ctaPrimary: 'Stuur een aanvraag',
    ctaCall: 'Bel 020 320 1657',
  },

  /* ---------------- voetbal ---------------- */
  voetbal: {
    kicker: 'Ajax & wedstrijden',
    titleHtml: 'Een bruin café<br><em>met de wedstrijd aan</em>.',
    strap: 'Voor Ajax, voor de Klassieker, voor een Champions League-avond met je team.',
    p1: 'Bij Brakke staat de wedstrijd aan. Eredivisie standaard, ook de uitwedstrijden. De Klassieker altijd. Champions League-avonden vrijwel altijd. Op twee, soms drie schermen, met zichtlijn vanuit de bar.',
    p2: 'Het blijft een bruin café. Wie aan de bar zit voor een biertje, doet dat. Wie kijkt, kijkt mee. Bij een goal mag het iets harder.',
    agendaTitle: 'Wat we uitzenden',
    agenda: [
      { match: 'Eredivisie · thuis en uit', time: 'Standaard' },
      { match: 'De Klassieker', time: 'Altijd' },
      { match: 'Champions League · avonden', time: 'Vrijwel altijd' },
      { match: 'CL knock-outs', time: 'Druk, bel even' },
      { match: 'KNVB-beker · latere rondes', time: 'Op aanvraag' },
      { match: 'Premier League, NBA, darts', time: 'Wisselend' },
    ],
    agendaMeta: 'Voor een specifieke wedstrijd: bel even, dan checken we het voor je.',
    ctaPrimary: 'Plek voor je team',
    ctaCall: 'Bel voor de Klassieker',
  },

  /* ---------------- locatie ---------------- */
  locatie: {
    kicker: 'Op de Rozengracht',
    titleHtml: 'De straat-zijde van<br>de <em>Jordaan</em>.',
    p1: 'Rozengracht 16, in de Jordaan. Drie minuten van de Westermarkt, vijf van het Anne Frank Huis. De Rozengracht is de gedempte hoofdader die de Jordaan oost-west doorsnijdt. De straat-zijde, niet de gracht-zijde.',
    p2: 'Het terras op het zuiden vangt zon vanaf het voorjaar.',
    mapTitle: 'Locatie Café Brakke op de kaart',
    facts: [
      { key: 'Adres', value: 'Rozengracht 16' },
      { key: 'Postcode', value: '1016 NB' },
      { key: 'Tram', value: '13, 17 · Westermarkt' },
      { key: 'Buurt', value: 'Jordaan' },
    ],
  },

  /* ---------------- aanvraag ---------------- */
  aanvraag: {
    kicker: 'Aanvraag & groepen',
    titleHtml: 'Met een groep<br><em>langskomen</em>?',
    strap:
      "Voor een gewone avond hoef je niks te regelen — loop binnen. Plan je een borrel, verjaardag of bedrijfsuitje vanaf zo'n tien personen? Stuur een aanvraag, dan houden we plek vrij.",
    name: 'Naam',
    phone: 'Telefoon',
    email: 'E-mail',
    occasion: 'Wat voor gelegenheid',
    occasions: [
      'Borrel met vrienden',
      'Bedrijfsborrel',
      'Verjaardag / feest',
      'Voetbalavond met groep',
      'Anders',
    ],
    people: 'Aantal personen',
    peoplePlaceholder: 'bijv. 15',
    date: 'Gewenste datum',
    message: 'Bericht',
    messagePlaceholder: 'Vertel kort wat je zoekt — tijd, drankarrangement, hapjes erbij…',
    submit: 'Stuur de aanvraag',
    note: 'We mailen terug binnen één werkdag. Geen offerte-loop.',
    asideTitle: 'Liever direct?',
    asideP1:
      'Bellen mag altijd — vaak is dat het snelst, zeker voor een datum binnenkort of een drukke voetbalavond.',
    asideP2: 'Tot 30 personen vragen we geen aanbetaling. Factuur op kantooradres met btw-specificatie kan.',
    asideAddress: 'Rozengracht 16, Jordaan',
    /* labels die in de mailto-body belanden (script leest ze uit data-attributen) */
    mail: {
      subject: 'Aanvraag',
      people: 'pers.',
      name: 'Naam',
      phone: 'Telefoon',
      email: 'E-mail',
      occasion: 'Gelegenheid',
      count: 'Aantal personen',
      date: 'Gewenste datum',
      message: 'Bericht',
    },
  },

  /* ---------------- slot-cta ---------------- */
  cta: {
    kicker: 'Welkom',
    titleHtml: 'Loop binnen voor één biertje.<br><em>Twee uur later ben je er nog.</em>',
    menu: 'Bekijk de kaart',
    borrels: 'Naar bedrijfsborrels',
    voetbal: 'Ajax kijken',
  },

  /* ---------------- menupagina-chrome ---------------- */
  menuPage: {
    back: 'Terug',
    kicker: 'Rozengracht 16 · Jordaan',
    titleHtml: 'De <em>kaart</em>.',
    intro: 'Van ontbijt tot de laatste cocktail. Keuken open, tap open, koffie altijd.',
    catNavLabel: 'Menu-categorieën',
    footLead: 'Liever even langskomen?',
    footDisc: "Prijzen in euro's, incl. btw · pin, contant & creditcard",
    footCtaGroup: 'Aanvraag voor een groep',
    footCtaCall: 'Bel 020 320 1657',
    footCtaHome: 'Terug naar home',
    toTop: '↑ Terug naar boven',
  },
};

const en: typeof nl = {
  /* ---------------- meta ---------------- */
  home: {
    title: 'Café Brakke · Brown café on the Rozengracht in the Jordaan',
    description:
      'Café Brakke — a traditional brown café at Rozengracht 16 in the Jordaan, Amsterdam. Beer on tap, burgers and bar snacks, cocktails, Ajax on the screen and a south-facing terrace. Just walk in.',
    ogTitle: 'Café Brakke · Brown café in the Jordaan',
    ogDescription:
      'Beer on tap, burgers, cocktails and Ajax on the screen. Rozengracht 16, Amsterdam. Come in for one beer — two hours later you are still here.',
    jsonLdDescription:
      'Traditional brown café at Rozengracht 16 in the Jordaan, Amsterdam. Beer on tap, burgers and bar snacks, cocktails and Ajax on the screen.',
    servesCuisine: ['Bar food', 'Burgers', 'Breakfast', 'Cocktails'],
  },
  menuMeta: {
    title: 'Menu · Café Brakke — breakfast, burgers, cocktails & drinks',
    description:
      'The full menu of Café Brakke at Rozengracht 16 in the Jordaan, Amsterdam: breakfast, lunch, burgers, mains, bar snacks, cocktails, beer, wine and coffee.',
    ogTitle: 'Menu · Café Brakke',
    ogDescription:
      'Breakfast, burgers, cocktails and drinks — the full menu of Café Brakke in the Jordaan.',
    breadcrumbHome: 'Home',
    breadcrumbMenu: 'Menu',
  },

  /* ---------------- chrome ---------------- */
  langName: 'English',
  langSwitchLabel: 'Language',
  langBannerText: 'Deze site is ook in het Nederlands beschikbaar.',
  langBannerCta: 'Bekijk in het Nederlands',
  langBannerDismiss: 'Dismiss',

  nav: {
    ariaLabel: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    menu: 'Menu',
    borrels: 'Group drinks',
    voetbal: 'Football',
    over: 'About',
    locatie: 'Location',
    aanvraag: 'Enquiry',
  },

  footer: {
    address: 'Address',
    contact: 'Contact',
    open: 'Open',
    hoursHtml: 'Mon–Thu, Sun · 09:00&nbsp;to&nbsp;01:00<br>Fri and Sat · 09:00&nbsp;to&nbsp;03:00',
    colofon: '© Café Brakke · Brown café at Rozengracht 16 in the Jordaan',
    legal: 'Terms · Privacy · Cookies',
    credit: 'Made by',
  },

  /* ---------------- hero ---------------- */
  hero: {
    kicker: 'Brown café · Jordaan',
    taglineHtml:
      'On the <em>Rozengracht</em>. For a bite or a drink,<br>the match on the screen or after-work drinks with your team.',
    ctaMenu: 'See the menu',
    ctaBorrels: 'Company drinks',
    ctaVoetbal: 'Watch football',
  },

  /* ---------------- collage ---------------- */
  slots: {
    rozengracht: {
      label: 'Rozengracht 16',
      alt: 'Table in Café Brakke with coffee, notebook and sunlight — Rozengracht 16, Jordaan',
    },
    burger: { label: 'Brakke Burger', alt: 'Brakke Burger on the table' },
    ajax: { label: 'The match is on', alt: 'Match on the screen at Café Brakke' },
    borrel: { label: 'Company drinks', alt: 'Company drinks with colleagues' },
    terras: { label: 'Terrace', alt: 'Terrace on the Rozengracht in the sun' },
    vedett: { label: 'At the bar', alt: 'Vedett on tap' },
  },
  boxCaption: {
    tag: '№ 16 · Rozengracht',
    titleHtml: 'Brown café.<br><em>On the Rozengracht</em>.',
  },

  /* ---------------- over ons ---------------- */
  over: {
    label: 'About us · Behind the bar',
    pullquoteLead: 'Albart runs Brakke.',
    pullquoteLiftHtml:
      'He remembers your name after three visits. <em>Not because he has to</em>, but because that is how it works here.',
    p1: 'There is no 17th-century story painted on the front of Brakke. There is a bar where Albart usually stands himself: during the day, late at night, on Sundays too. No service protocol, no waiter script.',
    p2Html:
      'The team around him changes. Over the years reviewers keep naming names. <strong>Samuel</strong>, <strong>Percy</strong>, <strong>Mario</strong>, <strong>Ella</strong>. Whoever is behind the bar is there for the guests.',
    p3: 'That is probably the only thing we do keep to ourselves.',
    rosterLabel: 'In the book',
  },

  /* ---------------- reviews ---------------- */
  reviews: {
    kicker: 'What guests say',
    titleHtml: '4.7 on <em>Tripadvisor</em>.<br>4.6 on <em>Google</em>.',
    strap: 'Not our story. Their words.',
    cta: 'Read all reviews',
    items: [
      {
        quote:
          '"A proper cosy Amsterdam local with extremely friendly staff. And as it should be in Amsterdam, the Ajax matches are on."',
        name: 'Jan',
        meta: 'TripAdvisor',
      },
      { quote: '"Very homey feel where you\'re always family."', name: 'Manuel C', meta: 'TripAdvisor' },
      {
        quote: '"The best club sandwich I have eaten in my life so far."',
        name: 'Elisabeth P',
        meta: 'TripAdvisor',
      },
      {
        quote: '"The best burger in Amsterdam, it tastes homemade, and the wings were amazing."',
        name: 'Raya Dark',
        meta: 'Google',
      },
      {
        quote: '"Tastiest pints and best music in Amsterdam. Friendliest and quickest barman in the Dam."',
        name: 'Padraig K',
        meta: 'TripAdvisor',
      },
      {
        quote: '"A real Amsterdam café where the staff treat you almost like family."',
        name: 'Youri T',
        meta: 'TripAdvisor',
      },
    ],
  },

  /* ---------------- kaart-preview ---------------- */
  kaart: {
    kicker: 'Menu',
    titleHtml: 'The Brakke Burger.<br><em>And everything else</em>.',
    strap: 'Beer on tap. Something to go with it. Room for a conversation.',
    colKitchen: 'From the kitchen',
    colBar: 'At the bar',
    kitchenItems: [
      'The Classic Drip burger',
      "Brakke's Signature Combo",
      'Spareribs (incl. fries & salad)',
      'Fish & Chips',
      'Brakke Wings (12 pcs.)',
      'Bitterballen (6 pcs.)',
    ],
    barItems: [
      'Amstel on tap (small glass)',
      'La Chouffe',
      "'t IJ — IJwit",
      'House wine (glass)',
      'Espresso Martini',
      'Espresso',
    ],
    foot: 'A small selection. Breakfast, burgers, mains, cocktails and drinks — the full list is on the menu page. Debit card, cash and credit cards. All fine.',
    cta: 'See the full menu',
  },

  /* ---------------- borrels ---------------- */
  borrels: {
    kicker: 'Drinks & company events',
    titleHtml: 'With your team<br><em>after work</em>.',
    strap: 'For ten to forty-five people. No meeting-room energy.',
    cardA: {
      title: 'Unlimited drinks package',
      priceHtml: 'from <strong>€ 27,50</strong> p.p.<br>for 2 hours',
      body: 'Beer, wine, soft drinks, coffee. We keep track, you do not have to count.',
      extras: [
        'Bar snacks · + € 8,50 p.p.',
        'Sharing board · + € 12,50 p.p.',
        'Extended sharing board · + € 17,50 p.p.',
      ],
    },
    cardB: {
      title: 'Pay afterwards',
      priceHtml: '<strong>Order freely</strong><br>one bill, one signature',
      body: 'No package up front. Everyone orders what they want, one bill goes to the office.',
      extras: ['Invoice to the office address', 'VAT specification', 'No deposit up to 30 people'],
    },
    foot: 'We email back within one working day. No quote loop.',
    ctaPrimary: 'Send an enquiry',
    ctaCall: 'Call 020 320 1657',
  },

  /* ---------------- voetbal ---------------- */
  voetbal: {
    kicker: 'Ajax & matches',
    titleHtml: 'A brown café<br><em>with the match on</em>.',
    strap: 'For Ajax, for De Klassieker, for a Champions League night with your team.',
    p1: 'At Brakke the match is on. Eredivisie as standard, away games too. De Klassieker always. Champions League nights almost always. On two, sometimes three screens, with a clear view from the bar.',
    p2: 'It is still a brown café. If you are at the bar for a beer, that is what you do. If you are watching, you watch. When a goal goes in it may get a little louder.',
    agendaTitle: 'What we show',
    agenda: [
      { match: 'Eredivisie · home and away', time: 'Standard' },
      { match: 'De Klassieker', time: 'Always' },
      { match: 'Champions League · evenings', time: 'Almost always' },
      { match: 'CL knock-outs', time: 'Busy, give us a call' },
      { match: 'KNVB Cup · later rounds', time: 'On request' },
      { match: 'Premier League, NBA, darts', time: 'Varies' },
    ],
    agendaMeta: 'For a specific match: give us a call and we will check it for you.',
    ctaPrimary: 'Room for your team',
    ctaCall: 'Call about De Klassieker',
  },

  /* ---------------- locatie ---------------- */
  locatie: {
    kicker: 'On the Rozengracht',
    titleHtml: 'The street side of<br>the <em>Jordaan</em>.',
    p1: 'Rozengracht 16, in the Jordaan. Three minutes from the Westermarkt, five from the Anne Frank House. The Rozengracht is the filled-in canal that cuts through the Jordaan from east to west. The street side, not the canal side.',
    p2: 'The south-facing terrace catches the sun from spring onwards.',
    mapTitle: 'Location of Café Brakke on the map',
    facts: [
      { key: 'Address', value: 'Rozengracht 16' },
      { key: 'Postcode', value: '1016 NB' },
      { key: 'Tram', value: '13, 17 · Westermarkt' },
      { key: 'Neighbourhood', value: 'Jordaan' },
    ],
  },

  /* ---------------- aanvraag ---------------- */
  aanvraag: {
    kicker: 'Enquiries & groups',
    titleHtml: 'Coming with<br>a <em>group</em>?',
    strap:
      'For a normal evening you do not need to arrange anything — just walk in. Planning drinks, a birthday or a company outing for around ten people or more? Send an enquiry and we will keep space free.',
    name: 'Name',
    phone: 'Phone',
    email: 'Email',
    occasion: 'What kind of occasion',
    occasions: [
      'Drinks with friends',
      'Company drinks',
      'Birthday / party',
      'Football night with a group',
      'Something else',
    ],
    people: 'Number of people',
    peoplePlaceholder: 'e.g. 15',
    date: 'Preferred date',
    message: 'Message',
    messagePlaceholder: 'Tell us briefly what you are looking for — time, drinks package, food alongside…',
    submit: 'Send the enquiry',
    note: 'We email back within one working day. No quote loop.',
    asideTitle: 'Rather go direct?',
    asideP1:
      'You can always call — often that is quickest, certainly for a date soon or a busy football night.',
    asideP2: 'Up to 30 people we ask for no deposit. An invoice to the office address with VAT specification is possible.',
    asideAddress: 'Rozengracht 16, Jordaan',
    mail: {
      subject: 'Enquiry',
      people: 'people',
      name: 'Name',
      phone: 'Phone',
      email: 'Email',
      occasion: 'Occasion',
      count: 'Number of people',
      date: 'Preferred date',
      message: 'Message',
    },
  },

  /* ---------------- slot-cta ---------------- */
  cta: {
    kicker: 'Welcome',
    titleHtml: 'Come in for one beer.<br><em>Two hours later you are still here.</em>',
    menu: 'See the menu',
    borrels: 'Company drinks',
    voetbal: 'Watch Ajax',
  },

  /* ---------------- menupagina-chrome ---------------- */
  menuPage: {
    back: 'Back',
    kicker: 'Rozengracht 16 · Jordaan',
    titleHtml: 'The <em>menu</em>.',
    intro: 'From breakfast to the last cocktail. Kitchen open, tap open, coffee always.',
    catNavLabel: 'Menu categories',
    footLead: 'Rather just drop by?',
    footDisc: 'Prices in euros, incl. VAT · debit card, cash & credit card',
    footCtaGroup: 'Enquiry for a group',
    footCtaCall: 'Call 020 320 1657',
    footCtaHome: 'Back to home',
    toTop: '↑ Back to top',
  },
};

export const copy = { nl, en };

export type Copy = typeof nl;

export function useCopy(lang: Lang): Copy {
  return copy[lang];
}
