from flask import Flask
import json

def create_app():
    app = Flask(__name__)

    # Load products from JSON file
    with open('products.json') as f:
        products = json.load(f)

    # Import and register routes from routes.py
    from .routes import setup_routes
    setup_routes(app, products)

    return app
