import CartItems from "./CartItems";
import "./ShoppingCart.scss";

function ShoppingCart() {
  return (
    <>
      <div className="container-fluid">
        {/* header  */}
        <div className="row">
          <div className="col-12">
            <div className="shoppingCartContainer">
              <div className="headerShoppingCart">
                <p className="titleHeaderCart">your cart</p>
              </div>
            </div>
          </div>
        </div>
        {/* cart items  */}
        <div className="row cartDetailTitles">
          <div className="col-5">
            <div className="titleProCartDetails">product</div>
          </div>
          <div className="col-2">
            <p className="titlePrice2">price</p>
          </div>
          <div className="col-3">
            <p className="titleQuantity">quantity</p>
          </div>
          <div className="col-2">
            <p className="titleTotalPrice">total</p>
          </div>
        </div>
        <CartItems />
        <CartItems />
        <CartItems />
        {/* footer of cart  */}
        <div className="row">
          <div className="col-12">
            <div className="footerShoppingCart">
              <div className="wrapperTotalPrice">
                <p className="shoppingCartTotalPriceTitle">total Price</p>
                <p className="shoppingCartTotalPrice">$1520.00</p>
              </div>
              <button className="shoppingCartCheckOutBtn">check out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
