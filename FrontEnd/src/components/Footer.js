import "./Footer.css";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Travelio</h1>
                </div>
                <div>
                    <a href="/"> 
                    <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/"> 
                    <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/"> 
                    <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>

            </div>
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Status</a>
                    <a href="/">Licence</a>
                    <a href="/">All Version</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Status</a>
                    <a href="/">Licence</a>
                    <a href="/">All Version</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Status</a>
                    <a href="/">Licence</a>
                    <a href="/">All Version</a>
                </div>
            </div>
        </div>

    );

}

export default Footer ;