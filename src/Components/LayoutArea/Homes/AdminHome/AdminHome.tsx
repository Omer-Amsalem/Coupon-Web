import AdminMenu from "../../Menu/AdminMenu/AdminMenu";
import "./AdminHome.css";
import Marquee from "react-fast-marquee";
import image from "../../../../Assets/homePage.jpeg"


function AdminHome(): JSX.Element {
  
    
    return (
        <div className="AdminHome">
			<AdminMenu/>
            <Marquee className="Marquee" gradientWidth="0" speed={45}  > Welcome back admin! </Marquee>
            <img className="HomeImage" src={image} alt="" />
        </div>
    );
}

export default AdminHome;
