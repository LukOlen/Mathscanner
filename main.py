from flask import Flask, request, jsonify

app = Flask(__name__)

def your_python_function(data):
    # Process the data
    return f"Processed data: {data}"

@app.route('/process', methods=['POST'])
def process_data():
    data = request.json.get('input_data')
    result = your_python_function(data)
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)