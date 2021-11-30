import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);
  const itemClass = isInCart ? "in-cart" : "";

  function handleItem(){
    setIsInCart((isInCart)=> !isInCart)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "remove" : "add"} onClick ={handleItem}>{isInCart ? "Remove from" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
