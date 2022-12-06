import { useEffect, useState } from "react";
import Header from "../../components/common/Header";
import MainLayout from "../../components/layouts/MainLayout";
import Banner from "./Banner";
import CardGroup from "./CardGroup";
import ProductGroup from "./ProductGroup";
import myJson from "../../api/mockData/productGroup.json";
import { ProductInfoCard } from "../../types/ProductInfoCard";

export default function Home() {
  const [dataGroupSale, setDataGroupSale] = useState<ProductInfoCard[] | null>(
    null
  );
  useEffect(() => {
    setTimeout(() => setDataGroupSale(myJson), 3000);
  }, []);
  return (
    <>
      <MainLayout>
        <Header tab="home" />
        <Banner />
        <CardGroup />
        <ProductGroup tagName="Sale" data={dataGroupSale} />
        <ProductGroup tagName="Sale" data={dataGroupSale} />
        <ProductGroup tagName="Sale" data={dataGroupSale} />
      </MainLayout>
    </>
  );
}
