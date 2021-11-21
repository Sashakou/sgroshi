import logo from './logo.svg';
import './App.scss';
import {useState, useEffect} from 'react';
import {BrowserRouter, Navigate, NavLink, Route, Routes, useHistory} from "react-router-dom";
import Login from "./components/login/Login";
import Inquiries from "./components/Inquiries/Inquiries";
import InputPage from "./components/InputPage/InputPage";

function App() {
    console.log('app зайшло');
  const [count, setCount] = useState(0);
  const setActive = ({ isActive }) =>(isActive ? " active" : "");
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
              {/*<Route exact path="/">*/}
              {/*    /!* eslint-disable-next-line react/jsx-no-undef *!/*/}
              {/*    <Redirect exact from="/" to="/login" />*/}
              {/*</Route>*/}
              {/*<Redirect exact from="/" to="/login" />*/}
              <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />}  />
            <Route  path="/inquiries" element={ <Inquiries /> } />
            <Route  path="/inputPage" element={ <InputPage /> } />
              <Route
                  path="*"
                  element={
                      <main style={{ padding: "1rem" }}>
                          <p>Таку сторінку незнайдено</p>
                      </main>
                  }
              />

            {/*<Route path="*" render={ () => <LoginContainer /> } />*/}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
