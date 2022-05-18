import React, { useEffect, useState} from 'react';
import axios from "axios";

function Giphy() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
    
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const giphyResults = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "Kt88WlJH3B83KOdKYnWKcEW1oX6sICUk",
            limit: 25
          }
        });
        console.log(giphyResults);
        setData(giphyResults.data.data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

    return (
      <div>
          <h1>Giffa loss!</h1>
          <span>Livet blir roligare med gifs</span>
      </div>
    );
  }
  
  export default Giphy;
  