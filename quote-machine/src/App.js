import './App.css';

import { useState, useEffect } from 'react';

// Quote API from https://dummyjson.com/docs/quotes#quotes-random
const quoteAPI = "quotes/random";

function QuoteBox() {
  // Fetch method from https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/
  const [quote, setQuote] = useState([]);
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
    <div id="quote-box">
      <div>
        <p id="text">"{quote.quote}"</p>
        <p id="author">- {quote.author}</p>
        {/* Thanks https://stackoverflow.com/questions/75560479/trigger-useeffect-based-on-an-onclick-of-a-button for useEffect on onClick */}
        <button id="new-quote" onClick={() => setChange(true)}>New Quote</button>
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