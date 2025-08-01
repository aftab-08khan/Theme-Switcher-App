import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useThemeStyles } from "../themes/useThemeStyles";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Home: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const styles = useThemeStyles();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data, "data");

        setProducts(data);
      } catch (error) {
        console.error("Error : ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 mt-6">
        {products?.map((product) => (
          <div key={product?.id} className={styles.card}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
