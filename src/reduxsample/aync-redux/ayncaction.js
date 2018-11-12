export const FETCH_USERS = "FETCH_USERS";

export const fetchUsers = () => {
  console.log("2. Get Users action called : FETCH USER ");

  // Returns a function instead of this object
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => {
        console.log("Users : " + users);
        dispatch({
          type: FETCH_USERS,
          payload: users
        });
      });
  };
};
