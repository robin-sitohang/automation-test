module.exports = {
    'Demo test gabung cermati' : function (browser) {
      browser
        .url('https://www.cermati.com/gabung')
        .waitForElementVisible('body')
        .setValue('input[type=text][name=email]', 'XYZ003@gmail.com')
        .setValue('input[type=password][id=password]', 'ABC12345678')
        .setValue('input[type=password][name=confirmPassword]', 'ABC12345678')
        .setValue('input[type=text][name=firstName]', 'Robin') 
        .setValue('input[type=text][name=lastName]', 'Sitohang') 
        .setValue('input[type=tel][name=mobilePhone]', '081212303124')
        .setValue('input[type=text][name=residenceCity]', 'JAKARTA PUSAT')
        .waitForElementVisible('div.autocomplete-list-item')
        .click('div.autocomplete-list-item')
        .click('button[type=submit]')
        .pause(1000)
        .end();
    }
  };