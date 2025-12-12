"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone } from 'lucide-react';

type ContactInfoProps = {
  address: string;
  contact: string;
};

export function ContactInfo({ address, contact }: ContactInfoProps) {
  const addresses = address.split('📍').filter(a => a.trim());
  
  const ashramAddress = addresses[0]?.trim() || '';
  const annadhanamAddress = addresses[1]?.trim() || '';

  // Placeholder links - update with actual Google Maps or location URLs
  const ashramLink = "https://maps.google.com/?q=Arulneri+Thavachchalai+Saptur+Tamil+Nadu";
  const annadhanamLink = "https://maps.google.com/?q=Bhuseva+Nithya+Annadanam+Tiruvannamalai+Tamil+Nadu";

  return (
    <div className="w-full mx-auto animate-in fade-in-0 zoom-in-95 duration-500">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-center font-headline">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="flex justify-center items-center">
              <MapPin className="h-8 w-8 text-primary" />
              <h3 className="ml-2 text-lg font-semibold font-headline">Ashram Address</h3>
            </div>
            <a href={ashramLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground whitespace-pre-wrap text-sm text-center hover:text-primary hover:underline block">
              {ashramAddress}
            </a>
          </div>
          <div className="space-y-2">
            <div className="flex justify-center items-center">
              <MapPin className="h-8 w-8 text-primary" />
              <h3 className="ml-2 text-lg font-semibold font-headline">Annadhanam & Sapling</h3>
            </div>
            <a href={annadhanamLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground whitespace-pre-wrap text-sm text-center hover:text-primary hover:underline block">
              {annadhanamAddress}
            </a>
          </div>
          <div className="space-y-2">
            <div className="flex justify-center items-center">
              <Phone className="h-8 w-8 text-primary" />
              <h3 className="ml-2 text-lg font-semibold font-headline">Contact Us</h3>
            </div>
            <div className="text-muted-foreground whitespace-pre-wrap text-sm text-center">
              {contact.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
