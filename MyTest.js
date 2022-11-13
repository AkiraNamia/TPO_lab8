const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://markformelle.by/');
    await driver.findElement(By.xpath('/html/body/div[5]/div/div[1]/button')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath('/html/body/div[5]/div/div[1]/div[3]/ul/li[2]/a')).click();
    await driver.sleep(2000);

    await driver.findElement(By.xpath('/html/body/div[5]/div/div[1]/div[3]/ul/li[2]/ul/li[5]/a/span')).click();
    await driver.sleep(2000);

    await driver.findElement(By.xpath('/html/body/div[5]/div/div[1]/div[3]/ul/li[2]/ul/li[5]/ul/li[3]/a/span')).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//*[@class='linefil scn']")).click()
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//*[@data-sort='down']")).click()
  } finally {
    await driver.sleep(5000);
    await driver.quit();
  }
})();