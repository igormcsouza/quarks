from flask import Flask, jsonify

from .blueprints import classifier
from .extensions import cors


def create_app_minimal():
    app = Flask(__name__)

    return app

def create_app():
    app = create_app_minimal()

    classifier.init_app(app)
    cors.init_app(app)

    return app
