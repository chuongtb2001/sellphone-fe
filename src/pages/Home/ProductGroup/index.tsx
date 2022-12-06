import React, { useState, useEffect } from "react";
import "./ProductGroup.css";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import ProductCard from "../../../components/common/ProductCard";
import { ProductInfoCard } from "../../../types/ProductInfoCard";
import { Loader } from "../../../components/common/Loader";

type dataType = ProductInfoCard[] | null;

export default function ProductGroup({
  data,
  tagName,
}: {
  data: dataType;
  tagName: string;
}) {
  const [count, setCount] = useState<number>(0);
  const [maxCount, setMaxCount] = useState<number>(
    data === null
      ? 0
      : window.innerWidth > 1024
      ? data.length - 5
      : window.innerWidth > 576
      ? data.length - 4
      : data.length - 2
  );

  useEffect(() => {
    if (data !== null) {
      setMaxCount(
        window.innerWidth > 1024
          ? data.length - 5
          : window.innerWidth > 576
          ? data.length - 4
          : data.length - 2
      );
      window.addEventListener("resize", handleResize);
    }
    function handleResize() {
      if (data !== null) {
        setCount(0);
        setMaxCount(
          window.innerWidth > 1024
            ? data.length - 5
            : window.innerWidth > 576
            ? data.length - 4
            : data.length - 2
        );
      }
    }
    return () => {
      if (data !== null) window.removeEventListener("resize", handleResize);
    };
  }, [data]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((preCount) => (preCount === maxCount ? preCount : preCount + 1));
    }, 5000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [maxCount]);
  return (
    <>
      <div className="product-group">
        <div className="product-group-heading">
          <span className="tag-name">{tagName}</span>
          <span className="view-more">View more</span>
        </div>
        <div className="product-card-group">
          {data === null ? (
            <Loader />
          ) : (
            <>
              {data.map((item) => (
                <div
                  key={item.id}
                  className="product-card-item-container"
                  style={{ transform: `translateX(-${count * 100}%)` }}
                >
                  <ProductCard data={item} />
                </div>
              ))}
              <BiLeftArrow
                className="swiper-btn-previous"
                onClick={() => setCount(count - 1 < 0 ? 0 : count - 1)}
              />
              {count !== maxCount && (
                <BiRightArrow
                  className="swiper-btn-next"
                  onClick={() => setCount(count + 1)}
                />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
