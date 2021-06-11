describe("", function() {
  it("Si el perfil tiene un email, y hacemos tienePropiedad(perfil, 'email') retorna true", function() {
    let perfil = {
      nombreDeCuenta: "ada_lovelace",
      contrasenia: "1234567890!",
      email: 'ada_lovelace@gmail.com'
    };

    assert.equal(tienePropiedad(perfil, 'email'), true)
  })
})

describe("", function() {
  it("Si el perfil tiene una contrasenia, y hacemos tienePropiedad(perfil, 'contrasenia') retorna true", function() {
    let perfil = {
      nombreDeCuenta: "ada_lovelace",
      contrasenia: "1234567890!",
      email: 'ada_lovelace@gmail.com'
    };

    assert.equal(tienePropiedad(perfil, 'contrasenia'), true)
  })
})

describe("", function() {
  it("Si el perfil no tiene un id, y hacemos tienePropiedad(perfil, id) retorna false", function() {
    let perfil = {
      nombreDeCuenta: "ada_lovelace",
      contrasenia: "1234567890!",
      email: 'ada_lovelace@gmail.com'
    };

    assert.equal(tienePropiedad(perfil, 'id'), false)
  })
})

describe("", function() {
  it("Si el perfil no tiene un número de telefono, y hacemos tienePropiedad(perfil, 'telefono') retorna false", function() {
    let perfil = {
      nombreDeCuenta: "ada_lovelace",
      contrasenia: "1234567890!",
      email: 'ada_lovelace@gmail.com'
    };

    assert.equal(tienePropiedad(perfil, 'telefono'), false)
  })
})