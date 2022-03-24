import "./styles.css";
import { Footer } from "../../components";

const Homepage = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-motto">
          <h1>Products for every need, at the distance of a click.</h1>
        </div>
        <div className="home-img"></div>
      </div>
      <Footer />
    </div>
  );
};

export { Homepage };
