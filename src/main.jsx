import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';

// Direkt main app import
import MainApp from "./app";

function App() {
  return (
    <StrictMode>
      <MainApp />
    </StrictMode>
  );
}

createRoot(document.getElementById("enmunasib")).render(<App />);
