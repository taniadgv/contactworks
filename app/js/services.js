'use strict';

angular.module('contactWorks.services', []).
service('contacts', function () {

  var contacts = [];

  var save = function (contact) {
    contact.id = Math.random().toString(36).substring(7);
    contacts.push(contact);
    return contact.id;
  };

  var get = function (id) {
    return _.find(contacts, function(contact) { return contact.id == id; });
  };

  var remove = function (id) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].id == id) {
            contacts.splice(i, 1);
        }
    }
  }

  save({id:1, name:"First Contact", phone:"1234567890", email:"someone@someplace.com"});

  return {
    contacts: contacts,
    save: save,
    get: get,
    remove: remove
  }

});

