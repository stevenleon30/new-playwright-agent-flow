import { test, expect } from '@playwright/test';

const BASE_URL = 'https://sl30trading.lovable.app';

test.describe('Legal Pages Tests (4.8)', () => {
  
  // LP-001: Terms of Use page loads
  test('LP-001: Terms of Use page loads', async ({ page }) => {
    test.info().annotations.push({
      type: 'test-case-id',
      description: 'LP-001'
    });
    
    // Navigate to Terms page
    await page.goto(`${BASE_URL}/terms`);
    
    // Verify page loaded successfully
    await expect(page).toHaveURL(/\/terms/);
    
    // Verify page title or heading is visible
    const heading = page.locator('h1, h2, [role="heading"]').first();
    await expect(heading).toBeVisible();
    
    console.log('✅ LP-001 PASSED: Terms of Use page loaded successfully');
  });

  // LP-002: Privacy Policy page loads
  test('LP-002: Privacy Policy page loads', async ({ page }) => {
    test.info().annotations.push({
      type: 'test-case-id',
      description: 'LP-002'
    });
    
    // Navigate to Privacy page
    await page.goto(`${BASE_URL}/privacy`);
    
    // Verify page loaded successfully
    await expect(page).toHaveURL(/\/privacy/);
    
    // Verify page heading is visible
    const heading = page.locator('h1, h2, [role="heading"]').first();
    await expect(heading).toBeVisible();
    
    console.log('✅ LP-002 PASSED: Privacy Policy page loaded successfully');
  });

  // LP-003: Risk Disclaimer page loads
  test('LP-003: Risk Disclaimer page loads', async ({ page }) => {
    test.info().annotations.push({
      type: 'test-case-id',
      description: 'LP-003'
    });
    
    // Navigate to Risk Disclaimer page
    await page.goto(`${BASE_URL}/risk-disclaimer`);
    
    // Verify page loaded successfully
    await expect(page).toHaveURL(/\/risk-disclaimer/);
    
    // Verify page heading is visible
    const heading = page.locator('h1, h2, [role="heading"]').first();
    await expect(heading).toBeVisible();
    
    console.log('✅ LP-003 PASSED: Risk Disclaimer page loaded successfully');
  });

  // LP-004: Terms content complete
  test('LP-004: Terms content complete', async ({ page }) => {
    test.info().annotations.push({
      type: 'test-case-id',
      description: 'LP-004'
    });
    
    // Navigate to Terms page
    await page.goto(`${BASE_URL}/terms`);
    
    // Wait for content to load
    await page.waitForLoadState('domcontentloaded');
    
    // Verify complete terms text is visible
    const termContent = page.locator('body');
    const text = await termContent.textContent();
    
    // Check that content is not empty and has reasonable length (indicating complete content)
    expect(text).toBeTruthy();
    expect(text!.length).toBeGreaterThan(100);
    
    // Verify specific legal sections are typically present in terms
    const hasLegalContent = text!.toLowerCase().includes('terms') || 
                            text!.toLowerCase().includes('agreement') ||
                            text!.toLowerCase().includes('user');
    expect(hasLegalContent).toBeTruthy();
    
    console.log('✅ LP-004 PASSED: Terms content is complete and visible');
  });

  // LP-005: Privacy content complete
  test('LP-005: Privacy content complete', async ({ page }) => {
    test.info().annotations.push({
      type: 'test-case-id',
      description: 'LP-005'
    });
    
    // Navigate to Privacy page
    await page.goto(`${BASE_URL}/privacy`);
    
    // Wait for content to load
    await page.waitForLoadState('domcontentloaded');
    
    // Verify complete privacy text is visible
    const privacyContent = page.locator('body');
    const text = await privacyContent.textContent();
    
    // Check that content is not empty and has reasonable length
    expect(text).toBeTruthy();
    expect(text!.length).toBeGreaterThan(100);
    
    // Verify privacy-related keywords are present
    const hasPrivacyContent = text!.toLowerCase().includes('privacy') || 
                              text!.toLowerCase().includes('data') ||
                              text!.toLowerCase().includes('personal');
    expect(hasPrivacyContent).toBeTruthy();
    
    console.log('✅ LP-005 PASSED: Privacy content is complete and visible');
  });

  // LP-006: Risk disclaimer content
  test('LP-006: Risk disclaimer content', async ({ page }) => {
    test.info().annotations.push({
      type: 'test-case-id',
      description: 'LP-006'
    });
    
    // Navigate to Risk Disclaimer page
    await page.goto(`${BASE_URL}/risk-disclaimer`);
    
    // Wait for content to load
    await page.waitForLoadState('domcontentloaded');
    
    // Verify trading risk information is visible
    const riskContent = page.locator('body');
    const text = await riskContent.textContent();
    
    // Check that content exists and has reasonable length
    expect(text).toBeTruthy();
    expect(text!.length).toBeGreaterThan(100);
    
    // Verify risk-related keywords are present (trading risk information)
    const hasRiskContent = text!.toLowerCase().includes('risk') || 
                          text!.toLowerCase().includes('trading') ||
                          text!.toLowerCase().includes('loss') ||
                          text!.toLowerCase().includes('warning');
    expect(hasRiskContent).toBeTruthy();
    
    console.log('✅ LP-006 PASSED: Risk disclaimer content with trading risk information is visible');
  });

  // Additional test: Verify all legal pages are accessible from footer (common pattern)
  test('Legal pages are accessible and properly formatted', async ({ page }) => {
    const legalPages = [
      { url: '/terms', name: 'Terms of Use' },
      { url: '/privacy', name: 'Privacy Policy' },
      { url: '/risk-disclaimer', name: 'Risk Disclaimer' }
    ];

    for (const page_info of legalPages) {
      const page_response = await page.goto(`${BASE_URL}${page_info.url}`);
      
      // Verify successful navigation (200-299 status codes)
      expect(page_response?.status()).toBeLessThan(400);
      
      // Verify page structure
      const heading = page.locator('h1, h2, [role="heading"]').first();
      await expect(heading).toBeVisible({ timeout: 5000 });
      
      console.log(`✅ ${page_info.name} page is properly formatted and accessible`);
    }
  });

});
