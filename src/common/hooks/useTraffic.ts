import { useEffect, useState } from "react";
import { HALF_CYCLE } from "../constant";

export const useTraffic = () => {
  const [streetAState, setStreetAState] = useState("green");
  const [streetBState, setBStreetState] = useState("red");
  const [isRunning, setIsRunning] = useState(false);
  const [cycle, setCycle] = useState(0);

  // Reset function
  const handleReset = () => {
    setIsRunning(false);
    setStreetAState("green");
    setBStreetState("red");
    setCycle(0);
  };

  // Start function
  const handleStart = () => {
    setIsRunning(true);
  };

  // Main traffic light logic
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isRunning) {
      timer = setInterval(() => {
        setCycle((prevCycle) => (prevCycle + 1) % 4);
      }, HALF_CYCLE);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  // Update lights based on cycle
  useEffect(() => {
    switch (cycle) {
      case 0: // Initial state: A green, B red
        setStreetAState("green");
        setBStreetState("red");
        break;
      case 1: // Both yellow
        setStreetAState("yellow");
        setBStreetState("yellow");
        break;
      case 2: // A red, B green
        setStreetAState("red");
        setBStreetState("green");
        break;
      case 3: // Both yellow again
        setStreetAState("yellow");
        setBStreetState("yellow");
        break;
    }
  }, [cycle]);

  // Helper function to get background color for lights
  const getLightColor = (state: string, color: string) => {
    if (state === color) {
      return {
        red: "bg-red-600",
        yellow: "bg-yellow-400",
        green: "bg-green-600",
      }[color];
    }
    return "bg-gray-400";
  };

  return {
    getLightColor,
    handleStart,
    handleReset,
    streetAState,
    streetBState,
    isRunning,
  };
};
