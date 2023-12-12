import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_ri8vii3",
        "template_klqkco8",
        form.current,
        "coCmCR4zgf-jtp2ky"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending email. Please try again later.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto mb-10 p-6 bg-secondary rounded-md shadow-md"
      >
        <div className="mb-4">
          <label
            htmlFor="from_name"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="from_name"
            name="from_name"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="from_email"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="from_email"
            name="from_email"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-lg font-bold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full border rounded-md py-2 px-3 focus:outline-none focus:shadow-outline"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : isSent ? "Sent" : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
