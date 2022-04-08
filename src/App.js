import logo from './logo.svg';
import './App.css';
import List from './components/List'; 

function App() {

  const name = 'Fulano de tal'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hora {new Date().toLocaleTimeString()}</h2>
        <p className="name">Olá, {name}!</p>
        <List/>
      </header>
    </div>
  )
}

setInterval(App, 1000);


export default App;
