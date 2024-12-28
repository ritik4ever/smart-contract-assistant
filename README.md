# smart-contract-assistant


# Smart Contract Assistant

## **Overview**

The Smart Contract Assistant is a tool that leverages OpenAI's GPT API and Web3 technologies to assist developers in:

1. **Generating Solidity Smart Contracts**: Automatically create secure Solidity contracts based on user requirements.
2. **Auditing Contracts**: Perform a static analysis on Solidity code using tools like Slither.
3. **Simulating Deployment**: Estimate gas usage for contract deployment on Ethereum testnets.

This project includes a **backend** (Flask) and a **frontend** (React).

---

## **Features**

- **Smart Contract Generation**:
  - Input contract requirements.
  - Receive a complete Solidity smart contract.
- **Contract Auditing**:
  - Audit the security and quality of smart contracts.
  - Outputs issues using static analysis.
- **Deployment Simulation**:
  - Simulates the gas cost for deploying contracts.

---

## **Technologies Used**

### **Backend**:
- Python (Flask)
- Web3.py
- OpenAI API
- Slither (for contract analysis)

### **Frontend**:
- React.js
- Axios (for API communication)

---

## **Setup Guide**

### **Prerequisites**
1. Python 3.8+
2. Node.js 16+
3. npm (Node Package Manager)
4. OpenAI API Key
5. Ethereum Testnet Provider (e.g., Infura or Alchemy)

---

### **Step 1: Clone Repository**

Clone the project to your local machine:
```bash
git clone https://github.com/your-repo/smart-contract-assistant.git
cd smart-contract-assistant
```

---

### **Step 2: Backend Setup**

#### Navigate to the backend directory:
```bash
cd backend
```

#### Install Dependencies:
```bash
pip install -r requirements.txt
```

#### Add Environment Variables:
1. Create a `.env` file in the `backend` folder.
2. Add the following:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   WEB3_PROVIDER_URI=https://goerli.infura.io/v3/your_project_id
   ```
3. Replace `your_openai_api_key` and `your_project_id` with your actual values.

#### Run the Backend Server:
```bash
python app.py
```

The server will run at `http://127.0.0.1:5000`.

---

### **Step 3: Frontend Setup**

#### Navigate to the frontend directory:
```bash
cd ../frontend
```

#### Install Dependencies:
```bash
npm install
```

#### Start the Frontend:
```bash
npm start
```

The frontend will run at `http://localhost:3000`.

---

## **Usage**

### **1. Generate Contract**
1. Open the frontend (`http://localhost:3000`).
2. Enter the requirements for your smart contract.
3. Click **Generate** to receive Solidity code.

### **2. Audit Contract**
1. Paste your Solidity code into the **Audit Contract** section.
2. Click **Audit** to receive security analysis results.

### **3. Simulate Deployment**
1. Paste your contract's bytecode into the **Simulate Deployment** section.
2. Click **Simulate** to estimate gas costs.

---

## **Project Structure**

```
smart-contract-assistant/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components/
│   │   │   ├── GenerateContract.js
│   │   │   ├── AuditContract.js
│   │   │   ├── SimulateDeployment.js
├── README.md
```

---

## **API Endpoints**

### **1. Generate Contract**
- **Endpoint**: `POST /generate`
- **Input**:
  ```json
  {
    "prompt": "Describe your smart contract requirements"
  }
  ```
- **Response**:
  ```json
  {
    "contract": "Solidity code..."
  }
  ```

### **2. Audit Contract**
- **Endpoint**: `POST /audit`
- **Input**:
  ```json
  {
    "contract": "Solidity code..."
  }
  ```
- **Response**:
  ```json
  {
    "audit": "Audit report..."
  }
  ```

### **3. Simulate Deployment**
- **Endpoint**: `POST /simulate`
- **Input**:
  ```json
  {
    "contract": "Compiled bytecode"
  }
  ```
- **Response**:
  ```json
  {
    "gas_estimate": 123456
  }
  ```

---

## **Contributing**

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the MIT License. See the `LICENSE` file for details.

