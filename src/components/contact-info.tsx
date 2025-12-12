"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

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
          <CardTitle className="text-center font-headline text-3xl">Get in Touch</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Three Column Layout */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Ashram Address Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold font-headline">Ashram Address</h3>
              </div>
              <div className="flex justify-center">
                <a href={ashramLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Click Here - Open Google Maps
                </a>
              </div>
              <p className="text-muted-foreground whitespace-pre-wrap text-sm text-center leading-relaxed">
                {ashramAddress}
              </p>
            </div>

            {/* Annadhanam & Sapling Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold font-headline">Nithya Annadhanam & Sapling Distribution</h3>
              </div>
              <div className="flex justify-center">
                <a href={annadhanamLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-semibold inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Click Here - Open Google Maps
                </a>
              </div>
              <p className="text-muted-foreground whitespace-pre-wrap text-sm text-center leading-relaxed">
                {annadhanamAddress}
              </p>
            </div>

            {/* Contact Us Column */}
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold font-headline">Contact Us</h3>
              </div>

              {/* Admin Picture Section - First */}
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center border-2 border-primary/30 overflow-hidden">
                  <img
                    src="/images/anand.jpg"
                    alt="Admin Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name Section - Second */}
              <p className="text-lg font-bold text-center">Mr. Anand Swamy Ramana Bodhi</p>

              {/* Contact Details - Third */}
              <div className="text-muted-foreground text-sm text-center space-y-3">
                {contact.split('\n').map((line, i) => (
                  line.trim() && (
                    <p key={i} className="flex items-center justify-center gap-2">
                      {line.includes('Phone') && <Phone className="h-4 w-4 text-primary flex-shrink-0" />}
                      {line.includes('Email') && <Mail className="h-4 w-4 text-primary flex-shrink-0" />}
                      <span>{line}</span>
                    </p>
                  )
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
