$(document).ready(function () {
  console.log("js up and running!!");


$("button").on("click", function() {
  let whatISearched = $("input").val();
  $.ajax({
        method: "GET",
        url: "http://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + whatISearched,
        success: onSuccess,
        error: function onError(drinks) {
          console.log("api broke, yo!");}
      });
    function onSuccess (drinks) {
        console.log(drinks);
      }
    });














//*****
//closers for whole document
})