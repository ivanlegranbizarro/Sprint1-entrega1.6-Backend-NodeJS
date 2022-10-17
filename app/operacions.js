function suma() {
  let resultat = 0;
  for (let i = 0; i < arguments.length; i++) {
    resultat += arguments[i];
  }
  return resultat;
}

function resta() {
  if (arguments.length === 0) {
    return 0;
  }
  if (arguments.length === 1) {
    return arguments[0];
  }
  let resultat = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    resultat -= arguments[i];
  }
  return resultat;
}

function divisio() {
  if (arguments.length === 0) {
    return 0;
  }
  if (arguments.length === 1) {
    return arguments[0];
  }
  let resultat = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] === 0) {
      return 'No es pot dividir per 0';
    }
    resultat /= arguments[i];
  }
  return resultat;
}

function multiplicacio() {
  if (arguments.length === 0) {
    return 0;
  }
  if (arguments.length === 1) {
    return arguments[0];
  }
  let resultat = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    resultat *= arguments[i];
  }
  return resultat;
}

module.exports = {
  suma,
  resta,
  divisio,
  multiplicacio,
};
