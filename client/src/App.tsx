import { useContext } from "react";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { AppContext } from "./context/AppContext";

import "./App.css";
import CustomProgressBar from "./components/CustomProgressBar";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const { state } = useContext(AppContext);

  return (
    <div
      className="app d-flex  align-items-center justify-content-center"
      style={{
        height: "100vh",
      }}
    >
      <div
        className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          height: "85%",
          width: "86%",
          maxWidth: "800px",
          backgroundColor: "white",
          borderRadius: 50,
          boxShadow: " 0px 6px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        <ErrorBoundary>
          {state.showResult ? <Result /> : <Quiz />}
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
