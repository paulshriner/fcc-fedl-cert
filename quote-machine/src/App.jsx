import './App.css'

import { useState, useEffect } from 'react';

// Quote API from https://dummyjson.com/docs/quotes#quotes-random
const quoteAPI = "https://dummyjson.com/quotes/random";

function QuoteBox() {
  // Fetch method from https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/
  const [quote, setQuote] = useState({quote: "", author: ""});
  const [change, setChange] = useState(true);

  // Send a request, returns as a JSON
  useEffect(() => {
    if (change) {
      fetch(quoteAPI)
      .then(res => res.json())
      .then((data) => {setQuote(data)});
      setChange(false);
    }
  }, [change]);

  return (
    <div id="container">
      <div id="quote-box">
        <div id="quote">
          <p id="text">"{quote.quote}"</p>
          <p id="author">- {quote.author}</p>
        </div>
        <div id="action-buttons">
          <a id="tweet-quote" href={"https://twitter.com/intent/tweet?text=%22" + quote.quote.split(" ").join("%20") + "%22%20" + quote.author.split(" ").join("%20")}>Twitter</a>
          {/* Thanks https://stackoverflow.com/questions/75560479/trigger-useeffect-based-on-an-onclick-of-a-button for useEffect on onClick */}
          <button id="new-quote" onClick={() => setChange(true)}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <QuoteBox />
  );
}

export default App;
