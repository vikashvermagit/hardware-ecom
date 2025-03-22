import { db } from "@/libs/firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState(null);

  // Fetch  Categories
  const fetchCategories = async () => {
    try {
      const categoryRef = collection(db, "categories");
      const snapShot = await getDocs(categoryRef);
      const docs = [];
      snapShot.forEach((doc) => {
        docs.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      console.log(docs);
      setCategories(docs);
    } catch (error) {}
  };

  return {
    categories,
    fetchCategories,
  };
};

export default useCategories;
