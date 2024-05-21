from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)

# Initialize the Flask application
app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Load the model
logging.info("Loading the model...")
try:
    nlp_pipeline = pipeline("text-generation", model="gpt2")
    logging.info("Model loaded successfully")
except Exception as e:
    logging.error(f"Error loading the model: {e}")

@app.route('/api/nlp', methods=['POST'])
def nlp():
    data = request.json
    user_input = data.get('text')
    logging.info(f"Received input: {user_input}")

    # Generate a response using the model
    try:
        response = nlp_pipeline(user_input, max_length=50)[0]['generated_text']
        logging.info(f"Generated response: {response}")
        return jsonify({'response': response})
    except Exception as e:
        logging.error(f"Error generating response: {e}")
        return jsonify({'error': 'Error generating response'}), 500

if __name__ == '__main__':
    app.run(port=5000)
