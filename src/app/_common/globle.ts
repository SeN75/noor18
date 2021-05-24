import { faFacebook, faInstagram, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faPlay, faStar } from "@fortawesome/free-solid-svg-icons";

export const ICON = {
    facebook: faFacebook,
    twitter: faTwitter,
    insta: faInstagram,
    twitch: faTwitch,
    play: faPlay,
    star: faStar
}


export const user = {
    isLogin: true,
    name: "",
    email: "",
}

export const matchs = [
    {
        date: '2021 - 05 - 01', time: '12:00 pm', league: 'الدوري السعودي', status: 'finished', teams: [
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
        ]
    }, {
        date: '2021 - 05 - 01', time: '12:00 pm', league: 'الدوري السعودي', status: 'notfinished', teams: [
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
        ]
    },
    {
        date: '2021 - 05 - 01', time: '12:00 pm', league: 'الدوري السعودي', status: 'finished', teams: [
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
        ]
    }, {
        date: '2021 - 05 - 01', time: '12:00 pm', league: 'الدوري السعودي', status: 'notfinished', teams: [
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
            { name: 'Alahli', logo: 'assets/images/soccer/logos/alchemists_buy_tickets.png', score: 0 },
        ]
    }
]



export const posts = [
    { category: "esport", path: ".", post_image: "_soccer_post-img1.jpg", date: "2021/5/2", title: "A new mage character is coming to the league", details: "Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt" },
    { category: "esport", path: ".", post_image: "post-img3.jpg", date: "2021/5/2", title: "A new mage character is coming to the league", details: "Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt" },
    { category: "esport", path: ".", post_image: "post-img5.jpg", date: "2021/5/2", title: "A new mage character is coming to the league", details: "Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt" },
    { category: "esport", path: ".", post_image: "_soccer_post-img1.jpg", date: "2021/5/2", title: "A new mage character is coming to the league", details: "Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt" },
    { category: "esport", path: ".", post_image: "post-img3.jpg", date: "2021/5/2", title: "A new mage character is coming to the league", details: "Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt" },
    { category: "esport", path: ".", post_image: "post-img5.jpg", date: "2021/5/2", title: "A new mage character is coming to the league", details: "Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt" },
]

export const tournaments = [
    {
        name: 'A new mage character is coming to the league', details: 'Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt ', poster: 'post-img3.jpg'
    },
    {
        name: 'A new mage character is coming to the league', details: 'Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt ', poster: 'post-img5.jpg'
    },
    {
        name: 'A new mage character is coming to the league', details: 'Lorem ipsum dolor sit amet, consectetur adipisi nela elit, sed do eiusmod tempore der incididunt ', poster: 'post-img3.jpg'
    }
]


export const matchFinished = [
    {
        date: '2020/02/02',
        leauge: "Pro League - World Championship",
        period: "Quater-Finals",
        team1: {
            name: "team1", place: 'jeddah', logo: "assets/images/esports/logos/alchemists-22x25.png", score: 5, totalKill: 50, totalDeath: 10, totalAssists: 30,
            players: [
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
            ]
        },
        team2: {
            name: "team2", place: 'jeddah', logo: "assets/images/samples/logos/icarus_wings_shield.png", score: 3, totalKill: 10, totalDeath: 50, totalAssists: 30,
            players: [
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
                { name: 'player1', nickname: "GG I AM Here", characterName: "GG", characterType: "Offensive", killsOnGame: 20, pKillsOnGame: 4, deathOnGame: 2, assistsOnGame: 5, dmsOnGame: 2000, },
            ]
        },
        isTeam1Win: true
    },
    {
        date: '2020/02/02',
        team1: {
            name: "team1", place: 'jeddah', logo: "assets/images/esports/logos/alchemists-22x25.png", score: 5, totalKill: 50, totalDeath: 10, totalAssists: 30
        },
        team2: {
            name: "team2", place: 'jeddah', logo: "assets/images/samples/logos/icarus_wings_shield.png", score: 3, totalKill: 10, totalDeath: 50, totalAssists: 30
        },
        isTeam1Win: false
    },
    {
        date: '2020/02/02',
        team1: {
            name: "team1", place: 'jeddah', logo: "assets/images/esports/logos/alchemists-22x25.png", score: 5, totalKill: 50, totalDeath: 10, totalAssists: 30
        },
        team2: {
            name: "team2", place: 'jeddah', logo: "assets/images/samples/logos/icarus_wings_shield.png", score: 3, totalKill: 10, totalDeath: 50, totalAssists: 30
        },
        isTeam1Win: true
    },
]