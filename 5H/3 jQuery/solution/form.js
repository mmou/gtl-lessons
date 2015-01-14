$(document).ready(function() {

var makeError = function(el) {
  el
    .css("border", "solid rgb(181, 19, 19)")
    .css("background-color", "rgba(181, 19, 19, 0.8)")
};

var clearError = function(el) {
  el
    .css("border", "solid rgba(255, 255, 255, 0.1)")
    .css("background-color", "rgb(255, 255, 255)")      
};

var checkError = function(el, condition) {
  if (condition) {
    makeError(el);
    $("#submit").attr("disabled", true);
  } else {
    clearError(el);          
  }
};

var checkReadySubmit = function() {
  if (!(isWrongLength($("#username")) || isNonNumber($("#age")) || isNonEmail($("#email")))) {
    $("#submit").removeAttr("disabled");
  } else {
    $("#submit").attr("disabled", true);    
  }
}

var isWrongLength = function(el) {
  var str = el.val();
  return !(str.length >= 4 && str.length <= 20)
}

var isNonNumber = function(el) {
  var val = parseInt(el.val());
  return !(val && val >= 0);
}

var isNonEmail = function(el) {
  var str = el.val();
  return !((str.indexOf("@") >= 0) && str.indexOf(".") > str.indexOf("@")); 
}

$("#username")
  .keyup(function() {
    clearError($("#username"));
    checkReadySubmit();    
  })
  .focusout(function() {
    checkError($("#username"), isWrongLength($("#username")));
  });

$("#age")
  .keyup(function() {
    checkError($("#age"), isNonNumber($("#age")));
    checkReadySubmit();    
  })
  .focusout(function() {
    checkError($("#age"), isNonNumber($("#age")));
  });

$("#email")
  .keyup(function() {
    clearError($("#email"));
    checkReadySubmit();
  })
  .focusout(function() {
    checkError($("#email"), isNonEmail($("#email")));
  });        
})
