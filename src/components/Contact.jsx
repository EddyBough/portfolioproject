import toast, { Toaster } from "react-hot-toast";
import { FormattedMessage } from "react-intl";
import emailjs from "emailjs-com";

function Contact() {
  const submitForm = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_fezgwmj",
        "template_dvxw41l",
        event.target,
        "ReZtBzNh_90b0u7F3"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Votre message a été envoyé avec succès!");
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        },
        (error) => {
          console.log(error.text);
          toast.error("Une erreur s'est produite lors de l'envoi du message.");
        }
      );
  };

  return (
    <div
      id="contactSection"
      className="contact lg:pt-28 pt-20 pb-9 p-8 md:flex"
    >
      <div className="md:w-1/2 flex justify-start md:ml-10 md:order-2">
        <div className="md:w-1/2 flex flex-col md:justify-center">
          <div className="flex flex-col sm:justify-center text-center space-y-3 md:text-left lg:text-left md:m-0 m-5">
            <h3>
              <FormattedMessage id="contact" />
            </h3>
            <h4 className="text-white text-2xl">
              <FormattedMessage id="getInTouch" />
            </h4>
            <hr className="custom-hr border-t-2 border-b-2 ms:m-56 m-20 md:mx-0 md:w-1/4" />
            <p className="text-white">
              <FormattedMessage id="contactDescription" />
            </p>
            <div className="flex flex-row md:justify-start lg:space-x-2 space-x-2 md:space-x-1 justify-center items-end flex-wrap">
              <img className="w-10 lg:ml-1" src="img/email.svg" alt="email" />
              <p className="text-white">ebdeveloper@outlook.fr</p>
            </div>
            <div className="flex flex-row md:justify-start space-x-1 justify-center items-end flex-wrap">
              <img src="img/localisation.svg" alt="email" />
              <p className="text-white">
                <FormattedMessage id="location" />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 md:mt-6 md:flex md:justify-end mt-2 md:order-1">
        <form
          className="flex flex-col items-center space-y-3"
          id="contactForm"
          onSubmit={submitForm}
        >
          <label htmlFor="name">
            <FormattedMessage id="name" />:
          </label>
          <input
            className="border md:w-96 md:h-10 w-60 text-white"
            type="text"
            id="name"
            name="name"
            required
          />

          <label htmlFor="email">
            <FormattedMessage id="email" />:
          </label>
          <input
            className="border md:w-96 md:h-10 w-60 text-white"
            type="email"
            id="email"
            name="email"
            required
          />

          <label htmlFor="message">
            <FormattedMessage id="yourMessage" />:
          </label>
          <textarea
            className="border md:w-96 w-60 text-white"
            id="message"
            name="message"
            rows="6"
            required
          ></textarea>

          <button className="border text-white md:w-96 w-44 p-3" type="submit">
            <FormattedMessage id="submit" />
          </button>
        </form>
        <Toaster
          toastOptions={{
            success: {
              style: {
                background: "#121816",
                color: "white",
              },
            },
            error: {
              style: {
                background: "#121816",
                color: "white",
              },
            },
          }}
          position="bottom-center"
        />
      </div>
    </div>
  );
}

export default Contact;
