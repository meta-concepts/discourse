/**
  This view is used for rendering the "like" interface for a post

  @class LikeView
  @extends Discourse.View
  @namespace Discourse
  @module Discourse
**/
Discourse.LikeView = Discourse.View.extend({
  templateName: 'like',

  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function(){
      IN.parse();
      twttr.widgets.load();
      FB.XFBML.parse();
    });
  },

});


