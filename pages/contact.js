import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  WhatsappIcon,
} from "react-share";

const { Fragment } = require("react");

const Contact = () => {
  const referralLink = `${process.env.NEXT_PUBLIC_URL}`;
  const shareMessage = `Welcome`;

  return (
    <div className=" flex h-screen  ">
      <div className="w-1/2 h-full border-black border-t-2 border-b-2 bg-yellow-200">
        <div className="ml-32 mt-32 ">
          <h1 className="font-bold text-3xl">Tap In</h1>
          <div className="grid mt-5 col-span-1 w-2/3">
            <label className="text-l font-normal mb-2">NAME</label>
            <input
              type="text"
              name="name"
              className="border-black border-2 text-xl p-2  mb-4"
            ></input>
            <label className="text-l font-normal mb-2 uppercase">budget</label>
            <input
              type="text"
              name="budge"
              className="border-black border-2 text-xl p-2 mb-4"
            ></input>
            <label className="text-l font-normal mb-2 uppercase">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="border-black border-2 text-xl p-2 mb-4"
            ></input>
            <label className="text-l font-normal mb-2 uppercase">message</label>
            <textarea
              name="message"
              rows={3}
              placeholder="Example text"
              className="border-black border-2 text-xl p-2 mb-4"
            ></textarea>
            <button className="bg-black text-white w-32 p-2 text-xl uppercase">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 border-l-2 h-full border-black border-t-2 border-b-2 relative">
        <div className="ml-32 mt-32 grid grid-cols-2">
          <FacebookShareButton
            url={referralLink}
            quote={shareMessage}
            className="h-80"
          >
            <FacebookIcon size={200} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={referralLink} title={shareMessage}>
            <TwitterIcon size={200} round={true} />
          </TwitterShareButton>
          <EmailShareButton url={referralLink} title={shareMessage}>
            <EmailIcon size={200} round={true} />
          </EmailShareButton>
          <WhatsappShareButton url={referralLink} title={shareMessage}>
            <WhatsappIcon size={200} round={true} />
          </WhatsappShareButton>
        </div>
        <div className="absolute bottom-0 text-2xl uppercase text-gray-400 w-full text-center mb-2">
          Copywrite {new Date().getFullYear()} &copy; Colorcrane
        </div>
      </div>
    </div>
  );
};

export default Contact;
