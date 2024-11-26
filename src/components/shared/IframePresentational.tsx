import React from 'react';

interface IframePresentationalProps {
  children: React.ReactNode;
}

const IframePresentational: React.FC<IframePresentationalProps> = ({ children }) => {
  return (
    <div className="calculator-container">
      {children}
      <style>{`
        .calculator-container {
          width: 100%;
          height: 100%;
          min-height: 400px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 1rem;
          background: transparent;
        }
      `}</style>
    </div>
  );
};

export default IframePresentational;