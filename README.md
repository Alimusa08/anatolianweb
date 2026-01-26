# Anatolian Nile - B2B Logistics Website

This is a modern, professional B2B website for **Anatolian Nile**, a logistics and international trade company. It features a unique, scroll-controlled 3D globe experience.

## Features
- **Scroll-Controlled Globe**: A realistic 3D globe that rotates and activates trade routes based on your scroll position.
- **Premium B2B Design**: Clean, minimal layout using brand colors (Orange, Red, Purple, Navy).
- **Responsive Navigation**: Mobile-friendly navigation and layout.
- **Global Presence Visualization**: Dynamic trade corridors and hub network descriptions.

## How to Run Locally

Since this is a static website, you can run it in a few ways:

### Option 1: Using Node.js (Recommended)
If you have Node.js installed, the easiest way is to use `serve`:

```powershell
npx serve
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Using Python
If you have Python installed:

```powershell
# Python 3
python -m http.server 8000
```
Then open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 3: VS Code Live Server
If you are using VS Code, you can install the "Live Server" extension and click "Go Live" at the bottom right.

### Option 4: Direct Opening
You can technically double-click `index.html` to open it in your browser. However, for the best performance with the high-resolution PNG frames, we recommend using one of the server options above.

## Project Structure
- `index.html`: Main page structure and scroll stages.
- `css/styles.css`: Modern design system and globe positioning.
- `js/main.js`: Scroll-driven logic and image preloading.
- `images/globe/`: 40 high-resolution PNG frames for the 3D globe.
