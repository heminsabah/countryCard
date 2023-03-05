import React from "react";


import "./articleCard.styles.css"



import Button from "../buttons/button";



const ArticleCard = ({name, flags}) => {
  return (
    <article className="card google">
      <figure>
        <img src={flags} alt="card pictur" />
      </figure>
      <div className="content">
        <h1>{name}</h1>
        {/* <p>{description}</p> */}
      </div>
      <div className="read-more">
        {/* <p>{category}</p> */}
      </div>
    </article>
    // <div>ArticleCard</div>
  )
}

export default ArticleCard








