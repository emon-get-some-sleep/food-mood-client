import { Link } from "react-router-dom";
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
      <div className="text-center">
      <Link to ={`/order/${title}`}>
      <button className="btn btn-outline border-0 border-b-4">Order Now</button>
      </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
