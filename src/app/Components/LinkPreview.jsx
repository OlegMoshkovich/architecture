// src/components/LinkPreview.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LinkPreview({ url }) {
  const [metadata, setMetadata] = useState(null);

  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        const response = await axios.get(`/api/preview?url=${encodeURIComponent(url)}`);
        setMetadata(response.data);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    };

    fetchMetadata();
  }, [url]);

  if (!metadata) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', maxWidth: '400px' }}>
      {metadata.image && <img src={metadata.image} alt={metadata.title} style={{ width: '100%' }} />}
      <h3>{metadata.title}</h3>
      <p>{metadata.description}</p>
    </div>
  );
}

export default LinkPreview;
