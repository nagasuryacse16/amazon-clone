import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import {auth} from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import Orders from './Components/Orders/Orders';
import Payment from './Components/Payment/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LXqL8SByXBmSuKfJiYKeqAEGSVaO18PezH7sEPvxzOrqoskCDT7vXMTuUH7WKj2KbCf0mjlcuFugofTXLzIOAR200lSIKD9WI"
);

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
          
          <Routes>
            <Route path='/orders' element={<><Header /><Orders/></>}/>
            <Route path='/payment' element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment/>
                </Elements>
              </>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/checkout' element={<><Header /><Checkout /></>}/>
            <Route path='/' element={<><Header /><Home /></>}/>
          </Routes>
        
      </div>
    </Router>  
  );
}

export default App;
