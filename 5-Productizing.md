# Processing
![Woman Processing](https://1.bp.blogspot.com/-PBK5SXaStK8/X2I2x-YkduI/AAAAAAAAmoo/tcQvw2c2ULkVyYwTk_E2hcUQZvZWdafRgCLcBGAsYHQ/w640-h396/advantages-productized-business-model-turn-service-idea-into-product.jpg)

The last thing we're going to need to do to our ETL process is to productize it. Right now it only works with the files given. We need to be able to use this application to run this against any number of CSV's, that match our requirements. We need to also make sure the program gives back understandable information should we run into a problem.

:bulb: READ EVERYTHING BEFORE IMPLEMENTING
 
:bulb: READ EVERYTHING BEFORE IMPLEMENTING
 
:bulb: READ EVERYTHING BEFORE IMPLEMENTING


:bulb: REMEMBER YOUR TOOLS!
 
:bulb: REMEMBER YOUR TOOLS!
 
:bulb: REMEMBER YOUR TOOLS! 


## Task #1 - Accept csv as cli argument

Currently we have each CSV hardcoded in our application. Instead we need to be able to accept the CSV as a command line argument when the script is run(You are free to use external libraries, but you don't need them :-))

How it should work:
``` bash
node app.js path/to/file.csv
```

### Acceptance Criteria

- [ ] App works by passing in the location of a CSV at runtime"
- [ ] Add information on how to run the app to the README


## Task #2 - Graceful Errors

Now that we aren't hardcoding the CSV file locations, we need to let create meaningful output if the file cant be found, or if there is a mistake in the path

### Acceptance Criteria

- [ ] If an invalid path is entered, print "path/to/file.csv could not be found. Please check your file location and try again."


## Story #3 - Ensure valid CSV

Since the user has the ability to enter their own CSV's, we need to make sure it has the right information so we can properly process it.

### Acceptance Criteria
- [ ] Before processing, ensure csv entered has necessary fields for processing
