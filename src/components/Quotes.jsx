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
            <h2>Today&apos;s Quote</h2>
            <p>{quote.content}</p>
            <hr />
            <h2>Do you wanna more?</h2>
            <button onClick={()=> fetchQuotes()}>Show More</button>
            {
                quotes.map(quote => (
                    <p key={quote.id}>{quote.content}</p>
                ))
            }
        </div>
    )
}

export default Quotes;