const {
  retornaPromesa,
  arrowFunction,
  getEmployee,
  getSalary,
  employees,
  cridaPromesa,
  doble,
  Animal,
  crearAnimal,
} = require('../app/funcions');

// retornaPromesa
describe('Comprovem que la funció retornaPromesa compleixi amb les expectatives', () => {
  test('should resolve or reject the promise', () => {
    expect(retornaPromesa(0.6)).resolves.toEqual(
      expect.stringContaining("La promesa s'ha resolt correctament")
    );
  });
  test('should resolve or reject the promise', () => {
    expect(retornaPromesa(0.4)).rejects.toEqual(
      expect.stringContaining("La promesa no s'ha pogut resoldre")
    );
  });
});

// arrowFunction
describe('Comprovem que la funció arrowFunction compleixi amb les expectatives', () => {
  test('should return a message depending on the parameter passed', () => {
    expect(arrowFunction('Iván', (message) => message)).toEqual(
      expect.stringContaining('Hola, Iván')
    );
  });

  test('should return a message depending on the parameter passed', () => {
    expect(arrowFunction('Pepe', (message) => message)).toEqual(
      expect.stringContaining('Hola, desconegut')
    );
  });
});

// getEmployee
describe('Comprovem que la funció getEmployee compleixi amb les expectatives', () => {
  test('should return an object with the employee data', () => {
    expect(getEmployee(1)).resolves.toMatchObject({
      id: 1,
      name: 'Linux Torvalds',
    });
  });

  test('should reject the promise if the employee does not exist', () => {
    expect(getEmployee(4)).rejects.toEqual(
      expect.stringContaining("No s'ha trobat l'empleat")
    );
  });
});

// getSalary
describe('Comprovem que la funció getSalary compleixi amb les expectatives', () => {
  test('should return an object with the salary data', () => {
    const empleat = employees[0];
    expect(getSalary(empleat)).resolves.toMatchObject({
      id: 1,
      salary: 4000,
    });
  });

  test('should reject the promise if the salary does not exist', () => {
    const empleat = employees[2];
    expect(getSalary(empleat)).rejects.toEqual(
      expect.stringContaining("No s'ha trobat el salari")
    );
  });

  test('should reject the promise if the employee does not exist', () => {
    const empleat = employees[3];
    expect(getSalary(empleat)).rejects.toEqual(
      expect.stringContaining("No s'ha trobat l'empleat")
    );
  });
});

// cridaPromesa

describe('Comprovem que la funció cridaPromesa compleixi amb les expectatives', () => {
  test('should return a message depending on the parameter passed', async () => {
    const message = await cridaPromesa(0.4);
    expect(message).toEqual(
      expect.stringContaining("La promesa no s'ha pogut resoldre")
    );
  });

  test('should return a message depending on the parameter passed', async () => {
    const message = await cridaPromesa(0.6);
    expect(message).toEqual(
      expect.stringContaining("La promesa s'ha resolt correctament")
    );
  });
});

/*
Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.
*/
describe('Comprovem que la funció doble compleixi amb les expectatives emprant Jest Fake Timers quan calgui', () => {
  test('should return the double of the number passed', async () => {
    const num = await doble(2);
    expect(num).toEqual(4);
  });

  test('should being called after 2 seconds', async () => {
    jest.useFakeTimers();
    const doble = jest.fn();
    setTimeout(doble, 2000);
    jest.advanceTimersByTime(2000);
    expect(doble).toHaveBeenCalled();
  });
});

/*
  Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.
  */
describe('Comprovem que la funció Persona compleixi amb les expectatives', () => {
  test('should call the constructor and the method', () => {
    const Persona = jest.fn();
    Persona.mockImplementation(() => {
      return {
        dirNom: jest.fn(),
      };
    });
    const persona = new Persona();
    persona.dirNom();
    expect(Persona).toHaveBeenCalled();
    expect(persona.dirNom).toHaveBeenCalled();
  });
});

/*
Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.
*/
describe('Comprovem que la classe Animal compleixi amb les expectatives', () => {
  test('should throw an error if the class is instantiated', () => {
    expect(() => {
      new Animal();
    }).toThrow();
  });

  test('the function crearAnimal should create a new instance of Animal if animal if the name of animal is: Gos, Gat or Cavall', () => {
    const animal = crearAnimal('Gat');
    expect(animal).toBeInstanceOf(Animal);
  });
});
