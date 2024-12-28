import React, { useState } from 'react';
import axios from 'axios';

function GenerateContract() {
  const [prompt, setPrompt] = useState('');
  const [contract, setContract] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/generate', { prompt });
      setContract(response.data.contract);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Generate Contract</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter contract requirements"
      />
      <button onClick={handleGenerate}>Generate</button>
      <pre>{contract}</pre>
    </div>
  );
}

export default GenerateContract;