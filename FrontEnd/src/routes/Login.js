
import Footer from "../components/Footer";

import Navbar from "../components/Navbar";
import f1 from "../assets/logo.png"
import f2 from "../assets/facebook.png"
import f3 from "../assets/Instagram.png"
import f4 from "../assets/twitter.png"
import f5 from "../assets/linkedin.png"


function Login (){
    return (
        <div>
        <Navbar />
        
        <div className="nav">
                    <div className="logo">
                        <img src={f1} className="img"/>
                       
                    </div>
                    
            </div>
            
            
            <div>

    <form>
            <center><h1 class="log">Login</h1>
            <div class="pol">
    
    <h2><input class="textbox" type="text" placeholder="Enter your email"/></h2><br/>
    <h2><input class="textbox" type="password" placeholder="Enter your Password"/></h2><br/>
    <button class="button" type="button">Login</button><br/><br/>
    <label class="textbox1">Remeber me?</label><input class="checkbox" type="checkbox"/>
    </div>
    
    </center>
    
    {/* </div> */}
    
        </form>
    
    
           
                </div>
            
        
        <Footer />
       
       
        </div>
    );


}
export default Login;