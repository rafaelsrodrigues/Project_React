import React from "react";
import AppRoutes from "./components/routes/routes";
import { GlobalStyle } from "./global.style";

function App() {
  return (
    <div>
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

export default App;
