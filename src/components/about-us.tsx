'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AboutUsProps {
  content: string;
}

export function AboutUs({ content }: AboutUsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split content by newlines and get first 4 lines
  const lines = content.split('\n').filter(line => line.trim());
  const firstFourLines = lines.slice(0, 4).join('\n');
  const remainingLines = lines.slice(4).join('\n');
  const hasMoreContent = lines.length > 4;

  return (
    <section id="about" className="mt-12 scroll-mt-20">
      <div className="max-w-4xl mx-auto animate-in fade-in-0 zoom-in-95 duration-500">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center font-headline text-3xl">OUR OBJECTIVES</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground text-center whitespace-pre-wrap leading-relaxed mb-6">
              {firstFourLines}
              {isExpanded && remainingLines && (
                <div className="mt-4">{remainingLines}</div>
              )}
            </div>
            {hasMoreContent && (
              <div className="flex justify-center pt-4">
                <Button 
                  onClick={() => setIsExpanded(!isExpanded)}
                  variant={isExpanded ? 'outline' : 'default'}
                >
                  {isExpanded ? 'Read Less' : 'Read More'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
