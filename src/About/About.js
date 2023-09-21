import { Link, Outlet } from "react-router-dom";

const About = ()=>{
    return (
        <>
         <div>This is About Us Page</div>
         <Link to="profile"><button className="m-4 p-2 bg-green-300 hover:bg-green-500 active:bg-gray-700" >Know More</button></Link>
         <Outlet/>
        
        </>
    )
}

export default About;