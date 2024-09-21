from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


# Route for the home page
@app.route('/')
def landing_page():
    return render_template('index.html')

@app.route('/about')
def about_page():
    return render_template('about.html')

@app.route('/donate')
def donate_page():
    return render_template('donate.html')

@app.route('/contact')
def contact_page():
    return render_template('contact.html')

@app.route('/projects')
def projects_page():
    return render_template('projects.html')


# Load products from JSON file
import json
with open('products.json') as f:
    products = json.load(f)

# Route to get the list of products
@app.route('/products')
def get_products():
    return jsonify(products)

# Route to handle cart addition
@app.route('/add-to-cart', methods=['POST'])
def add_to_cart():
    product_id = request.json['product_id']
    product = next((p for p in products if p['id'] == product_id), None)
    
    if product:
        return jsonify(product), 200
    else:
        return jsonify({'error': 'Product not found'}), 404

if __name__ == '__main__':
    app.run(debug=True)

