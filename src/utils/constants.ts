import WorkPath from "../models/interfaces/WorkPath.ts";
import DescriptionAboutMe from "../models/interfaces/DescriptionAboutMe.ts";
import Work from "../models/interfaces/Work.ts";

import basicVibe from "../assets/profilePhoto/basicVibe.jpg";
import cleanVibe from "../assets/profilePhoto/cleanVibe.jpg";
import punkVibe from "../assets/profilePhoto/punkVibe.jpg";
import summerVibe from "../assets/profilePhoto/summerVibe.jpg";

import davidKing from "../assets/asepriteWorks/davidKing.jpg";
import sam from "../assets/asepriteWorks/sam.png";
import bt from "../assets/asepriteWorks/bt.png";
import remor from "../assets/asepriteWorks/remor.jpg";
import hoodwink from "../assets/asepriteWorks/hoodwink.gif";

import neverTrustCrabs from "../assets/gameWorks/neverTrustCrabs.jpg";
import catsWisdom from "../assets/gameWorks/catsWisdom.png";

import dices from "../assets/mobileWorks/dices.png";
import greenWorld from "../assets/mobileWorks/greenWorld.png";

import alkWeb from "../assets/gitHubWorks/alkWeb.png";
import alkify from "../assets/gitHubWorks/alkify.png";

import watchShop from "../assets/figmaWorks/watchShop.png";

import steam from "../assets/logo/steam.png";
import email from "../assets/logo/email.png";
import gitHub from "../assets/logo/gitHub.png";
import telegram from "../assets/logo/telegram.png";
import youtube from "../assets/logo/youtube.png";
import gamepad from "../assets/logo/gamepad.png";
import gameJam from "../assets/logo/gameJam.png";
import appGallery from "../assets/logo/appGallery.png";
import ruStore from "../assets/logo/ruStore.png";
import figma from "../assets/logo/figma.png";

export const workPaths: Array<WorkPath> = [
    {
        workName: "Aseprite",
        workHref: "/works/aseprite",
    },
    {
        workName: "Figma",
        workHref: "/works/figma",
    },
    {
        workName: "",
        workHref: "",
    },
    {
        workName: "GitHub",
        workHref: "/works/github",
    },
    {
        workName: "Game",
        workHref: "works/game",
    },
    {
        workName: "Mobile App",
        workHref: "/works/mobile",
    },
];

export const profileImages: Array<string> = [
    summerVibe,
    cleanVibe,
    basicVibe,
    punkVibe,
];

export const descriptionAboutMe: DescriptionAboutMe = {
    realName: "Эрик Фаттахов",
    nickname: "Alkmanistik",
    bornYear: new Date(2004, 7, 7), // year, month-1, day
    description:
        "\n" +
        "Привет всем! На моём сайте выложены все мои работы. Я обычный программист, который занимается всем подряд. Стараюсь выкладывать работы с описанием, чтобы их можно было повторить. Использую современный стек технологий. P.S. Также люблю поиграть в игры с весёлой компанией.",
    contactList: [
        {
            iconName: "EMail",
            iconHref: "mailto:erik.fattakhov.04@mail.ru",
            iconSrc: email,
        },
        {
            iconName: "Steam",
            iconHref: "https://steamcommunity.com/id/alkmanist/",
            iconSrc: steam,
        },
        {
            iconName: "Telegram",
            iconHref: "https://t.me/Alkmanistik",
            iconSrc: telegram,
        },
        {
            iconName: "GitHub",
            iconHref: "https://github.com/alkmanistik",
            iconSrc: gitHub,
        },
    ],
};

export const asepriteWorks: Array<Work> = [
    {
        title: "David King (Dead by Daylight)",
        imageSrc: davidKing,
        description: "",
        linkList: [],
    },
    {
        title: "Hoodwink (Dota 2)",
        imageSrc: hoodwink,
        description: "",
        linkList: [],
    },
    {
        title: "Remor (Fran bow)",
        imageSrc: remor,
        description: "",
        linkList: [],
    },
    {
        title: "Sam (Death Stranding)",
        imageSrc: sam,
        description: "",
        linkList: [],
    },
    {
        title: "BT (Death Stranding)",
        imageSrc: bt,
        description: "",
        linkList: [],
    },
];

export const gameWorks: Array<Work> = [
    {
        title: "Never Trust Crabs",
        imageSrc: neverTrustCrabs,
        description: "VR adventure game",
        linkList: [
            {
                iconName: "GitHub",
                iconHref: "https://github.com/alkmanistik/VRGodotForHackathon",
                iconSrc: gitHub,
            },
            {
                iconName: "YouTube",
                iconHref: "https://www.youtube.com/watch?v=g1keA9Iyt38",
                iconSrc: youtube,
            },
        ],
    },
    {
        title: "Cat's wisdom",
        imageSrc: catsWisdom,
        description: "2D point and click game",
        linkList: [
            {
                iconName: "GitHub",
                iconHref: "https://github.com/alkmanistik/GodotGameJam-1",
                iconSrc: gitHub,
            },
            {
                iconName: "GameJam",
                iconHref: "https://itch.io/jam/godot-wild-jam-63/rate/2376822",
                iconSrc: gameJam,
            },
            {
                iconName: "Itch.io",
                iconHref: "https://alkmanistik.itch.io/cats-wisdom",
                iconSrc: gamepad,
            },
        ],
    },
];

export const gitHubWorks: Array<Work> = [
    {
        title: "Cайт портфолио",
        imageSrc: alkWeb,
        description: "Сайт о себе и мои работы",
        linkList: [
            {
                iconName: "GitHub",
                iconHref:
                    "https://github.com/alkmanistik/alkmanistik.github.io",
                iconSrc: gitHub,
            },
        ],
    },
    {
        title: "Alkify",
        imageSrc: alkify,
        description:
            "Сайт аналог Spotify, Frontend - React, Backend - Java Spring Boot",
        linkList: [
            {
                iconName: "Frontend",
                iconHref: "https://github.com/alkmanistik/alkify-music-react",
                iconSrc: gitHub,
            },
            {
                iconName: "Backend",
                iconHref: "https://github.com/alkmanistik/alkify-music-api",
                iconSrc: gitHub,
            },
        ],
    },
];

export const mobileWorks: Array<Work> = [
    {
        title: "GreenМир",
        imageSrc: greenWorld,
        description: "Мобильное приложение вклада в экологию",
        linkList: [
            {
                iconName: "GitHub",
                iconHref:
                    "https://github.com/alkmanistik/EnvironmentalProjectForHackaton",
                iconSrc: gitHub,
            },
        ],
    },
    {
        title: "Кости",
        imageSrc: dices,
        description: "Кидайте виртуальные кости",
        linkList: [
            {
                iconName: "AppGallery",
                iconHref: "https://appgallery.huawei.ru/app/C113453621",
                iconSrc: appGallery,
            },
            {
                iconName: "RuStore",
                iconHref:
                    "https://www.rustore.ru/catalog/app/com.alkmanistik.diceapp",
                iconSrc: ruStore,
            },
        ],
    },
];

export const figmaWorks: Array<Work> = [
    {
        title: "Watch Shop App",
        imageSrc: watchShop,
        description: "Дизайн приложения для продажи часов",
        linkList: [
            {
                iconName: "Figma",
                iconHref:
                    "https://www.figma.com/design/cQ8n8vA7osRA4s5BZG2d8J/Watch-Mobile-App?node-id=1-2&t=W9cdUjPMR9zCTEJu-1",
                iconSrc: figma,
            },
        ],
    },
];
