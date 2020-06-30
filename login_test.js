Feature('Login test');

const fakeEmail = 'fake@fake.com';
const fakePassword = 'Password123';

const validEmail = 'ENTER YOUR EMAIL';
const validPassword = 'ENTER YOUR PASSWORD';

Scenario('Login fails when no email or password is given', (I) => {
  I.amOnPage('/');
  I.click('Login');
  I.see('Sign in', 'h1');
  I.click('Sign in');
  I.see('An account with that email address and password does not exist.', 'a');
});

Scenario('Login fails when no email is given', (I) => {
  I.amOnPage('/');
  I.click('Login');
  I.see('Sign in', 'h1');
  I.fillField('Password', fakePassword);
  I.click('Sign in');
  I.see('An account with that email address and password does not exist.', 'a');
});

Scenario('Login fails when no password is given', (I) => {
  I.amOnPage('/');
  I.click('Login');
  I.see('Sign in', 'h1');
  I.fillField('Email', fakeEmail);
  I.click('Sign in');
  I.see('An account with that email address and password does not exist.', 'a');
});

Scenario('Login fails when successful when using a invalid email and password', (I) => {
  I.amOnPage('/');
  I.click('Login');
  I.see('Sign in', 'h1');
  I.fillField('Email', fakeEmail);
  I.fillField('Password', fakePassword);
  I.click('Sign in');
  I.see('An account with that email address and password does not exist.', 'a');
});

Scenario('Login is successful when using a valid email and password', (I) => {
  I.amOnPage('/');
  I.click('Login');
  I.see('Sign in', 'h1');
  I.fillField('Email', validEmail);
  I.fillField('Password', validPassword);
  I.click('Sign in');
  I.see('Your profile', 'h1');
});