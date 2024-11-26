import React from 'react';
import CPCCalculator from '../components/CPCCalculator';
import IframePresentational from '../components/shared/IframePresentational';

const CPCCalculatorPage = () => {
  return (
    <IframePresentational>
      <CPCCalculator />
    </IframePresentational>
  );
};

export default CPCCalculatorPage;