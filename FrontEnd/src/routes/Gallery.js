
import Navbar from "../components/Navbar";
import GalleryImg from "../assets/travvelll.jpg"

import React ,{Component} from 'react';
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
function Gallery (){
    return(
        <div>
        <Navbar/>
        <div className="nav">
        <div className="logo">
            <img src={g1} className="img"/>
           
        </div>
       
</div>
<div class="header2"><h1>Discover The World With <br/><span >Trav</span><span >elio </span></h1></div>
<div> 
<section id="gallery" class="gallery">
    <div class="main">
        <br/> <br/>
    <h1>Welcome To Our Gallery</h1>
    <br/><br/>

    <div class="title">&nbsp;&nbsp;&nbsp;<h2>France</h2> <br/></div>
    <div class="pics">
            <div class="Box1">
                <img src={g2} className="img" />
                <div class="overlay"> Eiffel Tower </div>
            </div>
            <div class="Box2">
                <img src={g3} className="img" />
                <div class="overlay"> Musée du Louvre </div>
            </div>
            <div class="Box3">
                <img src={g4} className="img" />
                <div class="overlay"> Château de Versailles </div>
            </div>
    </div>

    <div class="title">&nbsp;&nbsp;&nbsp;<h2>Bali</h2> <br/></div>
    <div class="pics">
            <div class="Box1">
                <img src={g5} className="img"/>
                <div class="overlay"> Mount Batur </div>
            </div>
            <div class="Box2">
                <img src={g6} className="img" />
                <div class="overlay"> Uluwatu Temple </div>
            </div>
            <div class="Box3">
                <img src={g7} className="img" />
                <div class="overlay"> Pura Ulun Danu Bratan </div>
            </div>
    </div>

    <div class="title">&nbsp;&nbsp;&nbsp;<h2>Greece</h2> <br/></div>
    <div class="pics">
            <div class="Box1">
                <img src={g8} className="img" />
                <div class="overlay"> Acropolis </div>
            </div>
            <div class="Box2">
                <img src={g9} className="img" />
                <div class="overlay"> Acropolis Museum </div>
            </div>
            <div class="Box3">
                <img src={g10} className="img" />
                <div class="overlay"> Santorini </div>
            </div>
    </div>

    <div class="title">&nbsp;&nbsp;&nbsp;<h2>Japan</h2> <br/></div>
    <div class="pics">
            <div class="Box1">
                <img src={g11} className="img"/>
                <div class="overlay"> Mount Fuji </div>
            </div>
            <div class="Box2">
                <img src={g12} className="img" />
                <div class="overlay"> Imperial Tokyo </div>
            </div>
            <div class="Box3">
                <img src={g13} className="img" />
                <div class="overlay"> Historic Kyoto </div>
            </div>
        </div>

    <div class="title">&nbsp;&nbsp;&nbsp;<h2>Switzerland</h2> <br/></div>
    <div class="pics">
            <div class="Box1">
                <img src={g14} className="img"/>
                <div class="overlay"> The Matterhorn </div>
            </div>
            <div class="Box2">/
                <img src={g15} className="img" />
                <div class="overlay"> Jungfraujoch: The Top of Europe </div>
            </div>
            <div class="Box3">
                <img src={g16} className="img" />
                <div class="overlay"> Interlaken </div>
            </div>
    </div>

    <div class="title">&nbsp;&nbsp;&nbsp;<h2>Egypt</h2> <br/></div>
    <div class="pics">
            <div class="Box1">
                <img src={g17} className="img" />
                <div class="overlay"> Pyramids of Giza </div>
            </div>
            <div class="Box2">
                <img src={g18} className="img" />
                <div class="overlay"> Luxor's Karnak Temple </div>
            </div>
            <div class="Box3">
                <img src={g19} className="img" />
                <div class="overlay"> Cruising the Nile </div>
            </div>
    </div>

    <div class="title">&nbsp;&nbsp;<h2>Dubai</h2> <br/></div>
    <div class="pics">
            <div class="Box1">
                <img src={g20} className="img" />
                <div class="overlay"> Burj Khalifa </div>
            </div>
            <div class="Box2">
                <img src={g21} className="img" />
                <div class="overlay"> Dubai Mall </div>
            </div>
            <div class="Box3">
                <img src={g22} className="img"/>
                <div class="overlay"> Al Fahidi Quarter </div>
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