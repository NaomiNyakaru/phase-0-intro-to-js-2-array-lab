// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];
beforeEach(function () {
    cats.length = 0;

    cats.push('Milo', 'Otis', 'Garfield');
  });


function destructivelyAppendCat(){
    cats.push("Ralph");
}
destructivelyAppendCat();

function destructivelyPrependCat(){
    cats.unshift("Bob")
}
destructivelyPrependCat();

function destructivelyRemoveLastCat(){
    cats.pop();
}
destructivelyRemoveLastCat()

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const newCats = [...cats, "Broom"];
   return newCats
}
appendCat()

function prependCat(){
    const newCat = ["Arnold", ...cats]
    return newCat
}

function removeLastCat(){
    const catsRemovedLast= cats.slice(0,-1)
    return catsRemovedLast;

}
removeLastCat()

function removeFirstCat(){
    const catsRemovedfirst = cats.slice(1)
    return catsRemovedfirst;
}
removeFirstCat()