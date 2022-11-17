const { arrowFunction, retornaPromesa, getEmployee, getSalary, employees, cridaPromesa } = require( '../app/funcions' );

describe( 'comprovem si la funció retornaPromesa compleix amb les expectatives', () => {
  test( 'si li passem un número superior a 0.5, la promesa es resolt exitosament', () => {
    expect( retornaPromesa( 0.6 ) ).resolves.toBe( 'La promesa s\'ha resolt correctament amb el número 0.6' );
  } );
  test( 'si li passem un número inferior a 0.5, la promesa es resolt amb error', () => {
    expect( retornaPromesa( 0.4 ) ).rejects.toBe( 'La promesa no s\'ha pogut resoldre amb el número 0.4' );
  } );
  test( 'si no li passem cap paràmetre, la promesa es resolt amb error', () => {
    expect( retornaPromesa() ).rejects.toBe( 'La promesa no s\'ha pogut resoldre amb el número undefined' );
  } );
} );


describe( 'comprovem si la funció arrowFunction compleix amb les expectatives', () => {
  test( 'si el paràmetre que li passem és un string amb la paraula Iván, la promesa es resoldre correctament amb una salutació', () => {
    expect( arrowFunction( 'Iván', missatge => missatge ) ).toEqual( 'Hola, Iván' );
  } );

  test( 'si el paràmetre que li passem no és la paraula Iván, la promesa hauria de fallar i dir-te que ets un intrús xD', () => {
    expect( arrowFunction( 'Pepe', missatge => missatge ) ).toEqual( 'No ets Iván. Eliminar intrús' );
  } );
  test( 'si no li passem cap paràmetre, la promesa hauria de fallar i indicar-te que no has passat cap paràmetre', () => {
    expect( arrowFunction( missatge => missatge ) ).toEqual( 'No has passat cap paràmetre' );
  } );
} );

describe( 'comprovem si la funció getEmployee compleix amb les expectatives', () => {
  test( 'si li passem un objecte amb un id vàlid, la promesa es resoldre correctament amb un objecte amb les dades de l\'empleat', () => {
    expect( getEmployee( 1 ) ).resolves.toMatchObject( { id: 1, name: 'Linus Torvalds' } );
  } );
  test( 'si li passem un id que no existeix, la promesa es resoldre amb error', () => { expect( getEmployee( 5 ) ).rejects.toEqual( 'No s\'ha trobat l\'empleat' ); } );
  test( 'si no li passem cap paràmetre, la promesa es resoldre amb error', () => { expect( getEmployee() ).rejects.toEqual( 'No has passat cap paràmetre' ); } );

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
  // test( 'Ha de rebutjar la promesa si no li passem cap paràmetre', () => {
  //   expect( getSalary() ).rejects.toEqual(
  //     expect.stringContaining( "No has passat cap paràmetre" )
  //   );
  // } );
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
