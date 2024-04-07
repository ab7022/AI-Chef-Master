import React, { useRef } from 'react';

function Certificates({ certificates, setCertificates }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    fileInputRef.current.click();
  };

  const handleFileSelection = (event) => {
    const newCertificates = [...certificates];

    for (let i = 0; i < event.target.files.length; i++) {
      newCertificates.push(event.target.files[i]);
    }

    setCertificates(newCertificates);
  };

  return (
    <>
      <h1 className='custom-text-secondary font-bold text-3xl my-6' style={{ fontSize: '20px' }}>Certifications</h1>
      <input
        type="file"
        accept=".pdf,.doc,.docx,.png,.jpeg,.jpg"
        multiple
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileSelection}
      />

      {/* Display selected certificates */}
      {certificates && certificates.length > 0 && (
        <ul className="text-blue-700 text-lg my-6">
          {certificates.map((certificate, index) => (
            <li key={index}>{certificate.name}</li>
          ))}
        </ul>
      )}

      {/* Button to trigger file selection */}
      <button
        className="text-blue-700 text-lg my-1"
        onClick={handleFileUpload}
      >
        + Add Certificates
      </button>
    </>
  );
}

export default Certificates;
