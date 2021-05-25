import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  Tournament,
  TournamentGroup,
  TournamentMatch,
  TournamentMatchPlayer,
  TournamentPlayer,
  TournamentRound,
  TournamentRules,
  TournamentRuleTiebreaker,
  TournamentRuleWinnerOrder
} from '../_common/types';
import { API } from './../_helper/api.config';
import { LoggerService } from './logger.service';
import {
  tournamentTest,
  tournmaentGroupTest,
  tournmaentMatchPlayerTest,
  tournmaentPlayerTest,
  tournmaentRoundTest,
  tournmaentRulesTest,
  tournmaentRuleTiebreakerTest,
  tournmaentRuleWinnerOrderTest
} from '../_common/globle';
import { tournmaentMatchTest } from './../_common/globle';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private http: HttpClient, private logger: LoggerService) {
    this.getTournament();
    this.getTournament("0");
    this.postTournament(tournamentTest);
    this.updateTournament(tournamentTest, "0");
    this.removeTournament("0");

    this.getTournamentGroup();
    this.getTournamentGroup("0");
    this.postTournamentGroup(tournmaentGroupTest);
    this.updateTournamentGroup(tournmaentGroupTest, "0");
    this.removeTournamentGroup("0");

    this.getTournamentMatch();
    this.getTournamentMatch("0");
    this.postTournamentMatch(tournmaentMatchTest);
    this.updateTournamentMatch(tournmaentMatchTest, "0");
    this.removeTournamentMatch("0");

    this.getTournamentMatchPlayer();
    this.getTournamentMatchPlayer("0");
    this.postTournamentMatchPlayer(tournmaentMatchPlayerTest);
    this.updateTournamentMatchPlayer(tournmaentMatchPlayerTest, "0");
    this.removeTournamentMatchPlayer("0");

    this.getTournamentPlayer();
    this.getTournamentPlayer("0");
    this.postTournamentPlayer(tournmaentPlayerTest);
    this.updateTournamentPlayer(tournmaentPlayerTest, "0");
    this.removeTournamentPlayer("0");

    this.getTournamentRound();
    this.getTournamentRound("0");
    this.postTournamentRound(tournmaentRoundTest);
    this.updateTournamentRound(tournmaentRoundTest, "0");
    this.removeTournamentRound("0");

    this.getTournamentRules();
    this.getTournamentRules("0");
    this.postTournamentRules(tournmaentRulesTest);
    this.updateTournamentRules(tournmaentRulesTest, "0");
    this.removeTournamentRules("0");

    this.getTournamentRuleTiebreaker();
    this.getTournamentRuleTiebreaker("0");
    this.postTournamentRuleTiebreaker(tournmaentRuleTiebreakerTest);
    this.updateTournamentRuleTiebreaker(tournmaentRuleTiebreakerTest, "0");
    this.removeTournamentRuleTiebreaker("0");

    this.getTournamentRuleWinnerOrder();
    this.getTournamentRuleWinnerOrder("0");
    this.postTournamentRuleWinnerOrder(tournmaentRuleWinnerOrderTest);
    this.updateTournamentRuleWinnerOrder(tournmaentRuleWinnerOrderTest, "0");
    this.removeTournamentRuleTiebreaker("0");
  }

  /**
   *  Tournament
   */
  private _getTournament() {
    return this.http.get<Tournament>(API + "/api/Tournament")
  }
  private _getTournamentById(id: string) {
    return this.http.get<Tournament>(API + "/api/Tournament/" + id)
  }
  private _postTournament(tournament: Tournament) {
    return this.http.post<Tournament>(API + "/api/Tournament", tournament);
  }
  private _putTournament(tournament: Tournament, id: string) {
    return this.http.put<Tournament>(API + "/api/Tournament/" + id, tournament);
  }
  private _deleteTournament(id: string) {
    return this.http.delete<Tournament>(API + "/api/Tournament/" + id)
  }
  /**
   * get all tournament
   */
  public getTournament(id?: string) {
    if (!id) {
      this._getTournament().subscribe((success: Tournament) => {
        this.logger.log('get Tournament: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get Tournament: ", error);
      })
    } else {
      this._getTournamentById(id).subscribe((success: Tournament) => {
        this.logger.log('getById Tournament: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById Tournament: ", error);
      })
    }

  }
  /**
   * add new tournament
   */
  public postTournament(tournament: Tournament) {
    this._postTournament(tournament).subscribe((success: Tournament) => {
      this.logger.log('post Tournament: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'post Tournament: ", error);
    })
  }

  /**
   * update tournament
   */
  public updateTournament(tournament: Tournament, id: string) {
    this._putTournament(tournament, id).subscribe((success: Tournament) => {
      this.logger.log('put Tournament: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put Tournament: ", error);
    })
  }

  /**
   * remove tournament
   */
  public removeTournament(id: string) {
    this._deleteTournament(id).subscribe((success: Tournament) => {
      this.logger.log('put Tournament: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put Tournament: ", error);
    })
  }

  /**
  * - Tournament
  */


  /**
   *  TournamentGroup
   */
  private _getTournamentGroup() {
    return this.http.get<TournamentGroup>(API + "/api/TournamentGroup")
  }
  private _getTournamentGroupById(id: string) {
    return this.http.get<TournamentGroup>(API + "/api/TournamentGroup/" + id)
  }
  private _postTournamentGroup(tournament: TournamentGroup) {
    return this.http.post<TournamentGroup>(API + "/api/TournamentGroup", tournament);
  }
  private _putTournamentGroup(tournament: TournamentGroup, id: string) {
    return this.http.put<TournamentGroup>(API + "/api/TournamentGroup/" + id, tournament);
  }
  private _deleteTournamentGroup(id: string) {
    return this.http.delete<TournamentGroup>(API + "/api/TournamentGroup/" + id)
  }
  /**
   * get all tournament
   */
  public getTournamentGroup(id?: string) {
    if (!id) {
      this._getTournamentGroup().subscribe((success: TournamentGroup) => {
        this.logger.log('get TournamentGroup: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get TournamentGroup: ", error);
      })
    } else {
      this._getTournamentGroupById(id).subscribe((success: TournamentGroup) => {
        this.logger.log('getById TournamentGroup: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById TournamentGroup: ", error);
      })
    }

  }
  /**
   * add new tournament
   */
  public postTournamentGroup(tournament: TournamentGroup) {
    this._postTournamentGroup(tournament).subscribe((success: TournamentGroup) => {
      this.logger.log('post TournamentGroup: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'post TournamentGroup: ", error);
    })
  }

  /**
   * update tournament
   */
  public updateTournamentGroup(tournament: TournamentGroup, id: string) {
    this._putTournamentGroup(tournament, id).subscribe((success: TournamentGroup) => {
      this.logger.log('put TournamentGroup: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentGroup: ", error);
    })
  }

  /**
   * remove tournament
   */
  public removeTournamentGroup(id: string) {
    this._deleteTournamentGroup(id).subscribe((success: TournamentGroup) => {
      this.logger.log('put TournamentGroup: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentGroup: ", error);
    })
  }

  /**
  * - TournamentGroup
  */

  /**
   *  TournamentMatch
   */
  private _getTournamentMatch() {
    return this.http.get<TournamentMatch>(API + "/api/TournamentMatch")
  }
  private _getTournamentMatchById(id: string) {
    return this.http.get<TournamentMatch>(API + "/api/TournamentMatch/" + id)
  }
  private _postTournamentMatch(tournament: TournamentMatch) {
    return this.http.post<TournamentMatch>(API + "/api/TournamentMatch", tournament);
  }
  private _putTournamentMatch(tournament: TournamentMatch, id: string) {
    return this.http.put<TournamentMatch>(API + "/api/TournamentMatch/" + id, tournament);
  }
  private _deleteTournamentMatch(id: string) {
    return this.http.delete<TournamentMatch>(API + "/api/TournamentMatch/" + id)
  }
  /**
   * get all tournament
   */
  public getTournamentMatch(id?: string) {
    if (!id) {
      this._getTournamentMatch().subscribe((success: TournamentMatch) => {
        this.logger.log('get TournamentMatch: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get TournamentMatch: ", error);
      })
    } else {
      this._getTournamentMatchById(id).subscribe((success: TournamentMatch) => {
        this.logger.log('getById TournamentMatch: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById TournamentMatch: ", error);
      })
    }

  }
  /**
   * add new tournament
   */
  public postTournamentMatch(tournament: TournamentMatch) {
    this._postTournamentMatch(tournament).subscribe((success: TournamentMatch) => {
      this.logger.log('post TournamentMatch: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'post TournamentMatch: ", error);
    })
  }

  /**
   * update tournament
   */
  public updateTournamentMatch(tournament: TournamentMatch, id: string) {
    this._putTournamentMatch(tournament, id).subscribe((success: TournamentMatch) => {
      this.logger.log('put TournamentMatch: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentMatch: ", error);
    })
  }

  /**
   * remove tournament
   */
  public removeTournamentMatch(id: string) {
    this._deleteTournamentMatch(id).subscribe((success: TournamentMatch) => {
      this.logger.log('put TournamentMatch: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentMatch: ", error);
    })
  }

  /**
  * - TournamentMatch
  */

  /**
   *  TournamentMatchPlayer
   */
  private _getTournamentMatchPlayer() {
    return this.http.get<TournamentMatchPlayer>(API + "/api/TournamentMatchPlayer")
  }
  private _getTournamentMatchPlayerById(id: string) {
    return this.http.get<TournamentMatchPlayer>(API + "/api/TournamentMatchPlayer/" + id)
  }
  private _postTournamentMatchPlayer(tournament: TournamentMatchPlayer) {
    return this.http.post<TournamentMatchPlayer>(API + "/api/TournamentMatchPlayer", tournament);
  }
  private _putTournamentMatchPlayer(tournament: TournamentMatchPlayer, id: string) {
    return this.http.put<TournamentMatchPlayer>(API + "/api/TournamentMatchPlayer/" + id, tournament);
  }
  private _deleteTournamentMatchPlayer(id: string) {
    return this.http.delete<TournamentMatchPlayer>(API + "/api/TournamentMatchPlayer/" + id)
  }
  /**
   * get all tournament
   */
  public getTournamentMatchPlayer(id?: string) {
    if (!id) {
      this._getTournamentMatchPlayer().subscribe((success: TournamentMatchPlayer) => {
        this.logger.log('get TournamentMatchPlayer: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get TournamentMatchPlayer: ", error);
      })
    } else {
      this._getTournamentMatchPlayerById(id).subscribe((success: TournamentMatchPlayer) => {
        this.logger.log('getById TournamentMatchPlayer: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById TournamentMatchPlayer: ", error);
      })
    }

  }
  /**
   * add new tournament
   */
  public postTournamentMatchPlayer(tournament: TournamentMatchPlayer) {
    this._postTournamentMatchPlayer(tournament).subscribe((success: TournamentMatchPlayer) => {
      this.logger.log('post TournamentMatchPlayer: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'post TournamentMatchPlayer: ", error);
    })
  }

  /**
   * update tournament
   */
  public updateTournamentMatchPlayer(tournament: TournamentMatchPlayer, id: string) {
    this._putTournamentMatchPlayer(tournament, id).subscribe((success: TournamentMatchPlayer) => {
      this.logger.log('put TournamentMatchPlayer: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentMatchPlayer: ", error);
    })
  }

  /**
   * remove tournament
   */
  public removeTournamentMatchPlayer(id: string) {
    this._deleteTournamentMatchPlayer(id).subscribe((success: TournamentMatchPlayer) => {
      this.logger.log('put TournamentMatchPlayer: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentMatchPlayer: ", error);
    })
  }

  /**
  * - TournamentMatchPlayer
  */


  /**
   *  TournamentPlayer
   */
  private _getTournamentPlayer() {
    return this.http.get<TournamentPlayer>(API + "/api/TournamentPlayer")
  }
  private _getTournamentPlayerById(id: string) {
    return this.http.get<TournamentPlayer>(API + "/api/TournamentPlayer/" + id)
  }
  private _postTournamentPlayer(tournament: TournamentPlayer) {
    return this.http.post<TournamentPlayer>(API + "/api/TournamentPlayer", tournament);
  }
  private _putTournamentPlayer(tournament: TournamentPlayer, id: string) {
    return this.http.put<TournamentPlayer>(API + "/api/TournamentPlayer/" + id, tournament);
  }
  private _deleteTournamentPlayer(id: string) {
    return this.http.delete<TournamentPlayer>(API + "/api/TournamentPlayer/" + id)
  }
  /**
   * get all tournament
   */
  public getTournamentPlayer(id?: string) {
    if (!id) {
      this._getTournamentPlayer().subscribe((success: TournamentPlayer) => {
        this.logger.log('get TournamentPlayer: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get TournamentPlayer: ", error);
      })
    } else {
      this._getTournamentPlayerById(id).subscribe((success: TournamentPlayer) => {
        this.logger.log('getById TournamentPlayer: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById TournamentPlayer: ", error);
      })
    }

  }
  /**
   * add new tournament
   */
  public postTournamentPlayer(tournament: TournamentPlayer) {
    this._postTournamentPlayer(tournament).subscribe((success: TournamentPlayer) => {
      this.logger.log('post TournamentPlayer: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'post TournamentPlayer: ", error);
    })
  }

  /**
   * update tournament
   */
  public updateTournamentPlayer(tournament: TournamentPlayer, id: string) {
    this._putTournamentPlayer(tournament, id).subscribe((success: TournamentPlayer) => {
      this.logger.log('put TournamentPlayer: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentPlayer: ", error);
    })
  }

  /**
   * remove tournament
   */
  public removeTournamentPlayer(id: string) {
    this._deleteTournamentPlayer(id).subscribe((success: TournamentPlayer) => {
      this.logger.log('put TournamentPlayer: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentPlayer: ", error);
    })
  }

  /**
  * - TournamentPlayer
  */

  /**
   *  TournamentRound
   */
  private _getTournamentRound() {
    return this.http.get<TournamentRound>(API + "/api/TournamentRound")
  }
  private _getTournamentRoundById(id: string) {
    return this.http.get<TournamentRound>(API + "/api/TournamentRound/" + id)
  }
  private _postTournamentRound(tournament: TournamentRound) {
    return this.http.post<TournamentRound>(API + "/api/TournamentRound", tournament);
  }
  private _putTournamentRound(tournament: TournamentRound, id: string) {
    return this.http.put<TournamentRound>(API + "/api/TournamentRound/" + id, tournament);
  }
  private _deleteTournamentRound(id: string) {
    return this.http.delete<TournamentRound>(API + "/api/TournamentRound/" + id)
  }
  /**
   * get all tournament
   */
  public getTournamentRound(id?: string) {
    if (!id) {
      this._getTournamentRound().subscribe((success: TournamentRound) => {
        this.logger.log('get TournamentRound: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get TournamentRound: ", error);
      })
    } else {
      this._getTournamentRoundById(id).subscribe((success: TournamentRound) => {
        this.logger.log('getById TournamentRound: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById TournamentRound: ", error);
      })
    }

  }
  /**
   * add new tournament
   */
  public postTournamentRound(tournament: TournamentRound) {
    this._postTournamentRound(tournament).subscribe((success: TournamentRound) => {
      this.logger.log('post TournamentRound: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'post TournamentRound: ", error);
    })
  }

  /**
   * update tournament
   */
  public updateTournamentRound(tournament: TournamentRound, id: string) {
    this._putTournamentRound(tournament, id).subscribe((success: TournamentRound) => {
      this.logger.log('put TournamentRound: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentRound: ", error);
    })
  }

  /**
   * remove tournament
   */
  public removeTournamentRound(id: string) {
    this._deleteTournamentRound(id).subscribe((success: TournamentRound) => {
      this.logger.log('put TournamentRound: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentRound: ", error);
    })
  }

  /**
  * - TournamentRound
  */

  /**
   *  TournamentRules
   */
  private _getTournamentRules() {
    return this.http.get<TournamentRules>(API + "/api/TournamentRules")
  }
  private _getTournamentRulesById(id: string) {
    return this.http.get<TournamentRules>(API + "/api/TournamentRules/" + id)
  }
  private _postTournamentRules(tournament: TournamentRules) {
    return this.http.post<TournamentRules>(API + "/api/TournamentRules", tournament);
  }
  private _putTournamentRules(tournament: TournamentRules, id: string) {
    return this.http.put<TournamentRules>(API + "/api/TournamentRules/" + id, tournament);
  }
  private _deleteTournamentRules(id: string) {
    return this.http.delete<TournamentRules>(API + "/api/TournamentRules/" + id)
  }
  /**
   * get all tournament
   */
  public getTournamentRules(id?: string) {
    if (!id) {
      this._getTournamentRules().subscribe((success: TournamentRules) => {
        this.logger.log('get TournamentRules: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get TournamentRules: ", error);
      })
    } else {
      this._getTournamentRulesById(id).subscribe((success: TournamentRules) => {
        this.logger.log('getById TournamentRules: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById TournamentRules: ", error);
      })
    }

  }
  /**
   * add new tournament
   */
  public postTournamentRules(tournament: TournamentRules) {
    this._postTournamentRules(tournament).subscribe((success: TournamentRules) => {
      this.logger.log('post TournamentRules: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'post TournamentRules: ", error);
    })
  }

  /**
   * update tournament
   */
  public updateTournamentRules(tournament: TournamentRules, id: string) {
    this._putTournamentRules(tournament, id).subscribe((success: TournamentRules) => {
      this.logger.log('put TournamentRules: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentRules: ", error);
    })
  }

  /**
   * remove tournament
   */
  public removeTournamentRules(id: string) {
    this._deleteTournamentRules(id).subscribe((success: TournamentRules) => {
      this.logger.log('put TournamentRules: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentRules: ", error);
    })
  }

  /**
  * - TournamentRules
  */

  /**
   *  TournamentRuleTiebreaker
   */
  private _getTournamentRuleTiebreaker() {
    return this.http.get<TournamentRuleTiebreaker>(API + "/api/TournamentRuleTiebreaker")
  }
  private _getTournamentRuleTiebreakerById(id: string) {
    return this.http.get<TournamentRuleTiebreaker>(API + "/api/TournamentRuleTiebreaker/" + id)
  }
  private _postTournamentRuleTiebreaker(tournament: TournamentRuleTiebreaker) {
    return this.http.post<TournamentRuleTiebreaker>(API + "/api/TournamentRuleTiebreaker", tournament);
  }
  private _putTournamentRuleTiebreaker(tournament: TournamentRuleTiebreaker, id: string) {
    return this.http.put<TournamentRuleTiebreaker>(API + "/api/TournamentRuleTiebreaker/" + id, tournament);
  }
  private _deleteTournamentRuleTiebreaker(id: string) {
    return this.http.delete<TournamentRuleTiebreaker>(API + "/api/TournamentRuleTiebreaker/" + id)
  }
  /**
   * get all tournament
   */
  public getTournamentRuleTiebreaker(id?: string) {
    if (!id) {
      this._getTournamentRuleTiebreaker().subscribe((success: TournamentRuleTiebreaker) => {
        this.logger.log('get TournamentRuleTiebreaker: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get TournamentRuleTiebreaker: ", error);
      })
    } else {
      this._getTournamentRuleTiebreakerById(id).subscribe((success: TournamentRuleTiebreaker) => {
        this.logger.log('getById TournamentRuleTiebreaker: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById TournamentRuleTiebreaker: ", error);
      })
    }

  }
  /**
   * add new tournament
   */
  public postTournamentRuleTiebreaker(tournament: TournamentRuleTiebreaker) {
    this._postTournamentRuleTiebreaker(tournament).subscribe((success: TournamentRuleTiebreaker) => {
      this.logger.log('post TournamentRuleTiebreaker: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'post TournamentRuleTiebreaker: ", error);
    })
  }

  /**
   * update tournament
   */
  public updateTournamentRuleTiebreaker(tournament: TournamentRuleTiebreaker, id: string) {
    this._putTournamentRuleTiebreaker(tournament, id).subscribe((success: TournamentRuleTiebreaker) => {
      this.logger.log('put TournamentRuleTiebreaker: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentRuleTiebreaker: ", error);
    })
  }

  /**
   * remove tournament
   */
  public removeTournamentRuleTiebreaker(id: string) {
    this._deleteTournamentRuleTiebreaker(id).subscribe((success: TournamentRuleTiebreaker) => {
      this.logger.log('put TournamentRuleTiebreaker: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentRuleTiebreaker: ", error);
    })
  }

  /**
  * - TournamentRuleTiebreaker
  */

  /**
   *  TournamentRuleWinnerOrder
   */
  private _getTournamentRuleWinnerOrder() {
    return this.http.get<TournamentRuleWinnerOrder>(API + "/api/TournamentRuleWinnerOrder")
  }
  private _getTournamentRuleWinnerOrderById(id: string) {
    return this.http.get<TournamentRuleWinnerOrder>(API + "/api/TournamentRuleWinnerOrder/" + id)
  }
  private _postTournamentRuleWinnerOrder(tournament: TournamentRuleWinnerOrder) {
    return this.http.post<TournamentRuleWinnerOrder>(API + "/api/TournamentRuleWinnerOrder", tournament);
  }
  private _putTournamentRuleWinnerOrder(tournament: TournamentRuleWinnerOrder, id: string) {
    return this.http.put<TournamentRuleWinnerOrder>(API + "/api/TournamentRuleWinnerOrder/" + id, tournament);
  }
  private _deleteTournamentRuleWinnerOrder(id: string) {
    return this.http.delete<TournamentRuleWinnerOrder>(API + "/api/TournamentRuleWinnerOrder/" + id)
  }
  /**
   * get all tournament
   */
  public getTournamentRuleWinnerOrder(id?: string) {
    if (!id) {
      this._getTournamentRuleWinnerOrder().subscribe((success: TournamentRuleWinnerOrder) => {
        this.logger.log('get TournamentRuleWinnerOrder: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'get TournamentRuleWinnerOrder: ", error);
      })
    } else {
      this._getTournamentRuleWinnerOrderById(id).subscribe((success: TournamentRuleWinnerOrder) => {
        this.logger.log('getById TournamentRuleWinnerOrder: ', success);
      }, (error: HttpErrorResponse) => {
        this.logger.error("'getById TournamentRuleWinnerOrder: ", error);
      })
    }

  }
  /**
   * add new tournament
   */
  public postTournamentRuleWinnerOrder(tournament: TournamentRuleWinnerOrder) {
    this._postTournamentRuleWinnerOrder(tournament).subscribe((success: TournamentRuleWinnerOrder) => {
      this.logger.log('post TournamentRuleWinnerOrder: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'post TournamentRuleWinnerOrder: ", error);
    })
  }

  /**
   * update tournament
   */
  public updateTournamentRuleWinnerOrder(tournament: TournamentRuleWinnerOrder, id: string) {
    this._putTournamentRuleWinnerOrder(tournament, id).subscribe((success: TournamentRuleWinnerOrder) => {
      this.logger.log('put TournamentRuleWinnerOrder: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentRuleWinnerOrder: ", error);
    })
  }

  /**
   * remove tournament
   */
  public removeTournamentRuleWinnerOrder(id: string) {
    this._deleteTournamentRuleWinnerOrder(id).subscribe((success: TournamentRuleWinnerOrder) => {
      this.logger.log('put TournamentRuleWinnerOrder: ', success);
    }, (error: HttpErrorResponse) => {
      this.logger.error("'put TournamentRuleWinnerOrder: ", error);
    })
  }

  /**
  * - TournamentRuleWinnerOrder
  */

}


