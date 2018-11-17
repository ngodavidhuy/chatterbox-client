var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    
  },

  render: function(arr) {
    for (let messageObj of arr) {
      if (messageObj.username && 
          messageObj.text &&
          messageObj.username.length < 20 &&
          messageObj.text.length < 125
          ) {
        MessagesView.renderMessage(messageObj);
      }
    }
  },  
  
  renderMessage: function(messageObj) {
    let compile = _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `);
    
    this.$chats.append(`${compile(messageObj)}`);
  }
  

};
