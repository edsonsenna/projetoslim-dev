import { createStore } from "redux";
import updateReducer from "./reducers/updateReducer";

function configureStore(
      state = { clientes: [], localdb: null, remotedb: null }
    ) {

    const store = createStore(
      updateReducer,
      state
    );

  return store;
}
export default configureStore;