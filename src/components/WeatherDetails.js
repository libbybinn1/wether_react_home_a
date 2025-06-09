import React from 'react';

export default function WeatherDetails({ temp, feels_like, humidity }) {
    return (
        <div className="bottom_div">
            <section>
                <span>טמפ' נמדדת</span>
                <span dir="ltr">{temp}°C</span>
            </section>

            <section>
                <span>טמפ' מורגשת</span>
                <span dir="ltr">{feels_like}°C</span>
            </section>

            <section>
                <span>לחות</span>
                <span dir="ltr">{humidity}%</span>
            </section>
        </div>
    );
}
