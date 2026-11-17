import react from "react";
import reactDOM from "react-dom/client";
import "./App.css";

const HeadingComponent = () => {
  return (
    <div className="heading">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9_p0mP_rgedNKHtzYTVHOkqbGYvyTM7qnaI2dJCB70w&s=10"
          alt="Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};


const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG"
        alt="Restaurant"
      />
      <h2>Lucky Restaurant</h2>
      <p>Biriyani, Chinese, North Indian</p>
      <p>Rating: 4.5</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <HeadingComponent />
      <Body />
    </div>
  );
};

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
