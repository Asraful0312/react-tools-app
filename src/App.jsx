import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/shared/Layout";
import SearchResult from "./pages/SearchResult";
import Tools from "./components/home/tools";
import SingleTool from "./pages/SingleTool";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SubmitTool from "./pages/SubmitTool";
import ScrollToTop from "./components/shared/ScrollToTop";

const App = () => {
  return (
    <main>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<SearchResult />} />
          <Route path="/category/:name" element={<Tools />} />
          <Route path="/tool/:name" element={<SingleTool />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/submit-tool" element={<SubmitTool />} />
        </Routes>
      </Layout>
    </main>
  );
};

export default App;
