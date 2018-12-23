# sb-split
split md file to scrapbox appropriate format

# What is this

It splits md files to an apprropriate file for scrapbox.
<br>
By default, it will detect sections with 6 asterisk (eg. [****** 70s]) and add a hashtag of the parent section with 7 asterisk(eg. [******* aesthetics]).


# Installation
Install chrome Driver
https://chromedriver.storage.googleapis.com/index.html?path=2.45/


backend (Automatically posts to scrapbox using selenium)
```
cd backend
pip install -r requirements.txt
vim server.py //change webdriver directory and url to whatever is appropriate
```

frontend
```
cd frontend
npm i
```

# How to run
Both backend and frontend is needed to run the app.

backend
```
cd backend
FLASK_APP=server.py flask run
```

frontend
```
cd frontend
npm run dev
```
<img width="1270" alt="screen shot 2018-12-22 at 10 56 47 pm" src="https://user-images.githubusercontent.com/14835424/50375194-e9185080-063c-11e9-9d98-98de6085b3c9.png">

