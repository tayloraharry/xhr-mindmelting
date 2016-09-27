var Predator = (function () {
  var carnivoresArray = [];
  var herbivoresArray = [];

  return {
    loadCarnivores: function (callBack) {
        var loader = new XMLHttpRequest();
        loader.addEventListener("error", function() {
            console.log("There was an error with the carnivore file.");
        });
        loader.open("GET", "carnivores.json")
        loader.send();
        loader.addEventListener("load", function () {
        carnivoresArray = JSON.parse(this.responseText);
        callBack(carnivoresArray);
      });
    },loadHerbivores: function (callBack) {
        var loader = new XMLHttpRequest();
        loader.addEventListener("error", function() {
            console.log("There was an error with the herbivore file.");
        });
        loader.open("GET", "herbivores.json")
        loader.send();
        loader.addEventListener("load", function () {
        herbivoresArray = JSON.parse(this.responseText);
        callBack(herbivoresArray);
      });
    }
  }
})();