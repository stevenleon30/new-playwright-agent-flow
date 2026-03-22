# SL30 Trading - Test Plan

**Website:** https://sl30trading.lovable.app  
**Date:** March 20, 2026  
**Version:** 1.0

---

## 1. Executive Summary

SL30 Trading is a Forex trading education platform offering courses, coaching, and community features with three pricing tiers (Free, Core Trader, Private Coaching). This test plan covers functional, UI/UX, accessibility, and performance testing.

---

## 2. Scope

### In Scope
- Homepage functionality
- Authentication (Sign In / Sign Up)
- Course catalog navigation
- Pricing page
- Book coaching functionality
- Legal pages (Terms, Privacy, Risk Disclaimer)
- Chart Analysis page
- Navigation and footer links
- Responsive design
- Cross-browser compatibility

### Out of Scope
- Payment processing (Stripe/payment gateway)
- Email delivery verification
- Third-party integrations internal APIs

---

## 3. Test Environment

| Environment | URL |
|-------------|-----|
| Production | https://sl30trading.lovable.app |

### Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Devices
- Desktop (1920x1080, 1440x900)
- Tablet (768x1024)
- Mobile (375x667, 414x896)

---

## 4. Test Cases

### 4.1 Homepage Tests

| TC ID | Test Case | Priority | Steps | Expected Result |
|-------|-----------|----------|-------|-----------------|
| HP-001 | Homepage loads successfully | Critical | Navigate to homepage | Page loads within 3s, hero section visible |
| HP-002 | Hero section displays correctly | High | Check hero section | Title "Simple Strategies for the Everyday Forex Trader" visible |
| HP-003 | Video play button functional | Medium | Click play button | Video modal/player opens |
| HP-004 | "Start Free" CTA button works | Critical | Click "Start Free" button | Redirects to /auth page |
| HP-005 | "Explore Courses" CTA works | High | Click "Explore Courses" | Scrolls to course catalog section |
| HP-006 | Course count badge displays | Low | Check badge | Shows "11+ Courses" |
| HP-007 | Educational disclaimer visible | High | Check below hero | Risk disclaimer text visible |

### 4.2 Navigation Tests

| TC ID | Test Case | Priority | Steps | Expected Result |
|-------|-----------|----------|-------|-----------------|
| NAV-001 | Logo navigates to homepage | High | Click logo | Redirects to homepage |
| NAV-002 | "Sign In" link works | Critical | Click "Sign In" | Redirects to /auth |
| NAV-003 | Courses anchor link works | High | Click "Courses" | Scrolls to #courses section |
| NAV-004 | Pricing anchor link works | High | Click "Pricing" | Scrolls to #pricing section |
| NAV-005 | Mobile navigation toggle | High | Click hamburger menu on mobile | Mobile menu opens |
| NAV-006 | Mobile menu links work | High | Click links in mobile menu | Navigate to correct sections |

### 4.3 Course Catalog Tests

| TC ID | Test Case | Priority | Steps | Expected Result |
|-------|-----------|----------|-------|-----------------|
| CC-001 | Course catalog section visible | High | Scroll to courses | "Course Catalog" heading visible |
| CC-002 | Course cards display | High | View course section | Course cards with titles visible |
| CC-003 | Free courses accessible | Critical | Identify beginner courses | "What Is Forex", "Risk Responsibility" courses available |
| CC-004 | Course progress tracking visible | Medium | Check course features | Progress tracking feature mentioned |

### 4.4 Pricing Page Tests

| TC ID | Test Case | Priority | Steps | Expected Result |
|-------|-----------|----------|-------|-----------------|
| PR-001 | Pricing section displays | High | Scroll to pricing | "Simple Pricing" heading visible |
| PR-002 | Free tier displays correctly | Critical | Check Free plan | $0/forever, lists beginner courses |
| PR-003 | Core Trader tier displays | Critical | Check Core Trader | $25/month, "Most Popular" badge, BETA tag |
| PR-004 | Private Coaching tier displays | Critical | Check Coaching | $50/hour pricing visible |
| PR-005 | Free plan CTA works | Critical | Click "Start Free" on Free plan | Redirects to /auth |
| PR-006 | Core Trader CTA works | Critical | Click "Start Free Beta" | Redirects to /auth |
| PR-007 | Private Coaching CTA works | Critical | Click "Book a Session" | Redirects to /book-coaching |
| PR-008 | Price disclaimer visible | Medium | Check below pricing | USD and cancellation policy text visible |

### 4.5 Authentication Tests

| TC ID | Test Case | Priority | Steps | Expected Result |
|-------|-----------|----------|-------|-----------------|
| AUTH-001 | Auth page loads | Critical | Navigate to /auth | Authentication page loads |
| AUTH-002 | Sign up form displays | Critical | Check sign up form | Email, password fields visible |
| AUTH-003 | Sign in form displays | Critical | Check sign in form | Email, password fields visible |
| AUTH-004 | Toggle between sign in/up | High | Click toggle | Switches between forms |
| AUTH-005 | Form validation - empty fields | High | Submit empty form | Error messages displayed |
| AUTH-006 | Form validation - invalid email | High | Enter invalid email | Email validation error |
| AUTH-007 | Form validation - weak password | Medium | Enter weak password | Password requirements shown |
| AUTH-008 | Successful sign up flow | Critical | Complete sign up | Account created, redirected |
| AUTH-009 | Successful sign in flow | Critical | Enter valid credentials | User logged in, redirected |

### 4.6 Book Coaching Tests

| TC ID | Test Case | Priority | Steps | Expected Result |
|-------|-----------|----------|-------|-----------------|
| BC-001 | Booking page loads | Critical | Navigate to /book-coaching | Booking page loads |
| BC-002 | Calendar/scheduling visible | High | Check page content | Scheduling interface visible |
| BC-003 | Session selection works | High | Select session type | Session selected |
| BC-004 | Date/time picker works | High | Select date and time | Date/time selected |
| BC-005 | Form submission works | Critical | Complete booking | Confirmation displayed |

### 4.7 Chart Analysis Page Tests

| TC ID | Test Case | Priority | Steps | Expected Result |
|-------|-----------|----------|-------|-----------------|
| CA-001 | Chart analysis page loads | High | Navigate to /chart-analysis | Page loads successfully |
| CA-002 | Chart features display | Medium | Check page content | Analysis tools/charts visible |

### 4.8 Legal Pages Tests

| TC ID | Test Case | Priority | Steps | Expected Result |
|-------|-----------|----------|-------|-----------------|
| LP-001 | Terms of Use page loads | High | Navigate to /terms | Terms page loads |
| LP-002 | Privacy Policy page loads | High | Navigate to /privacy | Privacy page loads |
| LP-003 | Risk Disclaimer page loads | High | Navigate to /risk-disclaimer | Risk disclaimer loads |
| LP-004 | Terms content complete | Medium | Review content | Complete terms text visible |
| LP-005 | Privacy content complete | Medium | Review content | Complete privacy text visible |
| LP-006 | Risk disclaimer content | Medium | Review content | Trading risk information visible |

### 4.9 Footer Tests

| TC ID | Test Case | Priority | Steps | Expected Result |
|-------|-----------|----------|-------|-----------------|
| FT-001 | Footer displays | High | Scroll to footer | Footer section visible |
| FT-002 | Quick links work | High | Click each quick link | Navigate to correct pages |
| FT-003 | Legal links work | High | Click legal links | Navigate to legal pages |
| FT-004 | Copyright text visible | Low | Check footer | "© 2026 SL30 Trading" visible |
| FT-005 | Risk disclaimer in footer | High | Check footer | Risk disclaimer text visible |
| FT-006 | Prop firm disclaimer visible | High | Check footer | Prop firm disclaimer text visible |

### 4.10 Community Spotlight Tests

| TC ID | Test Case | Priority | Steps | Expected Result |
|-------|-----------|----------|-------|-----------------|
| CS-001 | Community spotlight accessible | Medium | Navigate to feature | Community content visible |
| CS-002 | Free users can view | High | Login as free user | Read access available |
| CS-003 | Core users can submit | High | Login as Core user | Submit functionality available |

---

## 5. Non-Functional Tests

### 5.1 Performance Tests

| TC ID | Test Case | Priority | Expected Result |
|-------|-----------|----------|-----------------|
| PERF-001 | Homepage load time | Critical | < 3 seconds |
| PERF-002 | Time to First Contentful Paint | High | < 1.8 seconds |
| PERF-003 | Largest Contentful Paint | High | < 2.5 seconds |
| PERF-004 | Cumulative Layout Shift | Medium | < 0.1 |
| PERF-005 | Image optimization | Medium | Images properly compressed |

### 5.2 Accessibility Tests

| TC ID | Test Case | Priority | Expected Result |
|-------|-----------|----------|-----------------|
| A11Y-001 | Keyboard navigation | High | All interactive elements focusable |
| A11Y-002 | Screen reader compatibility | High | Proper ARIA labels |
| A11Y-003 | Color contrast | High | WCAG AA compliant |
| A11Y-004 | Alt text on images | High | All images have alt text |
| A11Y-005 | Form labels | High | All form fields labeled |
| A11Y-006 | Focus indicators | Medium | Visible focus states |

### 5.3 Responsive Design Tests

| TC ID | Test Case | Priority | Expected Result |
|-------|-----------|----------|-----------------|
| RD-001 | Mobile layout | Critical | Content properly stacked |
| RD-002 | Tablet layout | High | Appropriate breakpoint |
| RD-003 | Desktop layout | High | Full-width experience |
| RD-004 | Touch targets | High | Minimum 44x44px on mobile |
| RD-005 | Text readability | High | No horizontal scrolling |

### 5.4 Security Tests

| TC ID | Test Case | Priority | Expected Result |
|-------|-----------|----------|-----------------|
| SEC-001 | HTTPS enforcement | Critical | All pages use HTTPS |
| SEC-002 | XSS prevention | Critical | Input sanitization |
| SEC-003 | CSRF protection | Critical | Token validation |
| SEC-004 | Secure cookies | High | HttpOnly, Secure flags |

---

## 6. Test Data Requirements

| Data Type | Description |
|-----------|-------------|
| Test User (Free) | Email: testfree@example.com |
| Test User (Core) | Email: testcore@example.com |
| Invalid Email | invalidemail |
| Valid Email | valid@test.com |
| Weak Password | 123 |
| Strong Password | SecurePass123! |

---

## 7. Entry & Exit Criteria

### Entry Criteria
- Test environment accessible
- Test data created
- Test scripts ready
- Browser/device matrix available

### Exit Criteria
- All Critical tests passed
- 95% High priority tests passed
- No blocker bugs open
- Test report generated

---

## 8. Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Auth service downtime | High | Test during stable hours |
| Payment integration issues | High | Out of scope for this plan |
| Third-party dependencies | Medium | Mock external services |
| Browser compatibility | Medium | Test on primary browsers first |

---

## 9. Deliverables

- [ ] Automated test scripts (Playwright)
- [ ] Test execution reports
- [ ] Bug reports (if any)
- [ ] Performance metrics
- [ ] Accessibility audit report

---

## 10. Schedule

| Phase | Duration | Status |
|-------|----------|--------|
| Test Planning | 1 day | ✅ Complete |
| Test Script Development | 3-5 days | 🔄 Pending |
| Test Execution | 2-3 days | 🔄 Pending |
| Bug Fixing & Retest | 1-2 days | 🔄 Pending |
| Final Report | 1 day | 🔄 Pending |

---

## 11. Appendix

### Key URLs

| Page | URL |
|------|-----|
| Homepage | https://sl30trading.lovable.app |
| Authentication | https://sl30trading.lovable.app/auth |
| Book Coaching | https://sl30trading.lovable.app/book-coaching |
| Chart Analysis | https://sl30trading.lovable.app/chart-analysis |
| Terms of Use | https://sl30trading.lovable.app/terms |
| Privacy Policy | https://sl30trading.lovable.app/privacy |
| Risk Disclaimer | https://sl30trading.lovable.app/risk-disclaimer |

### Pricing Tiers Summary

| Tier | Price | Key Features |
|------|-------|--------------|
| Free | $0 | Beginner courses, progress tracking, community access |
| Core Trader | $25/mo | Full library, submit to spotlight, priority support |
| Private Coaching | $50/hr | 1-on-1 sessions, strategy review, real-time analysis |
