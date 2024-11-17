from flask import Flask
import sys
import os
from flask_cors import CORS

sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from config import Config


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app)

    from app import routes
    app.register_blueprint(routes.bp)

    return app