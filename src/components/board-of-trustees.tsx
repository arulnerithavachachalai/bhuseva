'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Trustee {
  name: string;
  position: string;
  gender: 'male' | 'female';
  image?: string; // optional custom image
}

const trustees: Trustee[] = [
  {
    name: 'Mrs. Sheela Devi Agarwalla',
    position: 'President',
    gender: 'female',
    // image: '/images/sheela-devi.jpg',
  },
  {
    name: 'Mr. U.A. Sakthivel',
    position: 'Managing Trustee',
    gender: 'male',
    image: '/images/sakthivel.png',
  },
  {
    name: 'Mrs. Smriti Agarwalla',
    position: 'Treasurer',
    gender: 'female',
    // image: '/images/Smriti.jpg',
  },
  {
    name: 'Mr. A. Raghav Kumar Saraf',
    position: 'Trustee',
    gender: 'male',
    // image: '/images/Raghav.jpg',
  },
  {
    name: 'Mrs. Umamageswari',
    position: 'Trustee',
    gender: 'female',
    image: '/images/Umamageswari.png',
  },
  {
    name: 'Mr. Kumaraswamy Velusamy',
    position: 'Trustee',
    gender: 'male',
    // image: '/images/Kumaraswamy.jpg',
  },
  {
    name: 'Mr. N. Senthil',
    position: 'Trustee',
    gender: 'male',
    image: '/images/senthil.jpg',
  },
];

export function BoardOfTrustees() {
  return (
    <section id="board" className="mt-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto animate-in fade-in-0 zoom-in-95 duration-500">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center font-headline text-3xl">
              Board of Trustees
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {trustees.map((trustee, index) => {
                const fallbackImage = `/images/${trustee.gender}.png`;

                return (
                  <div
                    key={index}
                    className="space-y-4 flex flex-col items-center text-center"
                  >
                    {/* Trustee Image */}
                    <div className="w-32 h-32 rounded-lg border-2 border-primary/30 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/10">
                      <img
                        src={trustee.image || fallbackImage}
                        alt={trustee.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src =
                            fallbackImage;
                        }}
                      />
                    </div>

                    {/* Trustee Name */}
                    <p className="text-lg font-semibold">{trustee.name}</p>

                    {/* Trustee Position */}
                    <p className="text-sm font-medium text-primary">
                      {trustee.position}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
