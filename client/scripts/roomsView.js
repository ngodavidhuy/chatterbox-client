var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function(roomsObj) {
    for (let room in roomsObj) {
      RoomsView.renderRoom(room);
    }
  },
  
  renderRoom: function(room) {
    let roomTemplate = _.template("<option value='<%- room %>'>" +
     "<%- room %>" +
     "</option>"
     );
    let option = roomTemplate({room});
    this.$select.append(`${option}`);
  }

};
