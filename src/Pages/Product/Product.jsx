import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Product = ({ product }) => {
    const {id, thumbnail, title, price, rating } = product;
    return (
        <div>
            <div className="card p-5 bg-base-300 shadow border">
                <figure><img className="h-60" src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body pl-4">
                    <h2 className="card-title">{title}</h2>
                    <p>Rating: {rating}</p>
                    <div className="card-actions flex justify-between items-center">
                        <h2 className="text-2xl font-semibold">${price}</h2>
                        <Link to={`/products/${id}`}>
                        <button className="btn btn-primary">View Detail</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object
}

export default Product;