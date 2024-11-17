import requests

def test_flask_api():
    API_URL = 'http://localhost:5000/process'
    payload = {
        'address': '1600 Amphitheatre Parkway, Mountain View, CA',
        'fromDate': '2023-01-01',
        'toDate': '2023-12-31'
    }
    try:
        response = requests.get(API_URL, json=payload)
        print(response)
        handle_response(response)
    except Exception as e:
        print('Error occurred:', str(e))

def handle_response(response):
    if response.status_code == 200:
        print('Success! Response:', response.json())
    else:
        print(f'Error: {response.status_code}. Response text: {response.text}')

if __name__ == '__main__':
    test_flask_api()