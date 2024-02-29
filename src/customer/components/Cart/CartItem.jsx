import React from 'react'
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border rounded-md">

            <div className="flex items-center">
                <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] ">
                    <img
                        className="w-full h-full object-cover object-top"
                        src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                        alt=""
                    />
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold">
                        {/* {item?.product?.title} */}
                        product Title
                    </p>
                    <p className="opacity-70">Size:
                        {/* {item?.size} */}
                        S ,White</p>
                    <p className="opacity-70 mt-2">Seller:
                        {/* {item?.product?.brand} */}
                        Mufti
                    </p>
                    <div className="flex space-x-2 items-center pt-3">
                        <p className="opacity-50 line-through">
                            {/* ₹{item?.product.price} */}
                            ₹1999
                        </p>
                        <p className="font-semibold text-lg">
                            {/* ₹{item?.product.discountedPrice} */}
                            ₹999
                        </p>
                        <p className="text-green-600 font-semibold">
                            {/* {item?.product.discountPersent}% off */}
                            70% Off
                        </p>
                    </div>
                </div>

            </div>

            <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2 ">
                    <IconButton color="primary" aria-label="add an alarm">
                        <RemoveCircleOutlineIcon />
                    </IconButton>

                    <span className="py-1 px-7 border rounded-sm">3</span>
                    <IconButton color="primary" aria-label="add an alarm">
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div className="flex text-sm lg:text-base mt-5 lg:mt-0">

                    <Button  variant="text">
                        Remove{" "}
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default CartItem