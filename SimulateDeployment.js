import React, { useState } from 'react';
import axios from 'axios';

function SimulateDeployment() {
  const [contract, setContract] = useState('');
  const [gasEstimate, setGasEstimate] = useState('');

  const handleSimulate = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/simulate', { contract });
      setGasEstimate(response.data.gas_estimate);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Simulate Deployment</h2>
      <textarea
        value={contract}
        onChange={(e) => setContract(e.target.value)}
        placeholder="Paste compiled bytecode"
      />
      <button onClick={handleSimulate}>Simulate</button>
      <pre>Gas Estimate: {gasEstimate}</pre>
    </div>
  );
}

export default SimulateDeployment;