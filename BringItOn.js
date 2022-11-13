const {Builder, Browser, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://pastebin.com/');
    await driver.findElement(By.id('postform-text')).sendKeys("git config --global user.name  'New Sheriff in Town'", Key.RETURN, "git reset $(git commit-tree HEAD^{tree} -m 'Legacy code')", Key.RETURN, "git push origin master --force");
    await driver.findElement(By.id('select2-postform-format-container')).click();
    await driver.findElement(By.xpath("//*[@class='select2-results__option' and text()='Bash']")).click();
    await driver.findElement(By.id('select2-postform-expiration-container')).click();
    await driver.findElement(By.xpath("//*[@class='select2-results__option' and text()='10 Minutes']")).click();
    await driver.findElement(By.xpath("//*[@id='postform-name']")).sendKeys("how to gain dominance among developers");
    await driver.findElement(By.xpath("//*[@id='w0']/div[5]/div[1]/div[10]/button")).click();
  } finally {
    if (await driver.findElement(By.className("info-top")).getText() =="how to gain dominance among developers") 
    {console.log("check1");} 
    else console.log("fail1");
    if (await driver.findElement(By.className("bash")).getText() =="git config --global user.name  'New Sheriff in Town' git reset $(git commit-tree HEAD^{tree} -m 'Legacy code' git push origin master --force") 
    {console.log("check2");} else console.log("fail2");
    if (await driver.findElement(By.xpath("//*[@class='kw2']")).getCssValue("color") =="rgba(185, 202, 74, 1)") 
    {console.log("check3");} else console.log("fail3");
    await driver.sleep(5000);
    await driver.quit();
  }
})();