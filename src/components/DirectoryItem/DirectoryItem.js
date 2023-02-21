/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate } from "react-router-dom";
import "./DirectoryItem.scss";

const categoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  
  const navigate = useNavigate();
  
  const onNavigateHandler = () => navigate(route);

  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default categoryItem;
