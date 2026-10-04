# Small Tools

Small Tools is a lightweight React application built with Vite. It provides a simple dashboard with two small utilities: a counter and a random number generator.

## Overview

This project is designed as a minimal front-end exercise to practice React state management, component composition, and styling in a single-page app. The interface is intentionally simple and polished, with a clean card-based layout and focused functionality.

## Features

- Counter widget with increment, decrement, and reset controls
- Lower bound protection so the count cannot go below zero
- Random number generator that produces values from 1 to 100
- Responsive, single-page layout built with React and custom CSS

## Tech Stack

- React 19
- Vite
- JavaScript (ES modules)
- CSS for styling and layout

## Project Structure

```text
react-applicationn/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── style.css
│   └── components/
│       ├── Counter.jsx
│       └── RandomNumberGenerator.jsx
└── README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal, typically:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
```
Runs the app in development mode with Vite.

```bash
npm run build
```
Builds the production bundle for deployment.

```bash
npm run preview
```
Serves the production build locally for preview.

```bash
npm run lint
```
Runs ESLint to check for code quality issues.

## Usage

- Use the Counter card to increase or decrease the value.
- The counter resets to zero when the Reset button is clicked.
- Click Generate random number to create a new number between 1 and 100.

## Notes

This app contains no backend or database, and it is meant to be a simple front-end prototype or learning project. It is ideal for exploring React state updates and UI component design.
