// api.js

import axios from 'axios';

const baseURL = 'http://localhost:5000/api/';
export const getAllAccounts = async () => {
  try {
    const response = await axios.get(`${baseURL}all`);
    return response.data;
    console.log('ran')
  } catch (error) {
    throw error;
  }
};

export const addAccount = async (accountData) => {
  try {
    const response = await axios.post(`${baseURL}add`, accountData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNLPResponse = async (text) => {
  try {
    const response = await axios.post('http://localhost:5000/api/nlp', { text });
    return response.data;
  } catch (error) {
    console.error('Error fetching NLP response:', error);
    throw error;
  }
};