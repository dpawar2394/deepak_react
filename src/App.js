import react, { useState } from "react";

const App = () => {

  let time = new Date().toLocaleTimeString();

  const [ctime, setCtime] = useState(time);

  const UpadteTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);

  };
  setInterval(UpadteTime, 1000);
  return (
    <>
    <h1>
      {ctime}
    </h1>
    </>
  );
};
export default App;