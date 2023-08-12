import React from "react"
import { data } from "./Booklist";

const Book = ({img, title, author}) =>{
  function clickHandler(e){
    alert('hello, world!');
  };

  function complexExample(author){
    console.log(author);
  };
  return(<article 
  className= 'book'
  onMouseOver={()=>{
    console.log(title);
  }}
  >
    <img src={img} alt="" />
    <h1 onClick={() => console.log(title)}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}>reference</button>
    <button type="button" onClick={() => complexExample(author)}>Complex Example</button>
  </article>)
}

export default Book
