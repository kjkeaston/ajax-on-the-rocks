$(document).ready(function () {
  console.log("js up and running!!");

// INDENTATION is off throughout this whole file.
// Everything between curly braces should be indented.
// $("#cocktail-by-name-btn").on("click".. is inside document.ready's callback, 
// so it needs to be indented in a level 
$("#cocktail-by-name-btn").on("click", function() {
  let resultClear = $(".drink-details");
  resultClear.html("");
  
  let whatISearched = $("#cocktail-by-name").val();
  $.ajax({
    // indentation is off here as well
        method: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + whatISearched,
        success: onSuccess,
        error: function onError(drinks) {
          console.log("api broke for search, yo!");}
      });

  function onSuccess (drinks) {
    // indentation
    // BUG: What happens if you search for 'maitai'?
    // Your response is { drinks: { drinks: null } };
    // You cannot get `.length` of null on the next line.

  for (let i = 0; i < drinks.drinks.length; i++) {
    $(".drink-details").append(`<h3>${drinks.drinks[i].strDrink}</h3>`);

    for (let x = 1; x < 16; x++) {
      let key = "strIngredient" + x;
      let measure = "strMeasure" + x;
      if (drinks.drinks[i][key]) {
        $(".drink-details").append(`<p>${x}. ${drinks.drinks[i][key]} - ${drinks.drinks[i][measure]}</p>`);
      }
    }
    $(".drink-details").append(`<img src="${drinks.drinks[i].strDrinkThumb}"><h5>Instructions</h5><p class="instructions">${drinks.drinks[i].strInstructions}</p>`)
  }
}
});

$("#random-cocktail-btn").on("click", function() {
  $.ajax({
    // indentation
        method: "GET",
        url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        success: onSuccess,
        error: function onError(drinks) {
          console.log("api broke for random cocktail, yo!");}
      });

  function onSuccess (drinks) {
    $(".drink-details").html(`<h3>${drinks.drinks[0].strDrink}</h3>`);

    for (let x = 1; x < 16; x++) {
      let key = "strIngredient" + x;
      let measure = "strMeasure" + x;
      if (drinks.drinks[0][key]) {
        $(".drink-details").append(`<p>${x}. ${drinks.drinks[0][key]} - ${drinks.drinks[0][measure]}</p>`);
      }
    }
    $(".drink-details").append(`<img src="${drinks.drinks[0].strDrinkThumb}"><h5>Instructions</h5><p class="instructions">${drinks.drinks[0].strInstructions}</p>`)
  }
});

})