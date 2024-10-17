from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

def process_message(message):
    # Replace this with your model's inference code
    return f"Model processed your message: {message}"

@app.route('/process', methods=['POST'])
def process():
    data = request.get_json()
    message = data.get('message')
    response = process_message(message)
    return jsonify({'response': "Echo from server:" + response})

if __name__ == '__main__':
    app.run(debug=True)
