// import React, { useState } from "react";
// import DisplayCount from "./Components/DisplayCount";

// const App = () => {
//   const [count, setCount] = useState(5);
//   return (
//     <div className="app">
//       <DisplayCount count={count} />
//     </div>
//   );
// };

// export default App;

// //---------------Pages-------------------
import  "./App.css";
import React from "react";
import {BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Thankyou from "./Pages/Thankyou";
import Contact from "./Pages/Contact"; import ErrorPage from "./Pages/ErrorPage";

function App(){
  return (

<Router>

<Routes>
<Route exact path="/" element={<  Home/>} />
<Route  path="/Home" element={< Home />} />
<Route path="/about" element={< About />}   />
<Route path="/contact" element={< Contact />} />
<Route path="/thankyou" element={< Thankyou />} />
<Route path='*' element={< ErrorPage />} />

</Routes>

</Router>

  )
}
export default App;
