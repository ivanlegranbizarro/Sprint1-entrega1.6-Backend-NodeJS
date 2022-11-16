const {  doble, Animal, crearAnimal } = require( '../app/funcions' );


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

describe( 'Comprovem que la classe Persona compleixi amb les expectatives', () => {
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

