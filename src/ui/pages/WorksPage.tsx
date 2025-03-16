import {useParams} from "react-router";
import Work from "../../models/interfaces/Work.ts";
import {asepriteWorks, gameWorks, gitHubWorks, mobileWorks} from "../../utils/constants.ts";

export default function WorksPage() {

    const params = useParams<{ typeWork: string }>()

    let workList: Array<Work> = [];
    let workType: string = "";

    switch (params.typeWork) {
        case "game":
            workType = "Game"
            workList = gameWorks
            break;
        case "github":
            workType = "GitHub"
            workList = gitHubWorks
            break;
        case "mobile":
            workType = "Mobile"
            workList = mobileWorks
            break;
        case "aseprite":
            workType = "Aseprite"
            workList = asepriteWorks
            break;
        default:
            workType = "Aseprite"
            workList = asepriteWorks
    }

    return <div className="mt-24">
        <h1 className="mx-10 text-4xl font-bold">{workType}:</h1>
        <div className="grid gap-8 mt-4 md:grid-cols-2 xl:grid-cols-3">
            {workList.map((work, index) => (
                <div key={index} className="flex justify-center">
                    <div className="card bg-base-200 w-96 shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={work.imageSrc}
                                alt={work.title}
                                className="w-96 rounded-xl border-3 border-base-300"/>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{work.title}</h2>
                            <p>{work.description}</p>
                            <div className="card-actions">
                                {work.linkList.map((link, index) => (
                                        <a key={index} className="size-12 p-0" href={link.iconHref} target="_blank" rel="noopener noreferrer">
                                            <img alt={link.iconName} src={link.iconSrc} className="rounded-xl"/>
                                        </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>;

}