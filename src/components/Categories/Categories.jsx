import React, { useEffect, useState } from "react";
import { getCategoriesAndDocumentsCategory } from "../../utils/firebase/firebase";
import "./Categories.scss";
const Categories = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [imageArray, setImageArray] = useState([]);

  // Get the Category from the Firebase
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocumentsCategory();
      setCategoryData(categoryMap.Category);

      setLoading(true);
    };

    getCategoriesMap();
  }, []);

  useEffect(() => {
    const generateImageArray = () => {
      const newArray = categoryData.map((category) => ({
        name: category.name,
        imageUrl: category.imageUrl
      }));
      setImageArray(newArray);
    };

    generateImageArray();
  }, [categoryData]);

  console.log(imageArray[0])

  console.log(categoryData.map((img) => console.log(img.imageUrl)));
  return (
    <section className="categories">
      <div className="col">
        <div className="row">
          <img
            src={imageArray[0]?.imageUrl}
            alt="woman_photo"
          />
          <button>{imageArray[0]?.name}</button>
        </div>
        <div className="row">
          <img
            src={imageArray[1]?.imageUrl}
            alt="woman_photo"
          />
          <button>{imageArray[1]?.name}</button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src={imageArray[2]?.imageUrl}
            alt="man_photo"
          />
          <button>{imageArray[2]?.name}</button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src={imageArray[3]?.imageUrl}
                alt="man_photo"
              />
              <button>{imageArray[3]?.name}</button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src={imageArray[4]?.imageUrl}
                alt="accessories_photo"
              />
              <button>{imageArray[4]?.name}</button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src={imageArray[5]?.imageUrl}
            alt="children_photo"
          />
          <button>{imageArray[5]?.name}</button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
