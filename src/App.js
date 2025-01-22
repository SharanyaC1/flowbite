import {Allroutes} from './routes/Allroutes'
import './App.css';
import {Header} from './components/Header'
import {Footer} from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header/>
          <Allroutes/>
          <Footer/>
      </header>
    </div>
  );
}

export default App;
