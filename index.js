const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (name) {
    cats.push('Ralph');
}

function destructivelyPrependCat (name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

function appendCat(name) {
    cats
}

function appendCat(name) {
    return [...cats, "Broom"]
}

function prependCat(name) {
    return ["Arnold" ,...cats ]
}

function removeLastCat () {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat(name) {
 return cats.slice(1);
}