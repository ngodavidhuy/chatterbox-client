var Friends = {
  
  _following: {},
  
  follow: function(username) {
    _following[username] = true;
  },
  
  unfollow: function(username) {
    delete _following[username];
  },


};