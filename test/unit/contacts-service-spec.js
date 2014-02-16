describe('Contacts servce', function() {
  var contacts;

  beforeEach(function () {
    module('contactWorks.factories');

    inject(function(_contacts_) {
      contacts = _contacts_;
    });

  });

  it('should have some contacts by default', function () {
    expect(contacts.contacts.length).toBe(5);
  });

  it('should add contact', function () {
    contacts.save({name: 'Renan', phone:'5182614001', email:'rmartins@thoughtworks.com'});
    expect(contacts.contacts.length).toBe(6);
  });

  it('should set an ID to every new contact', function() {
    contacts.save({name: 'Renan', phone:'5182614001', email:'rmartins@thoughtworks.com'});
    expect(contacts.contacts[5].id).toBeDefined();
  });

  it('should remove a contact', function () {
    var id = contacts.save({name: 'Renan', phone:'5182614001', email:'rmartins@thoughtworks.com'});
    contacts.remove(id);
    expect(contacts.contacts.length).toBe(5);
  });

  it('should get the contact by the given id', function() {
    var id = contacts.save({name: 'Renan', phone:'5182614001', email:'rmartins@thoughtworks.com'});
    expect(contacts.get(id)).toEqual({name: 'Renan', phone:'5182614001', email:'rmartins@thoughtworks.com', id: id});
  });

});
