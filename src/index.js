import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_es from "./translations/es/common.json";
import "bootstrap/dist/css/bootstrap.min.css";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      common: common_en,
    },
    es: {
      common: common_es,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
