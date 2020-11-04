import React, { useState, useEffect } from "react";


const Products = (props) => {

  const [tempState, setTempState] = useState([]);

  const [productId, setProductId] = useState(null);
  const [productName, setProductName] = useState(null);
  const [productDescription, setProductDescription] = useState(null);
  const [productType, setProductType] = useState(null);
  const [productStoreCost, setProductStoreCost] = useState(null);
  const [productClientPrice, setProductClientPrice] = useState(null);
  const [isOutOfStock, setIsOutOfStock] = useState(false);
  const [totalInStoreAmount, setTotalInStoreAmount] = useState(null);
  const [createdAt, setCreatedAt] = useState(null);
  const [updatedAt, setUpdatedAt] = useState(null);

  useEffect(() => {
      let value;
// iterate localStorage
for (let i = 0; i < localStorage.length; i++) {

  // set iteration key name
  let key = localStorage.key(i);

  // use key name to retrieve the corresponding value
  value = JSON.parse(localStorage.getItem(key));

  // console.log the iteration key and value
  // console.log(key, JSON.parse(value));
  setTempState((tempState) => [ ...tempState, value])
}
  }, [])

  const productIdChangeHandler = (event) => {
    const input = event.target.value;
    const id = parseInt(input);
    setProductId(id);
  };

  const productNameChangeHandler = (event) => {
    setProductName(event.target.value);
  };

  const productDescriptionChangeHandler = (event) => {
    setProductDescription(event.target.value);
  };

  const productTypeChangeHandler = (event) => {
    setProductType(event.target.value);
  };

  const productStoreCostChangeHandler = (event) => {
    const input = event.target.value;
    const storeCost = parseInt(input);
    setProductStoreCost(storeCost);
  };

  const productClientPriceChangeHandler = (event) => {
    const input = event.target.value;
    const clientPrice = parseInt(input);
    setProductClientPrice(clientPrice);
  };

  const isOutOfStockChangeHandler = (event) => {
    if (isOutOfStock === false) {
      setIsOutOfStock(true)
      setTotalInStoreAmount(0);
    } else {
      setIsOutOfStock(false);
    }
  };

  const totalInStoreAmountChangeHandler = (event) => {
    const input = event.target.value;
    const storeAmount = parseInt(input);
    setTotalInStoreAmount(storeAmount);
  };

  const createdAtChangeHandler = (event) => {
    setCreatedAt(event.target.value);
  };

  const updatedAtChangeHandler = (event) => {
    setUpdatedAt(event.target.value);
  };

  const item = {
    product_id: productId,
    product_name: productName,
    product_description: productDescription,
    product_type: productType,
    product_store_cost: productStoreCost,
    product_client_price: productClientPrice,
    product_is_out_of_stock: isOutOfStock,
    product_in_store_amount: totalInStoreAmount,
    product_created_at: createdAt,
    product_updated_at: updatedAt
  };

  const clearForm = () => {
    const form = document.querySelector("form");
    form.reset();
  }


  const addItemHandler = (event) => {
    event.preventDefault();
    localStorage.setItem(`product${item.product_id}`, JSON.stringify(item));
    clearForm();
  }

//   let value;
// // iterate localStorage
// for (let i = 0; i < localStorage.length; i++) {

//   // set iteration key name
//   let key = localStorage.key(i);

//   // use key name to retrieve the corresponding value
//   value = localStorage.getItem(key);

//   // console.log the iteration key and value
//   console.log(key, JSON.parse(value));
// }

  return (
    <div className="products">
      <h2>Products</h2>
      <form onSubmit={addItemHandler}>
        <label>
          Product id:
          <input
            type="number"
            placeholder="product_id"
            required
            onChange={productIdChangeHandler}
          />
        </label>
        <br />
        <label>
          Product name:
          <input
            type="text"
            placeholder="product_name"
            required
            onChange={productNameChangeHandler}
          />
        </label>
        <br />
        <label>
          Product description:
          <input
            type="text"
            placeholder="product_description"
            required
            onChange={productDescriptionChangeHandler}
          />
        </label>
        <br />
        <label>
          Product type:
          <input
            type="text"
            placeholder="product_type"
            required
            onChange={productTypeChangeHandler}
          />
        </label>
        <br />
        <label>
          Product store cost:
          <input
            type="number"
            placeholder="product_store_cost"
            required
            onChange={productStoreCostChangeHandler}
          />
        </label>
        <br />
        <label>
          Product client price:
          <input
            type="number"
            placeholder="product_client_price"
            required
            onChange={productClientPriceChangeHandler}
          />
        </label>
        <br />
        Out of stock?
        <label>
          <input type="checkbox" onChange={isOutOfStockChangeHandler} />
        </label>
        <br />
        <label>
          Total in store amount:
          <input
            type="number"
            placeholder="total_in_store_amount"
            required
            disabled={isOutOfStock}
            onChange={totalInStoreAmountChangeHandler}
          />
        </label>
        <br />
        <label>
          Created at:
          <input
            type="date"
            placeholder="created_at"
            onChange={createdAtChangeHandler}
          />
        </label>
        <br />
        <label>
          Updated at:
          <input
            type="date"
            placeholder="updated_at"
            onChange={updatedAtChangeHandler}
          />
        </label>
        <button>Add Item</button>
      </form>
    </div>
  );
};

export default Products;
