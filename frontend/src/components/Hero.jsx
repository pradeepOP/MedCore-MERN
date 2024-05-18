const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          MedCore stands as a beacon of modern healthcare, devoted to delivering
          comprehensive services with compassion and expertise. Our team of
          skilled professionals is dedicated to providing personalized care,
          meticulously tailored to meet the unique needs of every patient. At
          MedCore, your well-being takes precedence, guiding you on a seamless
          path towards optimal health and wellness.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};
export default Hero;
