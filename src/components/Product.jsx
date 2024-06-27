import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SearchProduct from "./SearchProduct";

const Product = () => {
  const [productlist, setProductList] = useState([]);
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedcategory, setSelectCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4")
      .then((res) => res.json())
      .then((json) => {
        setProductList(json);
        setProduct(json);
        const c = json.map((element) => element.category);
        setCategories([...new Set(c)]);
      })
      .catch((er) => {
        console.log(er);
      });
  }, []);

  useEffect(() => {
    let filteredProducts = productlist;

    if (selectedcategory && selectedcategory !== "select") {
      filteredProducts = filteredProducts.filter(
        (element) => element.category === selectedcategory
      );
    }

    if (searchInput) {
      filteredProducts = filteredProducts.filter((value) =>
        value.title.replace(/\s+/g, '').toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setProduct(filteredProducts);
  }, [selectedcategory, searchInput, productlist]);

  return (
    <div className="mt-10 pl-5 pr-5">
      <SearchProduct
        categories={categories}
        setSelectCategory={setSelectCategory}
        setSearchInput={setSearchInput}
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.length > 0 &&
          products.map((element, index) => (
            <ProductCard key={index} products={element} />
          ))}
      </div>
    </div>
  );
};

export default Product;
