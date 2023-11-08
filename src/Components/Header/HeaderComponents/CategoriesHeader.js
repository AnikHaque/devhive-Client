import React, { useEffect, useState } from "react";
import "./HeaderDrawer.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetQueryServiceQuery } from "../../../features/api/Services/ServicesApi";
const CategoriesHeader = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  // const categories = [
  //   { name: "Graphics & Design", link: "#" },
  //   { name: "Digital Marketing", link: "#" },
  //   { name: "Writing & Translation", link: "#" },
  //   { name: "Video & Animation", link: "#" },
  //   { name: "Music & Audio", link: "#" },
  //   { name: "Programming & Tech", link: "#" },
  //   { name: "Photography", link: "#" },
  //   { name: "Business", link: "#" },
  //   { name: "AI Services", link: "#" },
  // ];
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(categories.length - 1);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [show, setShow] = useState(false);

  const [category, setCategory] = useState('');
  console.log(category);


  const handleResize = () => {
    const container = document.querySelector(".container");
    const category = document.querySelector("li");

    if (container && category) {
      const containerWidth = container.offsetWidth;
      const categoryWidth = category.offsetWidth;
      const categoriesPerPage = Math.floor(containerWidth / categoryWidth);
      const newEndIndex = startIndex + categoriesPerPage - 1;
      setEndIndex(newEndIndex);
      setShow(true);
    }
  };
  //   handleResize();
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [startIndex, handleResize]);

  useEffect(() => {
    if (startIndex === 0) {
      setShowLeftArrow(false);
    } else {
      setShowLeftArrow(true);
    }

    if (endIndex === categories.length - 1) {
      setShowRightArrow(false);
    } else {
      setShowRightArrow(true);
    }
  }, [startIndex, endIndex]);

  const handleLeftArrowClick = () => {
    setStartIndex((prevIndex) => prevIndex - 1);
    setEndIndex((prevIndex) => prevIndex - 1);
  };
  AOS.init();
  const handleRightArrowClick = () => {
    setStartIndex((prevIndex) => prevIndex + 1);
    setEndIndex((prevIndex) => prevIndex + 1);
  };
  //  handleResize();

  React.useEffect(() => {
    setLoading(true);
    fetch("https://devhiveserver.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // setLoading(false);
  }, []);
  return (
    <>
      {show && !loading && categories.length > 1 && isLoggedIn && (
        <div className="bg-white py-1 hidden lg:block border-b">
          <div
            data-aos="fade-right"
            className="container mx-auto px-4 flex items-center justify-center"
          >
            {showLeftArrow && (
              <button
                onClick={handleLeftArrowClick}
                className="mr-4 focus:outline-none"
              >
                <BsArrowLeftCircle></BsArrowLeftCircle>
              </button>
            )}
            <ul className="flex HeaderDrawer justify-between items-center overflow-x-scroll">
              {categories.slice(startIndex, endIndex + 1).map((category) => (
                <li
                  data-aos="zoom-in"
                  key={category.name}
                  className="mx-2 px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  <Link onClick={() => setCategory(category?.name)} to={`/serviceQuery/${category?.name}`}>{category.name}</Link>
                </li>
              ))}
            </ul>
            {showRightArrow && (
              <button
                onClick={handleRightArrowClick}
                className="ml-4 focus:outline-none"
              >
                <BsArrowRightCircle></BsArrowRightCircle>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoriesHeader;
