import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ColorModeScript, ChakraProvider, theme } from "@chakra-ui/react";
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Store, {Persistor} from 'Store'

ReactDOM.render(
  <Provider store={Store}>
    <PersistGate loading={null} persistor={Persistor}>
      <ColorModeScript initialColorMode="light" />
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
