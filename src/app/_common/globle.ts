import { faFacebook, faInstagram, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const ICON = {
    facebook: faFacebook,
    twitter: faTwitter,
    insta: faInstagram,
    twitch: faTwitch
}


export const user = {
    isLogin: true,
    name: "",
    email: "",
}

export const matchs = [
    {
        date: '2021 - 05 - 01', time: '12:00 pm', league: 'الدوري السعودي', status: 'finished', teams: [
            { name: 'Alahli', logo: 'logo.jpg', score: 0 },
            { name: 'Alahli', logo: 'logo.jpg', score: 0 },
        ]
    }, {
        date: '2021 - 05 - 01', time: '12:00 pm', league: 'الدوري السعودي', status: 'notfinished', teams: [
            { name: 'Alahli', logo: 'logo.jpg', score: 0 },
            { name: 'Alahli', logo: 'logo.jpg', score: 0 },
        ]
    }
]