import React from 'react'
import CartItem from './CartItem'

import { Badge, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Cart = () => {
    const navigate = useNavigate();

    const handleCheckout =() =>{
        navigate("/checkout?step=2")
    }
    return (
        <div>
            <div className="lg:grid grid-cols-3 lg:px-16 relative">
                <div className="lg:col-span-2 lg:px-5 bg-white">
                    <div className=" space-y-3">
                        {[1,1,1,1,1,1].map((item)=><CartItem/>)}
                    </div>
                </div>
                <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 ">
                    <div className="border p-5 bg-white shadow-lg rounded-md">
                        <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
                        <hr />

                        <div className="space-y-3 font-semibold">
                            <div className="flex justify-between pt-3 text-black ">
                                <span>
                                    Price 
                                    {/* Price ({cart.cart?.totalItem} item) */}
                                </span>
                                <span>₹4697
                                    {/* {cart.cart.totalPrice} */}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span className="text-green-700">-₹3419
                                    {/* {cart.cart?.discounte} */}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Charges</span>
                                <span className="text-green-700">Free</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total Amount</span>
                                <span className="text-green-700">₹1278
                                    {/* {cart.cart?.totalDiscountedPrice} */}
                                </span>
                            </div>
                        </div>

                        <Button
                            onClick={()=>handleCheckout()}
                            variant="contained"
                            type="submit"
                            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
                        >
                            Check Out
                        </Button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Cart