const app = "I don't do much."

function kittens() {
  var kittens = ["Milo", "Otis", "Garfield"]
  return kittens;
}

function destructivelyAppendKitten(name) {
  var name = "Ralph";
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  var name = "Bob";
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
}

function appendKitten(name) {
  var name = "Broom";
  const moreCats = [...kittens, name];
  return moreCats;
}
