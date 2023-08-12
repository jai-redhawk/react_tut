import React from 'react'
import ReactDOM from 'react-dom/client'
import Book from './Book'
import './App.css';
import { data } from './Booklist';


// JSX Rules
// return single element
// div/ section/ article or Fragment
// use camelCase for html attribute eg. 'onClick' instead of 'onclick'
// className instead of class 
// close every element 
// formatting

// Using jsx component
// function Greeting(){
//   return(
//     <div>
//       <h1>hello world</h1>
//     </div>
//   )
// }

// Creating a arrow function instead of Component
// const Greeting= () => {
//   return React.createElement(
//     'div', {}, React.createElement('h1', {}, 'hello world')
//   );
// };

// props destructuring
// const Book = ({img, titile, author}) =>
// {
//   const {img, title, author}= props;
//   return(
//     <article className='book'></article>
//     <img src="{img}" alt="" />
//     <h1>{title}</h1>
//     <h4>{author}</h4>
//     </article>
//   );
// };
// a special props named 'children' which is used in between components while rendering

function BookList(){
  return(
    <section className='booklist'>
      {data.map((book, index) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>,
)
