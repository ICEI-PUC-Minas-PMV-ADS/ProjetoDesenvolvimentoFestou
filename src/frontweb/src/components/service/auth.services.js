import API from './webapi.services';
import { BASE_URL } from './urls';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Credentials': 'true'
}

export const register = async (param) => {
  try {
    return await API.post(`${BASE_URL}/locador`, param, {
    headers: headers
  }).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const login = async (param) => {
  try {
    return await API.post(`${BASE_URL}/login`, param, {
    headers: headers
  }).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPerfil = async (param) => {
  try {
    return await API.get(`${BASE_URL}/users`, param).then(
      (response) => {
        return response.data;
      },
      (error) => {
        console.log(error);
        return null;
      }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
