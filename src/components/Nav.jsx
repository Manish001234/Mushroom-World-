import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <MenuIcon />
                </li>
              </ul>
            </div>

            <div
              style={{ width: "66px", height: "52px", backgroundColor: "red" }}
            >
       <Link to="/">       <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlkp5r5WaBcxiOkUwhoANSrSn-zZ_VksSY3ve0tncv2K5Ej58dk2JEoIitAn81sfJXXNA&usqp=CAU"
                alt=""
                width={"100%"}
                height={"100%"}
              /></Link>
            </div>
            <div style={{ display: "flex", paddingRight: "28px" }}>
              <PermIdentityIcon />
              <ShoppingCartOutlinedIcon />0
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
