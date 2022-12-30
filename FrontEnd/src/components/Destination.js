import Greece1 from "../assets/Greece3.jpg";
import Greece2 from "../assets/Greece2.jpg";
import Greece3 from "../assets/Greece3.jpg";
import "./Destination.css";
const Destination= () =>{
    return(
        <div className="destination">
            <h1>Popular Destinations</h1>
            
            <div className="first-des">
                <div className="des-text">
                    <h2>Greece,Mykonos</h2>
                    <p>Every summer, the island draws worldwide attention for its unforgettable party atmosphere and vibrant style.
                         In the daytime, 
                        people flock to the beaches and combine swimming in exotic waters with dancing in the beach bars.
                         The superb bays of Super Paradise, Paradise, Platis Gialos,
                         and Elia boast numerous other entertaining activities, including music events and even beach golf.
                        In the evening,
                        the Town (or Chora) gets lively with the cozy bars of Little Venice and the vivid clubs found throughout the paved quarters.
                           Make sure to gaze at the romantic sunset from the windmills above the Town or from Little Venice for an unforgettable experience!</p>

                </div>
                <div className="image">
                    <img alt="img"  src={Greece1}/>
                    <img alt="img"  src={Greece2}/>

                </div>
            </div>
        </div>




    );
}
export default Destination;