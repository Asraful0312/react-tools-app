import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Features = () => {
  return (
    <div className="space-y-9">
      {/* key features */}
      <div>
        <h1 className="text-lg font-semibold mb-4">Website Screenshot</h1>
        <p className="text-extraDarkGray font-medium">
          DoMyShoot is an AI-powered product photography app to help online
          sellers create pro-quality photos, cheaper and faster. The intelligent
          camera has in-built guides to help sellers click images for their
          eCommerce product category whether it's fashion or food. Once you
          click your images on the app on your smartphone, our AI transforms
          them into high-quality product photos for marketplace listings or
          social media posts. Creating fresh content for eCommerce has never
          been as simple!
        </p>
      </div>
      {/* use cases */}
      <div>
        <h1 className="text-lg font-semibold mb-4 ">Use cases</h1>
        <div className="space-y-4">
          <div className="flex">
            <div className="w-[10%]">
              <img src="/icons/star.png" alt="star icon" />
            </div>
            <p className="text-extraDarkGray font-medium w-[90%]">
              Social Media Management: With the increasing importance of social
              media in marketing strategies, businesses need effective tools to
              manage their social media presence.
            </p>
          </div>
          <div className="flex">
            <div className="w-[10%]">
              <img src="/icons/star.png" alt="star icon" />
            </div>
            <p className="text-extraDarkGray font-medium w-[90%]">
              Social Media Management: With the increasing importance of social
              media in marketing strategies, businesses need effective tools to
              manage their social media presence.
            </p>
          </div>
          <div className="flex">
            <div className="w-[10%]">
              <img src="/icons/star.png" alt="star icon" />
            </div>
            <p className="text-extraDarkGray font-medium w-[90%]">
              Social Media Management: With the increasing importance of social
              media in marketing strategies, businesses need effective tools to
              manage their social media presence.
            </p>
          </div>
        </div>
      </div>
      {/* author */}
      <div>
        <h1 className="text-lg font-semibold mb-4">Website Screenshot</h1>
        <div className="flex items-center flex-wrap justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/author.png" alt="author image" />
            <p className="text-extraDarkGray font-medium">Cameron Williamson</p>
          </div>
          <Link className="text-accentBlue font-medium font-clash-display">
            View Profile
          </Link>
        </div>
      </div>
      {/* Advertisement */}
      <div className="p-5 border border-strock rounded-2xl">
        <div className="flex items-center gap-3 mb-2">
          <img src="/icons/ad color.png" alt="ad image" />
          <h1 className="text-lg font-semibold">Advertisement</h1>
        </div>
        <p className="text-extraDarkGray font-medium mb-6">
          Promote your product or service to a vast audience of designers and
          founders.
        </p>
        <Button variant="primary">Fill out the form</Button>
      </div>
    </div>
  );
};

export default Features;
