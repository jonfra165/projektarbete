import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Gif from "./Gif";
import Diary from "./Diary";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [gifsInDiary, setGifsInDiary] = useState([]);

  useEffect(() => {
    getGifList();
  }, []);

  const getGifList = () => {
      var gifList = localStorage.getItem("gifList");
      if(gifList === null) {
          // Det finns inget i localStorage, så vi skapar en tom lista där
          localStorage.setItem("gifList", JSON.stringify([]));
          // Returnerar en tom lista (= inga gifs)
          setGifsInDiary([]);        
      } else {
          setGifsInDiary(JSON.parse(gifList));
      }
  }
    
  const saveToLocalStorage = (id, url) => {
    var gifList = [...gifsInDiary];
    if (gifList.length === 6) {
      gifList.shift()
    }
    gifList.push({
      id,
      url,
      date: new Date()
    });
  
    setGifsInDiary(gifList)
    localStorage.setItem('gifList', JSON.stringify(gifList)); 
    setData([]);
    setSearch('')
  }
  
  const renderGifs = () => {
    if (isLoading) {
      <Spinner />;
    }
    return data.map((el, i) =>  {
      return (
        <Gif key={i} id={el.id} url={el.images.fixed_height.url} saveToLocalStorage={saveToLocalStorage} />
        );
    });
  };
  
  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Kunde inte hämta gif.
        </div>
      );
    }
  };

  const handleSearchChange = event => {
    setSearch(event.target.value);
  };
 
  const handleSubmit = async event => {
    event.preventDefault();
    setIsError(false);
    setIsLoading(true);
    
    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "Kt88WlJH3B83KOdKYnWKcEW1oX6sICUk",
          q: search,
          limit: 12
        }
      });
      setData(results.data.data);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }

    setIsLoading(false);
  };
  
  return (
    <div className="container-fluid mt-5">
    <div className="row">
      <h1 className='display-3 fw-bold text-center mt-4'>GIF-dagboken</h1>
      <p className='lead text-center'>En bild säger mer än tusen ord, därför har vi skapat GIF-dagboken! Skriv hur du mår i sökfältet och välj en GIF för att börja!</p>
      {renderError()}
    </div>
    <div className="row">
      <form className="d-flex space-between mb-5" onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={handleSearchChange}
          type="search"
          placeholder="Hur mår du idag?"
          className="form-control "
        />
        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-primary ms-2"
        >
          Sök
        </button>
      </form>
    </div>
      

    <div className="row row-cols-2 row-cols-sm-4 row-cols-md-4 row-cols-lg-6 g-4 d-flex align-items-stretch mb-3">{renderGifs()}</div>    
    <Diary gifList={ gifsInDiary } />

  </div>
  );
};

export default Giphy;