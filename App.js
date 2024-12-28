import React from 'react';
import GenerateContract from './components/GenerateContract';
import AuditContract from './components/AuditContract';
import SimulateDeployment from './components/SimulateDeployment';

function App() {
  return (
    <div>
      <h1>Smart Contract Assistant</h1>
      <GenerateContract />
      <AuditContract />
      <SimulateDeployment />
    </div>
  );
}

export default App;