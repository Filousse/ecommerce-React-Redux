import { connect } from "react-redux"
import App from "../components/App"
import { saveCart } from "../../lib/actions"

export const AppContainer = connect(
    function mapStateToProps(state) {
        return { items: state.items }
    },
    function mapDispatchToProps(dispatch) {
        return {
            saveLocalStorage: items =>  dispatch(saveCart(items))
        }
    }
)(App)