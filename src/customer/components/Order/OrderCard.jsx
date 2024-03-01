import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { Adjust } from '@mui/icons-material';

const OrderCard = () => {
    return (
        <Box className="p-5 shadow-lg hover:shadow-2xl border ">
            <Grid spacing={2} container sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div
                        // onClick={() => navigate(`/account/order/${order?.id}`)}
                        className="flex cursor-pointer"
                    >
                        <img
                            className="w-[5rem] h-[5rem] object-cover object-top"
                            //   src={item?.product.imageUrl}
                            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                            alt=""
                        />
                        <div className="ml-5">
                            <p className="mb-2">
                                {/* {item?.product.title} */}
                                Men Slim Mid Rise Black
                            </p>
                            <p className="opacity-50 text-xs font-semibold space-x-5">
                                <span>Size:
                                    {/* {item?.size} */}M
                                </span>
                            </p >
                            <p className="opacity-50 text-xs font-semibold space-x-5">Color : Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>₹
                        1099
                        {/* {item?.price} */}
                    </p>
                </Grid>
                <Grid item xs={4}>
                    {
                        true && <div>
                            <p>
                                <AdjustIcon
                                    sx={{ width: "15px", height: "15px" }}
                                    className="text-green-600 p-0 mr-2 text-sm"
                                />
                                <span>Delivered On Mar 03</span>
                            </p>
                            <p className="text-xs">Your Item Has Been Delivered</p>
                        </div>
                    }

                    {
                        false && <div>
                            <AdjustIcon
                                sx={{ width: "15px", height: "15px" }}
                                className="text-green-600 p-0 mr-2 text-sm"
                            />
                            <span>Expected Delivery On Mar 03</span>
                        </div>
                    }



                    {/* {item.orderStatus === "DELIVERED" && (
                        <div
                            onClick={() => navigate(`/account/rate/{id}`)}
                            className="flex items-center text-blue-600 cursor-pointer"
                        >
                            <StarIcon sx={{ fontSize: "2rem" }} className="px-2 text-5xl" />
                            <span>Rate & Review Product</span>
                        </div>
                    )} */}
                </Grid>


            </Grid>

        </Box>
    )
}

export default OrderCard