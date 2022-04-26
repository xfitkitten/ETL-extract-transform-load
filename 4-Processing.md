# Processing
![Woman Processing](https://i.pinimg.com/originals/0d/68/27/0d6827004e3bf16691bf2a101f74a5c5.jpg)

Our Transformation process is well underway! We've gotten our data widdled down to only the information that we need. Now the real fun begins. In this section we'll need to clean, validate and manipulate data to give us the fields we need.

:bulb: READ EVERYTHING BEFORE IMPLEMENTING
 
:bulb: READ EVERYTHING BEFORE IMPLEMENTING
 
:bulb: READ EVERYTHING BEFORE IMPLEMENTING


:bulb: REMEMBER YOUR TOOLS!
 
:bulb: REMEMBER YOUR TOOLS!
 
:bulb: REMEMBER YOUR TOOLS!

First up, let make sure the data coming in is valid, and maybe we'll do a little normalization as well. 


## Task #1 - DateTime Change

Currently the "Date" column has a complete datetime string. The time is not important to us. Remove the time string from the "Date" property

Current:
``` json
 {
    "Date": "2013-12-31 23:59:59",
 }
```

### Acceptance Criteria

- [ ] Time is removed from the datetime string

Data should now look like this:
```json
 {
    "Date": "2013-12-31",
 }
```

## Task #2 - Date Conversion

Our new system isn't currently setup for YYYY-MM-DD formats. We will ultimately be displaying these days to the end user so we want to convert the date to a string that reads "month day, year". Although there are libraries that might help do this easily, we are going to do this manually so that we arent reliant on upstream package updates/security issues. Use your tools to parse the date string and transform it into what it needs to be.

Current:
``` json
 {
    "Date": "2013-12-31",
 }

### Acceptance Criteria

- [ ] All dates are converted to "month day, year" format

Data should now look like:
``` json
 {
    "Date": "December 31, 2013",
 }
```

## Story #3 - New Fields

As a user of Crytpo historical data parser, I need to know if the marketcap and high for the day are lower or higher than yesterday so that I can have easily accessible information to help me notice and understand trends.

### Acceptance Criteria
- [ ] Create 2 new fields(Add a new properties) to each of the objects called "marketMovement", "peak"
- If the respective value increased from yesterday, the value for the key should be "up"
- If the repective value decreased from yesterday, the valie for the key should be "down" 
- If it is the first day, the value for the key should be "up"
