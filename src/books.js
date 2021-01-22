import React from 'react';
import './App.css';
import Home from './Home';
import background from "./images/old-books.jpg";






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
           <NavLink exact activeClassName="active" to ="index.js">Home</NavLink>
        
         <Switch>
           <Route exact path = "/home" component = {Home}/>
         </Switch>
         </div>
      </header>
      <div class="mid-top" style={{ backgroundImage: `url(${background})` }}>
             <h4>Book Lists</h4>
           </div>
        <div className="App-middle_2" style={{ backgroundImage: `url(${background})` }}>
           
           <div className="mid"  >
           
           <NavLink exact activeClassName="active" to ="/home">Action and Adventure</NavLink>
         
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">Classics</NavLink>
           
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">Comic Book or Graphic Novel</NavLink>
        
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">Detective and Mystery</NavLink>
           
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">Fantasy</NavLink>
 
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">Historical Fiction</NavLink>
         
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">Horror</NavLink>

           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">Literary Fiction</NavLink>

           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">Romance</NavLink>

           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/> <br/> <br/>
           <NavLink exact activeClassName="active" to ="index.js">Science Fiction</NavLink>

           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
           <NavLink exact activeClassName="active" to ="index.js">Short Stories</NavLink>
        
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">Suspense and Thrillers</NavLink>
        
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">Women's Fiction</NavLink>
        

           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">Biographies and Autobiographies</NavLink>
        
        
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           <NavLink exact activeClassName="active" to ="index.js">Cook Books</NavLink>
        
           
        
         <Switch>
           <Route exact path = "/home" component = {Home}/>
         </Switch>
       
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



