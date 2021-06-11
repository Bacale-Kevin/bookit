import React from "react";

const Header = () => {
  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
        <div className="p-0 col-3">
          <div className="navbar-brand">
            <img style={{ curso: 'pointer' }} src="/images/bookit_logo.png" alt="BookIT" />
          </div>
        </div>
        <div className="mt-3 text-center col-3 mt-md-0">
          <a className="float-right px-4 text-white btn btn-danger login-header-btn">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
