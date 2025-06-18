# 🧪 Saucedemo UI Automation Tests

This is a UI automation project for [SauceDemo.com](https://www.saucedemo.com), built using **JavaScript**, **Playwright**, and the **Page Object Model (POM)**.

The goal of this project is to demonstrate practical UI automation testing skills for a QA portfolio.

---

## ✅ Features

- UI automation using **JavaScript** and **Playwright**
- Automated login tests (valid and invalid scenarios)
- Organized test files by feature (Login, Cart, Checkout, Sort)
- Clean test structure using **Page Object Model (POM)**
- Runs cross-browser tests (Chromium, Firefox, WebKit) out of the box
- Includes visual HTML reports for test runs

---

## 🔧 Tech Stack

| Tool       | Purpose                    |
|------------|----------------------------|
| JavaScript | Programming language       |
| Playwright | End-to-end UI automation   |
| Node.js    | JavaScript runtime         |
| VS Code    | Code editor                |

---

## 🧪 Test Coverage

### 🔐 Login
- ✅ Valid login
- ✅ Invalid login
- ✅ Empty credentials

### 🛒 Cart
- ✅ Add item to cart
- ✅ Add multiple items
- ✅ Verify cart badge updates

### 📦 Inventory
- ✅ Sort products by price (low to high)
- ✅ Validate price order after sorting

### 💳 Checkout
- ✅ Checkout with valid data
- ✅ Error on missing postal code
- ✅ Complete checkout and verify confirmation

---

## 📌 Notes

- The site under test is a **public demo app** provided by Sauce Labs.
- Credentials used in tests:
  - `Username: standard_user`
  - `Password: secret_sauce`
- Tests are intentionally beginner-friendly for **learning and portfolio** purposes.
- Run tests using:
  ```bash
  npx playwright test

---

%%👨‍🎓 Author
Georgi Dimitrov
Junior QA Engineer
🎓 Graduate of the QA Engineering Program at SoftUni
📧 georgi.dimitrov1170@gmail.com
