import './App.css';
import './script'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';

function App() {
  return (
    <>
    <Sidebar />
    <Header />
    <Main />
    <Footer />
    </>
  );
}

export default App;
