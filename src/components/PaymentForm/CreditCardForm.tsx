
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Calendar, Lock } from "lucide-react";

const CreditCardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  // Format expiry date as MM/YY
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace('/', '');
    const formattedValue = formatExpiryDate(value);
    setExpiryDate(formattedValue);
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };

  return (
    <div className="space-y-4 py-4">
      <div>
        <Label htmlFor="card-number" className="flex items-center gap-2">
          <CreditCard className="h-4 w-4" />
          Card Number
        </Label>
        <Input
          id="card-number"
          value={cardNumber}
          onChange={handleCardNumberChange}
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="card-name">Cardholder Name</Label>
        <Input
          id="card-name"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="John Doe"
          className="mt-1"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="expiry-date" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Expiry Date
          </Label>
          <Input
            id="expiry-date"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            placeholder="MM/YY"
            maxLength={5}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="cvv" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            CVV
          </Label>
          <Input
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            placeholder="123"
            maxLength={3}
            type="password"
            className="mt-1"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2 mt-2">
        <div className="w-10 h-6 bg-gray-200 rounded opacity-70"></div>
        <div className="w-10 h-6 bg-gray-200 rounded opacity-70"></div>
        <div className="w-10 h-6 bg-gray-200 rounded opacity-70"></div>
        <div className="w-10 h-6 bg-gray-200 rounded opacity-70"></div>
      </div>
    </div>
  );
};

export default CreditCardForm;
