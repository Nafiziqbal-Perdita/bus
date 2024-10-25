const puppeteer = require("puppeteer");
const fs = require("fs");
const randomUseragent = require("random-useragent");

async function scrapeWebsite(from,to,date) {

  const url = `https://bdtickets.com/bus/search/${from}-to-${to}?journeyDate=${date}`; 




  const browser = await puppeteer.launch({
    headless: true, // Run in headless mode
    defaultViewport: null,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--start-maximized"], // Add these args
  });

  const page = await browser.newPage();

  // Set a random user agent
  const userAgent = randomUseragent.getRandom();
  console.log("Using User Agent: ", userAgent);
  await page.setUserAgent(userAgent);

  // Go to the URL (either static or passed as a parameter)
  await page.goto(url, {
    waitUntil: "networkidle0",
    timeout: 0,
  });
  console.log("getting from second web");
  // Wait for the specific element to load before scraping
  await page.waitForSelector(".container", {
    visible: true,
  });

  // Scrape the ticket information
  const ticketItems = await page.evaluate(() => {
    const rows = document.querySelectorAll(".col-12");
    let items = [];
    rows.forEach((row) => {
      const lists = row.querySelectorAll("li");
      if (lists.length > 0) {
        const operatorName = lists[0].querySelector("h6")?.innerText || "N/A";
        const spans = lists[0].querySelectorAll("span");
        const money = lists[0].querySelector("h3")?.innerText || "N/A";
        const res = {
          name: operatorName,
          type: spans[0]?.innerText || "N/A",
          starting_point: spans[1]?.innerText || "N/A",
          start_time: spans[3]?.innerText || "N/A",
          seats: spans[5]?.innerText || "N/A",
          money: money,
        };
        items.push(res);
      }
    });

    return items;
  });




  await browser.close();
  console.log("Done from second web");
  // Return the scraped data (if needed by the Express server)
  return ticketItems;
}

module.exports = scrapeWebsite;
