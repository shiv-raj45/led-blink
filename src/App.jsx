import "./App.css";
import * as mqtt from "mqtt/dist/mqtt.min";
import { useEffect } from "react";
import { configureAbly, useChannel, } from "@ably-labs/react-hooks";
function App() {
  useEffect(() => {
    
  }, []);
  configureAbly({
    key: 'nwRYQw.bLdR4g:-J0puQdH18uoob6EEbK1SQih0zz1USTQggYSU1EJucM',
    clientId: Math.random().toString(36).substring(7),
  });
  const [channel] = useChannel("your-channel-name", "test-message", (message) => {
    console.log(message); 
    // Only logs messages sent using the `test-message` message type
});
const handleClick = () => {

  channel.publish("test-message", { text: "message text" });

}
  return (
    <div className="w-full h-screen bg-slate-900 flex justify-center items-center">
      <button  onClick={handleClick}  className="bg-red-500 text-white px-4 py-2 rounded-md">
      
        CLICK ME
      </button>
    </div>
  );
}

export default App;
