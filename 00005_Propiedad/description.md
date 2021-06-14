Necesitamos definir una función que nos ayude a determinar si un objeto cuenta con una propiedad.
Para lograrlo vamos a definir la función `tienePropiedad` que reciba un perfil y una propiedad por parámetro y retorne si dicho perfil contiene esa propiedad. Por ejemplo:

```js
ム let perfil = {
  nombreDeCuenta: "ada_lovelace",
  contrasenia: "1234567890!",
};

ム let perfilConEmail = {
  nombreDeCuenta: "ellie_arroway",
  contrasenia: "vegaeterna",
  email: "ellie@argos.org"
};

ム tienePropiedad(perfil, "email");
false

ム tienePropiedad(perfil, "contrasenia");
true

ム tienePropiedad(perfil2, "email"));
true

ム tienePropiedad(perfil2, "id");
false
```
> Definí la función `tienePropiedad`.