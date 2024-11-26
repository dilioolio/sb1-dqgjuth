import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CPCCalculator from './components/CPCCalculator';
import './index.css';

// Find all calculator containers in the page
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.marketing-calculator');
  
  containers.forEach(container => {
    const root = createRoot(container);
    const id = container.id;
    
    // Render the appropriate calculator based on the container ID
    if (id.includes('cpc')) {
      root.render(
        <StrictMode>
          <CPCCalculator />
        </StrictMode>
      );
    }
  });
});