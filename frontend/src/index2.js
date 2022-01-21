//create main div for product
<div className="container" key={product._id}>
  {/*////////////////////////////////*/}

  <div className="left-column">
    <img src={product.image} />
  </div>
  <div class="right-column">
  <div class="product-description">
  <span>{product.category}</span>
  <h1>{product.title}</h1>
  <p>{product.description}</p>
  </div>
  <div class="product-configuration">



  <div class="product-color">
          <span>Color</span>
   
          <div class="color-choose">
            <div>
              <input data-image="red" type="radio" id="red" name="color" value="red" />
              <label for="red"><span></span></label>
            </div>
            <div>
              <input data-image="blue" type="radio" id="blue" name="color" value="blue"/>
              <label for="blue"><span></span></label>
            </div>
            <div>
              <input data-image="black" type="radio" id="black" name="color" value="black"/>
              <label for="black"><span></span></label>
            </div>
          </div>
   
        </div>
        <div class="product-price">
        <span>148$</span>
        <a href="#" class="cart-btn">Add to cart</a>
      </div>
  </div>
  </div>

  <div className="product-image">
    <img src={product.image} />
  </div>
  {/*////////////////////////////////*/}
  <div className="product-description">
    {/*////////////////////////////////*/}

    <div className="product-description-1">
      {/*////////////////////////////////*/}
      <div className="product-title-1">
        {/*////////////////////////////////*/}
        <span className="delivery">
          Delivery : Amman 24-48 Hrs | Others 48-72 Hrs
        </span>
        <span className="title">{product.title}</span>
        <div className="Write-qty">
          {/*////////////////////////////////*/}
          <span className="review">WRITE A REVIEW</span>
          <div className="qty">
            <button
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              +
            </button>
            <p>{counter}</p>
            <button
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              -{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="product-title-2">
        <span className="price">
          <span className="currency">J.D</span> {product.price}
        </span>
        <span
          className="add-to-cart"
          onClick={(e) => {
            setCart([...cart, { ...product, number: counter }]);
            console.log(cart);
            if (localStorage.getItem("productCart") == null) {
              localStorage.setItem("productCart", []);
            }

            localStorage.setItem(
              "productCart",
              JSON.stringify([...cart, { ...product, number: counter }])
            );
          }}
        >
          {" "}
          Add TO CART
        </span>
      </div>
    </div>
    {/*////////////////////////////////*/}

    <div className="product-description-2">
      {/*////////////////////////////////*/}
      <div className="description">
        <span className="brief">{product.description}</span>
        <div className="descrip">
          <span>Category</span>
          <span>Elctonics</span>
        </div>
        <div className="descrip">
          <span>Sub-category</span>
          <span>{product.category}</span>
        </div>
        <div className="descrip">
          <span>Delivery</span>
          <span>5 J.D</span>
        </div>
        <div className="descrip">
          <span>Colors Available</span>
          <div className="colors-avil">
            <span>Pacific Blue</span>
            <span>Graphite</span>
            <span>Silver</span>

            <span>Gold</span>
          </div>
        </div>
      </div>
      <div className="description-website">
        <span>Cash On Delivery</span>
        <span>Card On Delivery</span>
        <span>All Major Credit Cards</span>
        <span>All prices Including VAT</span>
      </div>
    </div>
  </div>
</div>;
