// app/about/page.tsx
export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-center mb-6 text-green-700">About Us</h1>
      <div className="prose prose-lg mx-auto">
        <p>
          Babes Football Academy was founded in 2026 with a simple mission: to provide
          high‑quality football training in a positive, inclusive environment. We believe
          that every child has the potential to shine, both on and off the pitch.
        </p>
        <p>
          Our academy offers programs for boys and girls aged 6–18, focusing on technical
          skills, tactical awareness, and character development. We are proud to have
          helped dozens of players earn scholarships and professional contracts.
        </p>
      </div>
    </div>
  );
}