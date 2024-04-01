import SingleColumnItem from "./SingleColumnItem";

const ColumnView = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <SingleColumnItem />
        <SingleColumnItem />
        <SingleColumnItem />
        <SingleColumnItem />
        <SingleColumnItem />
        <SingleColumnItem />
      </div>
    </div>
  );
};

export default ColumnView;
