import { Link } from "react-router-dom";
import Star from "../../components/Star";

export default function RelatedItems({ item }) {
  return (
    <div className="wrapperRelatedProItem">
      <div className="wrapperImgRelatedProItem">
        <img className="imgBestProItem" src={item.image1} alt={item.name} />
      </div>
      <div className="rateRelatedProItem">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="nameRelatedProItem">{item.name.slice(0, 26)}...</p>
      <p className="priceRelatedProItem">$ {item.price}.00</p>
      <Link to={`/posts/${item.id}`}>
        <button className="RelatedProItemBtn">more details</button>
      </Link>
    </div>
  );
}
