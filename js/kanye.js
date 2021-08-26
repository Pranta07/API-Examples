const loadQuotes = () => {
    fetch("https://api.kanye.rest/")
        .then((res) => res.json())
        .then((data) => showQuotes(data));
};
// loadQuotes();

const showQuotes = (quote) => {
    const quoteElement = (document.getElementById("qoute-text").innerText =
        quote.quote);
};
