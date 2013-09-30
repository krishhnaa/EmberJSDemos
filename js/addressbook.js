App = Ember.Application.create();

App.Store = DS.Store.extend({
  revision: 12,
  adapter: DS.RESTAdapter.create({
    url: 'http://addressbook-api.herokuapp.com'
  })
});

App.Contact = DS.Model.extend({
  first: DS.attr('string'),
  last: DS.attr('string'),
  avatar: DS.attr('string'),
  github: DS.attr('string'),
  twitter: DS.attr('string'),
  notes: DS.attr('string')
});

App.Router.map(function() {
  this.resource('contact', {path: '/contact/:contact_id'});
});

App.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return App.Contact.find();
  }
});