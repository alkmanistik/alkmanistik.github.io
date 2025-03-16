import {profileImages} from "../../utils/constants.ts";

export default function AvatarCarousel() {
    return <div className='flex flex-col items-center justify-center'>
        <div className="carousel rounded-xl w-xs m-0 mb-4 sm:w-sm md:w-md xl:w-md xl:mb-0">
            {
                profileImages.map((profileImage, index) => (
                        <div key={index} id={`image${index + 1}`} className="w-xs sm:w-sm md:w-md xl:w-md carousel-item">
                            <img
                                src={profileImage}
                                className="object-cover" alt={profileImage}/>
                        </div>
                    )
                )
            }
        </div>
        <div className="hidden w-full justify-center gap-2 my-2 xl:flex">
            {
                profileImages.map((_, index) => (
                    <a key={index} href={`#image${index + 1}`} className="btn btn-xs bg-base-300">{index + 1}</a>
                ))
            }
        </div>
    </div>;
}