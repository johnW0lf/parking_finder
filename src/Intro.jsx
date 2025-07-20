import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Intro() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true); // State to trigger exit animation

  useEffect(() => {
    // Set timeout to navigate after 2 seconds
    const timeout = setTimeout(() => {
      setIsVisible(false); // Trigger exit animation
      setTimeout(() => {
        navigate("/choose"); // Navigate after 2 seconds (giving time for the exit animation)
      }, 600); // Allow some time for the exit animation to finish before navigation
    }, 300); // Timeout to trigger the navigation

    return () => clearTimeout(timeout); // Clean up timeout if component unmounts
  }, [navigate]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="intro_title"
          style={{
            minWidth: "90vw",
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }} // Exit animation: Fade out
          transition={{ duration: 0.7 }}
        >
          <motion.div
            style={{
              fontSize: "54px",
            }}
            exit={{ opacity: 1, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: 50 }} // Exit animation: Move down and fade
            transition={{ duration: 0.7 }}
          >
            PARK
          </motion.div>
          <motion.div
            style={{
              fontSize: "78px",
            }}
            exit={{ opacity: 1, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            // exit={{ opacity: 0, y: -50 }} // Exit animation: Move up and fade
            transition={{ duration: 0.5 }}
          >
            ING
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
