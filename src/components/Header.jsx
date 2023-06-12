import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link className="text-decoration-none" to={"/"}>
        {" "}
        <h1 className="text-danger fst-italic text-center my-4 fw-bolder">
          IMAGE SNAPSHOT
        </h1>{" "}
      </Link>
    </div>
  );
}

export default Header;
