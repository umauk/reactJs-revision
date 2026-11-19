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


const RestaurantCard = (props) => {
  const { id, restaurant } = props;
  return (
    <div className="res-card">
      <img
        src={restaurant.image}
        alt={restaurant.name}
      />
      <h2>{restaurant.name}</h2>
      <p>{restaurant.cuisines.join(", ")}</p>
      <p>Rating: {restaurant.rating}</p>
    </div>
  );
};



const restaurants = [
  {
    id: 1,
    name: "Lucky Restaurant",
    cuisines: ["Biryani", "Chinese", "North Indian"],
    rating: 4.5,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 2,
    name: "Spice Garden",
    cuisines: ["South Indian", "Thalis"],
    rating: 4.2,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 3,
    name: "Urban Pizza",
    cuisines: ["Pizza", "Italian", "Fast Food"],
    rating: 4.6,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 4,
    name: "Green Bowl",
    cuisines: ["Healthy Food", "Salads", "Wraps"],
    rating: 4.3,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 5,
    name: "Tandoori Tales",
    cuisines: ["Kebabs", "North Indian"],
    rating: 4.4,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 6,
    name: "Noodle House",
    cuisines: ["Chinese", "Asian", "Noodles"],
    rating: 4.1,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 7,
    name: "Curry Corner",
    cuisines: ["Indian", "Curry", "Rice"],
    rating: 4.0,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 8,
    name: "Burger Station",
    cuisines: ["Burgers", "American", "Fast Food"],
    rating: 4.3,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 9,
    name: "Dosa Junction",
    cuisines: ["South Indian", "Dosa", "Idli"],
    rating: 4.5,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 10,
    name: "Sushi Bay",
    cuisines: ["Japanese", "Sushi", "Asian"],
    rating: 4.7,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 11,
    name: "Mithai Mahal",
    cuisines: ["Sweets", "Desserts", "Snacks"],
    rating: 4.4,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 12,
    name: "Coastal Kitchen",
    cuisines: ["Seafood", "South Indian"],
    rating: 4.2,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 13,
    name: "Wrap & Roll",
    cuisines: ["Rolls", "Wraps", "Fast Food"],
    rating: 4.1,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 14,
    name: "The Pasta Plate",
    cuisines: ["Italian", "Pasta", "Continental"],
    rating: 4.3,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
  {
    id: 15,
    name: "Chai & Chaat",
    cuisines: ["Street Food", "Chaat", "Beverages"],
    rating: 4.0,
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/7/28/55b99386-0d99-45d2-94f9-1eb92c08bc8a_1136544.JPG",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} id={restaurant.id} restaurant={restaurant} />
        ))}
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
