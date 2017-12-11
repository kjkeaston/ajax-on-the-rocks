$(document).ready(function () {
  console.log("js up and running!!");


$("#cocktail-by-name-btn").on("click", function() {
  let whatISearched = $("#cocktail-by-name").val();
  $.ajax({
        method: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + whatISearched,
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
        $(".drink-details").append(`<p>${x}. ${drinks.drinks[i][key]}</p>`);
      }
    }
    $(".drink-details").append(`<img src="${drinks.drinks[i].strDrinkThumb}"><h5>Instructions</h5><p class="instructions">${drinks.drinks[i].strInstructions}</p>`)
  }
}
});
//
//
//
//
// 
// 
// random cocktail code
$("#random-cocktail-btn").on("click", function() {
  $.ajax({
        method: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        success: onSuccess,
        error: function onError(drinks) {
          console.log("api broke, yo!");}
      });

  function onSuccess (drinks) {
    console.log(drinks);
    $(".drink-details").html(`<h3>${drinks.drinks[0].strDrink}</h3>`);
    console.log(`${drinks.drinks[0].strDrink}`);

    for (let x = 1; x < 16; x++) {
      let key = "strIngredient" + x;
      if (drinks.drinks[0][key]) {
        console.log(drinks.drinks[0][key]);
        $(".drink-details").append(`<p>${x}. ${drinks.drinks[0][key]}</p>`);
      }
    }
    $(".drink-details").append(`<img src="${drinks.drinks[0].strDrinkThumb}"><h5>Instructions</h5><p class="instructions">${drinks.drinks[0].strInstructions}</p>`)
  }
});









//*****
//closers for whole document
})