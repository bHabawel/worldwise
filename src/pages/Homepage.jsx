import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <PageNav />
      <AppNav />
      <div>
        <h1 className="test">WorldWise</h1>
        <Link to="/app">Go to the app</Link>
      </div>
    </>
  );
}

export default Homepage;
