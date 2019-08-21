export default (state, action) => {
    
    switch (action.type) {
      case "update":
        return {
          ...state,
          notes: action.payload
        };
      default:
        return state;
    }
};