import { ProductInfoCard } from "../../../types/ProductInfoCard";
import "./ProductCard.css";

export default function ProductCard({ data }: { data: ProductInfoCard }) {
  return (
    <div className="product-card">
      {data.productPercentSale !== 0 && (
        <div className="on-sale">Sale {data.productPercentSale}%</div>
      )}
      <img src={data.productImg} alt="" />
      <p className="product-title">{data.productName}</p>
      <span className="product-price-sale">
        ${data.productPrice * (1 - data.productPercentSale / 100)}
      </span>
      <span className="product-price">${data.productPrice}</span>
      <p className="rate-star">
        <span>&#8902;</span> {data.productRating}/5
      </p>
    </div>
  );
}
