//import Main from './layout/main.js';
import MainUser from './pages/MainUser.js'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import MainGet from './pages/MainGet.js';
import MainPost from './pages/MainPost.js';
import MainPut from './pages/MainPut.js';
import MyAbout from './pages/MyAbout';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<MainUser />} />
        <Route path="mainpost" element={<MainPost />} />
        <Route path="mainget" element={<MainGet />} />
        <Route path="mainput" element={<MainPut />} />
        <Route path="about" element={<MyAbout />} />
      </Routes>
    </Router>

    // <div className="App">
    //   {/* <Pro/> */}
    //   <Album/>
    // </div>
  );
}

export default App;
