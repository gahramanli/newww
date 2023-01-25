import './App.css';
import FirstPage from './Components/FirstPage';
import { Outlet} from "react-router-dom";


function App() {
  return (
    <>
      <FirstPage />
      <Outlet />

    </>
  );
}

export default App;
