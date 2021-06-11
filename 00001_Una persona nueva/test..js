describe("Se declaró la variable propiedadNombre", function() {
  it("", function() {
    assert(propiedadNombre);
  })
})

describe("", function() {
  it("Se declaró la variable propiedadEdad", function() {
    assert(propiedadEdad);
  })
})

describe("", function() {
  it("Se declaró la variable persona", function() {
    assert(persona);
  })
})

describe("", function() {
  it("persona tiene la propiedad nombre", function() {
    assert(persona.nombre);
  })
})

describe("", function() {
  it("persona tiene la propiedad edad", function() {
    assert(persona.edad);
  })
})

describe("", function() {
  it("la propiedad nombre de la persona referencia a propiedadNombre", function() {
    assert.equal(persona.nombre, propiedadNombre);
  })
})

describe("", function() {
  it("la propiedad edad de la persona referencia a propiedadEdad", function() {
    assert.equal(persona.edad, propiedadEdad);
  })
})