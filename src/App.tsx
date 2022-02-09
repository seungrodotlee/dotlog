import * as React from "react";
import AppRouter from "./router";

const App: React.FC = () => {
  return (
    <div className="app w-full h-full">
      <AppRouter />
    </div>
  );
};

export default App;
