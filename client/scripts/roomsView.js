var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleRoomChange);
  },
  
  handleRoomChange: function(event) {
    event.preventDefault();
    let roomPick = $('select').val()
    
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
