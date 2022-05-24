import React, { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Gif from "./Gif";

const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  

  const loadGifs = () => {
    var gifList = localStorage.getItem("gifList");
    
    if(gifList == null) {
		// Det finns inget i localStorage, så vi skapar en tom lista där
		localStorage.setItem("gifList", JSON.stringify([]));
		// Returnerar en tom lista (= inga movies)
		return [];
	} else {
		return JSON.parse(gifList);
	}
  }
  const saveToLocalStorage = (gifList) => {
    let jsonGifs = JSON.stringify(gifList);
    localStorage.setItem('gifList', JSON.stringify(jsonGifs));
  }
  
  const fetchData = async () => {
    setIsError(false);
    setIsLoading(true);

    try {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "Kt88WlJH3B83KOdKYnWKcEW1oX6sICUk",
          limit: 10
        }
      });
      console.log(results);
      setData(results.data.data);
    } catch (err) {
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    }
    
    setIsLoading(false);
  };

  const renderGifs = () => {
    if (isLoading) {
      <Spinner />;
    }
    return data.map(el => {
      return (
        <Gif id={el.id} url={el.images.fixed_height.url} saveToLocalStorage={saveToLocalStorage} />
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
          limit: 10
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
    <div className="container">
      <h1 className='display-5 fw-bold text-center mt-5'>GIF-dagboken</h1>
      <p className='lead mb-4 text-center'>En bild säger mer än tusen ord, därför har vi skapat GIF-dagboken! Skriv hur du mår i sökfältet och välj en GIF för att börja!</p>
      {renderError()}
      <form className="">
        <input
          value={search}
          onClick={fetchData}
          onChange={handleSearchChange}
          type="text"
          placeholder="Hur mår du idag?"
          className="form-control"
        />
        <button
          onClick={handleSubmit}
          type="button"
          className="btn btn-primary mt-2"
        >
          Sök
        </button>
      </form>
      
      <div>{renderGifs()}</div>    
    </div>
  );
};

export default Giphy;