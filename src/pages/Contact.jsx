import ContactForm from "../components/Contact/ContactForm";
import Container from "../components/common/Container";
import Painting from "../data/paintings-bg.png";
const Contact = () => {
  return (
    <section
      style={{ backgroundImage: `url(${Painting})` }}
      className="mt-16 pt-10 pb-4"
    >
      <Container>
        <div className="sm:px-2 md:px-16 mb-10">
          <h2 className="text-2xl text-primaryColor text-center uppercase mb-5">
            Contact Us
          </h2>
          <p>
            Please feel free to contact us, we would like to hear from you, we
            do appreciate your feedback. We will answer your questions related
            to the website and the paintings under the website.
          </p>
        </div>
        {/* Contact form  */}
        <ContactForm />
      </Container>
    </section>
  );
};

export default Contact;
