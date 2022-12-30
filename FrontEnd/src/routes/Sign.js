
import Navbar from "../components/Navbar";
import React, { Component } from 'react';
import m1 from "../assets/logo.png"
import m2 from "../assets/facebook.png"
import m3 from "../assets/Instagram.png"
import m4 from "../assets/twitter.png"
import m5 from "../assets/linkedin.png"

class Sign extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="nav">
                    <div className="logo">
                        <img src={m1} className="img" alt="" />
                        <span className="logoo"> <h2 >Travelio</h2></span>
                    </div>
                    <ul>
                        <li><a href="home page.html">Home</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="offers.html">Offers</a></li>
                        <li><a href="form.html">Book</a></li>
                        <li><a href="About.html">About</a></li>
                        <div class="submenu">
                            <li >Join
                                <div class="list">
                                    <a href="signup.html">sign up</a>
                                    <a href="login.html">login</a>
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>

                <div>
                    <form>
                        <center><h1 class="log">Register</h1>
                            <div class="pol">
                                <h2><input class="textbox" type="text" placeholder="Enter your first name" /></h2><br />

                                <h2><input class="textbox" type="text" placeholder="Enter your last name" /></h2><br />
                                <h2><input class="textbox" type="email" placeholder="Enter your email" /></h2><br />
                                <h2><input class="textbox" type="password" placeholder="Enter your password" /></h2><br />
                                <h2><input class="textbox" type="password" placeholder="Confirm your password" /></h2><br />
                                <h2><input class="textbox" type="text" placeholder="Enter your phone number" /></h2><br />

                                <button class="button" type="button">Register</button><br /><br />
                                <label class="textbox1">Remeber me?</label><input class="checkbox" type="checkbox" /></div>

                        </center>


                    </form>


                    <div class="footer">
                        <center><h4>copyright &copy; All rights reserved, 2021 Travelio</h4></center><br />
                        <ul>
                            <li><a href="https://www.facebook.com/scci.cu/?ref=page_internal"><img src={m2} className="img" alt="" /></a> </li>
                            <li><a href="https://www.instagram.com/scci.cu/"><img src={m3} className="img" alt="" /></a></li>
                            <li><a href="https://twitter.com/sccicu?lang=ar"><img src={m4} className="img" alt="" /></a> </li>
                            <li><a href="https://www.linkedin.com/company/scci-cu/?originalSubdomain=eg"><img src={m5} className="img" alt="" /> </a> </li>
                        </ul>
                    </div>
                </div>


            </div>
        )
    }
}
export default Sign;
