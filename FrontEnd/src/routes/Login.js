import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import f1 from "../assets/logo.png"

function Login() {
    return (
        <div>
            <Navbar />
            <div className="nav">
                <div className="logo">
                    <img src={f1} className="img" alt="" />
                </div>
            </div>
            <div>
                <form>
                    <center><h1 className="log">Login</h1>
                        <div className="pol">
                            <h2><input className="textbox" type="text" placeholder="Enter your email" /></h2><br />
                            <h2><input className="textbox" type="password" placeholder="Enter your Password" /></h2><br />
                            <button className="button" type="button">Login</button><br /><br />
                            <label className="textbox1">Remeber me?</label><input class="checkbox" type="checkbox" />
                        </div>
                    </center>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Login;