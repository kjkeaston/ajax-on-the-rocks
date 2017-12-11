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
    console.log(`${drinks.drinks[i].strDrink}`);

    for (let x = 1; x < 16; x++) {
      let key = "strIngredient" + x;
      if (drinks.drinks[i][key]) {
        console.log(drinks.drinks[i][key]);
        $(".drink-details").append(`<p>${x}. ${drinks.drinks[i][key]}<p>`);
      }
    }
  }
}


});
// drinks.drinks["0"].strIngredient1

// url for searching by ingredient- http://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka










//*****
//closers for whole document
})