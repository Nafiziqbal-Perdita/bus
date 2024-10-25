const express = require('express');
const scrapeWebsite = require('./scrape/scrape'); // Import the scrape function

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies (for POST requests)
app.use(express.json());

// GET method - Test endpoint
app.get('/', (req, res) => {
    res.send('Welcome to Puppeteer Express server!');
});

// GET method - Trigger scraping with a predefined URL
app.get('/scrape', async (req, res) => {
    const url = "https://bdtickets.com/bus/search/dhaka-to-barisal?journeyDate=2024-10-26"; // Static URL for this example

    try {
        // Call the scrapeWebsite function from scrape.js
        const scrapedData = await scrapeWebsite(url);
        
        // Respond with the scraped data
        res.json(scrapedData);
    } catch (error) {
        console.error('Error during scraping:', error);
        res.status(500).json({ error: 'Failed to scrape the website' });
    }
});

// POST method - Trigger scraping based on provided URL
app.post('/scrape', async (req, res) => {
    const { url } = req.body;
    
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        // Use scrapeWebsite to handle the scraping
        const scrapedData = await scrapeWebsite(url);
        
        // Respond with the scraped data
        res.json(scrapedData);
    } catch (error) {
        console.error('Error during scraping:', error);
        res.status(500).json({ error: 'Failed to scrape the website' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
