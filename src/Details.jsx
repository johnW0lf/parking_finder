import { useParams } from "react-router-dom";
import GooglePayButton from "./test";
import { motion } from "framer-motion"; // Import framer-motion
import Titlebar from "./TitleBar";

export default function Details() {
  const passed_data = useParams();
  let processed_data = passed_data.id.split("+");
  let final_data = {
    time_set: processed_data[0],
    landmark: processed_data[1],
    price: processed_data[2],
    total_amount: Number(processed_data[2]) * (Number(processed_data[0]) / 30),
  };

  console.log(processed_data);

  return (
    <>
      <Titlebar />
      <div className="main_body">
        <h1
          style={{
            marginTop: "130px",
          }}
        >
          Booked Slot
        </h1>
        <motion.div
          className="big_container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Total Price Container without animation */}
          <motion.div
            className="total_price_container"
            style={{ fontSize: "36px" }}
          >
            ₹
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              style={{ fontSize: "36px" }}
            >
              {final_data.total_amount}
            </motion.span>
          </motion.div>

          {/* Random Text */}
          <div className="random_text">
            Will be charged for {final_data.time_set / 60} hours
          </div>

          <div className="row2">
            {/* Price Container */}
            <div className="price_container">
              <div style={{ fontSize: "32px" }}>₹{final_data.price}</div>
              <div> /30 minutes</div>
            </div>

            {/* Landmark Container */}
            <div className="landmark_container" style={{ fontSize: "12px" }}>
              {final_data.landmark}
            </div>
          </div>
        </motion.div>
        <div className="continue_container">
          <GooglePayButton amnt={Number(final_data.total_amount)} />
        </div>
      </div>
    </>
  );
}
