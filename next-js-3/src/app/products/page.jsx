import ProductCard from "@/components/ProductCard"


const getProducts = async ()=>{
    const res = await fetch("http://localhost:5000/products",{next:{revalidate:10}})
    return res.json()
}

const ProductPage = async () => {

    const products= await getProducts()
  return (
    <div className="container mx-auto   ">
          Products: {products.length}
          <div className="grid grid-cols-4 gap-8 mt-20">
              {
                  products.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
              }
          </div>
    </div>
  )
}

export default ProductPage
