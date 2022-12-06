import React from "react";
import MainLayout from "../../components/layouts/MainLayout";
import FilterProduct from "./FilterProduct";
import ProductList from "./ProductList";

export default function Product() {
  return (
    <MainLayout>
      <FilterProduct />
      <ProductList data={null} />
    </MainLayout>
  );
}
