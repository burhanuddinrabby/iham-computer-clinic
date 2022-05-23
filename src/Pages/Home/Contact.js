import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  const [user] = useAuthState(auth);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.warn("Please log in first!!");
      return;
    }
    toast.success("Ye! Your email sent!! (lies 🙊)");
  };

  return (
    <div>
      <section className="py-20 lg:py-[120px] overflow-hidden relative px-4 lg:px-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap lg:justify-evenly -mx-4">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4">
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <span className="block mb-4 text-sky-400 text-2xl">
                  Contact Us
                </span>
                <h2
                  className="
                  text-white
                  mb-6
                  uppercase
                  font-bold
                  text-4xl
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                >
                  GET IN TOUCH WITH US
                </h2>
                <p className="text-base text-slate-200 leading-relaxed mb-9">
                  Contact with us to get support. Tell us your problems, we are here with the solution. That's our policy 💸
                </p>
                <div className="flex mb-8 max-w-[370px] w-full">
                  <div
                    className="
                     max-w-[60px]
                     sm:max-w-[70px]
                     w-full
                     h-[60px]
                     sm:h-[70px]
                     flex
                     items-center
                     justify-center
                     mr-6
                     overflow-hidden
                     bg-sky-100 bg-opacity-5
                     text-primary
                     rounded
                     "
                  >
                    <img
                      src="https://www.downloadclipart.net/svg/31618-cartoon-house-with-blue-sky-vector.svg"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <h4 className="font-bold text-slate-300 text-xl mb-1">
                      Our Location
                    </h4>
                    <p className="text-base text-slate-300">
                      Andor Killa, Bandar Ban, Bangladesh
                    </p>
                  </div>
                </div>
                <div className="flex mb-8 max-w-[370px] w-full">
                  <div className=" max-w-[60px] sm:max-w-[70px] w-full h-[60px] sm:h-[70px] flex items-center justify-center mr-6 overflow-hidden bg-sky-100 bg-opacity-5 text-primary rounded ">
                    <img
                      src="https://i.ibb.co/424QjxF/1-11435-download-phone-icon-vector-blue-removebg-preview.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <h4 className="font-bold text-slate-300 text-xl mb-1">
                      Phone Number
                    </h4>
                    <p className="text-base text-slate-300">
                      +8801777-111999
                    </p>
                  </div>
                </div>
                <div className="flex mb-8 max-w-[370px] w-full">
                  <div
                    className="max-w-[60px] sm:max-w-[70px] w-full h-[60px] sm:h-[70px] flex items-center justify-center mr-6 overflow-hidden bg-sky-100 bg-opacity-5 text-primary rounded">
                    <img
                      src="https://i.ibb.co/zGXCC5d/mail-symbol-icon-blue-simple-rounded-corners-isolated-vector-illustration-mail-symbol-icon-blue-simp.png"
                      alt=""
                    />
                  </div>
                  <div className="w-full">
                    <h4 className="font-bold text-slate-300 text-xl mb-1">
                      Email Address
                    </h4>
                    <p className="text-base text-slate-300">info@iham-computer-clinic.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
              <div className="bg-gray-200 relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className=" w-full rounded py-3 px-[14px] text-slate-300 text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-sky-400
                        "
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className=" w-full rounded py-3 px-[14px] text-slate-300 text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-sky-400
                        "
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="text"
                      placeholder="Your Subject"
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-slate-300 text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-sky-400
                        "
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-slate-300 text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-sky-400
                        "
                      required
                    ></textarea>
                  </div>
                  <div>
                    {/* <button
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="white"
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-primary transition duration-200 rounded shadow-md hover:bg-opacity-90 focus:shadow-outline focus:outline-none active:scale-90"
                    >
                      Send Message
                    </button> */}
                    <PrimaryButton className='w-full'>Send Message</PrimaryButton>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9 z-[-1]">
                    <svg
                      width="100"
                      height="100"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
                  <span className="absolute -right-10 top-[90px] z-[-1]">
                    <svg
                      width="34"
                      height="134"
                      viewBox="0 0 34 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296" />
                      <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#13C296" />
                      <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#13C296" />
                      <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296" />
                      <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="#13C296" />
                      <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296" />
                      <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296" />
                      <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296" />
                      <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#13C296" />
                      <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#13C296" />
                      <circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="#13C296" />
                      <circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="#13C296" />
                      <circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="#13C296" />
                      <circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="#13C296" />
                      <circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="#13C296" />
                      <circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="#13C296" />
                      <circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="#13C296" />
                      <circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="#13C296" />
                      <circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="#13C296" />
                      <circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="#13C296" />
                      <circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="#13C296" />
                      <circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="#13C296" />
                      <circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="#13C296" />
                      <circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="#13C296" />
                      <circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="#13C296" />
                      <circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="#13C296" />
                      <circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="#13C296" />
                      <circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="#13C296" />
                      <circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="#13C296" />
                      <circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="#13C296" />
                    </svg>
                  </span>
                  <span className="absolute -left-7 -bottom-7 z-[-1]">
                    <svg
                      width="107"
                      height="134"
                      viewBox="0 0 107 134"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="104.999" cy="132" r="1.66667" transform="rotate(180 104.999 132)" fill="#13C296" />
                      <circle cx="104.999" cy="117.333" r="1.66667" transform="rotate(180 104.999 117.333)" fill="#13C296" />
                      <circle cx="104.999" cy="102.667" r="1.66667" transform="rotate(180 104.999 102.667)" fill="#13C296" />
                      <circle cx="104.999" cy="88" r="1.66667" transform="rotate(180 104.999 88)" fill="#13C296" />
                      <circle cx="104.999" cy="73.3333" r="1.66667" transform="rotate(180 104.999 73.3333)" fill="#13C296" />
                      <circle cx="104.999" cy="45" r="1.66667" transform="rotate(180 104.999 45)" fill="#13C296" />
                      <circle cx="104.999" cy="16" r="1.66667" transform="rotate(180 104.999 16)" fill="#13C296" />
                      <circle cx="104.999" cy="59" r="1.66667" transform="rotate(180 104.999 59)" fill="#13C296" />
                      <circle cx="104.999" cy="30.6666" r="1.66667" transform="rotate(180 104.999 30.6666)" fill="#13C296" />
                      <circle cx="104.999" cy="1.66665" r="1.66667" transform="rotate(180 104.999 1.66665)" fill="#13C296" />
                      <circle cx="90.3333" cy="132" r="1.66667" transform="rotate(180 90.3333 132)" fill="#13C296" />
                      <circle cx="90.3333" cy="117.333" r="1.66667" transform="rotate(180 90.3333 117.333)" fill="#13C296" />
                      <circle cx="90.3333" cy="102.667" r="1.66667" transform="rotate(180 90.3333 102.667)" fill="#13C296" />
                      <circle cx="90.3333" cy="88" r="1.66667" transform="rotate(180 90.3333 88)" fill="#13C296" />
                      <circle cx="90.3333" cy="73.3333" r="1.66667" transform="rotate(180 90.3333 73.3333)" fill="#13C296" />
                      <circle cx="90.3333" cy="45" r="1.66667" transform="rotate(180 90.3333 45)" fill="#13C296" />
                      <circle cx="90.3333" cy="16" r="1.66667" transform="rotate(180 90.3333 16)" fill="#13C296" />
                      <circle cx="90.3333" cy="59" r="1.66667" transform="rotate(180 90.3333 59)" fill="#13C296" />
                      <circle cx="90.3333" cy="30.6666" r="1.66667" transform="rotate(180 90.3333 30.6666)" fill="#13C296" />
                      <circle cx="90.3333" cy="1.66665" r="1.66667" transform="rotate(180 90.3333 1.66665)" fill="#13C296" />
                      <circle cx="75.6654" cy="132" r="1.66667" transform="rotate(180 75.6654 132)" fill="#13C296" />
                      <circle cx="31.9993" cy="132" r="1.66667" transform="rotate(180 31.9993 132)" fill="#13C296" />
                      <circle cx="75.6654" cy="117.333" r="1.66667" transform="rotate(180 75.6654 117.333)" fill="#13C296" />
                      <circle cx="31.9993" cy="117.333" r="1.66667" transform="rotate(180 31.9993 117.333)" fill="#13C296" />
                      <circle cx="75.6654" cy="102.667" r="1.66667" transform="rotate(180 75.6654 102.667)" fill="#13C296" />
                      <circle cx="31.9993" cy="102.667" r="1.66667" transform="rotate(180 31.9993 102.667)" fill="#13C296" />
                      <circle cx="75.6654" cy="88" r="1.66667" transform="rotate(180 75.6654 88)" fill="#13C296" />
                      <circle cx="31.9993" cy="88" r="1.66667" transform="rotate(180 31.9993 88)" fill="#13C296" />
                      <circle cx="75.6654" cy="73.3333" r="1.66667" transform="rotate(180 75.6654 73.3333)" fill="#13C296" />
                      <circle cx="31.9993" cy="73.3333" r="1.66667" transform="rotate(180 31.9993 73.3333)" fill="#13C296" />
                      <circle cx="75.6654" cy="45" r="1.66667" transform="rotate(180 75.6654 45)" fill="#13C296" />
                      <circle cx="31.9993" cy="45" r="1.66667" transform="rotate(180 31.9993 45)" fill="#13C296" />
                      <circle cx="75.6654" cy="16" r="1.66667" transform="rotate(180 75.6654 16)" fill="#13C296" />
                      <circle cx="31.9993" cy="16" r="1.66667" transform="rotate(180 31.9993 16)" fill="#13C296" />
                      <circle cx="75.6654" cy="59" r="1.66667" transform="rotate(180 75.6654 59)" fill="#13C296" />
                      <circle cx="31.9993" cy="59" r="1.66667" transform="rotate(180 31.9993 59)" fill="#13C296" />
                      <circle cx="75.6654" cy="30.6666" r="1.66667" transform="rotate(180 75.6654 30.6666)" fill="#13C296" />
                      <circle cx="31.9993" cy="30.6666" r="1.66667" transform="rotate(180 31.9993 30.6666)" fill="#13C296" />
                      <circle cx="75.6654" cy="1.66665" r="1.66667" transform="rotate(180 75.6654 1.66665)" fill="#13C296" />
                      <circle cx="31.9993" cy="1.66665" r="1.66667" transform="rotate(180 31.9993 1.66665)" fill="#13C296" />
                      <circle cx="60.9993" cy="132" r="1.66667" transform="rotate(180 60.9993 132)" fill="#13C296" />
                      <circle cx="17.3333" cy="132" r="1.66667" transform="rotate(180 17.3333 132)" fill="#13C296" />
                      <circle cx="60.9993" cy="117.333" r="1.66667" transform="rotate(180 60.9993 117.333)" fill="#13C296" />
                      <circle cx="17.3333" cy="117.333" r="1.66667" transform="rotate(180 17.3333 117.333)" fill="#13C296" />
                      <circle cx="60.9993" cy="102.667" r="1.66667" transform="rotate(180 60.9993 102.667)" fill="#13C296" />
                      <circle cx="17.3333" cy="102.667" r="1.66667" transform="rotate(180 17.3333 102.667)" fill="#13C296" />
                      <circle cx="60.9993" cy="88" r="1.66667" transform="rotate(180 60.9993 88)" fill="#13C296" />
                      <circle cx="17.3333" cy="88" r="1.66667" transform="rotate(180 17.3333 88)" fill="#13C296" />
                      <circle cx="60.9993" cy="73.3333" r="1.66667" transform="rotate(180 60.9993 73.3333)" fill="#13C296" />
                      <circle cx="17.3333" cy="73.3333" r="1.66667" transform="rotate(180 17.3333 73.3333)" fill="#13C296" />
                      <circle cx="60.9993" cy="45" r="1.66667" transform="rotate(180 60.9993 45)" fill="#13C296" />
                      <circle cx="17.3333" cy="45" r="1.66667" transform="rotate(180 17.3333 45)" fill="#13C296" />
                      <circle cx="60.9993" cy="16" r="1.66667" transform="rotate(180 60.9993 16)" fill="#13C296" />
                      <circle cx="17.3333" cy="16" r="1.66667" transform="rotate(180 17.3333 16)" fill="#13C296" />
                      <circle cx="60.9993" cy="59" r="1.66667" transform="rotate(180 60.9993 59)" fill="#13C296" />
                      <circle cx="17.3333" cy="59" r="1.66667" transform="rotate(180 17.3333 59)" fill="#13C296" />
                      <circle cx="60.9993" cy="30.6666" r="1.66667" transform="rotate(180 60.9993 30.6666)" fill="#13C296" />
                      <circle cx="17.3333" cy="30.6666" r="1.66667" transform="rotate(180 17.3333 30.6666)" fill="#13C296" />
                      <circle cx="60.9993" cy="1.66665" r="1.66667" transform="rotate(180 60.9993 1.66665)" fill="#13C296" />
                      <circle cx="17.3333" cy="1.66665" r="1.66667" transform="rotate(180 17.3333 1.66665)" fill="#13C296" />
                      <circle cx="46.3333" cy="132" r="1.66667" transform="rotate(180 46.3333 132)" fill="#13C296" />
                      <circle cx="2.66536" cy="132" r="1.66667" transform="rotate(180 2.66536 132)" fill="#13C296" />
                      <circle cx="46.3333" cy="117.333" r="1.66667" transform="rotate(180 46.3333 117.333)" fill="#13C296"
                      />
                      <circle cx="2.66536" cy="117.333" r="1.66667" transform="rotate(180 2.66536 117.333)" fill="#13C296"
                      />
                      <circle cx="46.3333" cy="102.667" r="1.66667" transform="rotate(180 46.3333 102.667)" fill="#13C296"
                      />
                      <circle cx="2.66536" cy="102.667" r="1.66667" transform="rotate(180 2.66536 102.667)" fill="#13C296"
                      />
                      <circle cx="46.3333" cy="88" r="1.66667" transform="rotate(180 46.3333 88)" fill="#13C296"
                      />
                      <circle cx="2.66536" cy="88" r="1.66667" transform="rotate(180 2.66536 88)" fill="#13C296" />
                      <circle cx="46.3333" cy="73.3333" r="1.66667" transform="rotate(180 46.3333 73.3333)" fill="#13C296"
                      />
                      <circle cx="2.66536" cy="73.3333" r="1.66667" transform="rotate(180 2.66536 73.3333)" fill="#13C296"
                      />
                      <circle cx="46.3333" cy="45" r="1.66667" transform="rotate(180 46.3333 45)" fill="#13C296"
                      />
                      <circle cx="2.66536" cy="45" r="1.66667" transform="rotate(180 2.66536 45)" fill="#13C296"
                      />
                      <circle cx="46.3333" cy="16" r="1.66667" transform="rotate(180 46.3333 16)" fill="#13C296"
                      />
                      <circle cx="2.66536" cy="16" r="1.66667" transform="rotate(180 2.66536 16)" fill="#13C296"
                      />
                      <circle cx="46.3333" cy="59" r="1.66667" transform="rotate(180 46.3333 59)" fill="#13C296"
                      />
                      <circle cx="2.66536" cy="59" r="1.66667" transform="rotate(180 2.66536 59)" fill="#13C296"
                      />
                      <circle cx="46.3333" cy="30.6666" r="1.66667" transform="rotate(180 46.3333 30.6666)" fill="#13C296"
                      />
                      <circle cx="2.66536" cy="30.6666" r="1.66667" transform="rotate(180 2.66536 30.6666)" fill="#13C296"
                      />
                      <circle cx="46.3333" cy="1.66665" r="1.66667" transform="rotate(180 46.3333 1.66665)" fill="#13C296"
                      />
                      <circle cx="2.66536" cy="1.66665" r="1.66667" transform="rotate(180 2.66536 1.66665)" fill="#13C296"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;