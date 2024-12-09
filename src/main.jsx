import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { theme } from "./configs/theme.config.js";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "mantine-react-table/styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <Toaster position="bottom-right" richColors />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </MantineProvider>
);
