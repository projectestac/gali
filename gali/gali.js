/* global JClicObject */

var $ = JClicObject.$;

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
      nivell_b: 'Aprofundiment',
      continua: 'continua',
      enrere: 'enrere',
      felicitats: 'Felicitats!',
      puntuacio: 'Has obtingut una puntuació del ',
      puntuacio_min: ' i el mínim per superar la prova era del ',
      prova_superada: 'Prova superada!',
      torna: 'Torna a intentar-ho!'

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
      nivell_b: 'Aprofundiment',
      continua: 'continua',
      enrere: 'enrere',
      felicitats: 'Felicitats!',
      puntuacio: 'Has obtingut una puntuació del ',
      puntuacio_min: ' i el mínim per superar la prova era del ',
      prova_superada: 'Prova superada!',
      torna: 'Torna a intentar-ho!'
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
      nivell_b: 'Aprofundiment',
      continua: 'continua',
      enrere: 'enrere',
      felicitats: 'Felicitats!',
      puntuacio: 'Has obtengut una puntuació del ',
      puntuacio_min: ' i el mínim per superar la prova era del ',
      prova_superada: 'Prova superada!',
      torna: 'Torna a provar!'
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
      nivell_b: 'Apregondiment',
      continua: 'contunha',
      enrere: 'enrè',
      felicitats: 'Felicitats!',
      puntuacio: 'As obtengut ua puntuación deth ',
      puntucaio_min: ' e eth minim a superar era próva ére deth ',
      prova_superada: 'Prova superada!',
      torna: 'Torna\'c a sajar!'
    }
  },
  msg: {
    variant: 'El català i l\'occità, com moltes altres llengües, tenen diverses variants dialectals que presenten algunes diferències fonètiques i ortogràfiques.<br>Els exercicis del Galí es poden fer en les variants següents:'
  }
};

// Paràmetres generals de l'aplicació
var params = {
  page: 'variant',
  variant: 'cent',
  grup: 1,
  nivell: 'a',
  tema: 1
};

// Puntuació mínima per a superar les activitats
var minScore = 75;

// Inicialitza un conjunt de puntuacions a zero
function initScore() {
  var result = [];
  settings.grups.forEach(function (g) {
    var gr = [];
    for (var l = 0; l < 2; l++) {
      var tr = [];
      g.temes[l].forEach(function (v) {
        tr.push(0);
      });
      gr.push(tr);
    }
    result.push(gr);
  });
  return result;
}

// Comprova que tots els temes d'un determinat grup i nivell estiguin resolts
function checkTemes(score, g, n) {
  return score[g][n === 'b' ? 1 : 0].every(function (t) { return t > 0 });
}

// Comprova l'existència de localStorage i sessionStorage
// from: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
  try {
    var storage = window[type],
      x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  }
  catch (e) {
    return e instanceof DOMException && (
      // everything except Firefox
      e.code === 22 ||
      // Firefox
      e.code === 1014 ||
      // test name field too, because code might not be present
      // everything except Firefox
      e.name === 'QuotaExceededError' ||
      // Firefox
      e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0;
  }
}

var localStorageAvailable = storageAvailable('localStorage');
var sessionStorageAvailable = storageAvailable('sessionStorage');

// Llegeix la puntuació actual, si està disponible
function getScore(v) {
  var s = localStorageAvailable ? window.localStorage.getItem('gali-' + v) : '';
  return s ? JSON.parse(s) : initScore();
}

// Desa la puntuació
function saveScore(score, v) {
  if (localStorageAvailable)
    window.localStorage.setItem('gali-' + v, JSON.stringify(score));
}

// Llegeix el darrer informe de sessionStorage
function getLastGaliReport(remove) {
  var result = null;
  if (sessionStorageAvailable && window.sessionStorage.length > 0) {
    var keys = [];
    for (var i = 0; i < window.sessionStorage.length; i++)
      if (window.sessionStorage.key(i).indexOf('jclic_') == 0)
        keys.push(window.sessionStorage.key(i));
    keys.sort();
    for (var i = keys.length - 1; i >= 0; i--) {
      var report = JSON.parse(window.sessionStorage.getItem(keys[i]));
      if (report.sessions.length > 0 && report.sessions[0].projectName.match(/^g0[0-9]0[0-9][ab]$/)) {
        result = report;
        if (remove)
          window.sessionStorage.removeItem(keys[i]);
        break;
      }
    }
  }
  return result;
}

// Retorna una paraula del diccionari
function getTxt(key) {
  return settings.dict[params.variant][key] || key;
}

// S'executa immediatament després d'haver carregat la pàgina
$(function () {

  // Read params
  window.location.search.substring(1).split('&').forEach(function (p) {
    var kv = p.split('=');
    var key = kv[0], value = kv[1] || '';
    if (key in params)
      params[key] = value;
    else if (key)
      console.log('Paràmetre desconegut: ' + key);
  });

  var elements = {
    ret: null,
    ret_text: 'enrere',
    img_logo: 'img/logo_petit.gif',
    alt_logo: 'Galí',
    t1_text: null,
    t2_text: null,
    descripcio: null
  }

  var score = getScore(params.variant);

  switch (params.page) {
    case 'variant':
      elements.descripcio = settings.msg.variant;
      elements.ret = 'index.html'
      settings.variants.forEach(function (v) {
        var link = '?page=grups&variant=' + v;
        var icon = 'img/selecciona' + (v == 'oc' ? '-oc' : '') + '.gif';
        var label = settings.dict[v].id;
        $('.opcions').append($('<div/>', { class: 'itemVariant' })
          .append($('<a/>', { href: link, class: 'btVariant' }).append($('<img>', { src: icon, alt: label })))
          .append($('<div/>', { class: 'descVariant' })
            .append($('<a/>', { href: link, class: 'titolVariant' }).html(label))
            .append($('<span/>').html('<br>' + settings.dict[v].descripcio))));
      });
      break;

    case 'grups':
      elements.t1_text = getTxt('sel_bloc');
      elements.ret = '?page=variant'
      var $table = $('<table/>', { class: 'llista' })
        .append($('<thead/>')
          .append($('<tr/>').append([
            $('<th/>').html(getTxt('bloc_label')),
            $('<th/>').html(getTxt('nivell_a')),
            $('<th/>').html(getTxt('nivell_b'))])));
      settings.grups.forEach(function (g, i) {
        var solvedA = checkTemes(score, i, 'a');
        var solvedB = checkTemes(score, i, 'b');
        var link = '?page=tema&variant=' + params.variant + '&grup=' + (i + 1);
        var text = getTxt(g.id);
        $table.append($('<tr/>').append([
          $('<td/>').html(text),
          $('<td/>').append($('<a/>', { href: link + '&nivell=a' })
            .append($('<img>', { src: 'img/led_verd' + (solvedA ? '_ok.gif' : '.gif'), alt: text + ' (' + getTxt('nivell_a') + ')' }))),
          $('<td/>').append($('<a/>', { href: link + '&nivell=b' })
            .append($('<img>', { src: 'img/led_taronja' + (solvedB ? '_ok.gif' : '.gif'), alt: text + ' (' + getTxt('nivell_b') + ')' })))
        ]));
      });
      $('.opcions').append($table);
      break;

    case 'tema':
      var g = settings.grups[params.grup - 1];
      elements.ret = '?page=grups&variant=' + params.variant;
      elements.img_logo = 'img/' + g.icon;
      elements.alt_logo = elements.t2;
      $('.opcions').append($('<div>', { class: 'titol' }).html(getTxt(g.id)));
      var $table = $('<table/>', { class: 'llista' });
      g.temes[params.nivell === 'b' ? 1 : 0].forEach(function (t, i) {
        var solved = score[params.grup - 1][params.nivell === 'b' ? 1 : 0][i] === 1;
        var img = 'img/led_' + (params.nivell == 'a' ? 'verd' : 'taronja') + (solved ? '_ok' : '') + '.gif';
        var text = getTxt(t);
        var link = 'player.html?variant=' + params.variant + '&grup=' + params.grup + '&nivell=' + params.nivell + '&tema=' + (i + 1);
        $table.append($('<tr/>').append([
          $('<td>').html(text),
          $('<td/>').append($('<a/>', { href: link }).append($('<img>', { src: img, alt: text })))
        ]));
      });
      $('.opcions').append($table);
      break;

    case 'result':
      elements.ret = '?page=tema&variant=' + params.variant + '&grup=' + params.grup + '&nivell=' + params.nivell + '&tema=' + params.tema;
      elements.ret_text = 'continua';
      var report = getLastGaliReport(true);
      if (report == null) {
        elements.img_logo = 'img/nenplora.png';
        elements.t1_text = 'Error!';
        elements.descripcio = 'No s\'han pogut llegir els resultats de les activitats!';
      } else if (report.globalScore < minScore) {
        elements.img_logo = 'img/nenplora.png';
        elements.t1_text = 'Ohhh!';
        elements.descripcio = getTxt('puntuacio') + report.globalScore + '% ' + getTxt('puntuacio_min') + minScore + '%.<br>' + getTxt('torna');
      } else {
        elements.img_logo = 'img/nenriu.png';
        elements.t1_text = getTxt('felicitats');
        elements.descripcio = getTxt('puntuacio') + report.globalScore + '%.<br>' + getTxt('prova_superada');
        var pn = report.sessions[0].projectName;
        var g = Number.parseInt(pn.substring(1, 3)) - 1;
        var t = Number.parseInt(pn.substring(3, 5)) - 1;
        var n = pn.substring(5) === 'b' ? 1 : 0;
        score[g][n][t] = 1;
        saveScore(score, params.variant);
      }
      break;
    default:
      console.log('Pàgina desconeguda: ' + params.page);
      return;
  }

  if (elements.ret)
    $('.footer').append($('<div/>', { class: 'back' }).append($('<a/>', { href: elements.ret }).html('[' + getTxt(elements.ret_text) + ']')));

  if (elements.img_logo)
    $('.logo').append($('<img>', { src: elements.img_logo, alt: elements.alt_logo }));

  if (elements.t1_text)
    $('.t1').html(elements.t1_text);

  if (elements.descripcio)
    $('.descripcio').html(elements.descripcio);

  if (elements.t2_text)
    $('.t2').html(elements.t2_text);

});

