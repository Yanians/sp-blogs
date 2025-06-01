import * as React from 'react';

import { useSearchParams } from 'react-router-dom';

export default function DataDeletionStatus() {
  const [searchParams] = useSearchParams();
  const requestId = searchParams.get('request_id');

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Facebook Data Deletion</h1>
      <p>Your request has been received.</p>
      {requestId && <p>Confirmation Code: <strong>{requestId}</strong></p>}
    </div>
  );
}
