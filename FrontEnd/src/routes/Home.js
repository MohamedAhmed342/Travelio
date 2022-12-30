import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Sign from "./Sign";


function Home (){
    return (
        <>
        <Navbar />
        
        <Sign/>
        <Hero/>
        <Destination />
        <Footer />
       
       
        </>
    );


}
export default Home;