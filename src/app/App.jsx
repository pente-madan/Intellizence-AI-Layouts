import { Layout2 } from "./components/layouts/Layout2";
import { Layout3 } from "./components/layouts/Layout3";
import { Layout1 } from "./components/layouts/Layout1";

export default function App() {
  return (
    <div className="bg-white relative w-full min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <img
          alt=""
          className="w-full h-full object-cover"
          src="https://res.cloudinary.com/drhyerkn7/image/upload/v1778739713/Layout_1_oblfkl.png"
        />
      </div>
      <Layout1 />
      <Layout2 />
      <Layout3 />
    </div>
  );
}
