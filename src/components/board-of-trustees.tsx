'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Trustee {
  name: string;
  position: string;
  gender: 'male' | 'female';
}

const trustees: Trustee[] = [
  { name: 'Mrs. Sheela Devi Agarwalla', position: 'President', gender: 'female' },
  { name: 'Mr. U.A.Sakthivel', position: 'Managing Trustee', gender: 'male' },
  { name: 'Mrs. Smriti Agarwalla', position: 'Treasurer', gender: 'female' },
  { name: 'Mr. A. Raghav Kumar Saraf', position: 'Trustee', gender: 'male' },
  { name: 'Mrs. Umamageswari', position: 'Trustee', gender: 'female' },
  { name: 'Mr. Kumaraswamy Velusamy', position: 'Trustee', gender: 'male' },
  { name: 'Mr. N. Senthil', position: 'Trustee', gender: 'male' },
];

export function BoardOfTrustees() {
  return (
    <section id="board" className="mt-12 scroll-mt-20">
      <div className="max-w-6xl mx-auto animate-in fade-in-0 zoom-in-95 duration-500">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center font-headline text-3xl">Board of Trustees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-8">
              {trustees.map((trustee, index) => (
                <div key={index} className="space-y-4 flex flex-col items-center">
                  {/* Trustee Image */}
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center border-2 border-primary/30 overflow-hidden">
                    <img 
                      src={`/images/${trustee.gender}.png`}
                      alt={trustee.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/images/${trustee.gender}.png`;
                      }}
                    />
                  </div>

                  {/* Trustee Name */}
                  <p className="text-lg font-semibold text-center">{trustee.name}</p>

                  {/* Trustee Position */}
                  <p className="text-sm font-medium text-primary text-center">{trustee.position}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
