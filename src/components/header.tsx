import pawxyLogo from "../assets/search-img.png";
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