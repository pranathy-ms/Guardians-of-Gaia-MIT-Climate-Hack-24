from flask import Flask
from flask_cors import CORS
from config import Config

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    CORS(app, resources={r"/*": {"origins": "*"}})

    from app.routes import bp
    app.register_blueprint(bp, url_prefix='/api')

    return app
