import { createElement, useRef } from "react";
import { contact } from "../../content/Contents";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Icon } from '@iconify/react';

const Contact = () => {
  const form = useRef();

  // Sending Email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
      )
      .then(
        (result) => {
          console.log(result.text);
          // Clear all input field values
          form.current.reset();
          // Success toast message
          toast.success("Email send Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text);
        }
      );
  };

  return (
    <section className="bg-theme_fg" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14">
        <h2 className="title text-4xl ext-theme_bg_copy" data-aos="fade-down">
          {contact.title}
        </h2>
        <h4 className="font-paprika text-2xl text-secondary/80 pt-2" data-aos="fade-down">
          {contact.subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={sendEmail}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              className=" text-xl border border-theme_border p-3 rounded-md bg-theme_fg focus:outline-none focus:border-primary"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              className="text-xl border rounded-md bg-theme_fg p-3 border-theme_border focus:outline-none focus:border-primary"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="text-xl border p-3 h-44 bg-theme_fg rounded-md border-theme_border focus:outline-none focus:border-primary"
              required
            ></textarea>
            <button
              className="btn self-start
            bg-primary  text-xl
            hover:bg-primary_dark text-primary_content px-8 py-2 rounded-md  rounded-br-[20px] border border-theme_border"
            >
              Submit
            </button>
          </form>
          <div className="flex-1 flex flex-col gap-5">
            {contact.social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
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
