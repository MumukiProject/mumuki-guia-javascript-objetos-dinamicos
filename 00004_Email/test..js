describe("", function() {
  it("Si el perfil tiene un email, la función tieneEmail retorna El usuario tiene la propiedad email", function() {
    let perfil = {
      nombreDeCuenta: "ada_lovelace",
      contrasenia: "1234567890!",
      email: 'ada_lovelace@gmail.com'
    };

    assert.equal(tieneEmail(perfil), 'El usuario tiene la propiedad email')
  })
})

describe("", function() {
  it("Si el perfil no tiene un email, la función tieneEmail retorna El usuario no tiene la propiedad email", function() {
    let perfil = {
      nombreDeCuenta: "ada_lovelace",
      contrasenia: "1234567890!",
    };

    assert.equal(tieneEmail(perfil), 'El usuario no tiene la propiedad email')
  })
})