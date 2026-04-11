import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FoodCard = ({ food }) => {
    
    const { dish_name, category, price, rating,image_link,id } = food;
    // console.log(dish_name, category, price, rating,image_link);
    return (
      <div className="card bg-base-100  shadow-sm">
        <figure className="py-5 relative">
          <Image
            src={image_link}
            alt={dish_name}
            width={200}
            height={200}
          ></Image>
            <div className="badge badge-secondary absolute top-[10%] right-[30%]">NEW</div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {dish_name}
          </h2>
          <div className="flex justify-between">
            <p>${price}</p>
            <p className="flex justify-end">Rating: {rating} &#11088;</p>
          </div>
          <div className="card-actions justify-end">
            <Link href=""><button className='btn btn-primary'>Add to Cart</button></Link>
            <Link href={`foods/${id}`}><button className='btn btn-warning'>Show Details</button></Link>
          </div>
        </div>
      </div>
    );
}

export default FoodCard;
