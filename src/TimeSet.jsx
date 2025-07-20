import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TimeSet() {
  const time_array = [
    "30 minutes",
    "1 hour",
    "1 hour 30 minutes",
    "2 hours",
    "2 hours 30 minutes",
    "3 hours",
    "3 hours 30 minutes",
    "4 hours",
    "4 hours 30 minutes",
    "5 hours",
    "5 hours 30 minutes",
    "6 hours",
    "1 day",
    "2 days",
  ];
  const time_dict = {
    "30 minutes": 30,
    "1 hour": 60,
    "1 hour 30 minutes": 90,
    "2 hours": 120,
    "2 hours 30 minutes": 150,
    "3 hours": 180,
    "3 hours 30 minutes": 210,
    "4 hours": 240,
    "4 hours 30 minutes": 270,
    "5 hours": 300,
    "5 hours 30 minutes": 330,
    "6 hours": 360,
    "1 day": 1440,
    "2 days": 2880,
  };

  const navigate = useNavigate();
  const [timeInput, setTimeInput] = useState(30); // Default to first option

  return (
    <>
      <div className="title">
        How long are you going to use the parking slot?
      </div>

      <div className="choose_time_container">
        <select
          name="choose_time"
          id="choose_time"
          value={timeInput}
          onChange={(e) => setTimeInput(e.target.value)} // ✅ Fix updating state
        >
          {time_array.map((data, index) => (
            <option value={time_dict[data]} key={index}>
              {data}
            </option>
          ))}
        </select>
      </div>

      <div className="continue_container">
        <button onClick={() => navigate(`/home/${timeInput}`)}>Continue</button>
      </div>
    </>
  );
}
