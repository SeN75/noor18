export interface Login {
    email: string,
    password: string
}


export interface Tournament {
    id: number;
    name: string;
    description: string;
    permalink: string;
    banner: string;
    logo: string;
    gameId: number;
    numberOfParticipants: number;
    isTeam: boolean;
    startDate: string;
    endDate: string;
    registrationBasedOnDates: boolean;
    startRegistrationDate: string;
    endRegistrationDate: string;
    manuallyParticipantAccreditation: boolean;
    registrationMessage: string;
    approvalMessage: string;
    rejectMessage: string;
    rule: string;
    prizes: string;
    createdBy?: number;
    createdDate?: string;
    lastModifyDate?: string;
    deletedBy?: number;
    isDeleted?: number;
    gameNavigation?: any;

}


export interface TournamentGroup {
    id: number;
    guidId?: string;
    tournamentId: number;
    roundId: number;
    name: string;
    createdBy?: number;
    lastModifyDate?: string;
    deletedBy?: number;
    isDeleted?: number;
}

export interface TournamentMatch {
    id: number;
    guidId?: string;
    tournamentGroupId: number;
    tournamentRoundId: number;
    playerIdWinner: number;
    dateTimeOfMatch: string;
    createdBy?: number;
    lastModifyDate?: string;
    deletedBy?: number;
    isDeleted?: number;
}


export interface TournamentMatchPlayer {
    id: number;
    guidId?: string;
    tournamentMatchId: number;
    playerId: number;
    isWin: boolean;
    isDraw: boolean;
    isLoss: boolean;
    forfeit: number;
    scoreFor: number;
    scoreAgainst: number;
    scoreDifference: number;
    points: number;
    score: number;
    createdBy?: number;
    lastModifyDate?: string;
    deletedBy?: number;
    isDeleted?: number;
}


export interface TournamentPlayer {
    id: number;
    guidId?: string;
    tournamentId: number;
    playerId: number;
    createdBy?: number;
    createdDate?: string;
    lastModifyDate?: string;
    deletedBy?: number;
    isDeleted?: boolean;
    tournamentNavigation: any;
    playerNavigation: any;
}

export interface TournamentRound {
    id: number;
    guidId?: string
    tournamentId: number;
    name: string
    createdBy?: number;
    createdDate?: string;
    lastModifyDate?: string;
    deletedBy?: number;
    isDeleted?: boolean;
    tournamentNavigation: any;
    tournamentRoundGroups: any;
    tournamentRoundMatches: any;
}