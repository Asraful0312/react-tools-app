import SingleItem from "./SingleItem";
import Button from "../../../ui/Button";

const GridView = ({ tools }) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools?.map((data) => (
          <SingleItem key={data?.id} data={data} />
        ))}
      </div>
      <div className="flex items-center justify-center my-10">
        <Button variant="secondry">View More</Button>
      </div>
    </div>
  );
};

export default GridView;
