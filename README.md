# Weather App

A modern and responsive weather application built using **React** and **Material UI**. This application allows users to search for real-time weather conditions for any city worldwide. It features a dynamic user interface that visually adapts to the current weather conditions (Hot, Cold, or Rainy).

## 🚀 Features

- **Real-time Weather Data**: Fetches up-to-date weather information using the OpenWeatherMap API.
- **City Search**: Users can easily search for weather details by entering a city name.
- **Dynamic UI**: The information card updates its background image and icon based on the weather parameters:
  - ❄️ **Cold**: Temperature ≤ 15°C
  - ☀️ **Hot**: Temperature > 15°C
  - ⛈️ **Rain**: Humidity > 80%
- **Detailed Information**: Displays current temperature, minimum/maximum temperature, humidity, "feels like" temperature, and a textual description of the weather (e.g., "haze", "clear sky").
- **Error Handling**: Gracefully handles invalid city names with user-friendly error messages.
- **Material Design**: Utilizes Material UI components for a clean, professional, and accessible interface.

## 🛠️ Technologies Used

- **React.js**: Frontend library for building the user interface.
- **Vite**: Fast build tool and development server.
- **Material UI (@mui/material)**: Component library for styling and layout.
- **Material UI Icons (@mui/icons-material)**: For weather-specific icons.
- **OpenWeatherMap API**: Source for weather data.

## 📦 Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository** (or navigate to the project folder):
    ```bash
    cd mini-project-vite
    ```

2.  **Install dependencies**:
    Make sure you have Node.js installed, then run:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Click the link provided in the terminal (usually `http://localhost:5173/`) to view the app.

## 📂 Project Structure

```text
src/
├── App.jsx           # Main application component
├── WeatherApp.jsx    # Container component managing state
├── SearchBox.jsx     # Component for city input and API calls
├── InfoBox.jsx       # Component for displaying weather details card
├── main.jsx          # Entry point
└── ...
```

## 🔑 API Configuration

This project uses the OpenWeatherMap API.

*Note: The API key is currently embedded in `SearchBox.jsx`. For a production environment, it is recommended to move this key to a `.env` file.*

## 📸 Usage

1.  Enter the name of a city (e.g., "Delhi", "London", "New York") in the search bar.
2.  Click the **SEARCH** button.
3.  View the updated weather card with the temperature, humidity, and condition-specific imagery.

---

Developed by **Goutam-Tech**