var MessageView = {

  render: _.template(`
    <div class="chat" createdAt="<%- createdAt %>">
      <div class="username">
        <%- username %>
        <button class= "follow" type="button">
          Follow!
        </button>
      </div>
      <div>
        <%- text %>
      </div>
    </div>
    `)
  
};


