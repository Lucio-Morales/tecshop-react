import Hero from '../components/ui/Hero';

const AboutUs = () => {
  const heroImg = '/hero-image1.jpg';
  const heroLabel = 'About us';
  return (
    <section className="bg-[#030308] min-h-screen">
      <Hero heroImg={heroImg} heroLabel={heroLabel} />
      mascontent
    </section>
  );
};

export default AboutUs;
