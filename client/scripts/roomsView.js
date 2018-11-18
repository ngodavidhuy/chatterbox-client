var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleRoomChange);
  },
  
  handleRoomChange: function(event) {
    event.preventDefault();
    let roomPick = $('select').val();
    // console.log(roomPick);
    $('#chats').html('');
    Parse.readAll((data) => {
      Messages.all = data.results;
      Rooms = {};
      for (let obj of data.results) {
        if (obj.roomname && !Rooms[obj.roomname]) {
          Rooms[obj.roomname] = true;
        }
      }
      MessagesView.render(Messages.all, roomPick);
      // examine the response from the server request:
    });
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
