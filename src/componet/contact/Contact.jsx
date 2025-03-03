
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Icon } from '@iconify/react';
import { useContact } from "../../content/Contents";

const Contact = () => {
  const { title, subtitle, namefiled, emailfiled, messagefiled, social_media, sendbutton } = useContact();
  const form = useRef();

  const inputsCss = "text-xl border border-theme_border p-3 rounded-md bg-theme_fg focus:outline-none focus:border-primary w-full";

  // State for validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Sending Email with Validation
  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    let newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (name.length < 2) {
      newErrors.name = "Name must be at least 2 characters long";
      isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (message.length === 0) {
      newErrors.message = "Message cannot be blank";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return; // Stop if validation fails

    // Send email if everything is valid
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset(); // Clear form
          setErrors({ name: "", email: "", message: "" }); // Clear errors after success
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="bg-theme_fg" id="contact">
      <div className="md:container px-5 py-14">
        <h2 className="title text-4xl text-theme_bg_copy" data-aos="fade-down">
          {title}
        </h2>
        <h4 className="font-paprika text-2xl text-secondary/80 pt-2" data-aos="fade-down">
          {subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">

          <div className="flex-1 flex flex-col gap-5">
            <div className="text-center">
              {errors && <p className="text-red-500 -mb-3">
                {
                  errors.name ? errors.name : errors.email ? errors.email : errors.message
                }
              </p>}
            </div>

            <form ref={form} onSubmit={sendEmail} data-aos="fade-up" className="flex-1 flex flex-col gap-5">

              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder={namefiled}
                  className={`${inputsCss} ${errors.name ? "border-red-500" : ""
                    }`}
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder={emailfiled}
                  className={`${inputsCss} ${!errors.name && errors.email ? "border-red-500" : ""
                    }`}
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder={messagefiled}
                  className={`${inputsCss} ${!errors.name && !errors.email && errors.message ? "border-red-500" : ""
                    }`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                className="btn self-start bg-primary text-xl hover:bg-primary_dark text-primary_content px-8 py-2 rounded-md rounded-br-[20px] border border-theme_border"
              >
                {sendbutton}
              </button>

            </form>

          </div>


          {/* Social Media Links */}
          <div className="flex-1 flex flex-col gap-5 mt-8">
            {social_media.map((content, i) => (
              <div key={i} data-aos="fade-down" data-aos-delay={i * 430} className="flex items-center gap-2">
                <Icon icon={content.icon} width="26" height="26" className="mr-1 text-secondary/80" />
                <a className="text-xl" href={content.link} target="_blank">
                  {content.text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
