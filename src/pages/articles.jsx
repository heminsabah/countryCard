import React from "react";
import ArticleCard from "../cards/articleCard";
import "./articles.styles.css";
import { useState, useEffect } from "react";
import Button from "../buttons/button.jsx";

const Articles = () => {
  const [filteredData, setFilteredData] = useState([]);

  const [count, setCount] = useState(0);

  const [fetchData, setFetchData] = useState([]);
  // const[handleClick,setHandleClick] = useState([]);

  const handleAllData = () => {
    setFilteredData(fetchData);
  };

  const requestData = async (url) => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const countries = await res.json();
    console.log(countries);
    setFetchData(countries);
  };
  const handleClick = () => {
    setFilteredData(fetchData);
    // <button text="All"> </button>
  };

  useEffect(() => {
    // console.log("test");
    requestData();
  }, [filteredData]);

  const handleClickAfrica = () => {
    setFilteredData(
      fetchData.filter((d) => d.continents[0].toLowerCase() === "africa")
    );

   
  };

  const handleClickAsia = () => {
    setFilteredData(
      fetchData.filter((d) => d.continents[0].toLowerCase() === "asia")
    );

    
  };

  const handleClickEurop = () => {
    setFilteredData(
      fetchData.filter((d) => d.continents[0].toLowerCase() === "europe")
    );

    
  };

  useEffect(() => {
    requestData();
  }, [filteredData]);
  return (
    <>
      <Button text="All" handleClick={handleClick} />
      <Button text="Africa" handleClick={handleClickAfrica} />
      <Button text="Asiaa" handleClick={handleClickAsia} />
      <Button text="Europe" handleClick={handleClickEurop} />
      <div className="cards">
        {filteredData.map((article) => {
          return (
            <ArticleCard
              name={article.name.common}
              flags={article.flags.png}
              key={article.id}
            />
          );
        })}
      </div>
    </>
  );
};
export default Articles;
