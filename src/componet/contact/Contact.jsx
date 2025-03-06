
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { useContact } from "../../content/Contents";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../api/massageSend";
import { CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { resetState } from "../../redux/slice/MailSendSlice";
import { Trans } from 'react-i18next';

const Contact = () => {

  const invalidEmail = useSelector((store) => store.messageSender.invalidEmail);
  const isError = useSelector((store) => store.messageSender.isError);
  const isLoading = useSelector((store) => store.messageSender.isLoading);
  const isMessageSent = useSelector((store) => store.messageSender.isMessageSent);

  const { t } = useTranslation('contact');

  const messageSendingError = t('messageSendingError', { 'invalidEmail': invalidEmail });

  console.log("****** messageSendingError: ", messageSendingError);
  console.log("invalidEmail: ", invalidEmail);

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

  const validateForm = (field, value) => {

    let newErrors = { ...errors };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (field === "from_name") {
      newErrors.name = value.trim().length < 2 ? nameError : "";
    }
    if (field === "user_email") {
      newErrors.email = !emailPattern.test(value.trim()) ? emailError : "";
    }
    if (field === "message") {
      newErrors.message = value.trim().length === 0 ? messageError : "";
    }

    setErrors(newErrors);
  };

  // Handle input changes and validate live
  const handleInputChange = (e) => {
    dispatch(resetState());
    const { name, value } = e.target;
    validateForm(name, value);
  };

  // Validate entire form before submission
  const checkFormValidity = () => {
    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    let newErrors = {
      name: name.length < 2 ? nameError : "",
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? emailError : "",
      message: message.length === 0 ? messageError : "",
    };

    setErrors(newErrors);

    const isValid = !newErrors.name && !newErrors.email && !newErrors.message;
    return isValid;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!checkFormValidity()) return; // Stop if form is invalid

    const name = form.current.from_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    const requestData = {
      name: name,
      from: email,
      subject: "New Message From Your Portfolio",
      body: message,
    };

    await dispatch(sendMessage(requestData)).unwrap();

    // Clear form before showing success message
    form.current.reset();
    dispatch(resetState());

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
                    ? nameError
                    : errors.email
                      ? emailError
                      : errors.message
                        ? messageError
                        : ""}
                </p>
              )}

              {isError && !errors.name && !errors.email && !errors.message && (
                <p className="text-red-500 -mb-3">
                  {invalidEmail ? (<Trans i18nKey={"invalidEmail"}>{messageSendingError}</Trans>) : sendMessageError}
                </p>
              )}


            </div>

            <form
              ref={form}
              onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  name="user_email"
                  placeholder={emailfiled}
                  className={`${inputsCss} ${!errors.name && errors.email || isError && isMessageSent ? "border-red-500" : "border-theme_border"
                    }`}
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  name="message"
                  onChange={handleInputChange}
                  placeholder={messagefiled}
                  className={`${inputsCss} ${!errors.name && !errors.email && errors.message
                    ? "border-red-500"
                    : "border-theme_border"
                    }`}
                ></textarea>
              </div>
              <div className="flex flex-grow">
                <div className="flex flex-row overflow-hidden relative ">
                  {/* Submit Button */}
                  <button className="btn self-start bg-primary text-xl hover:bg-primary_dark text-primary_content px-8 py-2 rounded-md rounded-br-[20px] border border-theme_border">
                    {sendbutton}
                  </button>

                  {/* Loading Overlay */}
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-theme_bg/20 z-10 px-8 py-2 rounded-md rounded-br-[20px]">
                      <CircularProgress
                        color="inherit"
                        size={24}
                      />
                    </div>
                  )}

                </div>
              </div>


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


