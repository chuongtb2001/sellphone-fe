import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../components/layouts/MainLayout";
import myJson from "../../api/mockData/productGroup.json";
import "./test.css";

export default function ProductDetail() {
  const { productId } = useParams();
  const [data, setData] = useState(myJson[0]);
  console.log(Array.from(new Set(myJson[0].detail)));
  const [opt, setOpt] = useState(() => Array.from(new Set(myJson[0].detail)));
  return (
    <MainLayout>
      <p className="breadcrumbs">Home / Product / ...</p>
      <div className="info">
        <div className="left">x</div>
        <div className="right">
          <h1>{data.productName}</h1>
          <label>RAM</label>
          <ul>
            {data.detail?.map((item) => (
              <li>{item.RAM}</li>
            ))}
          </ul>
        </div>
      </div>
    </MainLayout>
  );
}
