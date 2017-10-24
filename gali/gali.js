/* global $ */

var settings = {
  variants: ['cent', 'no', 'al', 'oc'],
  grups: [
    {
      id: 'com_escriu',
      icon: 'comsescr.gif',
      temes: [['alfabet', 'on_lletra', 'nombres', 'unitats'], ['vocals', 'consonants', 'centenes']]
    },
    {
      id: 'qui_soc',
      icon: 'quisoc.gif',
      temes: [['nom', 'familia', 'cos', 'fisic', 'naixement'], ['qui_es_qui', 'relacions_familiars', 'aspecte']]
    },
    {
      id: 'quina_hora',
      icon: 'quinhora.gif',
      temes: [['dies', 'hora', 'personals', 'vestit', 'animals'], ['ahir', 'hora_temps', 'opinions', 'vesteixo']]
    },
    {
      id: 'menjo',
      icon: 'quemenjo.gif',
      temes: [['aliments', 'altres_aliments', 'mobles_menjador', 'mobles_cuina', 'escola'], ['menjar', 'habitatge', 'adreces', 'estudi']]
    },
    {
      id: 'faig',
      icon: 'quefaig.gif',
      temes: [['accions', 'ofici', 'comprar', 'eines', 'on_vas'], ['que_fa', 'oficis', 'on_comprar', 'avaria', 'viatge']]
    },
    {
      id: 'morfosintaxi',
      icon: 'morfo.gif',
      temes: [['article', 'masculi', 'determinants', 'pronoms', 'adverbis', 'verb_present', 'verb_passat'], ['substantius', 'combinacions', 'quantificadors', 'verb_subjuntiu', 'obligacio', 'correlacio']]
    }
  ],
  dict: {
    cent: {
      id: 'Català central',
      descripcio: 'És la variant del català parlada a les comarques de Girona, Barcelona i Tarragona.',
      base: 'galicent',
      alfabet: 'L\'alfabet',
      on_lletra: 'On és cada lletra',
      nombres: 'Aprenc els nombres',
      unitats: 'Unitats i desenes',
      nom: 'El nom',
      familia: 'La família',
      cos: 'El cos',
      fisic: 'Aparença física',
      naixement: 'Lloc de naixement. Domicili',
      dies: 'Dies, mesos, estacions',
      hora: 'L\'hora i el temps',
      personals: 'Característiques personals',
      vestit: 'El vestit',
      animals: 'Els animals i el camp',
      aliments: 'Aliments, vegetals i pasta',
      altres_aliments: 'Altres aliments i begudes',
      mobles_menjador: 'Els mobles del menjador',
      mobles_cuina: 'Els mobles de la cuina i el bany',
      escola: 'L\'escola i els jocs',
      accions: 'Accions quotidianes',
      ofici: 'Quin ofici té',
      comprar: 'Comprar i vendre',
      eines: 'Eines i avaries',
      on_vas: 'On vas i com hi vas',
      article: 'L\'article',
      masculi: 'Masculí, femení. Singular, plural',
      determinants: 'Determinants i pronoms',
      pronoms: 'Pronoms personals  ',
      adverbis: 'Adverbis i preposicions',
      verb_present: 'El verb: present d\'indicatiu',
      verb_passat: 'El verb: passat i futur',
      vocals: 'Les vocals',
      consonants: 'Les consonants',
      centenes: 'Centenes i milers',
      qui_es_qui: 'Qui és qui',
      relacions_familiars: 'Relacions familiars',
      aspecte: 'Aspecte personal',
      ahir: 'Ahir, avui, demà',
      hora_temps: 'Digues l\'hora i el temps que fa',
      opinions: 'Opinions i preferències',
      vesteixo: 'Com vesteixo',
      menjar: 'El menjar',
      habitatge: 'L\'habitatge',
      adreces: 'Adreces  i direccions',
      estudi: 'L\'estudi i l\'esport',
      que_fa: 'Digues què fa',
      oficis: 'Oficis i professions',
      on_comprar: 'On ho pots comprar',
      avaria: 'Tinc una avaria',
      viatge: 'Vaig de viatge',
      substantius: 'Substantius i adjectius',
      combinacions: 'Combinacions de pronoms',
      quantificadors: 'Quantificadors i indefinits',
      verb_subjuntiu: 'El verb: el subjuntiu',
      obligacio: 'Obligació i probabilitat',
      correlacio: 'Correlació de temps verbals',
      com_escriu: 'Com s\'escriu? Com es pronuncia?',
      qui_soc: 'Qui sóc? Com sóc?',
      quina_hora: 'Quina hora és? Quin dia som? Què m\'agrada?',
      menjo: 'Què menjo? On visc?',
      faig: 'Què faig? Què compro? On vaig?',
      morfosintaxi: 'Morfosintaxi',
      enrere: 'enrere',
      sel_bloc: 'Fes un clic sobre el grup d\'activitats pel qual vulguis començar:',
      bloc_label: 'Blocs temàtics de contingut',
      nivell_a: 'Iniciació',
      nivell_b: 'Aprofundiment'
    },
    no: {
      id: 'Català nord-occidental',
      descripcio: 'És la variant del català parlada a les comarques de Lleida, a les Terres de l\'Ebre i a la Franja Oriental d\'Aragó.',
      base: 'galino',
      alfabet: 'L\'alfabet',
      on_lletra: 'On és cada lletra',
      nombres: 'Aprenc els nombres',
      unitats: 'Unitats i desenes',
      nom: 'El nom',
      familia: 'La família',
      cos: 'El cos',
      fisic: 'Aparença física',
      naixement: 'Lloc de naixement. Domicili',
      dies: 'Dies, mesos, estacions',
      hora: 'L\'hora i el temps',
      personals: 'Característiques personals',
      vestit: 'El vestit',
      animals: 'Els animals i el camp',
      aliments: 'Aliments, vegetals i pasta',
      altres_aliments: 'Altres aliments i begudes',
      mobles_menjador: 'Els mobles del menjador',
      mobles_cuina: 'Els mobles de la cuina i el bany',
      escola: 'L\'escola i els jocs',
      accions: 'Accions quotidianes',
      ofici: 'Quin ofici té',
      comprar: 'Comprar i vendre',
      eines: 'Eines i avaries',
      on_vas: 'On vas i com hi vas',
      article: 'L\'article',
      masculi: 'Masculí, femení. Singular, plural',
      determinants: 'Determinants i pronoms',
      pronoms: 'Pronoms personals  ',
      adverbis: 'Adverbis i preposicions',
      verb_present: 'El verb: present d\'indicatiu',
      verb_passat: 'El verb: passat i futur',
      vocals: 'Les vocals',
      consonants: 'Les consonants',
      centenes: 'Centenes i milers',
      qui_es_qui: 'Qui és qui',
      relacions_familiars: 'Relacions familiars',
      aspecte: 'Aspecte personal',
      ahir: 'Ahir, avui, demà',
      hora_temps: 'Digues l\'hora i el temps que fa',
      opinions: 'Opinions i preferències',
      vesteixo: 'Com vesteixo',
      menjar: 'El menjar',
      habitatge: 'L\'habitatge',
      adreces: 'Adreces  i direccions',
      estudi: 'L\'estudi i l\'esport',
      que_fa: 'Digues què fa',
      oficis: 'Oficis i professions',
      on_comprar: 'On ho pots comprar',
      avaria: 'Tinc una avaria',
      viatge: 'Vaig de viatge',
      substantius: 'Substantius i adjectius',
      combinacions: 'Combinacions de pronoms',
      quantificadors: 'Quantificadors i indefinits',
      verb_subjuntiu: 'El verb: el subjuntiu',
      obligacio: 'Obligació i probabilitat',
      correlacio: 'Correlació de temps verbals',
      com_escriu: 'Com s\'escriu? Com es pronuncia?',
      qui_soc: 'Qui sóc? Com sóc?',
      quina_hora: 'Quina hora és? Quin dia som? Què m\'agrada?',
      menjo: 'Què menjo? On visc?',
      faig: 'Què faig? Què compro? On vaig?',
      morfosintaxi: 'Morfosintaxi',
      enrere: 'enrere',
      sel_bloc: 'Fes un clic sobre el grup d\'activitats pel qual vulguis començar:',
      bloc_label: 'Blocs temàtics de contingut',
      nivell_a: 'Iniciació',
      nivell_b: 'Aprofundiment'
    },
    al: {
      id: 'Català de l\'Alguer',
      descripcio: 'És la variant del català parlada a la ciutat de l\'Alguer, a l\'illa de Sardenya.',
      base: 'galial',
      alfabet: 'L\'alfabet',
      on_lletra: 'On és cada lletra',
      nombres: 'Aprenc los números',
      unitats: 'Unitats i desenes',
      nom: 'Lo nom',
      familia: 'La família',
      cos: 'Lo cos',
      fisic: 'Aparença física',
      naixement: 'Lloc de naixement. Domicili',
      dies: 'Dies, mesos, estajons',
      hora: 'L\'hora i el temps',
      personals: 'Característiques personals',
      vestit: 'Lo vestit',
      animals: 'Los animals i la campanya',
      aliments: 'Aliments, vegetals i pasta',
      altres_aliments: 'Altros aliments i begudes',
      mobles_menjador: 'Los mobles de la posento de menjar',
      mobles_cuina: 'Los mobles de la cuina i el bany',
      escola: 'L\'escola i els jocs',
      accions: 'Accions quotidianes',
      ofici: 'Qui empleo té',
      comprar: 'Comprar i vendre',
      eines: 'Eïnes i problemes',
      on_vas: 'On vas i com hi vas',
      article: 'L\'article',
      masculi: 'Masculí, femení. Singular, plural',
      determinants: 'Determinants i pronoms',
      pronoms: 'Pronoms personals  ',
      adverbis: 'Adverbis i preposicions',
      verb_present: 'Lo verb: present d\'indicatiu',
      verb_passat: 'Lo verb: passat i futur',
      vocals: 'Les vocals',
      consonants: 'Les consonants',
      centenes: 'Centenes i miliars',
      qui_es_qui: 'Qui és qui',
      relacions_familiars: 'Relacions familiars',
      aspecte: 'Aspecte personal',
      ahir: 'Ahir, avui, demà',
      hora_temps: 'Diu l\'hora i el temps que fa',
      opinions: 'Opinions i preferències',
      vesteixo: 'Com vist',
      menjar: 'El menjar',
      habitatge: 'L\'habitatge',
      adreces: 'Endiriços i direccions',
      estudi: 'L\'estudi i l\'esport',
      que_fa: 'Diu qui cosa fa',
      oficis: 'Empleos i professions',
      on_comprar: 'On lo pots comprar',
      avaria: 'Tenc un problema',
      viatge: 'Vaig en viatge',
      substantius: 'Substantius i adjectius',
      combinacions: 'Combinacions de pronoms',
      quantificadors: 'Quantificadors i indefinits',
      verb_subjuntiu: 'Lo verb: el subjuntiu',
      obligacio: 'Obligació i probabilitat',
      correlacio: 'Correlació de temps verbals',
      com_escriu: 'Com s\'escriu? Com se pronuncia?',
      qui_soc: 'Qui só? Com só?',
      quina_hora: 'Qui hora és? Qui dia és? Qui cosa m\'agrada?',
      menjo: 'Qui cosa menj? On viv?',
      faig: 'Qui cosa faç? Qui cosa compr? On vaig?',
      morfosintaxi: 'Morfosintaxi',
      enrere: 'enrere',
      sel_bloc: 'Fes un clic sobre el grup d\'activitats pel qual vulguis començar:',
      bloc_label: 'Blocs temàtics de contengut',
      nivell_a: 'Iniciació',
      nivell_b: 'Aprofundiment'
    },
    oc: {
      id: 'Occitan d\'Aran',
      descripcio: 'És la variant de l\'occità que es parla a la Vall d\'Aran.',
      base: 'galioc',
      alfabet: 'ER ALFABET',
      on_lletra: 'A ON EI CADA LETRA',
      nombres: 'APRENI ES NUMEROS',
      unitats: 'UNITATS E DETZENES',
      nom: 'ETH NÒM',
      familia: 'ERA FAMILHA',
      cos: 'ETH CÒS',
      fisic: 'APARENÇA FISICA',
      naixement: 'LÒC DE NEISHEMENT. DOMICILI',
      dies: 'DIES, MESI, SASONS',
      hora: 'ERA ORA E ETH TEMPS',
      personals: 'CARACTERISTIQUES PERSONAUS',
      vestit: 'ETH VESTIT',
      animals: 'ES ANIMAUS E ETH CAMP',
      aliments: 'ALIMENTS, VEGETAUS E PASTA',
      altres_aliments: 'UNA AUTI ALIMENTS E BEGUDES',
      mobles_menjador: 'ES MÒBLES DETH MINJADOR',
      mobles_cuina: 'ES MÒBLES DERA CODINA E DETH BANH',
      escola: 'ERA ESCÒLA E ES JÒCS',
      accions: 'ACCIONS QUOTIDIANES',
      ofici: 'QUIN MESTIÈR A',
      comprar: 'CROMPAR E VÉNER',
      eines: 'EIRINES E PANES',
      on_vas: 'TÀ ON VAS E COM I VAS',
      article: 'ER ARTICLE',
      masculi: 'MASCULIÍ, FEMEIN. SINGULAR, PLURAU',
      determinants: 'DETERMINANTS E PRONÒMS',
      pronoms: 'PRONÒMS PERSONAUS',
      adverbis: 'ADVÈRBIS E PREPOSICIONS',
      verb_present: 'ETH VÈRB: PRESENT D\'INDICATIU',
      verb_passat: 'ETH VÈRB: PASSAT E FUTUR',
      vocals: 'ES VOCAUS',
      consonants: 'ES CONSONANTS',
      centenes: 'CENTENES E MILÈRS',
      qui_es_qui: 'QUI EI QUI',
      relacions_familiars: 'RELACIONS FAMILIARES',
      aspecte: 'ASPÈCTE PERSONAU',
      ahir: 'AGER, AUÉ, DEMAN',
      hora_temps: 'DITZ ERA ORA E ETH TEMPS QUE HÈ',
      opinions: 'OPINIONS E PREFERÉNCIES',
      vesteixo: 'COMA VESTISQUI',
      menjar: 'ETH MINJAR',
      habitatge: 'ETH LOTJAMENT',
      adreces: 'ADRECES E DIRECCIONS',
      estudi: 'ER ESTUDI E ER ESPORT',
      que_fa: 'DITZ QUÉ HÈ',
      oficis: 'MESTIÈRS E PROFESSIONS',
      on_comprar: 'A ON AC PÒS CROMPAR',
      avaria: 'È UA PANA',
      viatge: 'VAU DE VIATGE',
      substantius: 'SUBSTANTIUS E ADJECTIUS',
      combinacions: 'COMBINACIONS DE PRONÒMS',
      quantificadors: 'QUANTIFICADORS E INDEFINITS',
      verb_subjuntiu: 'ETH VÈRB: ETH SUBJONTIU',
      obligacio: 'OBLIGACION E PROBABILITAT',
      correlacio: 'CORRELACION DE TEMPS VERBAUS',
      com_escriu: 'COM S\'ESCRIU? COM SE PRONÓNCIE?',
      qui_soc: 'QUI SÒ? COM SÒ?',
      quina_hora: 'QUINA HORA EI? QUIN DIA ÈM? QUÉ M\'AGRADE?',
      menjo: 'QUÉ MIMGI? A ON VIUI?',
      faig: 'QUÉ HÈSQUI? QUÉ CROMPI? TÀ ON VAU?',
      morfosintaxi: 'MORFOSINTAXI',
      enrere: 'endarrèr',
      sel_bloc: 'Hè un clic sus eth grop d\'activitats peth que volgues començar:',
      bloc_label: 'Blocs tematics de contengut',
      nivell_a: 'Iniciacion',
      nivell_b: 'Apregondiment'
    }
  },
  msg: {
    variant: 'El català i l\'occità, com moltes altres llengües, tenen diverses variants dialectals que presenten algunes diferències fonètiques i ortogràfiques. Els exercicis del Galí es poden fer en aquestes variants:'
  }
};

// Paràmetres generals de l'aplicació
var params = {
  page: 'variant',
  variant: 'cent',
  grup: 1,
  nivell: 'a',
  tema: 1
}

$(function () {

  // Retorna una paraula del diccionari
  function getTxt(key) {
    return settings.dict[params.variant][key];
  }

  // Read params
  window.location.search.substring(1).split('&').forEach(function (p) {
    var kv = p.split('=');
    var key = kv[0], value = kv[1] || '';
    if (key in params)
      params[key] = value;
    else
      console.log('Paràmetre desconegut: ' + key + '=' + value);
  });

  var elements = {
    ret: null,
    img_logo: 'img/logo_petit.gif',
    alt_logo: 'Galí',
    t1_text: null,
    t2_text: null,
    descripcio: null
  }

  switch (params.page) {
    case 'variant':
      elements.descripcio = settings.msg.variant;
      elements.ret = 'index.html'
      settings.variants.forEach(function (v) {
        var link = '?page=grups&variant=' + v;
        var icon = 'img/selecciona' + (v == 'oc' ? '-oc' : '') + '.gif';
        var label = settings.dict[v].id;
        $('.opcions').append($('<div/>', { class: 'itemVariant' })
          .append($('<a/>', { 'href': link }).append($('<img>', { src: icon, alt: label })))
          .append($('<a/>', { 'href': link }).append($('<h2/>').html(label)))
          .append($('<p/>').html(settings.dict[v].descripcio)));
      });
      break;

    case 'grups':
      elements.t1_text = getTxt('sel_bloc');
      elements.ret = '?page=variant'
      settings.grups.forEach(function (g, i) {
        var link = '?page=tema&variant=' + params.variant + '&grup=' + (i + 1);
        var text = getTxt(g.id);
        $('.opcions').append($('<div/>', { class: 'itemGrup' })
          .append($('<div/>', { class: 'label' }).html(text))
          .append($('<a/>', { href: link + '&nivell=a' }).append($('<img>', { src: 'img/led_verd.gif', alt: text + ' (' + getTxt('nivell_a') + ')' })))
          .append($('<a/>', { href: link + '&nivell=b' }).append($('<img>', { src: 'img/led_taronja.gif', alt: text + ' (' + getTxt('nivell_b') + ')' }))));
      });
      break;

    case 'tema':
      var g = settings.grups[params.grup - 1];
      elements.t2_text = getTxt(g.id);
      elements.ret = '?page=grups&variant=' + params.variant;
      elements.img_logo = 'img/' + g.icon;
      elements.alt_logo = elements.t2;
      var img = 'img/led_' + (params.nivell == 'a' ? 'verd' : 'taronja') + '.gif';
      g.temes[params.nivell === 'b' ? 1 : 0].forEach(function (t, i) {
        var text = getTxt(t);
        var link = 'player.html?variant=' + params.variant + '&grup=' + params.grup + '&nivell=' + params.nivell + '&tema=' + (i + 1);
        $('.opcions').append($('<div/>', { class: 'itemTema' })
          .append($('<div/>', { class: 'label' }).html(text))
          .append($('<a/>', { href: link }).append($('<img>', { src: img, alt: text }))));
      });
      break;

    case 'results':
      console.log('Llegint resultats!');
      break;
    default:
      console.log('Pàgina desconeguda: ' + params.page);
      return;
  }

  if (elements.ret)
    $('.footer').append($('<a/>', { href: elements.ret }).html('[' + getTxt('enrere') + ']'));

  if (elements.img_logo)
    $('.logo').append($('<img>', {src: elements.img_logo, alt: elements.alt_logo}));

  if(elements.t1_text)
    $('.t1').html(elements.t1_text);

  if(elements.descripcio)
    $('.descripcio').html(elements.descripcio);    

  if(elements.t2_text)
    $('.t2').html(elements.t2_text);

});

