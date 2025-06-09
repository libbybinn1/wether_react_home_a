import React from 'react';
import WeatherTab from '../components/Weather_tab'
import '../style/main.css';

export default function Main() {
    return (
        <div>
            <h1>תחזית מסביב לעולם</h1>
            <div className='main_component'>
                <WeatherTab location="ניו יורק" />
                <WeatherTab location="לונדון" />
                <WeatherTab location="אלסקה" />
                <WeatherTab location="אילת" />
            </div>
        </div>
    );
}
