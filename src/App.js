import './App.css';
import Bar from './components/bar/Bar';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App">
      
      <div className='main'>
        <Main />
      </div>

      <div className='bar'>
        <Bar />
      </div>
      <div className='content'>
        <Content />
      </div>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
