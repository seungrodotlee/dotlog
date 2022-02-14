import * as React from "react";
import AppRouter from "./router";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { toggleTheme, setTheme } from "./store/modules/theme";

const App: React.FC = () => {
  return (
    <div className="app w-full h-full flex flex-col overflow-hidden">
      <header className="w-full">
        <div className="flex justify-between container py-4">
          <Link to="/main" className="logo flex items-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
            <p className="text-xl font-bold ml-[2px]">log</p>
          </Link>
        </div>
      </header>
      <main className="main flex-grow w-full max-h-full">
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
