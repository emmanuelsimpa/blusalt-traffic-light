import { useTraffic } from "@/common/hooks/useTraffic";

export function Traffic() {
  const {
    handleReset,
    handleStart,
    getLightColor,
    streetBState,
    streetAState,
    isRunning,
  } = useTraffic();

  return (
    <div className="h-screen w-screen overflow-hidden flex justify-center items-center">
      <div className="relative w-[40rem] h-[40rem]">
        {/* Main intersection container */}
        <div className="absolute inset-0 flex items-center justify-center w-full">
          {/* Vertical road */}
          <div className="absolute w-32 h-full bg-gray-800 border-x-4 border-yellow-400">
            <div className="absolute top-[10%] w-full text-center left-[-40%] -translate-x-1/2 text-lg font-bold">
              Street A
            </div>
          </div>

          {/* Horizontal road */}
          <div className="absolute h-[9rem] w-full bg-gray-800 border-y-4 border-yellow-400">
            <div className="absolute right-[10%] top-[-15%] -translate-y-1/2 text-lg font-bold">
              Street B
            </div>
          </div>

          {/* Traffic Lights */}
          {/* Top traffic light */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-[8rem] bg-yellow-500 rounded-lg flex flex-col gap-2 p-2 items-center">
            <div
              className={`w-[2rem] h-[2rem] rounded-[100%] transition-colors duration-300 ${getLightColor(
                streetAState,
                "red",
              )}`}
            />
            <div
              className={`w-[2rem] h-[2rem] rounded-[100%] transition-colors duration-300 ${getLightColor(
                streetAState,
                "yellow",
              )}`}
            />
            <div
              className={`w-[2rem] h-[2rem] rounded-[100%] transition-colors duration-300 ${getLightColor(
                streetAState,
                "green",
              )}`}
            />
          </div>

          {/* Bottom traffic light */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-16 h-[8rem] bg-yellow-500 rounded-lg flex flex-col gap-2 p-2 items-center">
            <div
              className={`w-[2rem] h-[2rem] rounded-[100%] transition-colors duration-300 ${getLightColor(
                streetAState,
                "green",
              )}`}
            />
            <div
              className={`w-[2rem] h-[2rem] rounded-[100%] transition-colors duration-300 ${getLightColor(
                streetAState,
                "yellow",
              )}`}
            />
            <div
              className={`w-[2rem] h-[2rem] rounded-[100%] transition-colors duration-300 ${getLightColor(
                streetAState,
                "red",
              )}`}
            />{" "}
          </div>

          {/* Left traffic light */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-[8rem] bg-yellow-500 rounded-lg flex flex-col gap-2 p-2 items-center">
            <div
              className={`w-[2rem] h-[2rem] rounded-[100%] transition-colors duration-300 ${getLightColor(
                streetBState,
                "red",
              )}`}
            />
            <div
              className={`w-[2rem] h-[2rem] rounded-[100%] transition-colors duration-300 ${getLightColor(
                streetBState,
                "yellow",
              )}`}
            />
            <div
              className={`w-[2rem] h-[2rem] rounded-[100%] transition-colors duration-300 ${getLightColor(
                streetBState,
                "green",
              )}`}
            />
          </div>

          {/* Right traffic light */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-[8rem] bg-yellow-500 rounded-lg flex flex-col gap-2 p-2 items-center">
            <div
              className={`w-[2rem] h-[2rem] rounded-[100%] transition-colors duration-300 ${getLightColor(
                streetBState,
                "red",
              )}`}
            />
            <div
              className={`w-[2rem] h-[2rem] rounded-[100%] transition-colors duration-300 ${getLightColor(
                streetBState,
                "yellow",
              )}`}
            />
            <div
              className={`w-[2rem] h-[2rem] rounded-[100%] transition-colors duration-300 ${getLightColor(
                streetBState,
                "green",
              )}`}
            />
          </div>

          {/* Pedestrian signs (hands) */}
          <div className="absolute left-24 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center">
            {streetBState === "red" ? (
              <span className="text-2xl">👟</span>
            ) : (
              <span className="text-2xl">✋</span>
            )}{" "}
          </div>
          <div className="absolute right-24 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center">
            {streetBState === "red" ? (
              <span className="text-2xl">👟</span>
            ) : (
              <span className="text-2xl">✋</span>
            )}{" "}
          </div>

          {/* Pedestrian signs (walking figures) */}
          <div className="absolute top-[24%] left-1/2 -translate-x-1/2 w-8 h-8">
            {streetBState === "green" ? (
              <span className="text-2xl">👟</span>
            ) : (
              <span className="text-2xl">✋</span>
            )}
          </div>
          <div className="absolute bottom-[23%] left-1/2 -translate-x-1/2 w-8 h-8">
            {streetBState === "green" ? (
              <span className="text-2xl">👟</span>
            ) : (
              <span className="text-2xl">✋</span>
            )}
          </div>

          {/* Control buttons */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={!isRunning ? handleStart : handleReset}
              //   disabled={isRunning}
            >
              {!isRunning ? "Start" : "Stop"}
            </button>
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
