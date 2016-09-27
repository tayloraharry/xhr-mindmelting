function showCarnivores(carnivores) {
    document.getElementById("carnivores").innerHTML += "<h2>Carnivores</h2>";
    for(var i = 0; i < carnivores.carnivores.length; i++) {
        document.getElementById("carnivores").innerHTML += `<div>${carnivores.carnivores[i].animal} </div>`;
    }
}

function showHerbivores(herbivores) {
    document.getElementById("herbivores").innerHTML += "<h2>Herbivores</h2>";
    for(var i = 0; i < herbivores.herbivores.length; i++) {
        document.getElementById("herbivores").innerHTML += `<div>${herbivores.herbivores[i].animal} </div>`;
    }
}

Predator.loadHerbivores(showHerbivores);
Predator.loadCarnivores(showCarnivores);