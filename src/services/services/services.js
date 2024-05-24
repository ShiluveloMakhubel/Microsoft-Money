import axios from 'axios';


const baseURL = 'http://localhost:5001/api/';
export const getAllAccounts = async () => {
  const response = await axios.get(`${baseURL}all`);
  return response.data;
};




export const addAccount = async (accountData) => {
  try {
    const response = await axios.post(`${baseURL}add`, accountData);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getTransactionsByAccount = async (accountId) => {
  const response = await axios.get(`/api/accounts/${accountId}/transactions`);
  return response.data;
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