// Factory vs Service? Replace factory by service and it will just work.
// Subtle difference:
// Service: var yourThing = new ServiceFunction(); (instance of the function)
// Factory: var yourThing = FactoryFunction(); (result of invocation of function)

angular.module('contactWorks.factories', []).factory('contacts', function () {

  var contacts = [];

  var save = function (contact) {
    contact.id = Math.random().toString(36).substring(7);
    contacts.push(contact);
    return contact.id;
  };

  var get = function (id) {
    return _.find(contacts, function(contact) { return contact.id === id; });
  };

  var remove = function (id) {
    for (var i = 0; i < contacts.length; i++) {
      if (contacts[i].id === id) {
        contacts.splice(i, 1);
      }
    }
  };

  save({id:1, name:"Renan Martins", phone:"5182614001", email:"rmartins@thoughtworks.com"});
  save({id:2, name:"Anabela", phone:"5182411200", email:"amalhadas@thoughtworks.com"});
  save({id:3, name:"Paulo Brito", phone:"1153215201", email:"pbrito@thoughtworks.com"});
  save({id:4, name:"Tania Gonzales", phone:"1525663322", email:"tgonzales@thoughtworks.com"});
  save({id:5, name:"Pedro Legal", phone:"6155441122", email:"plegal@thoughtworks.com"});

  return {
    contacts: contacts,
    save: save,
    get: get,
    remove: remove
  };

});

