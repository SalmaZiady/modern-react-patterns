import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const list = ['john','david','jane']

  return (
    <>
    <div className='wrapper'>
    <Header />
    <List list ={list} />
    <Footer />
    </div>
    </>
  );
}

export default App;
