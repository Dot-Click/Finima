import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./configs/theme.config.js";
import store from "./redux/store.js";
import { Provider } from "react-redux";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>
);
