// nlp.js
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const apiKey = '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';
const apiUrl = 'https://api-inference.huggingface.co/models/gpt2';

const processText = async (text) => {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputs: text })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log('API response:', data); // Log the response for debugging

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

module.exports = { processText };
