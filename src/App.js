import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./routes";
import store from "./store";
import { Provider } from "react-redux";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Provider store={store}>
          <HashRouter>{routes}</HashRouter>
        </Provider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
