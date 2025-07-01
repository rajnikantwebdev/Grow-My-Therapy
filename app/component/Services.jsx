import React from 'react'
import ServiceCard from './ServiceCards';

const services = [
  {
    title: "Anxiety & Stress Management",
    description:
      "Learn effective techniques to manage anxiety and reduce stress with personalized guidance. Discover inner peace and build resilience in daily life.",
    imgSrc: "/cards/anxiety.jpg",
  },
  {
    title: "Relationship Counseling",
    description:
      "Strengthen your relationships with tailored counseling to improve communication and trust. Foster deeper connections and resolve conflicts harmoniously.",
    imgSrc: "/cards/relationship_counselling.jpg",
  },
  {
    title: "Trauma Recovery",
    description:
      "Heal from past trauma with compassionate support and proven therapeutic methods. Reclaim your strength and find a path to emotional freedom.",
    imgSrc: "/cards/trauma_recovery.jpg",
  },
];

const Services = () => {
  return (
    <div id='services' className="py-12 px-10 md:px-20">
      <div className='md:text-5xl font-bold text-4xl text-teal-900 md:mb-12 mb-6'>
        <h1>How I Help</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {services.map((s, index) => (
          <ServiceCard
            key={index}
            description={s.description}
            imageSrc={s.imgSrc}
            title={s.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Services