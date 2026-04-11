
import Image from 'next/image';
import React from 'react'

const FoodsDetailsPage = async ({ params }) => {
  const { foodsId } = await params;

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodsId}`,
  );
  const data = await res.json();
  const food = data.data;
  // const foods = data.data
  console.log(foodsId, food);

const { category, dish_name, image_link,
    main_ingredients, approximate_nutrition_per_serving,price,rating } = food;
  
  const { calories, protein, carbohydrates, fat, fiber } =
    approximate_nutrition_per_serving;

  return (
    <div className="container mx-auto space-y-2 max-w-[900]">
      <Image
        className="mx-auto"
        src={image_link}
        alt={dish_name}
        width={300}
        height={400}
      ></Image>
      <h2 className="font-bold text-4xl">{dish_name}</h2>
      <p>Category: {category}</p>
      <h2 className="text-xl font-bold  text-blue-500">Price: ${price}</h2>
      <p >Rating: {rating} &#11088;</p>
      <div className="grid grid-cols-2 px-20 gap-10">
        <div>
          <h2 className="font-semibold text-xl">Main Ingredients:</h2>
          <ul className="list-disc">
            {main_ingredients.map((ingredient, idx) => (
              <li key={idx}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-semibold text-xl">Nutritions:</h2>
          <ul className="list-disc">
            <li>calories: {calories}</li>
            <li>Protein: {protein}</li>
            <li>Carbohydrates: {carbohydrates}</li>
            <li>Fat: {fat}</li>
            <li>Fiber: {fiber}</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center '>
        <button className='btn btn-primary'>Buy Now</button>
      </div>
    </div>
  );
}

export default FoodsDetailsPage
