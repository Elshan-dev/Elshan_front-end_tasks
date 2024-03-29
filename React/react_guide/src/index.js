import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataContextComponent } from "Context/DataContext";
import { ModeContextComponent } from "Context/ModeContext";
import { AlertContextComponent } from "Context/AlertContext";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { RootReducer } from "reducers/RootReducer";

const store = createStore(RootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataContextComponent>
    <Provider store={store}>
      <ModeContextComponent>
        <AlertContextComponent>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AlertContextComponent>
      </ModeContextComponent>
    </Provider>
  </DataContextComponent>
);
