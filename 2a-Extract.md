# Extraction Continued

:bulb: READ EVERYTHING BEFORE IMPLEMENTING
 
:bulb: READ EVERYTHING BEFORE IMPLEMENTING
 
:bulb: READ EVERYTHING BEFORE IMPLEMENTING


![Tooth Extraction](https://starwhitedental.com/wp-content/uploads/2020/09/Exractions.jpg)

I see that you were able to get bitcoin information loaded into your code from the CSV. Excellent!

Unfortunately the CSV package we decided to use has a critical upstram vulnerability that we don't want to deal with. Luckily the tech lead has brought this to our attention AND has researched a new library for us to use: 

[csv-load-sync](https://www.npmjs.com/package/csv-load-sync)

This is a much simpler and safer package although it doesn't have as many features. Begin by taking a look at the documention to see how it differs from what you used before.

Our company practices feature branching, so make sure you create a new branch to do this work in. If you need a refresher, here are the steps and some materials to assist:

1. Make sure your main/master branch is up to date. If you have anything to commit or clean up, make sure this happens first. Remember, you can get an idea with what is going on by running:
```bash
git status
```
2. Now we will create a new branch so that we can work on our new feature. Most companies will give you guidance on how to properly name these branches. Our rule is that you can name whatever you want, but you must prepend the name with the number of the markdown file that the feature is assigned. An example branch name for this feature would be ***2a-new-csv-library***. You can create a new branch ***AND*** switch to it with the following command:
```bash
git checkout -b name-of-branch
```
3. Implement your feature! Commit as many times as needed.

4. Submit a PR so others can view your work. Here is a video on creating a PR in GitHub! (Ignore anything you see about forks)

[Creating Pull Requests Video](https://www.youtube.com/watch?v=npnfDwmHKhY)

[Creating Pull Requests Docs](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

5. Have one of your teamates review your code! (Someone in the room or on zoom). If they give you the green light, go ahead and click that big green Merge Pull request button.

## Task #1 - Library Swap

As a developer of the Crytpo Historical Data Parser, I need to be able to ingest data from a CSV into my program so that I can begin to develop features around it.

### Acceptance Criteria
- [ ] The csv-parser library is removed from your code
- [ ] A csv can be read into your code and turned into an Array of Javasctipt Objects using the csv-load-sync library
- [ ] The following csv's are loaded into the application:
1. [Bitcoin](./coin_Bitcoin.csv)
2. [Dogecoin](./coin_Dogecoin.csv)
3. [Ethereum](./coin_Ethereum.csv)

## Bonus Learning

Notice in the 2-Extract.md file you were give a ***Userstory*** that outlined your work. Today we insted have a ***Task***. This is not a mistake. In Agile Scrum these are 2 different types of work. Userstories are things that ultimately provide value to the the end user. Tasks on the other hand are things that need to be done in order to support the delivery of features for the end user, but dont provide the user any direct value. 

[Story vs Task](https://www.mountaingoatsoftware.com/blog/the-difference-between-a-story-and-a-task)