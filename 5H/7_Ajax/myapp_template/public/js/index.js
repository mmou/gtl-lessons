$(document).ready(function() {

  var showError = function(error) {
    $("#error").html(error).show();
  }

  var getAndPopulateItems = function() {
    $("#error").hide();

    // TODO: make ajax call to GET items

  }

  $("#populate-items-button").click(getAndPopulateItems);

  $("form#add-form").submit(function(event) {
    $("#error").hide();
    event.preventDefault();
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    var formMethod = $(this).attr("method");

    // TODO: make ajax call to POST item

  })

  $("#items-container").delegate(".remove", "click", function(event) {
    $("#error").hide();
    var id = $(event.target).parent().data("id");

    // TODO: make ajax call to DELETE item
    
  })



})