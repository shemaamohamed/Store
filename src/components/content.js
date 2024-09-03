import { useState, useEffect } from "react";
import "../Style/card.css";
import Cards from "./cards";
import { Helmet } from "react-helmet";

function Content(props) {
  const {isUser}=props;
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filtercard = products.filter(
    (product) =>
      product &&
      product.title &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  useEffect(() => {
    setLoading(true);
    // want this to run every time the component is rendered or re-rendered or change happen in local storage
    const triggerChange = setInterval(() => {
      fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((products) => {
          setProducts(products);
          setLoading(false);
       
      })
      .catch(() => setLoading(false));
      
    }, 1000);
    // cleanup function clear the interval
    return () => {
      // clear the interval for performance and memory and avoid memory leak
      clearInterval(triggerChange);
    };
  }, []);

  // useEffect(() => {
  //   // setLoading(true);
  //   fetch("http://localhost:3001/products")
  //     .then((res) => res.json())
  //     .then((products) => {
  //       setTimeout(() => {
  //         setProducts(products);
  //         setLoading(false);
  //       }, 1000);
  //     })
  //     .catch(() => setLoading(false));
  // }, []);

  return (
    <>
      <Helmet>
        <title>{`She Brand-Home`}</title>
      </Helmet>
      <div className="search">
        <input
          type="text"
          placeholder="Search Product....."
          onChange={handleSearchChange}
        ></input>
      </div>
      {loading && (
          <div className="dot-spinner">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
          </div>
        )}
      <div className="p-card">
        
        {!loading && filtercard.length === 0 && <p>No products found.</p>}
        {filtercard.map((cart, index) => (
          <Cards isUser={isUser} cart={cart} key={index} />
        ))}
      </div>
    </>
  );
}
export default Content;
