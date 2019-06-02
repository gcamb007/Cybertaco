$(function() {
    $(".change-pickedUp").on("click", function(event) {
      var id = $(this).data("id");
      var newpickedUp = $(this).data("newpickedUp");
  
      var newpickedUpState = {
        pickedUp: newpickedUp
      };

      $.ajax("/api/tacos/" + id, {
        type: "PUT",
        data: newpickedUpState
      }).then(
        function() {
          console.log("changed available to", newpickedUp);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newTaco = {
        name: $("#ta").val().trim(),
        sleepy: $("[name=sleepy]:checked").val().trim()
      };
  
      $.ajax("/api/tacos", {
        type: "POST",
        data: newTaco
      }).then(
        function() {
          console.log("created new taco");
          location.reload();
        }
      );
    });
  
    $(".delete-taco").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/tacos/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted taco", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  