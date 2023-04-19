import './App.css';
import Navigation from './components/navbar/Navbar'
import ViewDiagrams from './components/customer/Diagrams';
import ElectricityUsage from './components/customer/ElectricityUsage'
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import NewsPage from './components/news/NewsPage';

import { Routes, Route} from 'react-router-dom'
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="container-wrap">
      <Navigation/>
   
        <Routes>
          <Route exact path = "/" element={<Main />}> </Route>
          <Route exact path = "/news" element={<NewsPage />}> </Route>

          <Route exact path = "/meter1" element={<ViewDiagrams id= "2AE445BF"/>}> </Route>
          <Route exact path = "/meter2" element={<ViewDiagrams id= "2AE446FF"/>}> </Route>
          <Route exact path = "/usage" element={< ElectricityUsage />}> </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;