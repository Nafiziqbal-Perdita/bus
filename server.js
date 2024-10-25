const express = require("express");
const scrapeWebsite = require("./scrape/scrape"); // Import the scrape function
const scrapeWebsite_second = require("./scrape/scrape_second");
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// GET method - Test endpoint
app.get("/", (req, res) => {
  res.send("Welcome to Bus Express server!");
});

// GET method - Trigger scraping with a predefined URL
app.get("/scrape", async (req, res) => {
  const { from, to, date } = req.query; // Extract parameters from the query
  //   console.log(from);
  //   console.log(to);
  //   console.log(date);
  if (!from || !to || !date) {
    return res
      .status(400)
      .json({ error: "From, to, and date parameters are required." });
  }

  try {
    // Call the scrapeWebsite function from scrape.js
    console.log("Welcome to Bus Express server!");
    const [data_1, data_2] = await Promise.all([
      scrapeWebsite(from.toLowerCase(), to.toLowerCase(), date),
      scrapeWebsite_second(from.toLowerCase(), to.toLowerCase(), date),
    ]);

    const scrapedData = [...data_1, ...data_2];

    // Respond with the scraped data
    res.json(scrapedData);
  } catch (error) {
    // console.error("Error during scraping:", error);
    res.status(500).json({ error: "Failed to scrape the website" });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
