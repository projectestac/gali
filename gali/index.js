/* global $ */

var page = 'portada',
  variant = 'cent',
  grup = 0,
  nivell = 'a',
  tema = 0;



$($.getJSON('settings.json', function (settings) {

  function getTxt(key) {
    return settings.dict[variant][key];
  }

  // Read params
  window.location.search.substring(1).split('&').forEach(function (p) {
    var kv = p.split('=');
    var key = kv[0], value = kv[1] || '';
    switch (key) {
      case 'page':
        page = value;
        break;
      case 'variant':
        variant = value;
        break;
      case 'grup':
        grup = value;
        break;
      case 'nivell':
        nivell = value;
        break;
      case 'tema':
        tema = value;
        break;
      default:
        console.log('Paràmetre desconegut: ' + key + '=' + value);
    }
  });

  $('.enrere a').html('[' + getTxt('enrere') + ']');

  switch (page) {
    case 'variant':
      $('#variant .opcions').empty();
      settings.variants.forEach(function (v) {
        $('#variant .opcions').append($('<li/>').append($('<a/>', { 'href': '?page=grups&variant=' + v }).html(settings.dict[v].id)))
      });
      break;
    case 'grups':
      $('#grups h2').html(getTxt('sel_bloc'));
      $('#grups .opcions').empty();
      settings.grups.forEach(function (g, i) {
        var link = '?page=tema&variant=' + variant + '&grup=' + (i + 1);
        $('#grups .opcions').append($('<li/>').html(getTxt(g.id) + ' - <a href="' + link + '&nivell=a">A</a> <a href="' + link + '&nivell=b">B</a>'));
      });
      break;
    case 'tema':
      var g = settings.grups[grup - 1];
      $('#tema h2').html(getTxt(g.id))
      $('#tema .opcions').empty();
      g.temes[nivell === 'b' ? 1 : 0].forEach(function (t, i) {
        $('#tema .opcions').append($('<li/>').html(getTxt(t) + ' - <a href="player.html?variant=' + variant + '&grup=' + grup + '&nivell=' + nivell + '&tema=' + i + 1 + '">X</a>'));
      });
      break;
    case 'portada':
    default:
      page = 'portada';
  }

  $('#' + page).css({ 'display': 'block' });

}));

