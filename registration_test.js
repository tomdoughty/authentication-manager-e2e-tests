Feature('Registration test');

const email = 'thomashdoughty@gmail.com';

Scenario('I can navigate to registration page', (I) => {
  I.amOnPage('/');
  I.click('Login');
  I.see('Sign in', 'h1');
  I.click('Sign up now');
  I.see('Registration form', 'h1');
});

Scenario('Registration page shows an error when populating no fields', (I) => {
  I.amOnPage('/register');
  I.see('Registration form', 'h1');
  I.click('Submit');
  I.see('Please select a platform.', 'a');
});

Scenario('Registration page shows an error when populating only some fields', (I) => {
  I.amOnPage('/register');
  I.see('Registration form', 'h1');
  I.fillField('Email', email);
  I.fillField('Alternative email', email);
  I.click('Submit');
  I.see('Please select a platform.', 'a');
});
