import {descriptionAboutMe} from "../../utils/constants.ts";
import {differenceInYears} from 'date-fns';

export default function AboutMe() {

    return <div className="flex flex-col mx-4 p-4 mb-6 bg-base-100 border-base-300 border-4 rounded-xl md:mx-8 xl:p-8 xl:mb-9.25 xl:mr-12">
        <h1 className="text-4xl font-bold">Обо Мне:</h1>
        <p className="text-2xl font-bold mt-8 xl:mx-6">{descriptionAboutMe.nickname}</p>
        <p className="text-2xl font-bold xl:mx-6">{descriptionAboutMe.realName} {differenceInYears(new Date(), descriptionAboutMe.bornYear)} лет</p>
        <p className="text-xl font-bold mt-4 xl:mx-6">{descriptionAboutMe.description}</p>
        <h2 className="text-4xl font-bold mt-8">Контакты:</h2>
        <div className="flex flex-wrap justify-center mt-8 gap-4 mb-4">
            {descriptionAboutMe.contactList.map((contact, index) => (
                <a key={index} className="size-12 p-0 rounded-md" href={contact.iconHref} target="_blank"
                   rel="noopener noreferrer">
                    <img className="rounded-full" alt={contact.iconName} src={contact.iconSrc}/>
                </a>
            ))}
        </div>
    </div>;
}