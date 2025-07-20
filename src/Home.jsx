import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion
import LongContainer from "./LongContainer";
import VerticalContainer from "./VerticalContainer";
import Titlebar from "./TitleBar";
function sortingAlgorithm(data, time, setFunction, setCheapest) {
  let cheapest = {};
  let nearest = data[9];
  let safest = data[5];

  for (let index = 0; index < data.length; index++) {
    if (index == 0) {
      cheapest = data[index];
    } else {
      if (data[index].price < cheapest.price) {
        cheapest = data[index];
      }
    }
  }

  switch (time) {
    case 30:
      setFunction(nearest);
      setCheapest(cheapest);
      break;
    case 1440:
      setFunction(safest);
      setCheapest(cheapest);
      break;
    default:
      setFunction(cheapest);
      setCheapest(cheapest);
      break;
  }
}

export default function Home() {
  const url = `https://par-king-ai-default-rtdb.asia-southeast1.firebasedatabase.app/slots_available.json`;
  let passed_time_data = useParams().id;
  passed_time_data = Number(passed_time_data);
  const [slotList, setSlotList] = useState({});
  const [suggestedValue, setSuggestedValue] = useState({});
  const [cheapest, setCheapest] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSlotList(data);
      })
      .then(() =>
        sortingAlgorithm(
          slotList,
          passed_time_data,
          setSuggestedValue,
          setCheapest
        )
      );
  }, [url, slotList, passed_time_data]);

  return (
    <>
      <Titlebar />
      {/* Suggested Container with animation */}
      <div className="main_body">
        <motion.div
          className="suggested_container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1
            style={{
              marginTop: "130px",
            }}
          >
            Suggested
          </h1>
          <LongContainer
            price={suggestedValue ? suggestedValue.price : "N/A"}
            landmark={
              suggestedValue ? suggestedValue.landmark : "land mark info N/A"
            }
            onClick={() =>
              navigate(
                `/details/${passed_time_data}+${suggestedValue.landmark}+${suggestedValue.price}`
              )
            }
          />
        </motion.div>

        {/* Cheapest Container with animation */}
        <motion.div
          className="cheapest_container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }} // Delay a little more to stagger the appearance
        >
          <h1>Cheapest</h1>
          <LongContainer
            price={cheapest ? cheapest.price : "N/A"}
            landmark={cheapest ? cheapest.landmark : "land mark info N/A"}
            onClick={() =>
              navigate(
                `/details/${passed_time_data}+${cheapest.landmark}+${cheapest.price}`
              )
            }
          />
        </motion.div>
        <h1
          style={{
            marginTop: "50px",
          }}
        >
          All Available
        </h1>
        {/* All Available Containers with animation */}
        <motion.div
          className="all_container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }} // Additional delay for all container to appear last
        >
          {Object.values(slotList).map((data, index) => (
            <VerticalContainer
              price={data ? data.price : "N/A"}
              landmark={data ? data.landmark : "land mark info N/A"}
              key={index}
              onClick={() =>
                navigate(
                  `/details/${passed_time_data}+${data.landmark}+${data.price}`
                )
              }
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}
