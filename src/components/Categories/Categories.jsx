import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoriesAndDocumentsCategory } from "../../utils/firebase/firebase";
import "./Categories.scss";

const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const categoryMap = await getCategoriesAndDocumentsCategory();
      setCategoryData(categoryMap.Category);
      setLoading(true);
    };

    fetchData();
  }, []);

  const renderCategoryLink = (category, index) => (
    <Link className="row" to={`products/${category?.name.toLowerCase()}`} key={index}>
      <img src={category?.imageUrl} alt={category?.name} />
      <button>{category?.name}</button>
    </Link>
  );

  const renderCategoriesColumns = () => {
    const columns = [[0, 1], [2], [3, 4], [5]];

    return columns.map((col, colIndex) => (
      <div className={`col${colIndex === 2 ? " col-l" : ""}`} key={colIndex}>
        {col.map((index) => renderCategoryLink(imageArray[index], index))}
      </div>
    ));
  };

  const imageArray = categoryData.map((category) => ({
    name: category.name,
    imageUrl: category.imageUrl,
  }));

  return <section className="categories">{renderCategoriesColumns()}</section>;
};

export default Categories;
