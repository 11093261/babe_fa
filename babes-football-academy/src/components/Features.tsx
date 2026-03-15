// components/Features.tsx
const features = [
  {
    title: 'Professional Coaching',
    description: 'UEFA licensed coaches with years of experience.',
    icon: '⚽',
  },
  {
    title: 'Modern Facilities',
    description: 'Grass pitches, gym, and video analysis room.',
    icon: '🏟️',
  },
  {
    title: 'Character Development',
    description: 'We build discipline, teamwork, and leadership.',
    icon: '🌟',
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}