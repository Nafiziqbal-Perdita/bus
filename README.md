# Bus Search Scraper

This project provides an API for scraping bus travel information from online ticketing platforms. Built with **Node.js**, **Express**, and **Puppeteer**, the API allows users to retrieve schedules, operators, seat availability, and ticket prices between specified locations for a selected date.

## Project Purpose

The Bus Search Scraper simplifies accessing bus ticketing data programmatically, allowing users to gather real-time bus information for different routes in a single request. Ideal for applications needing travel data aggregation.

## Live Project Link

You can access the live project here:
- [https://bussearch.up.railway.app/scrape?from=dhaka&to=rajshahi&date=2024-10-26](https://bussearch.up.railway.app/scrape?from=dhaka&to=rajshahi&date=2024-10-26)
- There is a catch which is you can not see all the time using same link provided here because the date is variable the previous date will not working so you need to manually change the variables like that
- https://bussearch.up.railway.app/scrape?from=${from-field}&${to-field}=rajshahi&date=${date: YYYY-MM-DD}
## Replace localhost:3000 with https://bussearch.up.railway.app to access the live version.

## API Endpoint Overview

### `/scrape` Endpoint

- **Method**: `GET`
- **Parameters**:
  - `from`: The starting location of the trip (required).
  - `to`: The destination location of the trip (required).
  - `date`: Date of travel in the format `YYYY-MM-DD` (required).

## Usage

Once the server is running, you can make GET requests to the `/scrape` endpoint with the required parameters to retrieve bus schedule information.

### Query Parameters

| Parameter | Description                    | Required | Format       |
|-----------|--------------------------------|----------|--------------|
| `from`    | Starting location of the trip  | Yes      | `string`     |
| `to`      | Destination location of the trip | Yes      | `string`     |
| `date`    | Date of travel                 | Yes      | `YYYY-MM-DD` |

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
```
# Features
- Multi-source Data: Scrapes bus information from multiple sources, combining results for better coverage.
- Flexible Querying: Allows users to specify from, to, and date parameters dynamically.
- Optimized Performance: Utilizes concurrent scraping for faster data retrieval.
## Requirements
### To run this project locally, ensure you have:
- Node.js (version 14 or higher)
- npm (Node Package Manager)
# Setup and Installation
### Clone the Repository
```bash
git clone https://github.com/Nafiziqbal-Perdita/bus.git
cd your-repo
npm install
node index.js
```


### Example Request

For bus schedules and prices from Dhaka to Rajshahi on October 26, 2024, use:

```bash
curl "http://localhost:3000/scrape?from=dhaka&to=rajshahi&date=2024-10-26"
```

### Explanation

- **Curl Command**: The `curl` command is included as an example of how to make a GET request to your API.
- **Backticks**: The commands are enclosed in triple backticks with `bash` specified for syntax highlighting.
- **Table Format**: The query parameters are presented in a clean table format for easy reading. 

You can simply copy and paste this code into your README file.



