import AvatarCarousel from "../components/AvatarCarousel.tsx";
import AboutMe from "../components/AboutMe.tsx";


export default function HomePage(){

    return <div className="grid grid-cols-1 gap-4 mt-24 xl:grid-cols-2">
        <AvatarCarousel/>
        <AboutMe/>
    </div>;

}