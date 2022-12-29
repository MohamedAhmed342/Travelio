
import Navbar from "../components/Navbar";
import React from 'react';
import g1 from "../assets/logo.png"
import g2 from "../assets/paris1.jpg"
import g3 from "../assets/Paris2.jpg"
import g4 from "../assets/Paris3.jpg"
import g5 from "../assets/Bali1.jpg"
import g6 from "../assets/Bali2.jpg"
import g7 from "../assets/Bali3.jpg"
import g8 from "../assets/greece1.jpg"
import g9 from "../assets/Greece2.jpg"
import g10 from "../assets/Greece3.jpg"
import g11 from "../assets/Japan1.jpg"
import g12 from "../assets/Japan2.jpg"
import g13 from "../assets/Japan3.jpg"
import g14 from "../assets/Swi1.jpg"
import g15 from "../assets/Swi2.jpg"
import g16 from "../assets/Swi3.jpg"
import g17 from "../assets/Egypt1.jpg"
import g18 from "../assets/luxorr.jpg"
import g19 from "../assets/Egypt3.jpg"
import g20 from "../assets/Dubai1.jpg"
import g21 from "../assets/Dubai2.jpg"
import g22 from "../assets/Dubai3.jpg"


import Footer from "../components/Footer";
function Gallery() {
    return (
        <div>
            <Navbar />
            <div className="nav">
                <div className="logo">
                    <img src={g1} className="img" alt="" />

                </div>
            </div>
            <div className="header2"><h1>Discover The World With <br /><span >Trav</span><span >elio </span></h1></div>
            <div>
                <section id="gallery" className="gallery">
                    <div className="main">
                        <br /> <br />
                        <h1>Welcome To Our Gallery</h1>
                        <br /><br />
                        <div className="title">&nbsp;&nbsp;&nbsp;<h2>France</h2> <br /></div>
                        <div className="pics">
                            <div className="Box1">
                                <img src={g2} className="img" alt="" />
                                <div className="overlay"> Eiffel Tower </div>
                            </div>
                            <div className="Box2">
                                <img src={g3} className="img" alt="" />
                                <div className="overlay"> Musée du Louvre </div>
                            </div>
                            <div className="Box3">
                                <img src={g4} className="img" alt="" />
                                <div className="overlay"> Château de Versailles </div>
                            </div>
                        </div>
                        <div className="title">&nbsp;&nbsp;&nbsp;<h2>Bali</h2> <br /></div>
                        <div className="pics">
                            <div className="Box1">
                                <img src={g5} className="img" alt="" />
                                <div className="overlay"> Mount Batur </div>
                            </div>
                            <div className="Box2">
                                <img src={g6} className="img" alt="" />
                                <div className="overlay"> Uluwatu Temple </div>
                            </div>
                            <div className="Box3">
                                <img src={g7} className="img" alt="" />
                                <div className="overlay"> Pura Ulun Danu Bratan </div>
                            </div>
                        </div>
                        <div className="title">&nbsp;&nbsp;&nbsp;<h2>Greece</h2> <br /></div>
                        <div className="pics">
                            <div className="Box1">
                                <img src={g8} className="img" alt="" />
                                <div className="overlay"> Acropolis </div>
                            </div>
                            <div className="Box2">
                                <img src={g9} className="img" alt="" />
                                <div className="overlay"> Acropolis Museum </div>
                            </div>
                            <div className="Box3">
                                <img src={g10} className="img" alt="" />
                                <div className="overlay"> Santorini </div>
                            </div>
                        </div>
                        <div className="title">&nbsp;&nbsp;&nbsp;<h2>Japan</h2> <br /></div>
                        <div className="pics">
                            <div class="Box1">
                                <img src={g11} className="img" alt="" />
                                <div className="overlay"> Mount Fuji </div>
                            </div>
                            <div className="Box2">
                                <img src={g12} className="img" alt="" />
                                <div className="overlay"> Imperial Tokyo </div>
                            </div>
                            <div className="Box3">
                                <img src={g13} className="img" alt="" />
                                <div className="overlay"> Historic Kyoto </div>
                            </div>
                        </div>
                        <div className="title">&nbsp;&nbsp;&nbsp;<h2>Switzerland</h2> <br /></div>
                        <div className="pics">
                            <div className="Box1">
                                <img src={g14} className="img" alt="" />
                                <div className="overlay"> The Matterhorn </div>
                            </div>
                            <div className="Box2">/
                                <img src={g15} className="img" alt="" />
                                <div className="overlay"> Jungfraujoch: The Top of Europe </div>
                            </div>
                            <div className="Box3">
                                <img src={g16} className="img" alt="" />
                                <div className="overlay"> Interlaken </div>
                            </div>
                        </div>
                        <div className="title">&nbsp;&nbsp;&nbsp;<h2>Egypt</h2> <br /></div>
                        <div className="pics">
                            <div className="Box1">
                                <img src={g17} className="img" alt="" />
                                <div class="overlay"> Pyramids of Giza </div>
                            </div>
                            <div className="Box2">
                                <img src={g18} className="img" alt="" />
                                <div className="overlay"> Luxor's Karnak Temple </div>
                            </div>
                            <div className="Box3">
                                <img src={g19} className="img" alt="" />
                                <div className="overlay"> Cruising the Nile </div>
                            </div>
                        </div>
                        <div className="title">&nbsp;&nbsp;<h2>Dubai</h2> <br /></div>
                        <div className="pics">
                            <div className="Box1">
                                <img src={g20} className="img" alt="" />
                                <div className="overlay"> Burj Khalifa </div>
                            </div>
                            <div className="Box2">
                                <img src={g21} className="img" alt="" />
                                <div className="overlay"> Dubai Mall </div>
                            </div>
                            <div className="Box3">
                                <img src={g22} className="img" alt="" />
                                <div className="overlay"> Al Fahidi Quarter </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Gallery;