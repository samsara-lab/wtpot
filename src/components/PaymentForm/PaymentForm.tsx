import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, CheckCircle, AlertCircle, Mail, Wallet } from "lucide-react";
import { cn } from '@/lib/utils';

export type SubscriptionPlan = {
  id: string;
  name: string;
  description?: string;
  price: number;
  interval: 'monthly' | 'yearly';
  priceOptions?: number[]; // Add price options for random selection
};

export interface PaymentFormProps {
  amounts?: number[];
  subscriptionPlans?: SubscriptionPlan[];
  currency?: 'USD' | 'EUR' | 'GBP';
  onClose?: () => void;
  className?: string;
  googleSheetUrl?: string;
  // Style props
  colors?: {
    primary?: string;
    secondary?: string;
    surface?: string;
    border?: string;
    error?: string;
    success?: string;
  };
  borderRadius?: string;
  boxShadow?: string;
  fontFamily?: string;
  buttonStyle?: {
    backgroundColor?: string;
    hoverBackgroundColor?: string;
    textColor?: string;
    padding?: string;
    borderRadius?: string;
  };
}

type PaymentStatus = 'idle' | 'processing' | 'error' | 'success';

const PaymentForm: React.FC<PaymentFormProps> = ({
  amounts = [99.99],
  subscriptionPlans,
  currency = 'USD',
  onClose,
  className,
  googleSheetUrl = 'https://script.google.com/macros/s/AKfycbyhej9X7SrSHL8flGEcQpK0KIcWuApn0DSUI-4TCYbfAW9gMqgNvRqrY6AMBUHOxo-h/exec',
  // Style props with defaults matching the current design
  colors = {
    primary: '#4F46E5',
    secondary: '#6366F1',
    surface: '#F9FAFB',
    border: '#E5E7EB',
    error: '#EF4444',
    success: '#10B981'
  },
  borderRadius = '0.5rem',
  boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  fontFamily = 'inherit',
  buttonStyle = {
    backgroundColor: '#4F46E5',
    hoverBackgroundColor: '#6366F1',
    textColor: '#FFFFFF',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem'
  }
}) => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  const [status, setStatus] = useState<PaymentStatus>('idle');
  const [selectedAmount, setSelectedAmount] = useState<number>(99.99);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('');
  const [plans, setPlans] = useState<SubscriptionPlan[]>([]);
  const { toast } = useToast();
  
  const isSubscriptionMode = !!subscriptionPlans && subscriptionPlans.length > 0;
  
  useEffect(() => {
    if (isSubscriptionMode && subscriptionPlans?.length > 0) {
      let randomPriceIndex = -1;
      
      const maxOptionsLength = Math.max(
        ...subscriptionPlans.map(plan => 
          plan.priceOptions?.length || 0
        )
      );
      
      if (maxOptionsLength > 0) {
        randomPriceIndex = Math.floor(Math.random() * maxOptionsLength);
      }
      
      const processedPlans = subscriptionPlans.map(plan => {
        if (plan.priceOptions && plan.priceOptions.length > 0) {
          const safeIndex = Math.min(randomPriceIndex, plan.priceOptions.length - 1);
          return {
            ...plan,
            price: plan.priceOptions[safeIndex]
          };
        }
        return plan;
      });
      
      setPlans(processedPlans);
      setSelectedPlanId(processedPlans[0].id);
    }
  }, [subscriptionPlans, isSubscriptionMode]);
  
  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  }, [email]);
  
  useEffect(() => {
    if (!isSubscriptionMode && amounts.length > 0) {
      const randomIndex = Math.floor(Math.random() * amounts.length);
      setSelectedAmount(amounts[randomIndex]);
    }
  }, [amounts, isSubscriptionMode]);
  
  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
    }).format(amount);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        variant: "destructive",
        title: "Invalid email",
        description: "Please provide a valid email address.",
      });
      return;
    }
    
    setStatus('processing');
    
    const paymentData: Record<string, string> = {
      email,
      amount: selectedAmount.toString(),
      paymentMethod
    };
    
    if (isSubscriptionMode && selectedPlanId) {
      const selectedPlan = plans.find(plan => plan.id === selectedPlanId);
      if (selectedPlan) {
        paymentData.amount = selectedPlan.price.toString();
        paymentData.plan = selectedPlan.name;
        paymentData.interval = selectedPlan.interval;
      }
    }
    
    setTimeout(async () => {
      try {
        const formData = new FormData();
        for (const [key, value] of Object.entries(paymentData)) {
          formData.append(key, value);
        }
        
        await fetch(googleSheetUrl, {
          method: 'POST',
          body: formData,
          mode: 'no-cors',
        });
        
        setStatus('error');
      } catch (error) {
        console.error('Error submitting form:', error);
        setStatus('error');
      }
    }, 1500);
  };
  
  const customStyles = {
    card: {
      borderRadius,
      boxShadow,
      fontFamily
    },
    surface: {
      backgroundColor: colors.surface,
      borderRadius
    },
    button: {
      backgroundColor: buttonStyle.backgroundColor,
      color: buttonStyle.textColor,
      padding: buttonStyle.padding,
      borderRadius: buttonStyle.borderRadius,
      '&:hover': {
        backgroundColor: buttonStyle.hoverBackgroundColor
      }
    },
    errorIcon: {
      color: colors.error
    }
  };
  
  const getSelectedPaymentDetails = () => {
    if (isSubscriptionMode && selectedPlanId) {
      const plan = plans.find(p => p.id === selectedPlanId);
      if (plan) {
        return {
          amount: plan.price,
          label: `${plan.name} - ${formatAmount(plan.price, currency)}/${plan.interval === 'monthly' ? 'mo' : 'yr'}`
        };
      }
    }
    
    return {
      amount: selectedAmount,
      label: formatAmount(selectedAmount, currency)
    };
  };
  
  if (status === 'error') {
    return (
      <Card 
        className={cn("w-full max-w-md mx-auto p-6", className)}
        style={customStyles.card}
      >
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="bg-red-100 p-3 rounded-full">
            <AlertCircle className="w-10 h-10" style={{ color: colors.error }} />
          </div>
          <h2 className="text-xl font-semibold">Payment Failed</h2>
          <p className="text-gray-500">
            We encountered an issue processing your payment. Our team has been notified and will reach out to you at {email} when the issue is resolved.
          </p>
          <Button 
            onClick={() => setStatus('idle')} 
            variant="outline" 
            className="mt-4"
          >
            Try Again
          </Button>
        </div>
      </Card>
    );
  }
  
  const paymentDetails = getSelectedPaymentDetails();
  
  return (
    <Card 
      className={cn("w-full max-w-md mx-auto", className)}
      style={customStyles.card}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Complete Purchase</h2>
          {onClose && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-8 w-8 p-0" 
              onClick={onClose}
            >
              ✕
            </Button>
          )}
        </div>
        
        {isSubscriptionMode ? (
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Select a Plan</h3>
            <RadioGroup 
              value={selectedPlanId} 
              onValueChange={setSelectedPlanId}
              className="space-y-2"
            >
              {plans.map((plan) => (
                <div 
                  key={plan.id} 
                  className={cn(
                    "flex items-center justify-between p-4 rounded-md border cursor-pointer",
                    selectedPlanId === plan.id ? "border-primary bg-primary/5" : "border-border"
                  )}
                  onClick={() => setSelectedPlanId(plan.id)}
                >
                  <div className="flex items-start gap-2">
                    <RadioGroupItem 
                      value={plan.id} 
                      id={`plan-${plan.id}`}
                      style={{ accentColor: colors.primary }}
                    />
                    <div>
                      <Label 
                        htmlFor={`plan-${plan.id}`} 
                        className="font-medium"
                      >
                        {plan.name}
                      </Label>
                      {plan.description && (
                        <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{formatAmount(plan.price, currency)}</p>
                    <p className="text-xs text-gray-500">
                      per {plan.interval === 'monthly' ? 'month' : 'year'}
                    </p>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>
        ) : (
          <div 
            className="p-4 rounded-md mb-6"
            style={{ backgroundColor: colors.surface, borderRadius }}
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount</span>
              <span className="font-semibold text-lg">{formatAmount(selectedAmount, currency)}</span>
            </div>
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="mt-1"
              />
            </div>
            
            <div>
              <h3 className="text-sm font-medium mb-2">Payment Method</h3>
              <Tabs value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as 'card' | 'paypal')}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="card" className="flex items-center justify-center gap-2">
                    <CreditCard className="h-4 w-4" />
                    Card
                  </TabsTrigger>
                  <TabsTrigger value="paypal" className="flex items-center justify-center gap-2">
                    <Wallet className="h-4 w-4" />
                    PayPal
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="card">
                  <div className="rounded-md border p-4 bg-muted/50">
                    <p className="text-sm text-center text-muted-foreground">
                      You will be directed to the payment page.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="paypal">
                  <div className="rounded-md border p-4 bg-muted/50">
                    <p className="text-sm text-center text-muted-foreground">
                      You will be redirected to PayPal payment page.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={status === 'processing' || !isEmailValid}
              style={{
                backgroundColor: buttonStyle.backgroundColor,
                color: buttonStyle.textColor,
                borderRadius: buttonStyle.borderRadius
              }}
            >
              {status === 'processing' ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                `Pay ${paymentDetails.label}`
              )}
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default PaymentForm;
