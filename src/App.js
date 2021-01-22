import React from 'react';
import './App.css';
import Home from './Home';





import{ BrowserRouter as Router,Route,Link,NavLink,Switch} from "react-router-dom";


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        
        <Link exact to="/" >Developers</Link>
        

         <div className="App-header_middle">
           <NavLink exact activeClassName="active" to ="/home">Home</NavLink>
         
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">APIs</NavLink>
        
         <Switch>
           <Route exact path = "/home" component = {Home}/>
         </Switch>
         </div>
      </header>

        <div className="App-middle">
           <h1> The New York Time Developer Network </h1> 
           <h3> All the</h3> <h3> Fit to Post</h3> 
        </div>

         <div className="App-body-one"> 
           <div className="d_one">
           <h2>Get Started</h2>
            <p>Package One</p>

               </div>

         <div className="d_two">
         <h2>APIs</h2>
        <p>Package Two</p>

         </div>

              <div className="d_three">
             <h2>FAQ</h2>
             <p>Package Three</p>

             </div>
     
         </div>

          <div className="App-body-two"> 
           <div className="d_one">
           <h2>Branding</h2>
            <p>Package One</p>

               </div>

         <div className="d_two">
         <h2>Covid-19 Data</h2>
        <p>Package Two</p>

         </div>

              
     
         </div>

        <footer className="App-footer">
        <nav>
         <a className="App-link" href="index.js">Home</a>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a className="App-link" href="books.js">APIs</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <a className="App-link" href="#">Terms of Service</a>	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
         <a className="App-link" href="#">Branding</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </nav>
        </footer>
    
    </div>
    </Router>
  );
}

export default App;
