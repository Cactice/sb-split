#!/usr/bin/env python
# coding: utf-8

# In[1]:


from selenium import webdriver
driver = webdriver.Chrome('/Users/yuya/Downloads/chromedriver')


# In[12]:


from flask_cors import CORS, cross_origin
from flask import Flask,request
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/sb')
@cross_origin()
def writeSB():
    driver.implicitly_wait(5)
    driver.get("https://scrapbox.io/artresearch")
    text = request.args.get('text')
    python_button = driver.find_elements_by_xpath("//a[@class='new-button']")[0]
    python_button.click()
    python_text = driver.find_elements_by_xpath("//textarea[@class='text-input line-title']")[0]
    python_text.send_keys(text)
    return 'success'


# In[11]:





# In[14]:





# In[ ]:




