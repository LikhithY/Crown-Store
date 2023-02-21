import { Fragment } from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { selectCategoriesMap } from "../../Store/categories/category.selector";

const CategoriesPreview = () => {
 const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
