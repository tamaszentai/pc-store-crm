import React, { useState } from "react";

const Products = () => {


  // const dbName = "Products";
  // let request = window.indexedDB.open(dbName, 1),db,tx,store,index;
  // request.onerror = (event) => {
  //   console.log("There was an error" + event.target.errorCode)
  // };
  // request.onsuccess = (event) => {
  //   db = request.result
  // }

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
      setIsOutOfStock(true);
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

  const product = {
    product_id: productId,
    product_name: productName,
    product_description: productDescription,
    product_type: productType,
    product_store_cost: productStoreCost,
    product_client_price: productClientPrice
  };


  const addItemHandler = (event) => {
    event.preventDefault();
    if(!localStorage.getItem('products')){
      localStorage.setItem('products', JSON.stringify(product));
      } else {
        const data = localStorage.getItem('products');
        console.log(JSON.parse(data));
      }
        
        
   
  }

  return (
    <div className="products">
      <h2>Products</h2>
      <form onSubmit={addItemHandler}>
        <label>
          Product id:
          <input
            type="text"
            placeholder="product_id"
            onChange={productIdChangeHandler}
          />
        </label>
        <br />
        <label>
          Product name:
          <input
            type="text"
            placeholder="product_name"
            onChange={productNameChangeHandler}
          />
        </label>
        <br />
        <label>
          Product description:
          <input
            type="text"
            placeholder="product_description"
            onChange={productDescriptionChangeHandler}
          />
        </label>
        <br />
        <label>
          Product type:
          <input
            type="text"
            placeholder="product_type"
            onChange={productTypeChangeHandler}
          />
        </label>
        <br />
        <label>
          Product store cost:
          <input
            type="text"
            placeholder="product_store_cost"
            onChange={productStoreCostChangeHandler}
          />
        </label>
        <br />
        <label>
          Product client price:
          <input
            type="text"
            placeholder="product_client_price"
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
            type="text"
            placeholder="total_in_store_amount"
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
