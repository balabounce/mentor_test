import { useEffect } from 'react';
import './App.css';
import PersonPage from './pages/PersonPage';
import UndergroundMapPage from './pages/UndergroundMapPage';
import TimerPage from './pages/TimerPage';
import {  Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import { incrementTime, setTime } from './app/reducers/timerSlice';

function App() {
  const dispatch = useDispatch();
  const seconds = useSelector((state: RootState) => state.timer.seconds);
  
  useEffect(() => {
    const seconds = Number(localStorage.getItem('timer')) || 0;
    if (seconds) {
      dispatch(setTime(seconds))
    }
    const interval = setInterval(() => {
      dispatch(incrementTime())
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  useEffect(() => {
    if (window.localStorage !== undefined) {
      localStorage.setItem('timer', `${seconds}`);
    } else {
      console.error('localStorage is not supported in this browser');
    }
  }, [seconds]);

  const NavBar = () => {
    return (
      <>
        <NavLink to="/person">Person</NavLink>
        <NavLink to="/underground">Underground Map</NavLink>
        <NavLink to="/timer">Timer</NavLink>
      </>
    );
  };

  return (
      <div className="App">
        <Routes>
            <Route path='/' element={<NavBar />}/>
            <Route path='/person' element={<PersonPage/>}/>
            <Route path='/underground' element={<UndergroundMapPage />}/>
            <Route path='/timer' element={<TimerPage/>}/>
        </Routes>
      </div>
  );
}

export default App;
