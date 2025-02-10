import { useState, useEffect } from "react";

function Quotes() {
    const [quote, setQuote] = useState({});
    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3007/quote").
        then(response => response.json()).
        then(data => setQuote(data));
    }, []);

    const fetchQuotes = () => {
        fetch("http://localhost:3007/quotes").
        then(response => response.json()).
        then(data => setQuotes(data));
    }
    return (
        <div>
            <h2 className="title">Today&apos;s Quote</h2>
            <p className="quote">{quote.content}</p>
            <hr />
            <h2 className="title">Do you wanna more?</h2>
            <button className="btn" onClick={()=> fetchQuotes()}>Show More</button>
            {
                quotes.map(quote => (
                    <p className="quote" key={quote.id}>{quote.content}</p>
                ))
            }
        </div>
    )
}

export default Quotes;