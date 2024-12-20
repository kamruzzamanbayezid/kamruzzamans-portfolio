import ContactForm from "../../../UI/ContactForm/ContactForm";
import Icons from "../../../UI/Icons/Icons";
import PrimaryTitle from "../../../UI/PrimaryTitle/PrimaryTitle";
import image from "../../../../public/portfolio_1.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Contact() {
  const container = useRef(null);
  const whatsappRef = useRef(null);
  const linkedinRef = useRef(null);
  const messengerRef = useRef(null);

  const handleWhatsAppRedirect = () => {
    const phoneNumber = "01923720498"; // Your WhatsApp number with country code
    const message = "Hello, I would like to contact you"; // Message to send
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank"); // Open the WhatsApp URL in a new tab or window
  };

  const handleMessengerRedirect = () => {
    const usernameOrId = "100063140996982"; // Replace with Facebook username or ID
    const url = `https://m.me/${usernameOrId}`;
    window.open(url, "_blank"); // Open Messenger chat in a new tab
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

      tl.to(messengerRef.current, {});
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="text-white bg-secondary rounded-2xl shadow-2xl mx-auto max-w-11/12 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] overflow-hidden relative"
    >
      <div className="lg:flex hidden justify-start absolute top-8 left-16 z-[999]">
        <div className="rounded-full w-[28%] flex justify-center items-center">
          <figure className="rounded-full h-full w-full">
            <img
              src={image}
              className="w-full h-full rounded-full"
              alt="hasan"
            />
          </figure>
        </div>
      </div>
      <div className="mb-8">
        <PrimaryTitle
          main={"Let's Discus Your"}
          sub={"Project"}
          mainStyle={"text-4xl text-center"}
        />
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-end py-4 px-10 bg-primary relative shadow-2xl">
        <div className="w-full lg:w-[40%] lg:p-6 my-6 lg:my-14">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-start gap-4">
              <h1 className="text-xl">Email</h1>
              <p className="text-2xl font-bold">mdhasankha.wd@gmail.com</p>
            </div>
            <div className="flex flex-col justify-start gap-4">
              <h1 className="text-xl">Phone</h1>
              <p className="text-2xl font-bold">+880 1923720498</p>
            </div>
            <div className="flex flex-col justify-start gap-4">
              <h1 className="text-xl">Address</h1>
              <p className="text-2xl font-bold">Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <div ref={messengerRef} onClick={handleMessengerRedirect}>
              <Icons style={"text-5xl cursor-pointer"} type="messenger" />
            </div>
            <div ref={whatsappRef} onClick={handleWhatsAppRedirect}>
              <Icons style={"text-5xl cursor-pointer"} type="whatsapp" />
            </div>
            <div ref={linkedinRef}>
              <a href="https://www.linkedin.com/in/mdhasankha" target="_blank">
                <Icons style={"text-5xl cursor-pointer"} type="linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60%] lg:p-6 my-6 lg:my-14">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
