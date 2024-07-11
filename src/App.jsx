import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./Route/route";

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoute} />
    </div>
  );
};

export default App;
