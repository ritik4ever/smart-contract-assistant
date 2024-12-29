from flask import Flask, request, jsonify
from web3 import Web3
import openai
import subprocess
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

# Web3 connection (Ethereum testnet, e.g., Infura)
WEB3_PROVIDER_URI = os.getenv("WEB3_PROVIDER_URI")
w3 = Web3(Web3.HTTPProvider(WEB3_PROVIDER_URI))


# Route 1: Generate Solidity code
@app.route('/generate', methods=['POST'])
def generate_contract():
    prompt = request.json.get('prompt')
    if not prompt:
        return jsonify({'error': 'Prompt is required'}), 400

    try:
        response = openai.Completion.create(
            model="text-davinci-003",
            prompt=f"Write a secure Solidity smart contract: {prompt}",
            max_tokens=500
        )
        contract_code = response.choices[0].text.strip()
        return jsonify({'contract': contract_code})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# Route 2: Audit Solidity code
@app.route('/audit', methods=['POST'])
def audit_contract():
    contract_code = request.json.get('contract')
    if not contract_code:
        return jsonify({'error': 'Contract code is required'}), 400

    # Save contract to a temporary file
    with open('temp.sol', 'w') as file:
        file.write(contract_code)

    try:
        # Run Slither for static analysis
        result = subprocess.run(['slither', 'temp.sol'], capture_output=True, text=True)
        if result.returncode == 0:
            return jsonify({'audit': result.stdout})
        else:
            return jsonify({'audit': result.stderr}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    finally:
        os.remove('temp.sol')


# Route 3: Simulate deployment
@app.route('/simulate', methods=['POST'])
def simulate_deployment():
    contract_code = request.json.get('contract')
    if not contract_code:
        return jsonify({'error': 'Contract code is required'}), 400

    try:
        # Example: Compile and deploy with Web3.py
        compiled = w3.eth.contract(abi=[], bytecode=contract_code)  # Simplified
        gas_estimate = compiled.constructor().estimate_gas()
        return jsonify({'gas_estimate': gas_estimate})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


# Main entry point
if __name__ == '__main__':
    app.run(debug=True)