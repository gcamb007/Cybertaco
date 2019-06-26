$(function () {
  $(".change-pickedUp").on("click", function (event) {
    var id = $(this).data("id");
    var newPickedUp = $(this).data("newpickedUp");

    var newPickedUpState = {
      picked_up: newPickedUp
    };

    $.ajax("/api/tacos/" + id, {
      type: "PUT",
      data: newPickedUpState
    }).then(
      function () {
        console.log("changed picked up to", newpickedUp);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newTaco = {
      taco_name: $("#ta").val().trim(),
      //shell: $("#shell").val().trim(),
      //vegetarian: $("[name=vegetarian]:checked")
    };

    $.ajax("/api/tacos", {
      type: "POST",
      data: newTaco
    }).then(
      function () {
        console.log("created new taco");
        location.reload();
      }
    );
  });

  $(".delete-taco").on("click", function (event) {
    var id = $(this).data("id");

    $.ajax("/api/tacos/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted taco", id);
        location.reload();
      }
    );
  });
});