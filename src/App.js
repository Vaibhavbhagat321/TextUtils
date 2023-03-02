import "./App.css";
// import About from "./components/About";
import Navbars from "./components/Navbars";
import TextForms from "./components/TextForms";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleModeBlueDark = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1f1238";
      showAlert("Blue Light Mode Enabled.", "success");
      document.getElementById("flexSwitchCheckDefaultG").disabled = true;
      document.getElementById("flexSwitchCheckDefaultP").disabled = true;
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled.", "success");
      document.getElementById("flexSwitchCheckDefaultG").disabled = false;
      document.getElementById("flexSwitchCheckDefaultP").disabled = false;
    }
  };

  const toggleModeGreenDark = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1a4431";
      showAlert("Green Light Mode Enabled.", "success");
      document.getElementById("flexSwitchCheckDefaultB").disabled = true;
      document.getElementById("flexSwitchCheckDefaultP").disabled = true;
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled.", "success");
      document.getElementById("flexSwitchCheckDefaultB").disabled = false;
      document.getElementById("flexSwitchCheckDefaultP").disabled = false;
    }
  };

  const toggleModePinkDark = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#60143a";
      showAlert("Pink Light Mode Enabled.", "success");
      document.getElementById("flexSwitchCheckDefaultG").disabled = true;
      document.getElementById("flexSwitchCheckDefaultB").disabled = true;
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled.", "success");
      document.getElementById("flexSwitchCheckDefaultG").disabled = false;
      document.getElementById("flexSwitchCheckDefaultB").disabled = false;
    }
  };

  return (
    <>
      <Navbars
        title="TextUtils"
        mode={mode}
        toggleBMode={toggleModeBlueDark}
        toggleGMode={toggleModeGreenDark}
        togglePMode={toggleModePinkDark}
      />
      <Alert alert={alert} />
      <TextForms
        heading="Enter the text to analyze:"
        mode={mode}
        showAlert={showAlert}
      />
      {/* <About /> */}
    </>
  );
}

export default App;
