import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Nav.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { signOutUser } from "../../Utils/Firebase/Firebase";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../Store/user/user.selector";
import { selectIsCartOpen } from "../../Store/cart/cart.selector";
import { signOutStart } from "../../Store/user/user.action";

const Nav = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser && (
            <Link className="nav-link" to="/" onClick={signOutUser}>
              {" "}
              SIGN OUT{" "}
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
