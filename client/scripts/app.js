var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    
    setInterval(App.refresh, 3000);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      Messages.all = data.results;
      for (let obj of data.results) {
        if (obj.roomname && !Rooms[obj.roomname]) {
          Rooms[obj.roomname] = true;
        }
      }
      MessagesView.render(Messages.all);
      RoomsView.render(Rooms);
      MessagesView.initialize()
      // examine the response from the server request:
      callback();
    });
  },
  
  refresh: function() {
    
    let oldDate = document.getElementById('chats').firstElementChild.getAttribute('createdAt');

    Parse.readAll((data) => {
      Messages.all = data.results;
    });
    let newMessages = Messages.all.filter( function(obj) {
      return Date.parse(obj.createdAt) > Date.parse(oldDate);
    });
    
    let compiler = _.template(`
    <div class="chat" createdAt="<%- createdAt %>">
      <div class="username">
        <%- username %>
        <button class= "followButton" type="button">
          Follow!
        </button>
      </div>
      <div>
        <%- text %>
      </div>
    </div>
    `);
  
    if (newMessages) {
      for (let msg of newMessages) {
        $('#chats').prepend(`${compiler(msg)}`);
      }
    }
    
    console.log('refreshing every 3 seconds!');
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
