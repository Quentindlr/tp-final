import logo from './logo.svg';
import './App.css';
import { BrowserRouter, useNavigate } from "react-router-dom"
import AppAnnonce from './components/app-annonce';

const FakeBrowser = (props) => {
  const navigate = useNavigate()
  return (
    <AppAnnonce navigate={navigate}></AppAnnonce>
  )
}
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FakeBrowser></FakeBrowser>
      </BrowserRouter>

    </div>
  );
}

export default App;
