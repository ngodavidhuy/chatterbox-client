var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },


  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    let text = $('#message').val();
    let username = window.location.search.slice(10);
    let roomname = 'Marvin\'s Room';
    if (text.length > 0) {
      Parse.create({username, text, roomname});
    }
    $('#message').val('');
    
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    // console.log('status');
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};