from flask import Blueprint, request, jsonify, current_app
from app.services import geocode_address, get_emissions_data

bp = Blueprint('main', __name__)

@bp.route('/process', methods=['POST'])
def process_data():
    data = request.json
    address = data.get('address')
    from_date = data.get('fromDate')
    to_date = data.get('toDate')

    lat, lon = geocode_address(address, current_app.config['SECRET_KEY_MAPBOX'])
    if not lat or not lon:
        return jsonify({'error': 'Geocoding failed'}), 400

    emissions_data = get_emissions_data(lat, lon, from_date, to_date, current_app.config['SECRET_KEY_PALMETTO'])
    if not emissions_data:
        return jsonify({'error': 'Failed to retrieve emissions data'}), 400

    return jsonify(emissions_data)