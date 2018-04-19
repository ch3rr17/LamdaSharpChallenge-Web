// Global js code for project
globalUrl = "https://khbn7xovs8.execute-api.us-east-1.amazonaws.com/dev";

$( "#microbForm" ).submit(function( event ) {
 
  // Stop form from submitting normally
  event.preventDefault();
 
  // Get some values from elements on the page:
  var $form = $( this ),
    titleN = $form.find( "input[name='title']" ).val(),
    contentN = $form.find( "input[name='content']" ).val(),
    url = $form.attr( "action" );
 
  // Send the data using post
  var body = { title: titleN, content: contentN };
  var posting = $.post( url, body );
 
  // Put the results in a div
  posting.done(function( data ) {
      console.log(data);
      $('#microbForm').trigger("reset");
    // var content = $( data ).find( "#content" );
    // $( "#result" ).empty().append( content );
  });
});

