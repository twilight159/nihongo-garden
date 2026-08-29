const { test, expect } = require('@playwright/test');

for (const device of [
  { name: 'iPhone', viewport: { width: 390, height: 844 } },
  { name: 'iPad', viewport: { width: 820, height: 1180 } },
  { name: 'iPad landscape', viewport: { width: 1180, height: 820 } },
  { name: 'PC desktop', viewport: { width: 1440, height: 1000 } },
]) {
  test(`${device.name} core flow`, async ({ page }) => {
    await page.setViewportSize(device.viewport);
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto('http://127.0.0.1:8080', { waitUntil: 'networkidle' });
    await expect(page.locator('#home h1')).toContainText('A little Japanese');
    await page.locator('[data-deck="daily"]').first().click();
    await expect(page.locator('#cardJapanese')).toBeVisible();
    await expect(page.locator('#cardRomaji')).not.toBeEmpty();
    await expect(page.locator('#cardUsage')).toContainText('—');
    await page.locator('#learnMoreButton').click();
    await expect(page.locator('#learnMoreButton')).toContainText('Show more');
    await expect(page.locator('#lessonExplanation')).not.toBeEmpty();
    await page.locator('#learnMoreButton').click();
    await expect(page.locator('#speakButton')).toBeEnabled();
    await page.locator('#speakButton').click();
    await expect(page.locator('#flashcard')).not.toHaveClass(/flipped/);
    await page.locator('#flashcard').click();
    await expect(page.locator('#cardMeaning')).toBeVisible();
    await expect(page.locator('#speakButton')).toBeVisible();
    const backBox=await page.locator('#study .back').boundingBox(),cardBox=await page.locator('#flashcard').boundingBox();
    expect(Math.abs(backBox.x-cardBox.x)).toBeLessThan(8);
    const titleBox=await page.locator('#studyTitle').boundingBox();
    expect(Math.abs((titleBox.x+titleBox.width/2)-device.viewport.width/2)).toBeLessThan(8);
    await page.locator('[data-rate="know"]').click();
    for(let card=1;card<6;card++) await page.locator('[data-rate="know"]').click();
    await expect(page.locator('#celebration')).toBeVisible();
    await expect(page.locator('#completedDeckName')).toHaveText('Daily Life');
    await expect(page.locator('.reward-earned')).toContainText('+30 XP');
    await page.locator('#chooseDeck').click();
    await expect(page.locator('#decks')).toBeVisible();
    await page.locator(device.viewport.width>900?'.top-nav [data-nav="home"]':'.bottom-nav [data-nav="home"]').click();
    await page.locator('[data-start="quick"]').click();
    await page.locator('.answer[data-correct="false"]').first().click();
    await expect(page.locator('#feedback')).toContainText('You chose');
    await expect(page.locator('#feedback')).toContainText('means');
    await expect(page.locator('#nextQuestion')).toBeEnabled();
    for(let question=1;question<5;question++){
      await page.locator('#nextQuestion').click();
      await page.locator('.answer').first().click();
    }
    await expect(page.locator('#nextQuestion')).toContainText('Finish');
    await page.locator('#nextQuestion').click();
    await expect(page.locator('#progress')).toBeVisible();
    await expect(page.locator('#xpCount')).not.toHaveText('0');
    await expect(page.locator('.badge.unlocked')).not.toHaveCount(0);
    await page.locator('#progress [data-nav="decks"]').click();
    await expect(page.locator('#decks')).toBeVisible();
    await page.locator('#allDecks [data-deck="patterns"]').click();
    await expect(page.locator('#cardUsage')).toBeVisible();
    await expect(page.locator('#cardUsage')).toContainText('—');
    await page.locator('#learnMoreButton').click();
    await expect(page.locator('#lessonType')).toHaveText('GRAMMAR GUIDE');
    await expect(page.locator('#lessonExplanation')).toContainText('Attach');
    expect(errors).toEqual([]);
  });
}
