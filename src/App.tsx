import Header from './components/Header';
import Home from './pages/Home';
import Local from './components/Local';
import ProductList from './components/ProductList';
import GoToTopButton from './components/GoToTopButton'

function App() {
  return (
    <div className='bg-gray-extra-light w-screen flex flex-col'>
      <Header/>
      <Home/>
      <Local/>
      <ProductList/>
      <GoToTopButton/>
    </div>
  );
}

export default App;
