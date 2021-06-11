Necesitamos definir una función que nos ayude a determinar si un objeto cuenta con una propiedad.
Para lograrlo vamos a definir la función `tienePropiedad` que reciba un objeto y una propiedad por parámetro y retorne si dicho objeto contiene esa propiedad.

```js

let perfil = {
  nombreDeCuenta: "ada_lovelace",
  contrasenia: "1234567890!",
};

let perfil2 = {
  nombreDeCuenta: "grace_hopper",
  contrasenia: "1234567890!",
  email: "grace@hopper.com",
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