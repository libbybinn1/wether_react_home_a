import React, { useEffect, useState } from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherDetails from './WeatherDetails';

const API_KEY = '8ee633956bad6ae1965b557a94ecfcba';

export default function WeatherTab({ location }) {
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
          const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=he`;
          const response = await fetch(url);
            const result = await response.json();

            if (response.ok) {
                setWeatherData(result);
            } else {
                setError(result.message);
            }
        } catch (err) {
            setError('שגיאה בעת הבאת הנתונים');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) return <div className="weather-tab" dir="rtl"><p>טוען...</p></div>;
    if (error) return <div className="weather-tab" dir="rtl"><p>שגיאה: {error}</p></div>;

    const { temp, feels_like, humidity } = weatherData.main;
    const description = weatherData.weather[0].description;

    return (
        <div className="weather-tab" dir="rtl">
            <div className="top_div">
                <section>
                    <h2>{location}</h2>
                    <p>{description}</p>
                </section>
                <WeatherIcon feels_like={feels_like} />
            </div>

            <WeatherDetails temp={temp} feels_like={feels_like} humidity={humidity} />
        </div>
    );
}


