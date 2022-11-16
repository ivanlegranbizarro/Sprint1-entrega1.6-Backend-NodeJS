const { suma, resta, multiplicacio, divisio } = require( '../app/funcions' );

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
  test( 'should fail if the arguments are not numbers', () => {
    expect( suma( 1, '2', 3 ) ).toBe( 'Els paràmetres han de ser números' );
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
  test( 'should fail if the arguments are not numbers', () => {
    expect( resta( 1, 'garrafa', 3 ) ).toBeNaN();
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
