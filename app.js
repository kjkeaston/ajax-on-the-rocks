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
  for (let i = 0; i < drinks.drinks.length; i++) {
    $(".drink-details").append(`<h3>${drinks.drinks[i].strDrink}</h3>`);
  }
}
  

});














//*****
//closers for whole document
})