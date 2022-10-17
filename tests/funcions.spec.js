const {
  retornaPromesa,
  arrowFunction,
  getEmployee,
  getSalary,
  employees,
  cridaPromesa,
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
  test('should return a message depending on the parameter passed', () => {
    expect(cridaPromesa(0.6)).resolves.toEqual(
      expect.stringContaining("La promesa s'ha resolt correctament")
    );
  });

  test('should return a message depending on the parameter passed', async () => {
    const message = await cridaPromesa(0.4);
    expect(message).toEqual(
      expect.stringContaining("La promesa no s'ha pogut resoldre")
    );
  });
});
