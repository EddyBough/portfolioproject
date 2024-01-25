import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const submitForm = (event) => {
    event.preventDefault(); 

    // Récupérer les données du formulaire
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Effectuer une requête HTTP POST pour envoyer les données au back-end
    fetch('http://127.0.0.1:8000/contact/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        // Traiter la réponse du back-end
        console.log('Success:', data);
        toast.success('Votre message a été envoyé avec succès!');
        setTimeout(() => {
          window.location.reload();
        }, 1000);
    })
    .catch((error) => {
        console.error('Error:', error);
        toast.error('Une erreur s\'est produite lors de l\'envoi du message.');
    });
};


    return (
        <div id="contactSection" className="contact p-5 md:flex">
  <div className="md:w-1/2 flex justify-start md:ml-10 md:order-2">
    <div className="md:w-1/2 flex flex-col md:justify-center">
      <div className="flex flex-col sm:justify-center text-center space-y-3 md:text-left lg:text-left md:m-0 m-5">
        <h3>CONTACT</h3>
        <h4 className="text-white text-2xl">GET IN TOUCH</h4>
        <hr className="custom-hr border-t-2 border-b-2 ms:m-56 m-20 md:mx-0 md:w-1/4" />
        <p className="text-white">
          You can send me any demand or questions by email or send me your demand with this formular
        </p>
        <div className="flex flex-row md:justify-start space-x-1 justify-center items-end flex-wrap">
          <img src="img/email.svg" alt="email" />
          <p className="text-white">ebdeveloper@outlook.fr</p>
        </div>
        <div className="flex flex-row md:justify-start space-x-1 justify-center items-end flex-wrap">
          <img src="img/localisation.svg" alt="email" />
          <p className="text-white">Marseille, France & Tunisia</p>
        </div>
      </div>
    </div>
  </div>
  <div className="md:w-1/2 md:mt-6 md:flex md:justify-end mt-2 md:order-1">
    <form className="flex flex-col items-center space-y-3" id="contactForm">
      <label htmlFor="name">Name:</label>
      <input className="border md:w-96 md:h-10 w-60 text-white" type="text" id="name" name="name" required />

      <label htmlFor="email">Email:</label>
      <input className="border md:w-96 md:h-10 w-60 text-white" type="email" id="email" name="email" required />

      <label htmlFor="message">Your Message:</label>
      <textarea className="border md:w-96 w-60 text-white" id="message" name="message" rows="6" required></textarea>

      <button className="border text-white md:w-96 w-44 p-3" type="button" onClick={submitForm}>
        Submit
      </button>
    </form>
    <Toaster toastOptions={{
    success: {
      style: {
        background: '#121816',
        color: 'white',
      },
    },
    error: {
      style: {
        background: '#121816',
        color: 'white',
      },
    },
  }} position="bottom-center" />
  </div>
</div>

    
    );
}

export default Contact;
