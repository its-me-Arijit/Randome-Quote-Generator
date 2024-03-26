document.addEventListener("DOMContentLoaded", () => {
    const quoteElement = document.getElementById("quote");
    const newQuoteButton = document.getElementById("new-quote");
    
    newQuoteButton.addEventListener("click", fetchQuote);

    fetchQuote();

    function fetchQuote() {
        fetch("https://api.quotable.io/random")
            .then(response => response.json())
            .then(data => {
                quoteElement.textContent = `"${data.content}" - ${data.author}`;
            })
            .catch(error => {
                console.error("Error fetching quote:", error);
                quoteElement.textContent = "Failed to fetch quote. Please try again later.";
            });
    }
});
