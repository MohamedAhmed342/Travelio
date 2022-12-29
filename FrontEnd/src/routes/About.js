
import Navbar from "../components/Navbar";
import AboutImg from "../assets/fffff.jpg";
import Footer from "../components/Footer";

function About() {
    return (
        <>
            <Navbar />
            <div className="aaa">
                <img src={AboutImg} alt="" />
                <h1>About</h1>
                <div className="about-container">
                    <h2>Our History</h2>
                    <p>The main reason for starting Travelio.com was the desire to develop an easy, comfortable and elegant travel concept.
                        For this reason, we have always endeavored to provide innovative online travel solutions to travelers around the world, especially from the Middle East.
                        We take pride in providing comprehensive and high quality services in the travel and tourism sector.</p>
                    <h2>Our Values</h2>
                    <p> We strive to improve everything we do by adopting new technologies and ways of working, improving what we offer our customers, and looking for new technologies and services</p>
                    <h2>Our Vision</h2>
                    <p>We read our hearts, symbolize your vision and know how to create a plan that meets your business need</p>
                    <h2>Competitive Advantages</h2>
                    <p> Here at Travelio.com, we want to be a leader in our field. Therefore,
                        it offers a competitive advantage such as
                        1)Easy to use : Easy-to-use user interface in English.
                        2)Total price: The total amount includes taxes and
                        services and there are no hidden charges.
                        3)Reservation change Possibility to change or cancel a reservation through
                        the call center
                    </p>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default About;