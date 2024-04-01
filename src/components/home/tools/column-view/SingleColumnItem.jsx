import Button from "../../../ui/Button";

const SingleColumnItem = () => {
  return (
    <div className="border border-strock p-3 rounded-2xl flex flex-wrap  gap-4">
      <div
        className="w-12 h-12 rounded-lg
       shadow-sm bg-white border border-strock p-2"
      >
        <img className="w-8 h-8" src="/images/Group 7.png" alt="image" />
      </div>
      <div>
        <h1 className="font-bold">Salesmate</h1>
        <p className="text-sm text-extraDarkGray">
          Quickly publish, edit and distribute more engaging content for your
          multi-page, long format newsletter.
        </p>
        <Button className="border none bg-transparent px-2 text-darkBlue">
          Deal
        </Button>
      </div>
    </div>
  );
};

export default SingleColumnItem;
