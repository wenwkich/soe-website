import { Header } from "./components/header";
import { Web3Provider } from './contexts/Web3Context';
import { AppProvider } from './contexts/AppContext';
import { Page } from "./pages/Page";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 10% 0 10%;
`;

function App() {

  return (
    <Web3Provider>
      <AppProvider>
        <AppWrapper>
          <Header />
          <Page />
        </AppWrapper>
      </AppProvider>
    </Web3Provider>
  );
}

export default App;
