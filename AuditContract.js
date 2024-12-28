import React, { useState } from 'react';
import axios from 'axios';

function AuditContract() {
  const [contract, setContract] = useState('');
  const [auditResult, setAuditResult] = useState('');

  const handleAudit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/audit', { contract });
      setAuditResult(response.data.audit);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Audit Contract</h2>
      <textarea
        value={contract}
        onChange={(e) => setContract(e.target.value)}
        placeholder="Paste your Solidity code"
      />
      <button onClick={handleAudit}>Audit</button>
      <pre>{auditResult}</pre>
    </div>
  );
}

export default AuditContract;