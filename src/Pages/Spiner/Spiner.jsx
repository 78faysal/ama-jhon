import { RotatingLines } from "react-loader-spinner";

const Spiner = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    );
};

export default Spiner;