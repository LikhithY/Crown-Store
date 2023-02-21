import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./Routes/Home/Home";
import Nav from "./Routes/Navigation/Nav";
import Authentication from "./Routes/Authentication/Authentication";
import Shop from "./Routes/Shop/Shop";
import Checkout from "./Routes/Checkout/Checkout";
import { checkUserSession } from "./Store/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "./Store/user/user.selector";

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Routes>
      {user && (
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      )}
      <Route path="/" element={<Authentication />} />
    </Routes>
  );
};

export default App;
