import ReactSlider from "react-slider";
import { useState } from "react";

export default function PriceRange(): JSX.Element {
    const [getPrice, setPrice] = useState<{ min: number; max: number }>({
        min: 0,
        max: 1000,
    });

    // price handler
    const priceChange = (e: number[]) => {
        setPrice({
            min: e[0],
            max: e[1],
        });
    };

    return (
        <>
            <div className="slider-labels">
                <ReactSlider
                    className="ui-slider"
                    thumbClassName="ui-slider-thumb"
                    trackClassName="ui-slider-track"
                    value={[getPrice.min, getPrice.max]}
                    min={0}
                    max={1000}
                    ariaLabel={["Lower thumb", "Upper thumb"]}
                    ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                    pearling
                    onChange={priceChange}
                    minDistance={10}
                />
                <div className="title">
                    Price:{" "}
                    <span>
                        {getPrice.min} - {getPrice.max}
                    </span>
                </div>
            </div>
        </>
    );
}
