'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Copy, Check } from 'lucide-react';

export function Donations() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const upiId = 'bhusevapubliccharitabletrust.8807214361.ibz@icici';
  const upiNumber = '8807214361';

  return (
    <section id="donations" className="mt-12 scroll-mt-20">
      <div className="max-w-4xl mx-auto animate-in fade-in-0 zoom-in-95 duration-500">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <CardTitle className="text-center font-headline text-3xl">Support Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Welcome Message */}
            <p className="text-center text-muted-foreground text-lg">
              We welcome your support in any form for all our <span className="font-semibold">social upliftment projects</span>.
            </p>

            {/* Donation Methods */}
            <div className="bg-primary/5 rounded-lg p-6 space-y-4 border border-primary/20">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">UPI ID:</p>
                <div className="flex items-center justify-between bg-white p-3 rounded border border-primary/10">
                  <p className="text-base font-mono flex-1">{upiId}</p>
                  <button
                    onClick={() => copyToClipboard(upiId, 'upi-id')}
                    className="ml-2 p-2 hover:bg-primary/10 rounded transition-colors"
                    title="Copy UPI ID"
                  >
                    {copiedId === 'upi-id' ? (
                      <Check className="h-5 w-5 text-green-600" />
                    ) : (
                      <Copy className="h-5 w-5 text-primary" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-primary mb-2">UPI Number:</p>
                <div className="flex items-center justify-between bg-white p-3 rounded border border-primary/10">
                  <p className="text-base font-mono flex-1">{upiNumber}</p>
                  <button
                    onClick={() => copyToClipboard(upiNumber, 'upi-number')}
                    className="ml-2 p-2 hover:bg-primary/10 rounded transition-colors"
                    title="Copy UPI Number"
                  >
                    {copiedId === 'upi-number' ? (
                      <Check className="h-5 w-5 text-green-600" />
                    ) : (
                      <Copy className="h-5 w-5 text-primary" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Tax Exemption */}
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-600">
              <p className="text-center text-muted-foreground">
                <span className="font-bold text-green-700">Donations are exempted @50%</span>
                <br />
                <span className="font-semibold">u/s 80G of Income Tax Act</span>
              </p>
            </div>

            {/* CTA */}
            <p className="text-center text-muted-foreground italic text-sm">
              Your contribution makes a difference in the lives of those we serve.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
