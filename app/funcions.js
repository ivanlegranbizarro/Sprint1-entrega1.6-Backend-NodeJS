/*
Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.
*/

function retornaPromesa(num) {
  return new Promise((resolve, reject) => {
    if (num > 0.5) {
      resolve("La promesa s'ha resolt correctament amb el número " + num);
    } else {
      reject("La promesa no s'ha pogut resoldre amb el número " + num);
    }
  });
}

/*
Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut
*/

const arrowFunction = (param, callback) => {
  if (param == 'Iván') {
    return callback('Hola, Iván');
  } else {
    return callback('Hola, desconegut');
  }
};

/*
Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.
*/

let employees = [
  {
    id: 1,
    name: 'Linux Torvalds',
  },
  {
    id: 2,
    name: 'Bill Gates',
  },
  {
    id: 3,
    name: 'Jeff Bezos',
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
];

const getEmployee = (id) => {
  return new Promise((resolve, reject) => {
    let employee = employees.find((e) => e.id === id);
    if (employee) {
      resolve(employee);
    } else {
      reject("No s'ha trobat l'empleat");
    }
  });
};

/*
  Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.
  */

const getSalary = (empleat) => {
  return new Promise((resolve, reject) => {
    if (empleat) {
      let salary = salaries.find((s) => s.id === empleat.id);
      if (salary) {
        resolve(salary);
      } else {
        reject("No s'ha trobat el salari");
      }
    } else {
      reject("No s'ha trobat l'empleat");
    }
  });
};

/*
Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï la seva funció resolve() després de 2 segons de la seva invocació.
*/

function retornaPromesaDosSegons(num) {
  return new Promise((resolve, reject) => {
    if (num > 0.5) {
      setTimeout(() => {
        resolve("La promesa s'ha resolt correctament amb el número " + num);
      }, 2000);
    } else {
      reject("La promesa no s'ha pogut resoldre amb el número " + num);
    }
  });
}

async function cridaPromesa(num) {
  try {
    let resultat = await retornaPromesaDosSegons(num);
    return resultat;
  } catch (error) {
    return error;
  }
}

/*
Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
*/

function doble(num) {
  return new Promise((resolve, reject) => {
    if (typeof num === 'number') {
      resolve(num * 2);
    } else {
      reject('El paràmetre no és un número');
    }
  });
}


module.exports = {
  retornaPromesa,
  arrowFunction,
  getEmployee,
  getSalary,
  employees,
  cridaPromesa,
  doble,
};
