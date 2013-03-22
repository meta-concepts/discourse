/**
  This controller supports the "share" link controls

  @class ShareController
  @extends Discourse.Controller
  @namespace Discourse
  @module Discourse
**/
Discourse.ShareController = Discourse.Controller.extend({

  // When the user clicks the post number, we pop up a share box
  shareLink: function(e, url) {
    var x;
    x = e.pageX - 150;
    if (x < 25) {
      x = 25;
    }
    $('#share-link').css({
      left: "" + x + "px",
      top: "" + (e.pageY - 100) + "px"
    });
    this.set('link', url);
    this.set('facebookl',"<div class='fb-like' data-href='" + url + "' data-font='lucida grande' data-send='true' data-show-faces='true' data-width='280' ref='share'></div>");
    this.set('twitterl',"<a href='https://twitter.com/share' class='twitter-share-button' data-via='BootstrapJersey' data-url='" + url + "'>Tweet</a>");
    return false;
  },

  // Close the share controller
  close: function() {
    this.set('link', '');
    return false;
  }
});


