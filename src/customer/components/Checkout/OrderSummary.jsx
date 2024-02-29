import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'
import { Button } from '@mui/material'

const OrderSummary = () => {
    return (
        <div className="space-y-5">
            <div className="p-5 shadow-lg rounded-md border ">
                <AddressCard />
            </div>
            <div className="lg:grid grid-cols-3 relative justify-between">
                <div className="lg:col-span-2 ">
                    <div className=" space-y-3">
                        <CartItem/>
                    </div>
                </div>
                <div className="sticky top-0 h-[100vh] mt-5 lg:mt-0 ml-5">
                    <div className="border p-5 bg-white shadow-lg rounded-md">
                        <p className="font-bold opacity-60 pb-4">PRICE DETAILS</p>
                        <hr />

                        <div className="space-y-3 font-semibold">
                            <div className="flex justify-between pt-3 text-black ">
                                <span>Price 
                                    {/* ({order.order?.totalItem} item) */}
                                    </span>
                                <span>₹ 21312
                                    {/* {order.order?.totalPrice} */}
                                    </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Discount</span>
                                <span className="text-green-700">-₹ 21323
                                {/* {order.order?.discounte} */}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery Charges</span>
                                <span className="text-green-700">Free</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total Amount</span>
                                <span className="text-green-700">₹657553
                                {/* {order.order?.totalDiscountedPrice} */}
                                </span>
                            </div>
                        </div>

                        <Button
                            // onClick={handleCreatePayment}
                            variant="contained"
                            type="submit"
                            sx={{ padding: ".8rem 2rem", marginTop: "2rem", width: "100%" }}
                        >
                            Payment
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OrderSummary