 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faBolt, faCloud, faSun } from '@fortawesome/free-solid-svg-icons';
 
 export default function WeatherIcon({ feels_like }) {
     if (feels_like < 20)
         return <FontAwesomeIcon icon={faBolt} size="3x" color="darkblue" />;
     if (feels_like <= 30)
         return <FontAwesomeIcon icon={faCloud} size="3x" color="lightgray" />;
     return <FontAwesomeIcon icon={faSun} size="3x" color="gold" />;
 }
 