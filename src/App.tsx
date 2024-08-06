import Header from './components/Header';
import Home from './pages/Home';
import Local from './components/Local';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className='bg-gray-extra-light flex flex-col'>
      <Header/>
      <Home/>
      <Local/>
      <ProductList/>
    </div>
  );
}

export default App;
