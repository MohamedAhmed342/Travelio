
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import m1 from "../assets/logo.png"

function Sign() {
    return (
        <div>
            <Navbar />
            <div className="nav">
                <div className="logo">
                    <img src={m1} className="img" alt="" />
                </div>
            </div>
            <div>
                <form>
                    <center><h1 className="log">Register</h1>
                        <div className="pol">
                            <h2><input className="textbox" type="text" placeholder="Enter your first name" /></h2><br />
                            <h2><input className="textbox" type="text" placeholder="Enter your last name" /></h2><br />
                            <h2><input className="textbox" type="email" placeholder="Enter your email" /></h2><br />
                            <h2><input className="textbox" type="password" placeholder="Enter your password" /></h2><br />
                            <h2><input className="textbox" type="password" placeholder="Confirm your password" /></h2><br />
                            <h2><input className="textbox" type="text" placeholder="Enter your phone number" /></h2><br />
                            <button className="button" type="button">Register</button><br /><br />
                            <label className="textbox1">Remeber me?</label><input class="checkbox" type="checkbox" /></div>
                    </center>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Sign;