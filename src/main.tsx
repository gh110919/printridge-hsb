import { ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./entry.tsx";
import { rootStore } from "./store/index.ts";

import "./index.css";

const root = document.getElementById("root");

const content: ReactNode = (
  <StrictMode>
    <Provider store={rootStore}>
      <App></App>
    </Provider>
  </StrictMode>
);

createRoot(root!).render(content);
