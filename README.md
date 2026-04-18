# Secure Node.js Authentication System

A robust, secure, and modern authentication web application built with Node.js, Express, and SQLite. This project implements industry-standard security best practices to protect user data and prevent common web vulnerabilities.

## ✨ Features

- **User Authentication**: Secure signup and login flow.
- **Password Hashing**: Uses `bcrypt` for strong password hashing.
- **Persistent Sessions**: Secure session management using `express-session` with SQLite-backed storage.
- **Premium UI**: Glassmorphism design with a responsive, dark-mode aesthetic.
- **Interactive Dashboard**: Account status check and secure logout.

## 🛡️ Security Hardening

This application has been meticulously hardened against common threats:

- **Brute-Force Protection**: Rate limiting on all authentication routes.
- **CSRF Protection**: Comprehensive CSRF token validation on state-changing requests.
- **Secure HTTP Headers**: Integrated `helmet` and custom configurations to disable server info leakage (`X-Powered-By`).
- **Session Hardening**: Hardened cookies with `httpOnly`, `sameSite`, and environment-aware `secure` attributes.
- **Dependency Security**: All third-party libraries are monitored and patched for vulnerabilities.

## 🚀 Getting Started

### Prerequisites

- Node.js (v25+ recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/polosjacket/test-ai-01.git
   cd test-ai-01
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   SESSION_SECRET=your-very-secure-secret-here
   NODE_ENV=development
   ```

### Running the Application

Start the server:
```bash
node index.js
```
The application will be available at `http://localhost:3000`.

## 📂 Project Structure

- `index.js`: Main server entry point and security configuration.
- `db.js`: Database initialization and schema management.
- `public/`: Frontend assets (HTML, CSS, JS).
- `users.db`: SQLite database file (ignored by Git).
- `.snyk`: Snyk security policy configuration.

## 🛠️ Security Audits

We use **Snyk** for continuous security auditing.
- **Snyk Code (SAST)**: 0 issues.
- **Snyk Open Source (SCA)**: 0 issues.

## 📜 License

This project is licensed under the ISC License.
