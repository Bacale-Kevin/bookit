import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/userConstant";
import axios from "axios";


//* Register user
export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post("/api/auth/register", userData, config);

    dispatch({
      type: REGISTER_USER_SUCCESS,
    });
  } catch (error) {
    //   console.log("Error --> ",error.response.data.message)
    dispatch({
      type: REGISTER_USER_FAIL,
      error: error.response.data.message,
    });
  }
};

//* Clear errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };
