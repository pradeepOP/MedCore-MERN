const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImage" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          We are <b>MedCore</b>, A Hospital where every heartbeat matters and
          every life is valued. At MedCore, we are dedicated to providing
          exceptional healthcare services with a compassionate touch. Founded on
          the principle of patient-centered care, we understand that each
          individual who walks through our doors comes with unique needs and
          concerns. Our team of experienced medical professionals is committed
          to delivering personalized treatment plans tailored to your specific
          health requirements. Our state-of-the-art facilities are equipped with
          the latest medical advancements, ensuring that you receive the highest
          standard of care possible. Beyond medical expertise, we prioritize
          building genuine connections with our patients and their families,
          offering comfort, reassurance, and understanding every step of the
          way. Whether you are seeking routine medical care, facing a
          challenging diagnosis, or undergoing a complex procedure, MedCore
          Hospital is here to guide you on your journey to health and wellness.
          Your well-being is our priority, and we are honored to be your trusted
          healthcare partner.
        </p>
      </div>
    </div>
  );
};
export default Biography;
