Contamos con perfiles que tienen `nombreDeCuenta` y `contrasenia` y pueden tener o no el campo `email` :envelope:. Por ejemplo:

```js
let perfilSinEmail = {
  nombreDeCuenta: "ada_lovelace",
  contrasenia: "1234567890!"
};

let perfilConEmail = {
  nombreDeCuenta: "ellie_arroway",
  contrasenia: "vegaeterna",
  email: "ellie@argos.org"
};
```

A partir de un perfil queremos saber si tiene o no email:

```javascript
ム tieneEmail(perfilSinEmail)
'El usuario no tiene la propiedad email'

ム tieneEmail(perfilConEmail)
'El usuario tiene la propiedad email'
```

> Definí la función `tieneEmail`.