describe('Login flow test', () => {
  beforeEach(async () => {
    //await device.reloadReactNative();
  });

  it('should have login screen', async () => {
    await expect(element(by.id('loginView'))).toBeVisible();
  });
  it('should tap register button', async () => {
    await element(by.id('registerButton')).tap();
  });

  it('should tap forgot password button', async () => {
    await element(by.id('forgotButton')).tap();
  });
  it('should fill login form', async () => {
    await element(by.id('emailInput')).typeText('dinukad@gmail.com');
    await element(by.id('passwordInput')).typeText('test1245\n');
    await element(by.id('loginButton')).tap();


  });


});