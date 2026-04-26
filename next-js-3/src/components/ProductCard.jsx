
const ProductCard = ({ product }) => {
    const {title, slug, price, discount, brand, category, image, stock}=product
  return (
    <div className="card w-96 bg-base-100 card-md shadow-sm">
      <div className="card-body">
              <h2 className="card-title">{ title}</h2>
        <p>
          {slug}
              </p>
              <p>Brand: {brand}</p>
              <p>Price: {price}</p>
              <p>Discount: {discount}</p>
              <p>Stock: {stock}</p>
              <p>Category: {category}</p>
        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard
