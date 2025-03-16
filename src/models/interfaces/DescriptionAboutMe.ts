import IconPath from "./IconPath.ts";

export default interface DescriptionAboutMe {
    realName: string;
    nickname: string;
    bornYear: Date;
    description: string;
    contactList: Array<IconPath>;
}