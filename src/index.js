import React from "react";
import ReactDOM from "react-dom";
import { store } from "./app/lib/store";
import { Provider } from "react-redux";
import { AppContainer } from "./app/views/containers"
// import { addToCart } from "./app/lib/actions";

console.log(store.getState())
const unsubscribe = store.subscribe(()=> console.log("Store => ", store.getState()))
// store.dispatch(addToCart({name:"citron"}, 2))
unsubscribe()

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>
    , document.getElementById("root")
);

