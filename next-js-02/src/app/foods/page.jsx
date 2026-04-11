import FoodCard from "@/components/FoodCard/FoodCard";

async function page() {
  const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
  const data = await res.json()
  const foods = data.data
  console.log(foods)
  return (
    <div>
      <h2 className="flex justify-center my-8 text-3xl font-semibold ">All foods are here</h2>
      <div className="container mx-auto grid grid-cols-3 gap-10">
        {
          foods.map((food,idx)=><FoodCard key={idx} food={food}></FoodCard>)
        }
      </div>
    </div>
  )
}

export default page
