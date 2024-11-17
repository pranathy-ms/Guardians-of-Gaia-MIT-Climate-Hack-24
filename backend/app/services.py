import requests
import urllib.parse

def geocode_address(address, api_key):
    try:
        encoded_address = urllib.parse.quote(address)
        url = f"https://api.mapbox.com/geocoding/v5/mapbox.places/{encoded_address}.json?access_token={api_key}"
        response = requests.get(url)
        response.raise_for_status()  # Raise an error for bad status codes

        data = response.json()
        print("Geocode API Response:", data)  # Print the response for debugging

        if 'features' in data and data['features']:
            feature = data['features'][0]
            if 'geometry' in feature and 'coordinates' in feature['geometry']:
                coordinates = feature['geometry']['coordinates']
                return coordinates[1], coordinates[0]  # Return as lat, lon
            else:
                print("Error: 'coordinates' key not found in 'geometry'")
                return None, None
        else:
            print("Error: No features found in the response")
            return None, None
    except Exception as e:
        print("Error in geocode_address:", e)
        return None, None

def get_emissions_data(lat, lon, from_date, to_date, api_key):
    url = "https://ei.palmetto.com/api/v0/bem/calculate"
    payload = {
        "location": {
            "latitude": lat,
            "longitude": lon
        },
        "parameters": {
            "from_datetime": from_date,
            "to_datetime": to_date
        }
    }
    headers = {
        "accept": "application/json",
        "content-type": "application/json",
        "X-API-Key": api_key
    }
    response = requests.post(url, json=payload, headers=headers)
    if response.status_code == 200:
        print("Emissions Data Response:", response.json())  # Print for debugging
        return response.json()
    else:
        print("Failed to retrieve emissions data. Status code:", response.status_code, "Response:", response.text)
    return None
