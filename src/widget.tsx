
import React from 'react';
import { createRoot } from 'react-dom/client';
import PaymentForm, { PaymentFormProps } from './components/PaymentForm';
import './index.css'; // Include styles

interface WTPotOptions extends PaymentFormProps {
  containerId: string;
}

// Define the global window interface to include the WTPot object
declare global {
  interface Window {
    WTPot: {
      init: (options: WTPotOptions) => void;
      render: (containerId: string, options: PaymentFormProps) => void;
    };
  }
}

// Initialize the widget
window.WTPot = {
  init: (options: WTPotOptions) => {
    const { containerId, ...paymentFormProps } = options;
    window.WTPot.render(containerId, paymentFormProps);
  },
  render: (containerId: string, options: PaymentFormProps) => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`WTPot: Container element with id "${containerId}" not found.`);
      return;
    }
    
    const root = createRoot(container);
    root.render(<PaymentForm {...options} />);
  }
};

// Auto-initialize if data-container attribute is found
document.addEventListener('DOMContentLoaded', () => {
  const scriptTag = document.querySelector('script[data-wtpot]');
  if (scriptTag && scriptTag.hasAttribute('data-container')) {
    const containerId = scriptTag.getAttribute('data-container');
    if (containerId) {
      // Extract options from data attributes
      const options: Record<string, any> = {};
      
      // Get all data attributes
      Array.from(scriptTag.attributes)
        .filter(attr => attr.name.startsWith('data-') && attr.name !== 'data-wtpot' && attr.name !== 'data-container')
        .forEach(attr => {
          // Convert data-attribute-name to camelCase attributeName
          const key = attr.name.substring(5).replace(/-([a-z])/g, (g) => g[1].toUpperCase());
          
          // Try to parse JSON if it looks like an object or array
          try {
            if (attr.value.startsWith('{') || attr.value.startsWith('[')) {
              options[key] = JSON.parse(attr.value);
            } else {
              options[key] = attr.value;
            }
          } catch (e) {
            options[key] = attr.value;
          }
        });
      
      window.WTPot.render(containerId, options as PaymentFormProps);
    }
  }
});

export default window.WTPot;
