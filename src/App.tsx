import * as React from "react";
import AppRouter from "./router";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="app w-full h-full flex flex-col overflow-hidden">
      <Header />
      <main className="main flex-grow w-full max-h-full">
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
