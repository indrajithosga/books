import React from 'react';
import './App.css';
import Home from './Home';
import background from "./images/old-books.jpg";
import background_1 from "./images/Harry_Potter1.jpg";
import background_2 from "./images/Harry_Potter2.jpg";
import background_3 from "./images/Harry_Potter3.jpg";
import background_4 from "./images/Harry_Potter4.png";
import background_5 from "./images/Harry_Potter5.jpg";








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
      <div class="mid-top" style={{ backgroundImage: `url(${background})` }}>
             <h4>Action and Adventure</h4>
           </div>
        <div className="App-middle_3">
           <p>Action and adventure books constantly have you on the edge of your seat with excitement, as your fave main character repeatedly finds themselves in high stakes situations. The protagonist has an ultimate goal to achieve and is always put in risky, often dangerous situations. This genre typically crosses over with others like mystery, crime, sci-fi, and fantasy.</p>
           </div>
           <div className="mid_2"  >
           <div className="sub_1" style={{ backgroundImage: `url(${background_1})` }}>
             <div className="subtext">
               <h6>Name: Harry Potter and the Philosopher's Stone (film). </h6>
               <h6>Autor:  J. K. Rowling.</h6>
               <h6>Catogery: Fiction Novel</h6>
               <h6>Description:  Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, he faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old...</h6>
               <h6>Price: $20.19</h6>
               <button className="btn">Want to buy</button>
             </div>
             </div>
           <div className="sub_2" style={{ backgroundImage: `url(${background_2})` }}>
           <div className="subtext">
               <h6>Name: Harry Potter and the Chamber of Secrets</h6>
               <h6>Autor:  J. K. Rowling.</h6>
               <h6>Catogery: Fantacy Novel</h6>
               <h6>Description:   Harry's second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school's corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks that leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks...</h6>
               <h6>Price: $22.00</h6>
               <button className="btn">Want to buy</button>
             </div>
             </div>
           <div className="sub_3" style={{ backgroundImage: `url(${background_3})` }}>
           <div className="subtext">
               <h6>Name:Harry Potter and the Prisoner of Azkaban</h6>
               <h6>Autor:  J. K. Rowling.</h6>
               <h6>Catogery: Fantacy Novel</h6>
               <h6>Description:  Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort's old allies...  </h6>
               <h6>Price: $22.12</h6>
               <button className="btn">Want to buy</button>
             </div>
             </div>
           <div className="sub_4" style={{ backgroundImage: `url(${background_4})` }}>
           <div className="subtext">
               <h6>Name: Harry Potter and the Goblet of Fire </h6>
               <h6>Autor:  J. K. Rowling.</h6>
               <h6>Catogery: Fantacy Novel</h6>
               <h6>Description:  Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry's name into the Triwizard Tournament, in which he is forced to compete...</h6>
               <h6>Price: $25.14</h6>
               <button className="btn">Want to buy</button>
             </div>
             </div>
           
           <div className="sub_5" style={{ backgroundImage: `url(${background_5})` }}>
           <div className="subtext">
               <h6>Name: Harry Potter and the Order of the Phoenix</h6>
               <h6>Autor:  J. K. Rowling.</h6>
               <h6>Catogery: Fantacy Novel</h6>
               <h6>Description:  Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. It sold five million copies in the first 24 hours of publication.It is the longest book of the series...</h6>
               <h6>Price: $26.49</h6>
               <button className="btn">Want to buy</button>
             </div>
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



