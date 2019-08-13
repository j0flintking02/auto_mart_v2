import { FETCH_CARS } from '../actions/actionType';

const initialState = {
    "data":[],
};

  const carsReducer = (state = initialState, action) => {
      switch (action.type) {
        case FETCH_CARS:
          return{
            ...state,
            message:action.payload.message,
            status:action.payload.status,
            data: [...action.payload.data]
          };
        default:
          return state;
    }
  };

  export default carsReducer;