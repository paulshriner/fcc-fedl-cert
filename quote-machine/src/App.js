import './App.css';

import { useState, useEffect } from 'react';

// Quote API from https://dummyjson.com/docs/quotes#quotes-random
const quoteAPI = "quotes/random";

function QuoteBox() {
  return (
    <div id="quote-box">
      <Quote />
    </div>
  );
}

function Quote() {
  // Fetch method from https://www.freecodecamp.org/news/how-to-fetch-api-data-in-react/
  const [quote, setQuote] = useState([]);

  // Send a request, returns as a JSON
  useEffect(() => {
    fetch(quoteAPI)
    .then(res => res.json())
    .then((data) => {setQuote(data)});
  }, []);

  // Render quote and author from quote object
  return (
    <div>
      <p id="text">"{quote.quote}"</p>
      <p id="author">- {quote.author}</p>
    </div>
  )
}

function App() {
  return (
    <QuoteBox />
  );
}

export default App;
