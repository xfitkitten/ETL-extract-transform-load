# Extraction

![Extraction Netflix](https://static01.nyt.com/images/2020/04/25/arts/extraction-anatomy1/extraction-anatomy1-superJumbo.jpg)

This core of the app as of now will be an ETL application. Being an ETL application, the very first thing we will need to do is the "E"!

Remember, extration refers to the gatheing data from one or many sources. 

In this instance it will be a CSV file, or a comma seperated values file. CSV's are a very common data format and are well supported in many programming languages. Although the name infers that the data is seperated by commas, they can, and are often split by other delimeters such as pipes or spaces

Comma Seperated
```csv
FirstName,LastName,Phone,Email,LastUpdated,RecordId,Account
John,Doe,+1-555-010-0000,,2020-08-29T11:33:40Z,fac82ef7-6a2e-4558-be17-e7f650c8486d,111222333
Doe,John,,JOHN@anycompany.com,2018-03-29T05:10:39Z,2c69e270-861b-460d-8358-72f885475dfc,111222333
```

Pipe Seperated
```csv
FirstName|LastName|Phone|Email|LastUpdated|RecordId|Account
John|Doe|+1-555-010-0000||2020-08-29T11:33:40Z|fac82ef7-6a2e-4558-be17-e8f650c8486d|111222333
Doe|John||JOHN@anycompany.com|2018-03-29T05:10:39Z|2c69e270-861b-460d-8358-72f885475dfc|111222334
```

## Dealing with CSV's in Javascript

Like we mentioned before, most languages have well documented, well supported ways to interact with CSV. In Javascript there are lots of different packages for this. You are free to do whichever you like but here is a link to a guide that will help you get the information out of the CSV and into your code

[CSV tutorial](https://stackabuse.com/reading-and-writing-csv-files-with-node-js/)

## What do I need to do?

This mission, should you accept it, is to extract Bitcoin historical information from the [Bitcoin](./coin_Bitcoin.csv) CSV into your code to be used.

You can also check out this video that will shed some light on working with tabular data(CSV).

[Coding Train](https://www.youtube.com/watch?v=RfMkdvN-23o)

## Userstory #1 - Data Ingest

As a developer of the Crytpo Historical Data Parser, I need to be able to ingest data from a CSV into my program so that I can begin to develop features around it.

### Acceptance Criteria
- [ ] New Repo called crypto-parser is created
- [ ] README is created for crypto-parser
- [ ] A csv can be read into your code and turned into an Array of Javasctipt Objects
- [ ] The first 5 items in this array are printed out when the JS file is run
- [ ] A test Markdown file is created called test.md. Brainstorm and list scenarios you would want to test to ensure this is working correctly
