import "./sidebar.scss";


const SideBar = () => {




  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <h1 className="logo">
          Sticky
          <br />
          Fingers
        </h1>
        <div className="menu">
          <p
            style={{
              textDecoration: "line-through",
              textDecorationColor: "red"
            }}
          >
            About
          </p>
          <p>Contact</p>
          <p>Where to purchase</p>
          {/* <p>Gallery</p>
          <p>Contact</p>
          <p>Book</p> */}
        </div>
        {/* <div className="cart-button">
          <button className="btn btn-5 btn-5b icon-cart">
            <span>Cart</span>
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default SideBar;
