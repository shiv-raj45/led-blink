import "./App.css";
import * as mqtt from "mqtt/dist/mqtt.min";
import { useEffect, useState } from "react";
import { configureAbly, useChannel } from "@ably-labs/react-hooks";
function App() {
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {}, []);
  configureAbly({
    key: "nwRYQw.bLdR4g:-J0puQdH18uoob6EEbK1SQih0zz1USTQggYSU1EJucM",
    clientId: Math.random().toString(36).substring(7),
  });
  const [channel] = useChannel(
    "your-channel-name",
    "test-message",
    (message) => {
      console.log(message);
      // Only logs messages sent using the `test-message` message type
    }
  );
  const handleClick = () => {
    const data = isOn ? 0 : 1;
    channel.publish("data",`${data}`);
    setIsOn((isOn) => !isOn);
  };
  return (
    <div className="w-full h-screen bg-slate-900 flex justify-center items-center">
      <button
        onClick={handleClick}
        className="bg-red-500 text-white px-4 py-2 rounded-md"
        style={{
          boxShadow: `  ${
            isOn
              ? ` inset 0 0 50px #fff,
    inset 20px 0 80px #f0f,
    inset -20px 0 80px #0ff,
    inset 20px 0 300px #f0f,
    inset -20px 0 300px #0ff,
    0 0 50px #fff,
    -10px 0 80px #f0f,
    10px 0 80px #0ff`
              : ""
          }`,
        }}
      >
        {isOn ? "turn off" : "turn on"}
      </button>
    </div>
  );
}

export default App;
