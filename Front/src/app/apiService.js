import axios from "axios"

/**
 * This post's API allows you to see if the data sent in parameters corresponds
 * to the connection API in order to obtain the token associated with the profile.
 * @param {string} email
 * @param {(string|number)} password
 * @returns token for login
 */
export const getUserLogin = async (user) => {
  try {
    console.log(user);
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/login",
      user
    )
    // Store the token in localStorage
    localStorage.setItem("token", response.data.body.token)
    return response.data.body.token
  } catch (e) {
    if (e.response.data.message === "Error: User not found!") {
      return { error: "User not found in database" }
    } else {
      if (e.response.data.message === "Error: Password is invalid") {
        return { error: "User's password is invalid" }
      } else {
        return { error: "Server connection error" }
      }
    }
  }
}

/**
 * Retrieves the user's profile information using the provided token.
 *
 * @param {string} token - The authentication token.
 * @return {Object} A Promise that resolves to the user's profile information.
 */
export const getUserToken = async (token) => {
  try {
    const response = await axios.post(
      "http://localhost:3001/api/v1/user/profile",
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data.body
  } catch (e) {
    console.log(e)
  }
}


/**
 * Send user information to update the user profile.
 *
 * @param {string} token - The authentication token.
 * @param {string} firstName - The user's first name.
 * @param {string} lastName - The user's last name.
 * @return {Object} The updated user profile information.
 */
export const putUserInfos = async (token, firstName, lastName) => {
  try {
    const response = await axios.put(
      "http://localhost:3001/api/v1/user/profile",
      { firstName: firstName, lastName: lastName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data.body
  } catch (e) {
    console.log(e)
  }
}