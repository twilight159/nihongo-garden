const { test, expect } = require('@playwright/test');

for (const device of [
  { name: 'iPhone', viewport: { width: 390, height: 844 } },
  { name: 'iPad', viewport: { width: 820, height: 1180 } },
]) {
  test(`${device.name} core flow`, async ({ page }) => {
    await page.setViewportSize(device.viewport);
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://127.0.0.1:8080', { waitUntil: 'networkidle' });
    await expect(page.locator('#home h1')).toContainText('A little Japanese');
    await page.locator('[data-deck="daily"]').first().click();
    await expect(page.locator('#cardJapanese')).toBeVisible();
    await page.locator('#flashcard').click();
    await expect(page.locator('#cardMeaning')).toBeVisible();
    await page.locator('[data-rate="know"]').click();
    await page.locator('.bottom-nav [data-nav="home"]').click();
    await page.locator('[data-start="quick"]').click();
    await page.locator('.answer').first().click();
    await expect(page.locator('#nextQuestion')).toBeEnabled();
    expect(errors).toEqual([]);
  });
}
