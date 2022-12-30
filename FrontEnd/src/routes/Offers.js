
import Navbar from "../components/Navbar";
import s1 from "../assets/logo.png"
import s2 from "../assets/paris1.jpg"
import s3 from "../assets/location.png"
import s4 from "../assets/greece1.jpg"
import s5 from "../assets/japan.jpg"
import s6 from "../assets/egypttt.jpg"
import s7 from "../assets/Bali.jpg"
import s8 from "../assets/Switzerland.jpg"
import s9 from "../assets/Burj-Khalifa.webp"


import Footer from "../components/Footer";

function Offers (){
    return(
        <div>
        <Navbar />
        <div className="nav">
        <div className="logo">
            <img src={s1} className="img"/>
           
        </div>
      
</div>


<div class="header3"><h1>Discover The World With <br/><span >Trav</span><span >elio </span></h1></div>

<div class="header">
           
            <div class="searchBar">
                <input type="text" placeholder="Where are you going?"/>
                <button data-sb-id="main" type="submit" >
                    <span> Search</span>
                </button>
            </div>
        </div>
        <div>

<div class="container">
            <br/> <br/>
            <h1><b>New year's best Deals</b></h1>
            <br/>
            
            <div class ="box">
                <div class="block1">
                    <img src={s2} className="img" alt="France" />
                    
                    <div class="location" > 
                        <ul>
                            <li>
                                <img src={s3} className="img"/>
                            </li>
                            <li>
                                <h3>Paris</h3>
                            </li>
                        </ul>
                     </div>
                    <div class="topleft"> 30% Sale </div>
                    
                    <p><button><h2><a href="form.html">Book Now</a></h2></button></p>
                </div>

                <div class="block2">
                    <img src={s4} className="img" alt="Greece"  />
                    <div class="location" > 
                        <ul>
                            <li>
                                <img src={s3} className="img"/>
                            </li>
                            <li>
                                <h3>Greece</h3>
                            </li>
                        </ul>
                     </div>
                    <div class="topleft"> 28% Sale </div>
                    <p><button><h2><a href="form.html" >Book Now</a></h2></button></p>
                </div>

                <div class="block3">
                    <img src={s5} className="img" alt="Japan"  />
                    <div class="location" > 
                        <ul>
                            <li>
                                <img src={s3} className="img"/>
                            </li>
                            <li>
                                <h3>Japan</h3>
                            </li>
                        </ul>
                     </div>
                    <div class="topleft"> 21% Sale </div>
                    <p><button><h2><a href="form.html" >Book Now</a></h2></button></p>
                </div>
                <div class="block4">
                    <img src={s6} className="img" alt="Egypt"  />
                    <div class="location"> 
                        <ul>
                            <li>
                                <img src={s3} className="img"/>
                            </li>
                            <li>
                                <h3>Egypt</h3>
                            </li>
                        </ul>
                     </div>
                    <div class="topleft"> 33% Sale </div>
                    <p><button><h2><a href="form.html" >Book Now</a></h2></button></p>
                </div>
                <div class="block5">
                    <img src={s7} className="img" alt="Bali" />
                    <div class="location" > 
                        <ul>
                            <li>
                                <img src={s3} className="img"/>
                            </li>
                            <li>
                                <h3>Bali</h3>
                            </li>
                        </ul>
                     </div>
                    <div class="topleft"> 37% Sale </div>
                    <p><button><h2><a href="form.html" >Book Now</a></h2></button></p>
                </div>
                <div class="block6">
                    <img src={s8} className="img" alt="Switzerland"  />
                    <div class="location" > 
                        <ul>
                            <li>
                                <img src={s3} className="img"/>
                            </li>
                            <li>
                                <h3>Switzerland</h3>
                            </li>
                        </ul>
                     </div>
                    <div class="topleft"> 41% Sale </div>
                    <p><button><h2><a href="form.html" >Book Now</a></h2></button></p>
                </div>
                <div class="block7">
                    <img src={s9} className="img" alt="Dubai"  />
                    <div class="location" > 
                        <ul>
                            <li>
                                <img src={s3} className="img"/>
                            </li>
                            <li>
                                <h3>Dubai</h3>
                            </li>
                        </ul>
                     </div>
                    <div class="topleft"> 18% Sale </div>
                    <p><button><h2><a href="form.html" >Book Now</a></h2></button></p>
                </div>
                
                <div class="clr"></div>
            </div>
        </div>

        
        
        

            </div>
            <Footer/>
            </div>
        
       
     
     
        

    );

}


export default Offers;