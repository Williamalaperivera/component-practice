// importar modulos de react o dependencias
// funcion del componente
// export me lo da la funcion tipo flecha, export with arrow
import React from 'react'
import { json } from 'react-router-dom';

export const Mycomponent = () => {
    const name = "William";
    const repository = "https://www.udemy.com/course/javascript-introduccion-a-la-programacion/learn/lecture/15871034#overview"
const student = {
name: " William",
lastName: " Alape",
mobile: " 3137321447",
}  
  console.log(student);
    return (
    <div>
        <hr />
    <p>Este es mi primer componente</p>
    <h2>Temas de react</h2>
    <ul>
    <li>Componentes</li>
    <li>Eventos</li>
    <li>Estados</li>
    <li>Comunicación</li>
    </ul>
    <hr />
    <h2>Datos del alumno</h2>
    <p>Nombre {name}</p>
    <p>Repositorio {repository}</p>
    <hr />
    <h2>datos del estudiante</h2>
    <p>nombre:{ student.name }</p>
    <p>Apellido:{ student.lastName }</p>
    <p>Telefono:{ student.mobile }</p>
    </div>
  )
}
