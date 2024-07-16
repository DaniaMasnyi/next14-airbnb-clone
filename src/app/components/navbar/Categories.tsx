import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import Container from "../Container";
import CategoryBox from "../CategoryBox";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "The property is close to the beach!",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "The property has windmills!",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "The property is modern!",
  },
];

const Categories = () => {
  return (
    <div>
      <Container>
        <div
          className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto"
        >
          {categories.map((item) => (
            <CategoryBox
              key={item.label}
              label={item.label}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;