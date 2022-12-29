
import Navbar from "../components/Navbar";
import b1 from "../assets/logo.png"
import BookImg from "../assets/plane.jpg";
import Footer from "../components/Footer";

function Book() {
    return (
        <div>
            <Navbar />
            <h1 className="ss">Reservation Form</h1>
            <div className="nav">
                <div className="logo">
                    <img src={b1} className="img" alt="" />
                </div>
            </div>
            <div>
                <ul>
                    <li><div>
                        <img src={BookImg} className="img" alt="" />
                        <form name="Registration" className="size">
                            <table width="600">
                                <tr>
                                    <td>First Name:</td>
                                    <td><input type="text" className="color" /></td>
                                </tr>
                                <tr>
                                    <td>Last Name:</td>
                                    <td><input type="text" className="color" /></td>
                                </tr>
                                <tr>
                                    <td>Address:</td>
                                    <td><address><input type="text" className="color" /></address></td>
                                </tr>
                                <tr>
                                    <td>Telephone Number:</td>
                                    <td><input type="tel" className="color" /></td>
                                </tr>
                                <tr>
                                    <td>Mobile Number:</td>
                                    <td><input type="number" className="color" /></td>
                                </tr>
                                <tr>
                                    <td>Range price from:</td>
                                    <td><input type="text" className="color" /></td>
                                </tr>
                                <tr>
                                    <td>Range price to:</td>
                                    <td><input type="text" className="color" /></td>
                                </tr>
                                <td>Gender:</td>
                                <td>
                                    <input type="radio" name="Gender" />
                                    <label>Male</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="radio" name="Gender" />
                                    <label>Female</label>

                                </td>
                                <tr></tr>
                                <tr>
                                    <td><label>Departing:</label></td>
                                    <td><input type="date" className="color" /></td>
                                </tr>
                                <tr>
                                    <td><label>Returning:</label></td>
                                    <td><input type="date" className="color" /></td>
                                </tr>
                                <tr>
                                    <td>Family Members:</td>
                                    <td> <p>Infants(0-4)</p>
                                        <input type="number" className="color" />
                                        <pre>Children(4-13)</pre>
                                        <input type="number" className="color" />
                                        <p>Adults&nbsp;13+</p>
                                        <input type="number" className="color" />
                                    </td>
                                </tr>
                                <tr>
                                    <td><p>choose how will you buy a ticket</p></td>
                                    <td><input type="radio" name="pay" />
                                        <label>offline</label>&nbsp;&nbsp;
                                        <input type="radio" name="pay" />
                                        <label>online</label></td>
                                </tr>

                            </table><br /><br />
                            <input type="checkbox" className="color" />
                            <label><b>I accept all terms and conditions</b></label><br /><br />
                            <td>
                                <input type="submit" className="color" />
                                <input type="reset" name="reset" className="color" value="reset" />
                            </td>
                            <br /><br />
                        </form>
                    </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default Book;