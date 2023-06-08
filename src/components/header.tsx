import pawxyLogo from "../assets/pawxy-logo.jpeg";
import "./header.css";

const Header = () => {
    return (
        <div className='header'>
            <img src={pawxyLogo} alt="" />
            <h2>Search Engine Api</h2>
        </div>
    )
   
}

export default Header