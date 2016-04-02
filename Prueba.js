/**
 * Created by xareas on 3/27/16.
 */
$.ajax({
  method: "POST",
  url: "",
  data: { name: "John", location: "Boston" }
})
  .done(function( msg ) {
    alert( "Data Saved: " + msg );
  });


