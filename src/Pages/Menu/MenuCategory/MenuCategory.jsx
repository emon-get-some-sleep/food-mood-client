import Cover from "../../Home/Home/Shared/Cover/Cover";
import MenuItem from "../../Home/Home/Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img}) => {
  return (
    <div className="pt-8">
     { title && <Cover title={title} img={img}></Cover> }
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} mt-16 item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
