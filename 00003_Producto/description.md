Queremos visualizar fácilmente las propiedades y valores de nuestros productos con el siguiente formato: `"producto[PROPIEDAD] -> VALOR"`. Para ello definiremos una función que se comporte de la siguiente forma: 

```javascript
ム let producto = {
  id: "ADA-020",
  title: "Gubergren sed est amet voluptua",
  price: 123.75,
  picture:
    "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
  condition: "nuevo",
  free_shipping: true,
  location: "Capital Federal",
};

ム obtenerPropiedadesYValores(producto)
`
producto['id'] -> ADA-020
producto['title'] -> Gubergren sed est amet voluptua
producto['price'] -> 123.75
producto['picture'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
producto['condition'] -> nuevo
producto['free_shipping'] -> true
producto['location'] -> Capital Federal
`
```

> Definí la función `obtenerPropiedadesYValores`.