
import Navbar from "../components/Navbar";

import b1 from "../assets/logo.png"
import BookImg from "../assets/plane.jpg";
import Footer from "../components/Footer";

function Book (){
    return(
        <div>
        <Navbar/>
        <h1 className="ss">Reservation Form</h1>
      

        <div className="nav">
        <div className="logo">
            <img src={b1} className="img"/>
            
        </div>
        
</div>

<div>
                
                
 <ul>
<li><div>
    <form name="Registration" class="size">
        <table width="600">  
    <tr>
        <td>First Name:</td>
        <td><input type="text" class="color"/></td>
    </tr>
    <tr>
        <td>Last Name:</td>
        <td><input type="text" class="color"/></td>
    </tr>
    <tr>
        <td>Address:</td>
        <td><address><input type="text" class="color"/></address></td>
    </tr>
    <tr>
        <td>Telephone Number:</td>
        <td><input type="tel" class="color"/></td>
    </tr>
    <tr>
        <td>Mobile Number:</td>
        <td><input type="number" class="color"/></td>
    </tr>
         {/*<td><p>Leaving from: </p></td><br/>
        
        <td> 
            <select name="country" class="color">
            <option>Choose Country</option>
            <option>Albania</option>
            <option>Australia</option>
            <option>Bali</option>
            <option>Canada</option>
            <option>Dubai</option>
            <option>Egypt</option>
            <option>France</option>
            <option>Greece</option>
            <option>Iceland</option>
            <option>Italy</option>
            <option>Japan</option>
            <option>Lebanon</option>
            <option>Morocco</option>
            <option>New Zealand</option>
            <option>Poland</option>
            <option>Portugal</option>
            <option>Spain</option>
            <option>Switzerland</option>
            <option>Thailand</option>
    </select></td><tr></tr> */}
         {/*<td><p>Going to: </p></td><br/>
        <td> 
            <select name="country" class="color">
            <option>Choose Country</option>
            <option>Albania</option>
            <option>Australia</option>
            <option>Bali</option>
            <option>Canada</option>
            <option>Dubai</option>
            <option>Egypt</option>
            <option>France</option>
            <option>Greece</option>
            <option>Iceland</option>
            <option>Italy</option>
            <option>Japan</option>
            <option>Lebanon</option>
            <option>Morocco</option>
            <option>New Zealand</option>
            <option>Poland</option>
            <option>Portugal</option>
            <option>Spain</option>
            <option>Switzerland</option>
            <option>Thailand</option>
</select></td><tr></tr> */}
        {/* <td><p>Type of Tickets: </p></td><br/>
        <td> 
            <select name="ticket" class="color">
                <option>Choose Ticket</option>
                <option>One-Way Ticket </option>
                <option>Round-trip Ticket</option>
                <option>First Class Ticket</option>
                <option>Business Class Ticket</option>
                <option>Coach Ticket</option>
                <option>Non-refundable ticket</option>
                <option>Refundable ticket</option>  
</select></td><tr></tr> */}
        <tr>
            <td>Range price from:</td>
            <td><input type="text" class="color"/></td>
        </tr>
        <tr>
            <td>Range price to:</td>
            <td><input type="text" class="color"/></td>
        </tr>
        <td>Gender:</td>
        <td> 
            <input type="radio" name="Gender"/>
            <label>Male</label>&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="radio" name="Gender"/>
            <label>Female</label>
            
        </td>
    <tr></tr>
        <tr>
            <td><label>Departing:</label></td>
            <td><input type="date" class="color"/></td>
        </tr>
        <tr>
            <td><label>Returning:</label></td>
            <td><input type="date" class="color"/></td>
        </tr>
        <tr>
            <td>Family Members:</td>
            <td> <p>Infants(0-4)</p>
                <input type="number" class="color"/>
                <pre>Children(4-13)</pre>
                <input type="number" class="color"/>
                <p>Adults&nbsp;13+</p>
                <input type="number" class="color"/>
            </td>
        </tr>
        <tr>
            <td><p>choose how will you buy a ticket</p></td>
            <td><input type="radio" name="pay"/>
                <label>offline</label>&nbsp;&nbsp;
                <input type="radio" name="pay"/>
                <label>online</label></td>
        </tr>
        
    </table><br/><br/>
    <input type="checkbox" class="color"/>
    <label><b>I accept all terms and conditions</b></label><br/><br/>
    <td>
        <input type="submit" class="color"/>
        <input type="reset"  name="reset" class="color" value="reset" />
        </td>
<br/><br/>
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