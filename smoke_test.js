Feature('Smoke test');

Scenario('Top level navigation works', (I) => {
  I.amOnPage('/');
  I.see('NHS API developer portal', 'h1');
  
  I.click('About');
  I.see('About', 'h1');

  I.click('Coronavirus');
  I.see('Get the latest NHS information on coronavirus', 'h1');

  I.click('APIs');
  I.see('NHS APIs', 'h1');

  I.click('Widgets');
  I.see('Widgets and tools', 'h1');

  I.click('Documentation');
  I.see('Documentation', 'h1');

  I.click('Support');
  I.see('Support', 'h1');
});
