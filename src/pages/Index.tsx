import React, { useState } from 'react';
import PaymentForm from '@/components/PaymentForm';
import { Button } from '@/components/ui/button';
import { SubscriptionPlan } from '@/components/PaymentForm';

const Index = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [useCustomStyle, setUseCustomStyle] = useState(false);
  const [showSubscriptionPlans, setShowSubscriptionPlans] = useState(false);

  // Define multiple possible amounts
  const paymentAmounts = [49.99, 99.99, 149.99, 199.99];

  // Define subscription plans with price options for random selection
  const subscriptionPlans: SubscriptionPlan[] = [
    {
      id: 'basic',
      name: 'Basic Plan',
      description: 'Perfect for individuals and small projects',
      price: 9.99, // Default price if no random selection happens
      priceOptions: [7.99, 8.99, 9.99, 10.99], // Options for random selection
      interval: 'monthly'
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      description: 'Advanced features for professionals',
      price: 19.99,
      priceOptions: [17.99, 19.99, 21.99, 23.99],
      interval: 'monthly'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'Complete solution for teams and businesses',
      price: 49.99,
      priceOptions: [44.99, 49.99, 54.99, 59.99],
      interval: 'monthly'
    }
  ];

  // Custom style example
  const customColors = {
    primary: '#3B82F6',
    secondary: '#60A5FA',
    surface: '#F0F9FF',
    border: '#BFDBFE',
    error: '#EF4444',
    success: '#10B981'
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Phantom Pay Portal</h1>
          <p className="text-xl text-gray-600 mb-8">A pluggable payment component for your website</p>
          
          {!showPaymentForm ? (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    setUseCustomStyle(false);
                    setShowSubscriptionPlans(false);
                    setShowPaymentForm(true);
                  }}
                  className="bg-payment-primary hover:bg-payment-secondary text-white"
                  size="lg"
                >
                  Default Style - One-time Payment
                </Button>
                <Button 
                  onClick={() => {
                    setUseCustomStyle(true);
                    setShowSubscriptionPlans(false);
                    setShowPaymentForm(true);
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  size="lg"
                >
                  Custom Style - One-time Payment
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    setUseCustomStyle(false);
                    setShowSubscriptionPlans(true);
                    setShowPaymentForm(true);
                  }}
                  className="bg-payment-primary hover:bg-payment-secondary text-white"
                  size="lg"
                >
                  Default Style - Subscription Plans
                </Button>
                <Button 
                  onClick={() => {
                    setUseCustomStyle(true);
                    setShowSubscriptionPlans(true);
                    setShowPaymentForm(true);
                  }}
                  className="bg-blue-500 hover:bg-blue-600 text-white"
                  size="lg"
                >
                  Custom Style - Subscription Plans
                </Button>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-md mx-auto">
              <PaymentForm 
                amounts={paymentAmounts}
                {...(showSubscriptionPlans ? { subscriptionPlans } : {})}
                currency="USD" 
                onClose={() => setShowPaymentForm(false)}
                {...(useCustomStyle ? {
                  colors: customColors,
                  borderRadius: '1rem',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                  buttonStyle: {
                    backgroundColor: '#3B82F6',
                    hoverBackgroundColor: '#60A5FA',
                    textColor: '#FFFFFF',
                    borderRadius: '0.75rem'
                  }
                } : {})}
              />
            </div>
          )}
        </div>
        
        {!showPaymentForm && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">How to Use</h2>
              <p className="text-gray-600 mb-4">
                Integrate this payment form component into any website to collect emails while simulating a payment process.
              </p>
              <div className="bg-gray-100 p-4 rounded-md">
                <pre className="text-sm overflow-auto">
                  <code>{`<PaymentForm 
  // One-time payment options
  amounts={[49.99, 99.99, 149.99]} 
  
  // OR subscription options
  subscriptionPlans={[
    {
      id: 'basic',
      name: 'Basic Plan',
      description: 'For individuals',
      price: 9.99,
      priceOptions: [7.99, 8.99, 9.99], // Random price selection
      interval: 'monthly'
    },
    // More plans...
  ]}
  
  currency="USD"
  googleSheetUrl="YOUR_SHEET_URL"
  colors={{
    primary: '#3B82F6',
    secondary: '#60A5FA'
  }}
  borderRadius="1rem"
/>`}</code>
                </pre>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Features</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Easy integration into any React project</li>
                <li>Multiple payment methods (Credit Card, PayPal)</li>
                <li>Support for one-time payments or subscription plans</li>
                <li>Simulates payment process with error feedback</li>
                <li>Collects emails into Google Sheets</li>
                <li>Randomized pricing from configurable amounts</li>
                <li>Customizable currency</li>
                <li>Customizable styling via props</li>
                <li>Responsive design</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
