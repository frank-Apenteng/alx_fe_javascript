// let quotes = [
//   {
//     text: "Be yourself; everyone else is already taken.",
//     category: "Inspiration",
//   },
//   {
//     text: "The only way to do great work is to love what you do.",
//     category: "Motivation",
//   },
//   {
//     text: "Life is what happens when you're busy making other plans.",
//     category: "Life",
//   },
// ];

// // Function to show a random quote based on the selected category
// function showRandomQuote() {
//   const quoteDisplay = document.getElementById("quoteDisplay");
//   const categoryFilter = document.getElementById("categoryFilter").value;

//   // Filter quotes by the selected category
//   let filteredQuotes = quotes;
//   if (categoryFilter !== "All") {
//     filteredQuotes = quotes.filter(
//       (quote) => quote.category === categoryFilter
//     );
//   }

//   // Check if there are no quotes in the selected category
//   if (filteredQuotes.length === 0) {
//     quoteDisplay.innerHTML =
//       "<p>No quotes available in this category. Try adding one!</p>";
//     return;
//   }

//   // Select a random quote from the filtered quotes
//   const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
//   const randomQuote = filteredQuotes[randomIndex];

//   // Display the random quote and its category
//   quoteDisplay.innerHTML = `
//     <p>"${randomQuote.text}"</p>
//     <em>— ${randomQuote.category}</em>
//     <br/>
//     <button id="deleteQuote">Delete Quote</button>
//   `;

//   // Attach an event listener to the delete button
//   document.getElementById("deleteQuote").addEventListener("click", function () {
//     deleteQuote(randomIndex);
//   });
// }

// // Function to create the add quote form dynamically
// function createAddQuoteForm() {
//   const formContainer = document.getElementById("addQuoteFormContainer");
//   formContainer.innerHTML = `
//     <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
//     <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
//     <button id="addQuoteButton">Add Quote</button>
//   `;

//   // Attach event listener to the "Add Quote" button
//   document.getElementById("addQuoteButton").addEventListener("click", addQuote);
// }

// // Function to add a new quote to the quotes array
// function addQuote() {
//   const newQuoteText = document.getElementById("newQuoteText").value.trim();
//   const newQuoteCategory = document
//     .getElementById("newQuoteCategory")
//     .value.trim();

//   // Check if both quote text and category are provided
//   if (newQuoteText && newQuoteCategory) {
//     const newQuote = { text: newQuoteText, category: newQuoteCategory };
//     quotes.push(newQuote);

//     // Clear input fields
//     document.getElementById("newQuoteText").value = "";
//     document.getElementById("newQuoteCategory").value = "";

//     populateCategories();
//     showRandomQuote();
//   } else {
//     alert("Please enter both a quote and a category.");
//   }
// }

// // Function to delete a quote from the quotes array
// function deleteQuote(index) {
//   quotes.splice(index, 1);
//   populateCategories();
//   showRandomQuote();
// }

// // Function to populate the category filter dropdown
// function populateCategories() {
//   const categoryFilter = document.getElementById("categoryFilter");
//   const categories = ["All"];

//   quotes.forEach((quote) => {
//     if (!categories.includes(quote.category)) {
//       categories.push(quote.category);
//     }
//   });

//   categoryFilter.innerHTML = "";
//   categories.forEach((category) => {
//     const option = document.createElement("option");
//     option.value = category;
//     option.textContent = category;
//     categoryFilter.appendChild(option);
//   });
// }

// // Function to initialize the application
// window.onload = function () {
//   populateCategories();
//   showRandomQuote();
//   createAddQuoteForm();
// };

// // Attach event listeners to the buttons and dropdown
// document.getElementById("newQuote").addEventListener("click", showRandomQuote);
// document
//   .getElementById("categoryFilter")
//   .addEventListener("change", showRandomQuote);
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

  // Store the last viewed quote in session storage
  sessionStorage.setItem("lastViewedQuote", JSON.stringify(randomQuote));
}

// Function to create the add quote form dynamically
function createAddQuoteForm() {
  const formContainer = document.getElementById("addQuoteFormContainer");
  formContainer.innerHTML = `
    <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
    <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
    <button id="addQuoteButton">Add Quote</button>
  `;

  // Attach event listener to the "Add Quote" button
  document.getElementById("addQuoteButton").addEventListener("click", addQuote);
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

    saveQuotes();
    populateCategories();
    showRandomQuote();
  } else {
    alert("Please enter both a quote and a category.");
  }
}

// Function to delete a quote from the quotes array
function deleteQuote(index) {
  quotes.splice(index, 1);
  saveQuotes();
  populateCategories();
  showRandomQuote();
}

// Function to populate the category filter dropdown
function populateCategories() {
  const categoryFilter = document.getElementById("categoryFilter");
  const categories = ["All"];

  quotes.forEach((quote) => {
    if (!categories.includes(quote.category)) {
      categories.push(quote.category);
    }
  });

  categoryFilter.innerHTML = "";
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// Function to save quotes to local storage
function saveQuotes() {
  localStorage.setItem("quotes", JSON.stringify(quotes));
}

// Function to load quotes from local storage
function loadQuotes() {
  const storedQuotes = localStorage.getItem("quotes");
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
}

// Function to import quotes from a JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert("Quotes imported successfully!");
    populateCategories();
    showRandomQuote();
  };
  fileReader.readAsText(event.target.files[0]);
}

// Function to export quotes to a JSON file
function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes, null, 2);
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  const exportFileDefaultName = "quotes.json";

  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();
}

// Function to initialize the application
window.onload = function () {
  loadQuotes();
  populateCategories();
  showRandomQuote();
  createAddQuoteForm();

  // Restore the last viewed quote from session storage
  const lastViewedQuote = sessionStorage.getItem("lastViewedQuote");
  if (lastViewedQuote) {
    const quote = JSON.parse(lastViewedQuote);
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.innerHTML = `
      <p>"${quote.text}"</p>
      <em>— ${quote.category}</em>
    `;
  }
};

// Attach event listeners to the buttons and dropdown
document.getElementById("newQuote").addEventListener("click", showRandomQuote);
document.getElementById("addQuoteButton").addEventListener("click", addQuote);
document
  .getElementById("categoryFilter")
  .addEventListener("change", showRandomQuote);
document
  .getElementById("exportButton")
  .addEventListener("click", exportToJsonFile);
