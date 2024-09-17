import Header from './components/Header';
import Home from './containers/Home';
import Local from './containers/Local';
import ProductList from './containers/ProductList';
import GoToTopButton from './components/GoToTopButton'
import Contact from './containers/Contact';

function App() {
  return (
    <div className='bg-gray-extra-light w-full flex flex-col'>
      <Header/>
      <Home/>
      <Local/>
      <ProductList/>
      <Contact />
      <GoToTopButton/>
    </div>
  );
}

export default App;
