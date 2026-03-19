'use client';

import { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ReminderForm() {
  const [formData, setFormData] = useState({
    friendName: '',
    email: '',
    amount: '',
    description: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Reset status when user starts typing again
    if (status === 'error' || status === 'success') {
      setStatus('idle');
    }
  };

  const handleSendReminder = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Fetch data against your API Route
      const response = await fetch('/api/send-reminder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send the reminder. Please try again.');
      }

      // Success
      setStatus('success');
      // Reset the form fields
      setFormData({ friendName: '', email: '', amount: '', description: '' });

    } catch (error: any) {
      console.error(error);
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">Send Reminder</h2>
        <p className="text-sm text-gray-500">
          Gently remind your friend about their pending splitwise balance securely.
        </p>
      </div>

      <form onSubmit={handleSendReminder} className="space-y-4">
        {/* Friend Name */}
        <div className="space-y-1.5 ">
          <Label htmlFor="friendName" className="font-semibold text-gray-700">Friend's Name</Label>
          <Input
            id="friendName"
            name="friendName"
            type="text"
            placeholder="e.g. John Doe"
            value={formData.friendName}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className="w-full focus-visible:ring-blue-500"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-1.5">
          <Label htmlFor="email" className="font-semibold text-gray-700">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className="w-full focus-visible:ring-blue-500"
          />
        </div>

        {/* Amount */}
        <div className="space-y-1.5">
          <Label htmlFor="amount" className="font-semibold text-gray-700">Amount Owed ($)</Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            step="0.01"
            min="0"
            placeholder="25.50"
            value={formData.amount}
            onChange={handleChange}
            required
            disabled={status === 'loading'}
            className="w-full focus-visible:ring-blue-500"
          />
        </div>

        {/* Description (Optional) */}
        <div className="space-y-1.5">
          <Label htmlFor="description" className="font-semibold text-gray-700">Description (Optional)</Label>
          <Input
            id="description"
            name="description"
            type="text"
            placeholder="Pizza dinner last night"
            value={formData.description}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="w-full focus-visible:ring-blue-500"
          />
        </div>

        {/* Validation / Status Messages */}
        {status === 'error' && (
          <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-100">
            <AlertCircle className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}

        {status === 'success' && (
          <div className="flex items-center gap-2 text-sm text-emerald-600 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
            <CheckCircle2 className="w-4 h-4" />
            <span>Reminder sent successfully!</span>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white transition-all font-semibold shadow-sm hover:shadow"
        >
          {status === 'loading' ? (
            <span className="flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Send Reminder
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
