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

//   // Store the last viewed quote in session storage
//   sessionStorage.setItem("lastViewedQuote", JSON.stringify(randomQuote));
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

//     saveQuotes();
//     populateCategories();
//     showRandomQuote();
//   } else {
//     alert("Please enter both a quote and a category.");
//   }
// }

// // Function to delete a quote from the quotes array
// function deleteQuote(index) {
//   quotes.splice(index, 1);
//   saveQuotes();
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

// // Function to save quotes to local storage
// function saveQuotes() {
//   localStorage.setItem("quotes", JSON.stringify(quotes));
// }

// // Function to load quotes from local storage
// function loadQuotes() {
//   const storedQuotes = localStorage.getItem("quotes");
//   if (storedQuotes) {
//     quotes = JSON.parse(storedQuotes);
//   }
// }

// // Function to import quotes from a JSON file
// function importFromJsonFile(event) {
//   const fileReader = new FileReader();
//   fileReader.onload = function (event) {
//     const importedQuotes = JSON.parse(event.target.result);
//     quotes.push(...importedQuotes);
//     saveQuotes();
//     alert("Quotes imported successfully!");
//     populateCategories();
//     showRandomQuote();
//   };
//   fileReader.readAsText(event.target.files[0]);
// }

// // Function to export quotes to a JSON file
// function exportToJsonFile() {
//   const dataStr = JSON.stringify(quotes, null, 2);
//   const dataUri =
//     "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

//   const exportFileDefaultName = "quotes.json";

//   const linkElement = document.createElement("a");
//   linkElement.setAttribute("href", dataUri);
//   linkElement.setAttribute("download", exportFileDefaultName);
//   linkElement.click();
// }

// // Function to initialize the application
// window.onload = function () {
//   loadQuotes();
//   populateCategories();
//   showRandomQuote();
//   createAddQuoteForm();

//   // Restore the last viewed quote from session storage
//   const lastViewedQuote = sessionStorage.getItem("lastViewedQuote");
//   if (lastViewedQuote) {
//     const quote = JSON.parse(lastViewedQuote);
//     const quoteDisplay = document.getElementById("quoteDisplay");
//     quoteDisplay.innerHTML = `
//       <p>"${quote.text}"</p>
//       <em>— ${quote.category}</em>
//     `;
//   }
// };

// // Attach event listeners to the buttons and dropdown
// document.getElementById("newQuote").addEventListener("click", showRandomQuote);
// document.getElementById("addQuoteButton").addEventListener("click", addQuote);
// document
//   .getElementById("categoryFilter")
//   .addEventListener("change", showRandomQuote);
// document
//   .getElementById("exportButton")
//   .addEventListener("click", exportToJsonFile);

// Array to store quotes with their text and category

// version2
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

//   // Store the last viewed quote in session storage
//   sessionStorage.setItem("lastViewedQuote", JSON.stringify(randomQuote));
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

//     saveQuotes();
//     populateCategories();
//     showRandomQuote();
//   } else {
//     alert("Please enter both a quote and a category.");
//   }
// }

// // Function to delete a quote from the quotes array
// function deleteQuote(index) {
//   quotes.splice(index, 1);
//   saveQuotes();
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

// // Function to save quotes to local storage
// function saveQuotes() {
//   localStorage.setItem("quotes", JSON.stringify(quotes));
// }

// // Function to load quotes from local storage
// function loadQuotes() {
//   const storedQuotes = localStorage.getItem("quotes");
//   if (storedQuotes) {
//     quotes = JSON.parse(storedQuotes);
//   }
// }

// // Function to import quotes from a JSON file
// function importFromJsonFile(event) {
//   const fileReader = new FileReader();
//   fileReader.onload = function (event) {
//     const importedQuotes = JSON.parse(event.target.result);
//     quotes.push(...importedQuotes);
//     saveQuotes();
//     alert("Quotes imported successfully!");
//     populateCategories();
//     showRandomQuote();
//   };
//   fileReader.readAsText(event.target.files[0]);
// }

// // Function to export quotes to a JSON file
// function exportToJsonFile() {
//   const dataStr = JSON.stringify(quotes, null, 2);
//   const blob = new Blob([dataStr], { type: "application/json" });
//   const url = URL.createObjectURL(blob);

//   const exportFileDefaultName = "quotes.json";

//   const linkElement = document.createElement("a");
//   linkElement.setAttribute("href", url);
//   linkElement.setAttribute("download", exportFileDefaultName);
//   linkElement.click();

//   URL.revokeObjectURL(url);
// }

// // Function to initialize the application
// window.onload = function () {
//   loadQuotes();
//   populateCategories();
//   showRandomQuote();
//   createAddQuoteForm();

//   // Restore the last viewed quote from session storage
//   const lastViewedQuote = sessionStorage.getItem("lastViewedQuote");
//   if (lastViewedQuote) {
//     const quote = JSON.parse(lastViewedQuote);
//     const quoteDisplay = document.getElementById("quoteDisplay");
//     quoteDisplay.innerHTML = `
//       <p>"${quote.text}"</p>
//       <em>— ${quote.category}</em>
//     `;
//   }
// };

// // Attach event listeners to the buttons and dropdown
// document.getElementById("newQuote").addEventListener("click", showRandomQuote);
// document.getElementById("addQuoteButton").addEventListener("click", addQuote);
// document
//   .getElementById("categoryFilter")
//   .addEventListener("change", showRandomQuote);
// document
//   .getElementById("exportButton")
//   .addEventListener("click", exportToJsonFile);
// Array to store quotes with their text and category

// version3
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

// // Function to populate categories in the dropdown
// function populateCategories() {
//   const categoryFilter = document.getElementById("categoryFilter");
//   const categories = ["all"];

//   quotes.forEach((quote) => {
//     if (!categories.includes(quote.category.toLowerCase())) {
//       categories.push(quote.category.toLowerCase());
//     }
//   });

//   categoryFilter.innerHTML = categories
//     .map(
//       (category) => `
//     <option value="${category}">${
//         category.charAt(0).toUpperCase() + category.slice(1)
//       }</option>
//   `
//     )
//     .join("");
// }

// // Function to show a random quote based on the selected category
// function showRandomQuote() {
//   const categoryFilter = document.getElementById("categoryFilter").value;
//   filterQuotes(categoryFilter);
// }

// // Function to filter and display quotes based on the selected category
// function filterQuotes(selectedCategory) {
//   const quoteDisplay = document.getElementById("quoteDisplay");
//   const category =
//     selectedCategory || document.getElementById("categoryFilter").value;

//   let filteredQuotes = quotes;
//   if (category !== "all") {
//     filteredQuotes = quotes.filter(
//       (quote) => quote.category.toLowerCase() === category
//     );
//   }

//   if (filteredQuotes.length === 0) {
//     quoteDisplay.innerHTML =
//       "<p>No quotes available in this category. Try adding one!</p>";
//     return;
//   }

//   const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
//   const randomQuote = filteredQuotes[randomIndex];

//   quoteDisplay.innerHTML = `
//     <p>"${randomQuote.text}"</p>
//     <em>— ${randomQuote.category}</em>
//     <br/>
//     <button id="deleteQuote">Delete Quote</button>
//   `;

//   document.getElementById("deleteQuote").addEventListener("click", function () {
//     deleteQuote(randomIndex);
//   });

//   sessionStorage.setItem("lastViewedQuote", JSON.stringify(randomQuote));
//   localStorage.setItem("selectedCategory", category);
// }

// // Function to create the add quote form dynamically
// function createAddQuoteForm() {
//   const formContainer = document.getElementById("addQuoteFormContainer");
//   formContainer.innerHTML = `
//     <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
//     <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
//     <button id="addQuoteButton">Add Quote</button>
//   `;

//   document.getElementById("addQuoteButton").addEventListener("click", addQuote);
// }

// // Function to add a new quote to the quotes array
// function addQuote() {
//   const newQuoteText = document.getElementById("newQuoteText").value.trim();
//   const newQuoteCategory = document
//     .getElementById("newQuoteCategory")
//     .value.trim();

//   if (newQuoteText && newQuoteCategory) {
//     const newQuote = { text: newQuoteText, category: newQuoteCategory };
//     quotes.push(newQuote);

//     document.getElementById("newQuoteText").value = "";
//     document.getElementById("newQuoteCategory").value = "";

//     saveQuotes();
//     populateCategories();
//     showRandomQuote();
//   } else {
//     alert("Please enter both a quote and a category.");
//   }
// }

// // Function to delete a quote from the quotes array
// function deleteQuote(index) {
//   quotes.splice(index, 1);
//   saveQuotes();
//   populateCategories();
//   showRandomQuote();
// }

// // Function to save quotes to local storage
// function saveQuotes() {
//   localStorage.setItem("quotes", JSON.stringify(quotes));
// }

// // Function to load quotes from local storage
// function loadQuotes() {
//   const storedQuotes = localStorage.getItem("quotes");
//   if (storedQuotes) {
//     quotes = JSON.parse(storedQuotes);
//   }
// }

// // Function to import quotes from a JSON file
// function importFromJsonFile(event) {
//   const fileReader = new FileReader();
//   fileReader.onload = function (event) {
//     const importedQuotes = JSON.parse(event.target.result);
//     quotes.push(...importedQuotes);
//     saveQuotes();
//     alert("Quotes imported successfully!");
//     populateCategories();
//     showRandomQuote();
//   };
//   fileReader.readAsText(event.target.files[0]);
// }

// // Function to export quotes to a JSON file
// function exportToJsonFile() {
//   const dataStr = JSON.stringify(quotes, null, 2);
//   const blob = new Blob([dataStr], { type: "application/json" });
//   const url = URL.createObjectURL(blob);

//   const exportFileDefaultName = "quotes.json";

//   const linkElement = document.createElement("a");
//   linkElement.setAttribute("href", url);
//   linkElement.setAttribute("download", exportFileDefaultName);
//   linkElement.click();

//   URL.revokeObjectURL(url);
// }

// // Function to initialize the application
// window.onload = function () {
//   loadQuotes();
//   populateCategories();
//   createAddQuoteForm();

//   const selectedCategory = localStorage.getItem("selectedCategory") || "all";
//   document.getElementById("categoryFilter").value = selectedCategory;

//   const lastViewedQuote = sessionStorage.getItem("lastViewedQuote");
//   if (lastViewedQuote) {
//     const quote = JSON.parse(lastViewedQuote);
//     const quoteDisplay = document.getElementById("quoteDisplay");
//     quoteDisplay.innerHTML = `
//       <p>"${quote.text}"</p>
//       <em>— ${quote.category}</em>
//     `;
//   } else {
//     filterQuotes(selectedCategory);
//   }
// };

// // Attach event listeners
// document.getElementById("newQuote").addEventListener("click", showRandomQuote);
// document.getElementById("addQuoteButton").addEventListener("click", addQuote);
// document
//   .getElementById("categoryFilter")
//   .addEventListener("change", filterQuotes);
// document
//   .getElementById("exportButton")
//   .addEventListener("click", exportToJsonFile);

// version4
let quotes = [
  { text: "Be yourself; everyone else is already taken.", category: "Inspiration" },
  { text: "The only way to do great work is to love what you do.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" }
];

// Function to populate categories in the dropdown
function populateCategories() {
  const categoryFilter = document.getElementById('categoryFilter');
  const categories = ['all'];

  quotes.forEach(quote => {
    if (!categories.includes(quote.category.toLowerCase())) {
      categories.push(quote.category.toLowerCase());
    }
  });

  categoryFilter.innerHTML = categories.map(category => `
    <option value="${category}">${category.charAt(0).toUpperCase() + category.slice(1)}</option>
  `).join('');
}

// Function to show a random quote based on the selected category
function showRandomQuote() {
  const categoryFilter = document.getElementById('categoryFilter').value;
  filterQuotes(categoryFilter);
}

// Function to filter and display quotes based on the selected category
function filterQuotes(selectedCategory) {
  const quoteDisplay = document.getElementById('quoteDisplay');
  const category = selectedCategory || document.getElementById('categoryFilter').value;

  let filteredQuotes = quotes;
  if (category !== 'all') {
    filteredQuotes = quotes.filter(quote => quote.category.toLowerCase() === category);
  }

  if (filteredQuotes.length === 0) {
    quoteDisplay.innerHTML = "<p>No quotes available in this category. Try adding one!</p>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  const randomQuote = filteredQuotes[randomIndex];

  quoteDisplay.innerHTML = `
    <p>"${randomQuote.text}"</p>
    <em>— ${randomQuote.category}</em>
    <br/>
    <button id="deleteQuote">Delete Quote</button>
  `;

  document.getElementById('deleteQuote').addEventListener('click', function() {
    deleteQuote(randomIndex);
  });

  sessionStorage.setItem('lastViewedQuote', JSON.stringify(randomQuote));
  localStorage.setItem('selectedCategory', category);
}

// Function to create the add quote form dynamically
function createAddQuoteForm() {
  const formContainer = document.getElementById('addQuoteFormContainer');
  formContainer.innerHTML = `
    <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
    <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
    <button id="addQuoteButton">Add Quote</button>
  `;

  document.getElementById('addQuoteButton').addEventListener('click', addQuote);
}

// Function to add a new quote to the quotes array
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value.trim();
  const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();

  if (newQuoteText && newQuoteCategory) {
    const newQuote = { text: newQuoteText, category: newQuoteCategory };
    quotes.push(newQuote);

    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';

    saveQuotes();
    populateCategories();
    showRandomQuote();
    syncWithServer(); // Sync with server after adding a new quote
  } else {
    alert('Please enter both a quote and a category.');
  }
}

// Function to delete a quote from the quotes array
function deleteQuote(index) {
  quotes.splice(index, 1);
  saveQuotes();
  populateCategories();
  showRandomQuote();
  syncWithServer(); // Sync with server after deleting a quote
}

// Function to save quotes to local storage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Function to load quotes from local storage
function loadQuotes() {
  const storedQuotes = localStorage.getItem('quotes');
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
}

// Function to import quotes from a JSON file
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert('Quotes imported successfully!');
    populateCategories();
    showRandomQuote();
  };
  fileReader.readAsText(event.target.files[0]);
}

// Function to export quotes to a JSON file
function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const exportFileDefaultName = 'quotes.json';

  const linkElement = document.createElement('a');
  linkElement.setAttribute('href', url);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();

  URL.revokeObjectURL(url);
}

// Function to sync with server
function syncWithServer() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(serverQuotes => {
      // Mock syncing logic: server data takes precedence
      const serverQuotesData = serverQuotes.map(quote => ({
        text: quote.title,
        category: "Server"
      }));
      
      // Combine local and server quotes
      const combinedQuotes = [...serverQuotesData, ...quotes];
      
      // Remove duplicates based on text
      const uniqueQuotes = combinedQuotes.filter((quote, index, self) =>
        index === self.findIndex((q) => q.text === quote.text)
      );

      quotes = uniqueQuotes;
      saveQuotes();
      populateCategories();
      showRandomQuote();

      notifyUser('Quotes synced with server successfully.');
    });
}

// Function to notify the user
function notifyUser(message) {
  const notification = document.getElementById('notification');
  notification.innerText = message;
  notification.style.display = 'block';
  
  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}

// Function to initialize the application
window.onload = function() {
  loadQuotes();
  populateCategories();
  createAddQuoteForm();

  const selectedCategory = localStorage.getItem('selectedCategory') || 'all';
  document.getElementById('categoryFilter').value = selectedCategory;

  const lastViewedQuote = sessionStorage.getItem('lastViewedQuote');
  if (lastViewedQuote) {
    const quote = JSON.parse(lastViewedQuote);
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = `
      <p>"${quote.text}"</p>
      <em>— ${quote.category}</em>
    `;
  } else {
    filterQuotes(selectedCategory);
  }

  // Periodically sync with server
  setInterval(syncWithServer, 10000); // Every 10 seconds for demonstration purposes
};

// Attach event listeners
document.getElementById('newQuote').addEventListener('click', showRandomQuote);
document.getElementById('addQuoteButton').addEventListener('click', addQuote);
document.getElementById('categoryFilter').addEventListener('change', filterQuotes);
document.getElementById('exportButton').addEventListener('click', exportToJsonFile);
