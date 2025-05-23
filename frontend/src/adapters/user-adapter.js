// These functions all take in a body and return an options object
// with the provided body and the remaining options
import { fetchHandler, getPatchOptions } from "../utils/fetchingUtils";

const baseUrl = "/api/users";

export const createUser = async ({
  username,
  email,
  age,
  passwordHash,
  zipcode,
}) => {
  return fetchHandler(
    baseUrl,
    getPostOptions({ username, email, age, passwordHash, zipcode })
  );
};

export const getAllUsers = async () => {
  return await fetchHandler(baseUrl);
};

export const getUser = async (id) => {
  return fetchHandler(`${baseUrl}/${id}`);
};

export const updateUsername = async ({ id, username, email, age, zipcode }) => {
  return fetchHandler(
    `${baseUrl}/${id}`,
    getPatchOptions({ id, username, email, age, zipcode })
  );
};
