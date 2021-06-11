describe("", function() {
  it("Si el perfil tiene un email, la función tieneEmail retorna true", function() {
    let perfil = {
      nombreDeCuenta: "ada_lovelace",
      contrasenia: "1234567890!",
      email: 'ada_lovelace@gmail.com'
    };

    assert(tieneEmail(perfil))
  })
})

describe("", function() {
  it("Si el perfil no tiene un email, la función tieneEmail retorna false", function() {
    let perfil = {
      nombreDeCuenta: "ada_lovelace",
      contrasenia: "1234567890!",
    };

    assert.equal(tieneEmail(perfil), false)
  })
})