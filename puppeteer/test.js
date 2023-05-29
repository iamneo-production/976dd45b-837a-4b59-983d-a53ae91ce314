const puppeteer = require('puppeteer');
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.click('#signupLink');
      await page.waitForNavigation();
      await page.type('#email', 'test@gmail.com');
      await page.type('#username', 'testuser');
      await page.type('#mobileNumber', '9876543210');
      await page.type('#password', 'Test@123');
      await page.type('#confirmPassword', 'Test@123');
      await page.click('#submitButton');
      await page.waitForNavigation();
      await page.waitForSelector('#loginButton',{timeout:3000});
      console.log('TESTCASE:FE_Signup:success');
    }
     catch(e){
      console.log('TESTCASE:FE_Signup:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
      await page.type('#email', 'test@gmail.com');
      await page.type('#password', 'Test@123');
      await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#logout',{timeout:3000});
      console.log('TESTCASE:FE_Login:success');
    }
     catch(e){
      console.log('TESTCASE:FE_Login:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

 

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    try{
    await page.goto('https://8081-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.type('#email', 'test@gmail.com');
    await page.type('#password', 'Test@123');
    await page.click('#loginButton');
      await page.waitForNavigation();
      await page.waitForSelector('#logout',{timeout:3000});
      await page.click('#UserBookEvent');
      await page.waitForSelector('#eventGrid1',{timeout:3000});
      await page.click('#eventGrid1');
      await page.waitForSelector('#nextPageButton',{timeout:3000});
      await page.click('#nextPageButton');
      await page.waitForSelector('#bookEvent',{timeout:3000});
      console.log('TESTCASE:FE_UserBookEventOperation:success');
    }
     catch(e){
      console.log('TESTCASE:FE_UserBookEventOperation:failure');
    }finally{
      await page.close();
      await browser.close();
    }
    
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
  await page.type('#email', 'test@gmail.com');
  await page.type('#password', 'Test@123');
  await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#logout',{timeout:3000});
    await page.click('#UserViewBookEvent');
    await page.waitForSelector('#viewBookingBody',{timeout:3000});
    await page.click('#logout');
    await page.waitForSelector('#loginButton',{timeout:3000});
    console.log('TESTCASE:FE_UserViewBookingOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_UserViewBookingOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#logout',{timeout:3000});
    await page.click('#adminTheme');
    await page.waitForSelector('#addTheme',{timeout:3000});
    await page.click('#adminFoodMenu');
    await page.waitForSelector('#addItemButton',{timeout:3000});
    console.log('TESTCASE:FE_AdminThemeAndFoodMenuOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_AdminThemeAndFoodMenuOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
  await page.goto('https://8081-bbccbbbafbbadefeafcdfecbcbddcca.project.examly.io/');
  await page.setViewport({
    width:1200,
    height:800,
  })
    await page.type('#email', 'admin@gmail.com');
    await page.type('#password', 'Admin@123');
    await page.click('#loginButton');
    await page.waitForNavigation();
    await page.waitForSelector('#logout',{timeout:3000});
    await page.click('#adminAddOns');
    await page.waitForSelector('#addOnsGrid1',{timeout:3000});
    await page.click('#editOns1');
    await page.waitForSelector('#updateAddOns',{timeout:3000});
    await page.click('#logout');
    await page.waitForSelector('#loginButton',{timeout:3000});
    console.log('TESTCASE:FE_AdminAddOnsOperation:success');
  }
   catch(e){
    console.log('TESTCASE:FE_AdminAddOnsOperation:failure');
  }finally{
    await page.close();
    await browser.close();
  }
  
})();