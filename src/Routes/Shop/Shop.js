import { useEffect } from "react";

import {Routes, Route} from "react-router-dom";

import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import Category from "../Category/Category";

import "./Shop.scss";
import { fetchCategoriesStart } from "../../Store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
const dispatch = useDispatch();

  useEffect(() => {
  dispatch(fetchCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
