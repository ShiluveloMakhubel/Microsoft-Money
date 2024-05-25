const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
jest.setTimeout(30000); // 30 seconds
const apiKey = process.env.APIKEY;
const apiUrl = process.env.APIURL;


const processText = async (text) => {
  try {
    // Fetch data from your MongoDB
    const databaseData = await getAllAccounts(); // Assuming you have a function to fetch data from your MongoDB
    
    // Process the fetched data as needed
    const processedData = databaseData.map(account => account.balance);
    
    // Modify the text based on the fetched database data
    const modifiedText = text ;
    
    // Make API request with the modified text
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputs: modifiedText })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log('API response:', data);

    if (Array.isArray(data) && data.length > 0 && data[0].generated_text) {
      return data[0].generated_text;
    } else {
      throw new Error('Invalid response structure');
    }
  } catch (error) {
    console.error('Error in processText:', error);
    throw error;
  }
};

const getAllAccounts = async () => {
  try {
    const response = await fetch('http://localhost:5001/api/all');
    if (!response.ok) {
      throw new Error(`Failed to fetch accounts: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching accounts:', error);
    throw error;
  }
};

module.exports = { processText };
