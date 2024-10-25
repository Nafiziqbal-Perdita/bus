# Bus Search Scraper

This project provides an API for scraping bus travel information from online ticketing platforms. Built with **Node.js**, **Express**, and **Puppeteer**, the API allows users to retrieve schedules, operators, seat availability, and ticket prices between specified locations for a selected date.

## Project Purpose

The Bus Search Scraper simplifies accessing bus ticketing data programmatically, allowing users to gather real-time bus information for different routes in a single request. Ideal for applications needing travel data aggregation.

## Live Project Link

You can access the live project here:
- [https://bussearch.up.railway.app/scrape?from=dhaka&to=rajshahi&date=2024-10-26](https://bussearch.up.railway.app/scrape?from=dhaka&to=rajshahi&date=2024-10-26)

## API Endpoint Overview

### `/scrape` Endpoint

- **Method**: `GET`
- **Parameters**:
  - `from`: The starting location of the trip (required).
  - `to`: The destination location of the trip (required).
  - `date`: Date of travel in the format `YYYY-MM-DD` (required).
- **Example Request**:
 ### GET /scrape?from=dhaka&to=rajshahi&date=2024-10-26
 
- **Example Response**:
```json
[
  {
    "name": "Operator A",
    "type": "AC",
    "starting_point": "Dhaka",
    "start_time": "10:00 AM",
    "seats": "5",
    "money": "1200 BDT"
  },
  {
    "name": "Operator B",
    "type": "Non-AC",
    "starting_point": "Dhaka",
    "start_time": "11:00 AM",
    "seats": "8",
    "money": "800 BDT"
  }
]
