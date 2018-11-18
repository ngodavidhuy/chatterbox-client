var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    let followButtons = document.getElementsByClassName('followButton');
    for (let button of followButtons) {
      button.addEventListener('click', MessagesView.follow);
    }
  },
  
  follow: function() {
    console.log('HELLO');
  },

  render: function(arr, roomName) {
    if (roomName) {
      for (let messageObj of arr) {
        if (messageObj.username && 
        messageObj.text &&
        messageObj.username.length < 50 &&
        messageObj.text.length < 500 &&
        messageObj.roomname === roomName
        ) {
          MessagesView.renderMessage(messageObj);
        }
      }
    } else {
      for (let messageObj of arr) {
        if (messageObj.username && 
        messageObj.text &&
        messageObj.username.length < 50 &&
        messageObj.text.length < 500
        ) {
          MessagesView.renderMessage(messageObj);
        }
      }
    }
  
  },  

  renderMessage: function(messageObj) {
    let compile = _.template(`
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
    
    this.$chats.append(`${compile(messageObj)}`);
  },


};
