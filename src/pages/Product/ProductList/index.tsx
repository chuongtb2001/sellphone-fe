import React from "react";
import { ProductInfoCard } from "../../../types/ProductInfoCard";
import myJson from "../../../api/mockData/productGroup.json";
import ProductCard from "../../../components/common/ProductCard";
import "./ProductList.css";

type dataProductList = ProductInfoCard[] | null;
export default function ProductList({ data }: { data: dataProductList }) {
  const temp = myJson;
  return (
    <div className="product-list">
      {temp.map((item) => (
        <div key={item.id} className="product-card-container">
          <ProductCard data={item} />
        </div>
      ))}
    </div>
  );
}
