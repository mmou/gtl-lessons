$(document).ready(function() {

  var showError = function(error) {
    $("#error").html(error).show();
  }

  var getAndPopulateItems = function() {
    $("#error").hide();
    $.ajax({
      url : "items",
      type: "GET",
      success:function(data, textStatus, jqXHR) {
        var itemsHTML = new EJS({url: 'partials/items.ejs'}).render({items: data.data});
        $("#items-container").html(itemsHTML)
      },
      error: function(jqXHR, textStatus, errorThrown) {
        showError("GET items: something went wrong");
      }
    });
  }

  $("#populate-items-button").click(getAndPopulateItems);

  $("form#add-form").submit(function(event) {
    $("#error").hide();
    event.preventDefault();
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    var formMethod = $(this).attr("method");
    $.ajax({
      url : formURL,
      type: "POST",
      data : postData,
      success:function(data, textStatus, jqXHR) {
        getAndPopulateItems();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        showError("POST item: something went wrong");
      }
    });
  })

  $("#items-container").delegate(".remove", "click", function(event) {
    $("#error").hide();
    var id = $(event.target).parent().data("id");
    $.ajax({
      url : "/items/" + id,
      type: "DELETE",
      success:function(data, textStatus, jqXHR) {
        getAndPopulateItems();
      },
      error: function(jqXHR, textStatus, errorThrown) {
        showError("DELETE item: something went wrong");
      }
    });

  })



})