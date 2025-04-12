
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const PayPalForm: React.FC = () => {
  const [paypalEmail, setPaypalEmail] = useState('');

  return (
    <div className="space-y-4 py-4">
      <div className="bg-blue-50 p-4 rounded-md border border-blue-100 mb-4">
        <div className="flex items-center justify-center mb-4">
          <div className="font-bold text-blue-800 text-2xl">
            Pay<span className="text-blue-500">Pal</span>
          </div>
        </div>
        <p className="text-sm text-center text-gray-600">
          Enter your PayPal email to continue with your payment
        </p>
      </div>
      
      <div>
        <Label htmlFor="paypal-email">PayPal Email</Label>
        <Input
          id="paypal-email"
          type="email"
          value={paypalEmail}
          onChange={(e) => setPaypalEmail(e.target.value)}
          placeholder="your-paypal@email.com"
          className="mt-1"
        />
      </div>
      
      <div className="text-xs text-gray-500 mt-2">
        <p>You'll be redirected to PayPal after clicking the Pay button.</p>
      </div>
    </div>
  );
};

export default PayPalForm;
