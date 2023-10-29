import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Detail from './pages/Detail';
import MyList from './pages/MyList';


function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/detail/:id' element={<Detail />} />
          <Route exact path='/mylist' element={<MyList />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
