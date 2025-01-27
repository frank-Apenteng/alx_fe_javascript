// Array to store quotes with their text and category
let quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    category: "Inspiration",
  },
  {
    text: "The only way to do great work is to love what you do.",
    category: "Motivation",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    category: "Life",
  },
];

// Function to show a random quote based on the selected category
function showRandomQuote() {
  const quoteDisplay = document.getElementById("quoteDisplay");
  const categoryFilter = document.getElementById("categoryFilter").value;

  // Filter quotes by the selected category
  let filteredQuotes = quotes;
  if (categoryFilter !== "All") {
    filteredQuotes = quotes.filter(
      (quote) => quote.category === categoryFilter
    );
  }

  // Check if there are no quotes in the selected category
  if (filteredQuotes.length === 0) {
    quoteDisplay.innerHTML =
      "<p>No quotes available in this category. Try adding one!</p>";
    return;
  }

  // Select a random quote from the filtered quotes
  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const randomQuote = filteredQuotes[randomIndex];

  // Display the random quote and its category
  quoteDisplay.innerHTML = `
      <p>"${randomQuote.text}"</p>
      <em>— ${randomQuote.category}</em>
      <br/>
      <button id="deleteQuote">Delete Quote</button>
    `;

  // Attach an event listener to the delete button
  document.getElementById("deleteQuote").addEventListener("click", function () {
    deleteQuote(randomIndex);
  });
}

// Function to add a new quote to the quotes array
function addQuote() {
  const newQuoteText = document.getElementById("newQuoteText").value.trim();
  const newQuoteCategory = document
    .getElementById("newQuoteCategory")
    .value.trim();

  // Check if both quote text and category are provided
  if (newQuoteText && newQuoteCategory) {
    const newQuote = { text: newQuoteText, category: newQuoteCategory };
    quotes.push(newQuote);

    // Clear input fields
    document.getElementById("newQuoteText").value = "";
    document.getElementById("newQuoteCategory").value = "";

    populateCategories();
    showRandomQuote();
  } else {
    alert("Please enter both a quote and a category.");
  }
}

// Function to delete a quote from the quotes array
function deleteQuote(index) {
  quotes.splice(index, 1);
  populateCategories();
  showRandomQuote();
}

// Function to populate the category filter dropdown
function populateCategories() {
  const categoryFilter = document.getElementById("categoryFilter");
  const categories = ["All"];

  // Extract unique categories from quotes array
  quotes.forEach((quote) => {
    if (!categories.includes(quote.category)) {
      categories.push(quote.category);
    }
  });

  // Clear existing options in the dropdown
  categoryFilter.innerHTML = "";
  // Add new options to the dropdown
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// Function to initialize the application
window.onload = function () {
  populateCategories();
  showRandomQuote();
};

// Attach event listeners to the buttons and dropdown
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
document.getElementById("addQuoteButton").addEventListener("click", addQuote);
document
  .getElementById("categoryFilter")
  .addEventListener("change", showRandomQuote);
