angular.module('contactWorks.filters', []).filter('tel', function () {
  return function (tel) {
    if (!tel) { return ''; }

    var value = tel.toString().trim().replace(/^\+/, '');

    if (value.match(/[^0-9]/)) {
      return tel;
    }

    var country, city, number;

    if (value.length === 10) {
      country = 55;
      city = value.slice(0, 2);
      number = value.slice(2);
    } else {
      return tel;
    }

    number = number.slice(0, 4) + '-' + number.slice(4);

    return ('+'+ country + " (" + city + ") " + number).trim();
  };
});
