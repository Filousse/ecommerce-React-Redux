import React from "react";
import ReactDOM from "react-dom";
import App from './app/pages/App';
import { store } from "./app/lib/store"
import { Provider } from "react-redux"
import { addToCart } from "./app/lib/actions"

console.log(store.getState())
const unsubscribe = store.subscribe(()=> console.log("Store => ",store.getState()))
store.dispatch(addToCart({name:"citron"}, 2))
store.dispatch(addToCart({name:"Kiwi"}, 5))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root")

);

