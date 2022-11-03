const { suma, resta, divisio, multiplicacio, arrowFunction, retornaPromesa, getEmployee, getSalary, employees, cridaPromesa, doble, Animal, crearAnimal } = require( '../app/funcions' );

describe( 'Comprovem que la funció de suma compleixi amb les expectatives', () => {
  test( 'should return 0 if no arguments are passed', () => {
    expect( suma() ).toBe( 0 );
  } );

  test( 'should return the number if only one argument is passed', () => {
    expect( suma( 1 ) ).toBe( 1 );
  } );

  test( 'should return the sum of all the arguments passed', () => {
    expect( suma( 1, 2, 3 ) ).toBe( 6 );
  } );
} );

describe( 'Comprovem que la funció de resta compleixi amb les expectatives', () => {
  test( 'should return 0 if no arguments are passed', () => {
    expect( resta() ).toBe( 0 );
  } );

  test( 'should return the number if only one argument is passed', () => {
    expect( resta( 1 ) ).toBe( 1 );
  } );

  test( 'should return the sum of all the arguments passed', () => {
    expect( resta( 1, 2, 3 ) ).toBe( -4 );
  } );
} );


describe( 'Comprovem que la funció de divisio compleixi amb les expectatives', () => {
  test( 'should return 0 if no arguments are passed', () => {
    expect( divisio() ).toBe( 0 );
  } );

  test( 'should return the number if only one argument is passed', () => {
    expect( divisio( 1 ) ).toBe( 1 );
  } );

  test( 'should return the sum of all the arguments passed', () => {
    expect( divisio( 1, 2, 3 ) ).toBe( 0.16666666666666666 );
  } );

  test( 'should return "No es pot dividir per 0" if one of the arguments is 0', () => {
    expect( divisio( 1, 0 ) ).toBe( 'No es pot dividir per 0' );
  } );
} );

describe( 'Comprovem que la funció de multiplicacio compleixi amb les expectatives', () => {
  test( 'should return 0 if no arguments are passed', () => {
    expect( multiplicacio() ).toBe( 0 );
  } );

  test( 'should return the number if only one argument is passed', () => {
    expect( multiplicacio( 1 ) ).toBe( 1 );
  } );

  test( 'should return the sum of all the arguments passed', () => {
    expect( multiplicacio( 4, 2 ) ).toBe( 8 );
  } );
} );

describe( 'comprovem si la funció retornaPromesa compleix amb les expectatives', () => {
  test( 'si li passem un número superior a 0.5, la promesa es resolt exitosament', () => {
    expect( retornaPromesa( 0.6 ) ).resolves.toBe( 'La promesa s\'ha resolt correctament amb el número 0.6' );
  } );
  test( 'si li passem un número inferior a 0.5, la promesa es resolt amb error', () => {
    expect( retornaPromesa( 0.4 ) ).rejects.toBe( 'La promesa no s\'ha pogut resoldre amb el número 0.4' );
  } );
} );


describe( 'comprovem si la funció arrowFunction compleix amb les expectatives', () => {
  test( 'si el paràmetre que li passem és un string amb la paraula Iván, la promesa es resoldre correctament amb una salutació', () => {
    expect( arrowFunction( 'Iván', missatge => missatge ) ).toEqual( 'Hola, Iván' );
  } );

  test( 'si el paràmetre que li passem no és la paraula Iván, la promesa hauria de fallar i dir-te que ets un intrús xD', () => {
    expect( arrowFunction( 'Pepe', missatge => missatge ) ).toEqual( 'No ets Iván. Eliminar intrús' );
  } );
} );

describe( 'comprovem si la funció getEmployee compleix amb les expectatives', () => {
  test( 'si li passem un objecte amb un id vàlid, la promesa es resoldre correctament amb un objecte amb les dades de l\'empleat', () => {
    expect( getEmployee( 1 ) ).resolves.toMatchObject( { id: 1, name: 'Linus Torvalds' } );
  } );
  test( 'si li passem un id que no existeix, la promesa es resoldre amb error', () => { expect( getEmployee( 5 ) ).rejects.toEqual( 'No s\'ha trobat l\'empleat' ); } );
} );


describe( 'Comprovem que la funció getSalary compleixi amb les expectatives', () => {
  test( 'ha de retornat un objecte amb el salari de l\'empleat', () => {
    const empleat = employees[ 0 ];
    expect( getSalary( empleat ) ).resolves.toMatchObject( {
      id: 1,
      salary: 4000,
    } );
  } );
  test( 'should reject the promise if the salary does not exist', () => {
    const empleat = employees[ 2 ];
    expect( getSalary( empleat ) ).rejects.toEqual(
      expect.stringContaining( "No s'ha trobat el salari" )
    );
  } );

  test( 'Ha de rebutjar la promesa si l\'empleat no existeix', () => {
    const empleat = employees[ 3 ];
    expect( getSalary( empleat ) ).rejects.toEqual(
      expect.stringContaining( "No s'ha trobat l'empleat" )
    );
  } );
} );

describe( 'Comprovem que la funció cridaPromesa compleixi amb les expectatives', () => {
  test( 'la promesa ha de ser rebutjada si el númpero passat com a paràmetre és inferior a 0.5', async () => {
    const message = await cridaPromesa( 0.4 );
    expect( message ).toEqual(
      expect.stringContaining( "La promesa no s'ha pogut resoldre" )
    );
  } );

  test( 'la promesa ha de passar amb èxit si el número passat com a paràmetre és 0.5 o més gran', async () => {
    const message = await cridaPromesa( 0.6 );
    expect( message ).toEqual(
      expect.stringContaining( "La promesa s'ha resolt correctament" )
    );
  } );
} );

describe( 'Comprovem que la funció doble compleixi amb les expectatives emprant Jest Fake Timers quan calgui', () => {
  test( 'ha de doblar el número passat per paràmetre', async () => {
    const num = await doble( 2 );
    expect( num ).toEqual( 4 );
  } );

  test( 'la promesa ha de ser trucada al cap de dos segons', async () => {
    jest.useFakeTimers();
    const doble = jest.fn();
    setTimeout( doble, 2000 );
    jest.advanceTimersByTime( 2000 );
    expect( doble ).toHaveBeenCalled();
  } );
} );

describe( 'Comprovem que la funció Persona compleixi amb les expectatives', () => {
  test( 'ha de trucar a la classe Persona i al seu mètode dirNom()', () => {
    const Persona = jest.fn();
    Persona.mockImplementation( () => {
      return {
        dirNom: jest.fn(),
      };
    } );
    const persona = new Persona();
    persona.dirNom();
    expect( Persona ).toHaveBeenCalled();
    expect( persona.dirNom ).toHaveBeenCalled();
  } );
} );

describe( 'Comprovem que la classe Animal compleixi amb les expectatives', () => {
  test( 'ha de llançar un error si intentem instanciar la clase', () => {
    expect( () => {
      new Animal();
    } ).toThrow();
  } );

  test( 'la funció crearAnimal() ha de crear instàncies de la classe Animal si es tracta d\'un Gos/Gat/Cavall', () => {
    const animal = crearAnimal( 'Gat' );
    expect( animal ).toBeInstanceOf( Animal );
  } );
} );