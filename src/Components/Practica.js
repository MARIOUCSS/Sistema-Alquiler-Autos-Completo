// const personas = [
//   {
//     id: 1,
//     nombre: "María García",
//     edad: 28,
//     ciudadNacimiento: "Madrid",
//     profesion: "Ingeniera",
//   },
//   {
//     id: 2,
//     nombre: "Carlos López",
//     edad: 35,
//     ciudadNacimiento: "Barcelona",
//     profesion: "Diseñador",
//   },
//   {
//     id: 3,
//     nombre: "Ana Rodríguez",
//     edad: 22,
//     ciudadNacimiento: "Madrid",
//     profesion: "Estudiante",
//   },
//   {
//     id: 4,
//     nombre: "Pedro Martínez",
//     edad: 42,
//     ciudadNacimiento: "Valencia",
//     profesion: "Médico",
//   },
//   {
//     id: 5,
//     nombre: "Laura Sánchez",
//     edad: 31,
//     ciudadNacimiento: "Sevilla",
//     profesion: "Abogada",
//   },
//   {
//     id: 6,
//     nombre: "Javier Ruiz",
//     edad: 26,
//     ciudadNacimiento: "Barcelona",
//     profesion: "Programador",
//   },
//   {
//     id: 7,
//     nombre: "Isabel Torres",
//     edad: 29,
//     ciudadNacimiento: "Madrid",
//     profesion: "Arquitecta",
//   },
//   {
//     id: 8,
//     nombre: "Miguel Díaz",
//     edad: 38,
//     ciudadNacimiento: "Valencia",
//     profesion: "Profesor",
//   },
// ];
// const ciudades = [
//   { id: 1, nombre: "Madrid", pais: "España", poblacion: 3200000 },
//   { id: 2, nombre: "Barcelona", pais: "España", poblacion: 1600000 },
//   { id: 3, nombre: "Valencia", pais: "España", poblacion: 800000 },
//   { id: 4, nombre: "Sevilla", pais: "España", poblacion: 700000 },
//   { id: 5, nombre: "Bogotá", pais: "Colombia", poblacion: 8000000 },
//   { id: 6, nombre: "Ciudad de México", pais: "México", poblacion: 9000000 },
// ];
//contar personas por ciudad
// const personasciudad = personas.reduce((ac, i) => {
//   const ciudad = i.ciudadNacimiento;
//   if (ac[ciudad]) {
//     ac[ciudad] += 1;
//   } else {
//     ac[ciudad] = 1;
//   }
//   return ac;
// }, {});
// console.log(personasciudad);
// // Combinar información de personas y ciudades
// const combinarpersonasci = personas.map((x) => {
//   const ciudad = ciudades.find((y) => y.nombre === x.ciudadNacimiento);
//   return {
//     ...x,
//     ciudades: ciudad || null,
//   };
// });
// console.log(combinarpersonasci);
// //Personas mayores de 30 años por ciudad
// const personasmayor30 = personas
//   .filter((x) => x.edad > 30)
//   .reduce((ac, i) => {
//     const ciudad = i.ciudadNacimiento;
//     if (!ac[ciudad]) {
//       ac[ciudad] = [];
//       ac[ciudad].push(i);
//     }
//     return ac;
//   }, {});
// console.log(personasmayor30);
// const mayores30PorCiudad = personas
//   .filter((persona) => persona.edad > 30)
//   .reduce((resultado, persona) => {
//     const ciudad = persona.ciudadNacimiento;
//     if (!resultado[ciudad]) resultado[ciudad] = [];
//     resultado[ciudad].push(persona);
//     return resultado;
//   }, {});
// console.log("Mayores de 30 por ciudad:", mayores30PorCiudad);

export const priceRange = [
  "0 to 20000",
  "20000 to 30000",
  "30000 to 50000",
  "50000 to 99000",
];
// const Pruebaprecio = (priceRange) => {
//   const [min, max] = priceRange.split(" to ").map(Number);
//   return { min, max };
// };
const Pruebaprecio = (pricerange) => {
  const [min, max] = pricerange.split(" to ").map(Number);
  return { min, max };
};
console.log(Pruebaprecio(priceRange[0]));
