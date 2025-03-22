import { db } from "@/libs/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useState } from "react";

const useProducts = () => {
  const [currentproduct, setcurrentProduct] = useState(null);
  const [products, setProducts] = useState(null);

  //   Current Product
  const fetchcurrentProduct = async (id) => {
    try {
      const currentRef = doc(db, "products", id);
      const snapShot = await getDoc(currentRef);
      setcurrentProduct({
        ...snapShot.data(),
        id: snapShot.id,
      });
      console.log(currentproduct);
    } catch (error) {
      console.log(error);
    }
  };

  // All Products
  const fetchProducts = async () => {
    try {
      const productRef = collection(db, "products");
      const snapShot = await getDocs(productRef);
      const docs = [];
      snapShot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setProducts(docs);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    products,
    fetchProducts,
    currentproduct,
    fetchcurrentProduct,
  };
};

export default useProducts;
