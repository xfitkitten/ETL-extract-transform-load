# Transform
![Lego Evolution](https://media-exp1.licdn.com/dms/image/C561BAQH1aRMWXFBG0w/company-background_10000/0/1519796342407?e=2159024400&v=beta&t=Xn6H_hK-2fatIm-JOKZf5V8wR9Wyz0vWHUeLFXJT290)

Now is time for the fun part. We need to transform our data. This will be the largest and most complicated part of the process, thus it will have the most Userstories. 


:bulb: READ EVERYTHING BEFORE IMPLEMENTING
 
:bulb: READ EVERYTHING BEFORE IMPLEMENTING
 
:bulb: READ EVERYTHING BEFORE IMPLEMENTING


:bulb: REMEMBER YOUR TOOLS!
 
:bulb: REMEMBER YOUR TOOLS!
 
:bulb: REMEMBER YOUR TOOLS!

First things first, lets throw out the data that we dont need so that we don't waste precious time processing it. The only properties we care about are the following:

- SNo
- Symbol
- Date
- High
- Low
- Marketcap

Create a function that takes in our original array of object and returns a new array of object with only the properties that we care about.

## Task #1 - Data Trimming

We need to trim down some of the data before cleaning validating and processing it as future dataset will be very large. The input dataset has the following fields:
``` json
 {
    "SNo": "16",
    "Name": "Dogecoin",
    "Symbol": "DOGE",
    "Date": "2013-12-31 23:59:59",
    "High": "0.0004656940000131726",
    "Low": "0.0004076710029039532",
    "Open": "0.00041817600140348077",
    "Close": "0.00042224599746987224",
    "Volume": "273400.0",
    "Marketcap": "7689658.67317"
  }
```

### Acceptance Criteria
Data looks like this:
```json
 {
    "SNo": "16",
    "Symbol": "DOGE",
    "Date": "2013-12-31 23:59:59",
    "High": "0.0004656940000131726",
    "Low": "0.0004076710029039532",
    "Marketcap": "7689658.67317"
  }
```

## Task #2 - Data Conversion and Formatting pt1

Later, its possible that we'll need to upload this data into some type of database management system. This means we need at least 1 unique identifier. Currently there is overlap of the SNo field between the 3 input CSVs. We need to modify the SNo to combine it with the Symbol to create a new identifier. Using the example above, the new SNo would be ***16-DOGE*** 

### Acceptance Criteria

- [ ] SNo's are appended with -SYMBOL

## Task #3 - Data Conversion and Formatting pt2

Currently all of our values are a single data type. We are going to be performing some math against the number data types so lets convert the following fields into Number data types:

- High
- Low
- Marketcap

These numbers are also more specific than we need. We need to truncate some of the fields

- High and Low should be truncated to 8 decimal places
- Marketcap should be truncated to an integer

### Acceptance Criteria
- All number fields are a number data type
- High and Low are truncated to 8 didgits
- Marketcap should be an integer 