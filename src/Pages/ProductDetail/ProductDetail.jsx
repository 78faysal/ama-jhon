import { useLoaderData, useNavigate } from "react-router-dom";

const ProductDetail = () => {
    const product = useLoaderData();
    const navigate = useNavigate()
    const { brand, thumbnail, title, price, rating, description } = product;
    console.log(product);

    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className="flex flex-col gap-5 items-center shadow md:flex-row px-20 py-7 mt-5">
                <img className="" src={thumbnail} alt="" />
                <div className="flex flex-col gap-3 justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight ">{title}</h5>
                    <p className=" font-normal">{description}</p>
                    <p className="font-normal">Brand: {brand}</p>
                    <p className="font-normal">Rating: {rating}</p>
                    <h2 className="text-2xl font-semibold">Price: ${price}</h2>
                    <div className="flex gap-5">
                        <button className="btn">Add To Cart</button>
                        <button onClick={handleGoBack} className="btn">Go Back</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;