const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://pastebin.com/');
    await driver.findElement(By.id('postform-text')).sendKeys("Hello from WebDriver");
    await driver.sleep(1000);
    await driver.findElement(By.id('select2-postform-expiration-container')).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@class='select2-results__option' and text()='10 Minutes']")).click();
    await driver.sleep(1000);
    await driver.findElement(By.xpath("//*[@id='postform-name']")).sendKeys("helloweb");
    await driver.findElement(By.xpath("//*[@id='w0']/div[5]/div[1]/div[10]/button")).click();
  } finally {
    await driver.sleep(5000);
    await driver.quit();
  }
})();