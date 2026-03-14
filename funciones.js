//las high order functions son funciones que pueden recibir una función como parámetro o devolver una en el resultado

//El arreglo que se utiliza con todas las demás funciones y tiene objetos dentro
const estudiantes = [
  { nombre: "Ana", edad: 20, promedio: 9.2, activo: true },
  { nombre: "Luis", edad: 22, promedio: 7.5, activo: false },
  { nombre: "Carlos", edad: 19, promedio: 8.8, activo: true },
  { nombre: "María", edad: 21, promedio: 9.5, activo: true },
  { nombre: "Elena", edad: 23, promedio: 6.9, activo: false }
];

//For each para mostrar el nombre y el promedio de cada uno de los objetos (Estudiantes) en mi arreglo
console.log('------For each------');

estudiantes.forEach(estudiante => {
  console.log(estudiante.nombre + " tiene un promedio de: " + estudiante.promedio);
});

//Con el map se hace como un nuevo arreglo tranformando los elementos y agregando un atributo nuevo en este caso
console.log('\n-------Map------');
const conEstado = estudiantes.map(
    estudiante => 
    {
        return {
            ...estudiante, aprobado: estudiante.promedio >= 7
        }
    }
);

console.log(conEstado);

//Filter es para crear un filtro o una selección para que muestre los objetos en mi arreglo que cumplen con la condición que elija
console.log('\n-------Filter------');
const aprobados = estudiantes.filter(estudiante => estudiante.promedio >= 7);

console.log(aprobados);

//Some es como filter pero en lugar de mostrarme los objetos de mi arreglo que cumplen mi condición me dice con un boleano si al menos uno la cumple o no
console.log('\n-------Some------');
const reprobados = estudiantes.some(estudiante => estudiante.promedio < 7);

console.log(reprobados);

//Sort me permite ordenar mi arreglo como yo le especifique en mi criterio, en el ejercicio lo ordené para que me muestre mi arreglo de acuerdo al promedio de forma descendente
console.log('\n-------Sort------');
const ordenados = [...estudiantes].sort((a, b) => b.promedio - a.promedio);

console.log(ordenados);