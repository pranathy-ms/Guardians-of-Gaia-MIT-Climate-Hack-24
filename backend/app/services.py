import requests
import urllib.parse


def geocode_address(address, api_key):
    encoded_address = urllib.parse.quote(address)
    print(encoded_address)
    # https://api.mapbox.com/search/geocode/v6/forward?q={search_text}
    url = f"https://api.mapbox.com/search/geocode/v6/forward?q={encoded_address}&access_token={api_key}"
    print(f"Requesting URL: {url}")  # For debugging
    response = requests.get(url)
    print("HEREEEEE")
    print(response)
    if response.status_code == 200:
        data = response.json()
        if data['features']:
            # Mapbox returns coordinates as [longitude, latitude]
            coordinates = data['features'][0]['center']
            print(coordinates)
            return coordinates[1], coordinates[0]  # Return as lat, lon
    return None, None


def get_emissions_data(lat, lon, from_date, to_date, api_key):
    # Replace this with your actual emissions API call
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
        "X-API-Key": "{api_key}"
    }
    response = requests.post(url, json=payload, headers=headers)
    if response.status_code == 200:
        print(response.text)
        return response.json()
    return None





