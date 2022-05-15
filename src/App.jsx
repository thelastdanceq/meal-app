
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Category from "./components/Category";
import Meal from "./components/Meal";


function App() {
  return (
    <div className="App">
      <div className="main">
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path='/category/:name' element={<Category />} />
              <Route path='/meal/:id' element={<Meal />} />

              <Route path='*' element={<NotFound />} />

            </Route>
          </Routes>

        </BrowserRouter>
      </div>



    </div>
  );
}

export default App;
