import  "./ProductPage.css"
const ProductPage = () => {
    const products =
    result.length &&
    result.map((product) => {
      return (
        <div className="product" key={product._id} onClick={()=>{
          setProduct([product])
        }}>
          <div className="product-image">
            <img src={product.image} />
          </div>
          <div className="product-description">
            <p>{product.title}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>amount</p>
            <button
              onClick={(e) => {
                setCart([...cart, product]);
              }}
            >
              add to cart
            </button>
            <button onClick={()=>{
              setCounter(counter+1)
            }}>+</button>
            <p>{counter}</p>
            <button onClick={()=>{
              setCounter(counter-1)
            }}>-</button>


          </div>
        </div>
      );
    });
    return (
        <div className="product-detailes">

            
        </div>
    )
}

export default ProductPage
ce