import React from "react";
import ReactDOM from "react-dom";

// css
import "@src/css/reset.css";
import "@src/css/animation.css";
import "@src/css/common.css";

// components
import AppRoutes from "@src/routes/AppRoutes";

// theme
import CustomThemeProvider from "./src/utils/CustomThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <CustomThemeProvider>
      <AppRoutes />
    </CustomThemeProvider>
  </React.StrictMode>,
  document.querySelector("#root"),
);
