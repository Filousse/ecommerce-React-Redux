import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../lib/actions";

const Modal = ({ item }) => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
  
    const add = (item, quantity) => {
      dispatch(addToCart(item, quantity))
    }
    return (
      <div
        class="modal fade "
        id={item.ref}
        data-backdrop="static"
        tabindex="-1"
        role="dialog"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">{item.name}</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row">
                <div className="col-sm-4">
                  <img
                    width="170"
                    height="170"
                    src={
                      process.env.PUBLIC_URL +
                      `/assets/${item.category}/${item.image}`
                    }
                    alt='${item.image}'
                  />
                </div>
  
                <div className="col-sm">
                  <p class="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                    <h3 className="price">€{item.price}/{item.unit}</h3> <br />
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                  >
                    <button
                      onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                      type="button"
                      className="btn btn-secondary">
                      -
                    </button>
                      <span className="btn btn-light qty">{qty}</span>
                    <button
                      onClick={() => setQty(qty + 1)}
                      type="button"
                      className="btn btn-secondary">
                      +
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            </div>
  
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal">
                Close
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
                onClick={()=> add(item, qty)} >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Modal;
  