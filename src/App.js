import { Header } from "./components/header";
import { Web3Provider } from './contexts/Web3Context';
import { AppProvider } from './contexts/AppContext';
import { Page } from "./pages/Page";

function App() {

  return (
    <Web3Provider>
      <AppProvider>
        <div className="container">
          <Header />
          <Page />
        </div>
      </AppProvider>
    </Web3Provider>
  );
}

export default App;
