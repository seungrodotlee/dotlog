import * as React from "react";
import { useEffect, useRef, useState } from "react";
import AppRouter from "./router";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { toggleTheme, setTheme } from "./store/modules/theme";
import { delay } from "./helpers/utils";
import Geul from "geul";

const Dot = styled.div`
  animation: dot 1.5s both cubic-bezier(0.8, 0, 0.2, 1);
  animation-delay: 0.3s;

  @keyframes dot {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }
`;

const App: React.FC = () => {
  const location = useLocation();
  const headerLabelElement = useRef(null);
  const [headerActived, setHeaderActived] = useState<boolean>(false);

  const headerBlackList = ["/"];

  const typeHeaderLabel = async () => {
    await delay(2300);
    const headerLabel = new Geul("log", headerLabelElement.current, 100);
    await headerLabel.run();
  };

  const onMount = async () => {
    if (!headerActived) return;
  };

  useEffect(() => {
    onMount();
  }, []);

  useEffect(() => {
    if (!headerActived && !headerBlackList.includes(location.pathname)) {
      setHeaderActived(true);
      typeHeaderLabel();
    }
  }, [location]);

  return (
    <div className="app w-full h-full flex flex-col overflow-hidden">
      {headerActived && (
        <header className="w-full">
          <div className="flex justify-between container py-4">
            <Link to="/articles" className="logo flex items-center">
              <Dot className="w-4 h-4 bg-white rounded-full"></Dot>
              <p
                ref={headerLabelElement}
                className="text-xl font-bold ml-[3px]"
              >
                &nbsp;
              </p>
            </Link>
          </div>
        </header>
      )}

      <main className="main flex-grow w-full max-h-full">
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
