import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./style/globalStyle";
import Router from "./router/Router";
import { Wrapper } from "./style/wrapper";
import { Provider } from "react-redux";
import store from "./reducers";

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Wrapper>
        <BrowserRouter basename={PUBLIC_URL}>
          <Router />
        </BrowserRouter>
      </Wrapper>
    </Provider>
  );
}

export default App;
