import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/shared/Layout";
import SearchResult from "./pages/SearchResult";
import Tools from "./components/home/tools";
import SingleTool from "./pages/SingleTool";
import Login from "./pages/Login";

const App = () => {
  return (
    <main>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<SearchResult />} />
          <Route path="/category/:name" element={<Tools />} />
          <Route path="/tool/:name" element={<SingleTool />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </Layout>
    </main>
  );
};

export default App;
