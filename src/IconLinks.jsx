import { LuDonut, LuDog } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { Group } from "@mantine/core";

function IconLinks() {
  return (
    <>
      <div className="row-of-icons-in-IconLinks">
          <LuDonut size={150} />
          <LuDog size={150} />
          <HiOutlinePaintBrush size={150} />
          <FaCode size={150}/>
      </div>
    </>
  );
}

export default IconLinks;
