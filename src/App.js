import logo from './logo.svg';
import './App.css';
import Content from './Content/Content';
import Headers from './Header/Header';
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App truncate">
      <Headers />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
