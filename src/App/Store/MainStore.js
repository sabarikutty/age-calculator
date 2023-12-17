import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit'
import CalenderReducer from "./CalenderSlice";
const Store = (props) => {
    const store = configureStore({
        reducer: {
            calender: CalenderReducer
        }
      }) 
    return (
        <Provider store={store}>
            {props?.children}
        </Provider>
    )
}
export default Store;
