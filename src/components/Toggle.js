import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function OnNOff(){
    console.log(isOn)
    setIsOn((isOn) => !isOn);
  }

  const color = isOn ? "red" : "white";

  return <button style={{ background: color }} onClick={OnNOff}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
