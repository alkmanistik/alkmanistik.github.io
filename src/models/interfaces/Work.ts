import IconPath from "./IconPath.ts";

export default interface Work {
    title: string,
    imageSrc: string,
    description: string,
    linkList: Array<IconPath>,
}