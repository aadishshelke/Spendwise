from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will allow all domains by default

# Load the Random Forest model
rf_model = joblib.load('rf_model.pkl')

# Feature extraction function (same as in your model training)
def extract_features(url):
    features = {}
    features['url_length'] = len(url)
    features['num_digits'] = sum(c.isdigit() for c in url)
    special_chars = ['-', '@', '.', '%', '/']
    features['num_special_chars'] = sum(url.count(c) for c in special_chars)
    features['https'] = int('https' in url)
    keywords = ['login', 'secure', 'account', 'bank', 'signin','subscribe']
    features['suspicious_keyword'] = int(any(keyword in url for keyword in keywords))
    return pd.DataFrame([features])

# API endpoint for URL classification
@app.route('/classify_url', methods=['POST'])
def classify_url():
    data = request.get_json()  # Get data from the POST request
    url = data['url']  # Extract URL from the request
    
    # Extract features from the URL
    features = extract_features(url)
    
    # Predict using the Random Forest model
    prediction = rf_model.predict(features)[0]
    
    # Return the result
    result = "Unsafe" if prediction == 1 else "Safe"
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)

# pip install Flask scikit-learn pandas
# npm install axios
# pip install flask-cors
# npm install i react-push-notifications --force

# python server.py 
