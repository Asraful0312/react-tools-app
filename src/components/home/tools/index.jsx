import Controller from "./Controller";
import ColumnView from "./column-view";
import GridView from "./grid view";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import tools from "../../../constans/tools";

const Tools = () => {
  const [currentView, setCurrentView] = useState("grid");
  const location = useLocation();
  const { name } = useParams();
  const { pathname } = location;

  return (
    <div className="px-5 lg:px-12">
      {pathname !== "/" && (
        <div className="my-8">
          <div className="flex items-center gap-3 mb-6">
            <Link to="/" className="font-bold">
              Homepage /
            </Link>
            <Link className="capitalize text-black/40">{name}</Link>
          </div>
          <h1 className="font-bold text-3xl">
            528 <span className="font-medium"> FIle Management Tools</span>
          </h1>
        </div>
      )}
      <Controller currentView={currentView} setCurrentView={setCurrentView} />
      {currentView === "grid" ? (
        <GridView tools={tools} />
      ) : (
        <ColumnView tools={tools} />
      )}
    </div>
  );
};

export default Tools;
