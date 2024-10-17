from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process():
    user_message = request.json.get('message')
    response = {"response": f"Echo: {user_message}"}
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True, port=8080)
