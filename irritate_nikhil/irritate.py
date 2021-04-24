from selenium import webdriver

driver = webdriver.Chrome('./chromedriver')

URL = 'https://slide-change-notification.vercel.app/'
driver.get(URL)

command = 'function click() { document.getElementsByTagName("Button")[0].click() }; setInterval(click, 5000);'
driver.execute_script(command)
