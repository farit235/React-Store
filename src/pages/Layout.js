import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul className="nav">
          <li>
            <Link
              to="/shop"
              style={{ textDecoration: "none", color: "aliceblue" }}
            >
              Shop
            </Link>
          </li>

          <li>
            <Link
              to="/iphone"
              style={{ textDecoration: "none", color: "aliceblue" }}
            >
              iPhone
            </Link>
          </li>
          <li>
            <Link
              to="/ipad"
              style={{ textDecoration: "none", color: "aliceblue" }}
            >
              iPad
            </Link>
          </li>
          <li>
            <Link
              to="/mac"
              style={{ textDecoration: "none", color: "aliceblue" }}
            >
              Mac
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "aliceblue" }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "aliceblue" }}>
              Home
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
