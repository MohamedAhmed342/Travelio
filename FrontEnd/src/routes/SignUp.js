
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


import m1 from "../assets/logo.png"



function Sign(){
        return(
            <div>
                <Navbar/>
                <div className="nav">
                    <div className="logo">
                        <img src={m1} className="img"/>
                      
                    </div>
                    
            </div>
            
            <div>
    <form>
<center><h1 class="log">Register</h1>
<div class="pol">
<h2><input class="textbox" type="text" placeholder="Enter your first name"/></h2><br/>

<h2><input class="textbox" type="text" placeholder="Enter your last name"/></h2><br/>
<h2><input class="textbox" type="email" placeholder="Enter your email"/></h2><br/>
<h2><input class="textbox" type="password" placeholder="Enter your password"/></h2><br/>
<h2><input class="textbox" type="password" placeholder="Confirm your password"/></h2><br/>
<h2><input class="textbox" type="text" placeholder="Enter your phone number"/></h2><br/>

<button class="button" type="button">Register</button><br/><br/>
<label class="textbox1">Remeber me?</label><input class="checkbox" type="checkbox"/></div>

</center>

{/* </div> */}

</form>



</div>
            
               
            
<Footer/>
            
            </div>
          
        )
        
    }
    export default Sign;
   