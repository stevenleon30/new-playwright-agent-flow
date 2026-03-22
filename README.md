# New Playwright Agent Flow

End to end Playwright test suite for [sl30trading.lovable.app](https://sl30trading.lovable.app) built using the new Playwright Agent workflow.

## What's Inside

Three AI agents working together to build and maintain tests:

- **Planner** — explores the app and writes a test plan in plain English
- **Generator** — turns the test plan into real Playwright test files
- **Healer** — watches tests run and automatically fixes failing ones

## Test Coverage

- Login and authentication
- Homepage and hero section
- Course catalog
- Pricing plans
- Navigation and footer
- Legal pages
- Accessibility

## How to Run

Install dependencies:
npm install
npx playwright install

Run all tests:
npx playwright test tests/sl30trading/ --headed

View the report:
npx playwright show-report

## Setup

Copy testData.example.ts to testData.ts and add your credentials:
cp tests/fixtures/testData.example.ts tests/fixtures/testData.ts

Never commit testData.ts — it is gitignored to protect your credentials.

## Built With

- Playwright Test Agents
- GitHub Copilot Agent Mode
- VS Code
- TypeScript
