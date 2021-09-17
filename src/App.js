import { Header } from "./components/header";
import { Web3Provider } from './contexts/Web3Context';
import { AppProvider } from './contexts/AppContext';
import { Page } from "./pages/Page";

function App() {

  return (
    <Web3Provider>
      <AppProvider>
        <div className="container my-4">
          <Header />
          <div className="d-flex flex-row justify-content-center align-items-center">
            <Page  />
          </div>
        </div>
      </AppProvider>
    </Web3Provider>
  );
}

export default App;
