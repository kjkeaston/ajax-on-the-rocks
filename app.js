$(document).ready(function () {
  console.log("js up and running!!");

$("#cocktail-by-name-btn").on("click", function() {
  // to clear my section each time so I can keep searching w/o refresh
  let resultClear = $(".drink-details");
  resultClear.html("");

  let whatISearched = $("#cocktail-by-name").val();
  $.ajax({
    method: "GET",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + whatISearched,
    success: onSuccess,
    error: function onError(drinks) {
      console.log("cocktail search request error");
    }
  });

  function onSuccess (drinks) {
    //leaving console for future development
    console.log(drinks);
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
    method: "GET",
    url: "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    success: onSuccess,
    error: function onError(drinks) {
      console.log("Random cocktail request error");
    }
  });

  function onSuccess (drinks) {
    console.log(drinks);
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


});