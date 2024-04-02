const ToolPreview = () => {
  return (
    <div>
      <h1 className="font-semibold text-lg mb-6">Card Preview</h1>
      <div className="bg-white rounded-2xl flex flex-col justify-center w-full mb-4">
        <div className="flex items-center justify-between">
          <div className="">
            <img className="h-full" src="/images/Group 7.png" alt="image" />
          </div>
          <div className="flex items-center gap-5">
            <h1 className="font-bold text-accentBlue">Deal</h1>
          </div>
        </div>
        <img className="-mt-12" src="/images/Rectangle 6.png" alt="image" />
      </div>
      <h3>Title</h3>
      <p className="text-[#494949] text-sm font-medium">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium
      </p>
    </div>
  );
};

export default ToolPreview;
