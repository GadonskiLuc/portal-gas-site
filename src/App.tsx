import Header from './components/Header';
import Home from './pages/Home';
import Local from './components/Local';

function App() {
  return (
    <div className='flex flex-col'>
      <Header/>
      <Home/>
      <Local/>
    </div>
  );
}

export default App;
