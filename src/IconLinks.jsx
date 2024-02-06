import { LuDonut, LuDog } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { FiVideo } from "react-icons/fi";

function IconLinks() {
  return (
    <>
      <div className="row-of-icons">
        <FaCode title="Code Symbol Icon" className="react-icons" />
        <LuDonut title="Donut Icon" className="react-icons" />
        <LuDog title="Dog Icon" className="react-icons" />
        <HiOutlinePaintBrush title="Paint Brush Icon" className="react-icons" />
        <FiVideo title="Video Icon" className="react-icons" />
      </div>
    </>
  );
}

export default IconLinks;
