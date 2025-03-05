
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useContact } from "../../content/Contents";
import { sendMessage } from "../../api/massageSend";
import { useDispatch, useSelector } from "react-redux";

const Contact = () => {

  const isMessageSent = useSelector((store) => store.messageSender.isMessageSent);
  const isError = useSelector((store) => store.messageSender.isError);
  const isLoading = useSelector((store) => store.messageSender.isLoading);

  const dispatch = useDispatch();


  const {
    title,
    subtitle,
    namefiled,
    emailfiled,
    messagefiled,
    nameError,
    emailError,
    messageError,
    sendMessageError,
    social_media,
    sendbutton,
  } = useContact();

  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const inputsCss =
    "text-xl border p-3 rounded-md bg-theme_fg focus:outline-none focus:border-primary w-full";

  const sendEmail = async (e) => {
    e.preventDefault();

    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    let newErrors = { name: "", email: "", message: "" };
    let isValid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
      newErrors.name = nameError;
      isValid = false;
    } else if (!emailPattern.test(email)) {
      newErrors.email = emailError;
      isValid = false;
    } else if (message.length === 0) {
      newErrors.message = messageError;
      isValid = false;
    }
    setErrors(newErrors);

    if (!isValid) return;

    setErrors({ name: "", email: "", message: "" });

    const requestData = {
      name: name,
      from: email,
      subject: "New Message From Your Portfolio",
      body: message,

    };

    await dispatch(sendMessage(requestData)).unwrap();

    // Clear form before showing success message
    form.current.reset();

    // Show success message
    setShowSuccess(true);

    // Auto-hide success message after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 2000);

  };

  return (
    <section className="bg-theme_fg" id="contact">
      <div className="md:container px-5 py-14">
        <h2 className="title text-4xl text-theme_bg_copy" data-aos="fade-down">
          {title}
        </h2>
        <h4
          className="font-paprika text-2xl text-secondary/80 pt-2"
          data-aos="fade-down"
        >
          {subtitle}
        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <div className="flex-1 flex flex-col gap-5">

            {/* Show Success Message Above the Name Field */}
            {showSuccess && <SuccessAlert />}

            <div className="text-center">
              {errors && (
                <p className="text-red-500 -mb-3">
                  {errors.name
                    ? errors.name
                    : errors.email
                      ? errors.email
                      : errors.message}
                </p>
              )}
              {isError && (
                <p className="text-red-500 -mb-3">
                  {sendMessageError}
                </p>
              )}
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              data-aos="fade-up"
              className="flex-1 flex flex-col gap-5"
            >
              {/* Name Field */}
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder={namefiled}
                  className={`${inputsCss} ${errors.name ? "border-red-500" : "border-theme_border"
                    }`}
                />
              </div>

              {/* Email Field */}
              <div>
                <input
                  type="text"
                  name="user_email"
                  placeholder={emailfiled}
                  className={`${inputsCss} ${!errors.name && errors.email ? "border-red-500" : "border-theme_border"
                    }`}
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  placeholder={messagefiled}
                  className={`${inputsCss} ${!errors.name && !errors.email && errors.message
                    ? "border-red-500"
                    : "border-theme_border"
                    }`}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="btn self-start bg-primary text-xl hover:bg-primary_dark text-primary_content px-8 py-2 rounded-md rounded-br-[20px] border border-theme_border">
                {sendbutton}
              </button>
            </form>
          </div>

          <div className="flex-1 flex flex-col gap-5 mt-8">
            {social_media.map((content, i) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 430}
                className="flex items-center gap-2"
              >
                <Icon
                  icon={content.icon}
                  width="26"
                  height="26"
                  className="mr-1 text-secondary/80"
                />
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

// Success Alert Component (Message Above Form)
const SuccessAlert = () => {
  const { successMessage } = useContact();
  return (
    <div
      className="bg-secondary text-secondary_content border border-theme_border shadow-lg px-5 py-2 rounded-md flex items-center space-x-4 z-50 transition-all duration-500 ease-out opacity-100 scale-100"
    >
      <Icon
        icon="line-md:confirm-circle-filled"
        width="36"
        height="36"
        className="text-secondary_content"
      />
      <div>
        <h3 className="text-lg font-bold">{successMessage}</h3>
      </div>
    </div>
  );
};

export default Contact;
