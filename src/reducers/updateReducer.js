export default (state, action) => {
    
    switch (action.type) {
      case "UPDATE_CLIENTS":
        return {
          ...state,
          clientes: action.payload
        };
      case "SET_DB":
        return {
          ...state,
          localdb: action.localDb,
          remotedb: action.remoteDb
        };
      default:
        return state;
    }
};