const programs = [
  {
    name: 'Youth Academy',
    age: '6–12',
    description: 'Fun, foundational training to develop a love for the game.',
    image: 'https://images.unsplash.com/photo-1526232761682-d5e2b0c2a4b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Elite Development',
    age: '13–18',
    description: 'Advanced tactics, conditioning, and competitive matches.',
    image: 'https://images.unsplash.com/photo-1543326727-6d2cdd7b3b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Summer Camps',
    age: 'All ages',
    description: 'Intensive holiday camps with expert coaches.',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
  },
];
export default function Programs() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-green-700">Our Programs</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div key={program.name} className="bg-white rounded-xl shadow-md overflow-hidden">
            <img src={program.image} alt={program.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{program.name}</h3>
              <p className="text-green-600 font-medium mb-2">Ages {program.age}</p>
              <p className="text-gray-600">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}