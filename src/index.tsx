import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Store, createStoreRenderer } from "./store"
import DenseAppBar from "./components/dense-app-bar"

class App extends React.Component {
  render() {
    return (
      <div>
        <DenseAppBar/>
      </div>
    )
  }
}

let store: Store = createStoreRenderer()

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
)
