import "./header.scss";
import { HamburgerNavigation } from "../Hamburger/HamburgerNavigation";

const Header = () => {
    
  return (
    <div className="header">
         <HamburgerNavigation />
      <div className="logo-mob">
        <h1>Logo here</h1>
      </div>
      <div className="cart-icon">
        <i class="fas fa-shopping-cart"></i>
      </div>
    </div>
  );
};

export default Header;