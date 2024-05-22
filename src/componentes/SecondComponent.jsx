import React from 'react'

export const SecondComponent = () => {
    const books = [
"harry potter y la pierdra filosofal",
"harry potter y la camara secreta",
"harry potter y la prisionero",
"harry potter y el caliz de fuego",
"harry potter y la orden del feniz",
];

  return (
    <div>
       <h3>listado de libros</h3>

       <ul>
        {books.length >= 1 ? (
               books.map((books, index) => {
                 return <li key={index}>{books}</li>
             })
             ) : "No existen libros." }
            
</ul>

    </div>
  )
}

