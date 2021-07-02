import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/actions/usersActions";
import { signOut } from 'next-auth/client'

const Header = () => {
  const dispatch = useDispatch();
  const { loading, error, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const logoutHandler = () => {
      signOut()
  }
  return (
    <nav className="navbar row justify-content-center sticky-top">
      <div className="container">
        <div className="p-0 col-3">
          <div className="navbar-brand">
            <Link href="/">
              <a>
                <img
                  style={{ curso: "pointer" }}
                  src="/images/bookit_logo.png"
                  alt="BookIT"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="mt-3 text-center col-3 mt-md-0">
          {user ? (
            <div className="ml-4 dropdown d-line">
              <a
                className="mr-4 btn dropdown-toggle"
                id="dropDownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-aria-expanded="false"
              >
                <figure className="avatar avatar-nav">
                  <img
                    src={user.avatar && user.avatar.url}
                    alt={user && user.name}
                    className="rounded-circle"
                  />
                </figure>
                <span>{user && user.name}</span>
              </a>

              <div className="dropdown-menu" aria-aria-labelledby="dropDownMenuButton">
                  <Link href="/bookings/me">
                    <a className="dropdown-item">My Bookings</a>
                  </Link>
                  <Link href="/me/update">
                    <a className="dropdown-item">Profile</a>
                  </Link>
                  <Link href="/">
                    <a className="dropdown-item text-danger" onClick={logoutHandler}>Logout</a>
                  </Link>
              </div>
            </div>
          ) : (
            !loading && (
              <Link href="/login">
                <a className="float-right px-4 text-white btn btn-danger login-header-btn">
                  Login
                </a>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
