import React from 'react'
import "./ProductCard.css"

const ProductCard = ({ product }) => {
    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor-pointer '>
            <div>
                <img className='h-full w-full object-cover-left-top' src={product.imageUrl} alt="" />
            </div>

            <div className='textPart bg-white space-x-2'>
                <h6 className='font-bold opacity-60'>{product.brand}</h6>
                <p>{product.title}</p>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>₹{product.discountedPrice}</p>
                    <p className='line-through opacity-70'>₹{product.price}</p>
                    <p className='text-green-600 font-semibold'>{product.discountPersent} % off</p>
                </div>
            </div>


        </div>
    )
}

export default ProductCard