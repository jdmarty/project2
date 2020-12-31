const Cavs = {
  id: 1,
  name: "2016 Cavs",
  user_id: 1,
  user: {
    id: 1,
    name: "AJ",
    email: "aj@hotmail.com",
    password: "$2b$10$hi/zYCuRr.szsDVjFd/t0OSf/iStHXumBcXieJ3XCrEyV9FrBKn2G",
  },
  players: [
    {
      id: 3,
      player_name: "LeBron James",
      gp: 1265,
      pts: 27.07,
      fgm: 9.87,
      fga: 19.59,
      fgpct: 0.504,
      oreb: 1.19,
      dreb: 6.24,
      reb: 7.43,
      ast: 7.39,
      stl: 1.59,
      blk: 0.76,
      tov: 3.5,
      tspct: 0.586,
      team_player: {
        id: 1,
        team_id: 1,
        player_id: 3,
        playerId: 3,
        teamId: 1,
      },
    },
    {
      id: 175,
      player_name: "Kevin Love",
      gp: 713,
      pts: 18.22,
      fgm: 6,
      fga: 13.57,
      fgpct: 0.442,
      oreb: 2.77,
      dreb: 8.38,
      reb: 11.14,
      ast: 2.38,
      stl: 0.68,
      blk: 0.45,
      tov: 1.98,
      tspct: 0.571,
      team_player: {
        id: 2,
        team_id: 1,
        player_id: 175,
        playerId: 175,
        teamId: 1,
      },
    },
    {
      id: 956,
      player_name: "Timofey Mozgov",
      gp: 454,
      pts: 6.77,
      fgm: 2.71,
      fga: 5.07,
      fgpct: 0.535,
      oreb: 1.69,
      dreb: 3.21,
      reb: 4.9,
      ast: 0.55,
      stl: 0.31,
      blk: 0.84,
      tov: 1.16,
      tspct: 0.578,
      team_player: {
        id: 3,
        team_id: 1,
        player_id: 956,
        playerId: 956,
        teamId: 1,
      },
    },
    {
      id: 210,
      player_name: "JR Smith",
      gp: 977,
      pts: 12.43,
      fgm: 4.48,
      fga: 10.71,
      fgpct: 0.419,
      oreb: 0.51,
      dreb: 2.64,
      reb: 3.15,
      ast: 2.13,
      stl: 1,
      blk: 0.21,
      tov: 1.35,
      tspct: 0.536,
      team_player: {
        id: 4,
        team_id: 1,
        player_id: 210,
        playerId: 210,
        teamId: 1,
      },
    },
    {
      id: 278,
      player_name: "Mo Williams",
      gp: 818,
      pts: 13.15,
      fgm: 4.95,
      fga: 11.4,
      fgpct: 0.434,
      oreb: 0.5,
      dreb: 2.27,
      reb: 2.77,
      ast: 4.88,
      stl: 0.88,
      blk: 0.15,
      tov: 2.26,
      tspct: 0.532,
      team_player: {
        id: 5,
        team_id: 1,
        player_id: 278,
        playerId: 278,
        teamId: 1,
      },
    },
  ],
};

const Warriors = {
  id: 2,
  name: "2016 Warriors",
  user_id: 2,
  user: {
    id: 2,
    name: "Josh",
  },
  players: [
    {
      id: 203084,
      player_name: "Harrison Barnes",
      pts_total: 8368,
      gp: 612,
      pts: 13.67,
      fgm: 5.05,
      fga: 11.28,
      fgpct: 0.448,
      oreb: 1.01,
      dreb: 3.89,
      reb: 4.9,
      ast: 1.62,
      stl: 0.7,
      blk: 0.19,
      tov: 1.17,
      tspct: 0.544,
      img_url:
        "https://www.basketball-reference.com/req/202012211/images/players/barneha02.jpg",
      team_player: {
        id: 6,
        team_id: 2,
        player_id: 203084,
        playerId: 203084,
        teamId: 2,
      },
    },
    {
      id: 101106,
      player_name: "Andrew Bogut",
      pts_total: 6808,
      gp: 706,
      pts: 9.64,
      fgm: 4.23,
      fga: 7.91,
      fgpct: 0.535,
      oreb: 2.48,
      dreb: 6.17,
      reb: 8.66,
      ast: 2.19,
      stl: 0.63,
      blk: 1.55,
      tov: 1.71,
      tspct: 0.545,
      img_url:
        "https://www.basketball-reference.com/req/202012211/images/players/bogutan01.jpg",
      team_player: {
        id: 7,
        team_id: 2,
        player_id: 101106,
        playerId: 101106,
        teamId: 2,
      },
    },
    {
      id: 201939,
      player_name: "Stephen Curry",
      pts_total: 16419,
      gp: 699,
      pts: 23.49,
      fgm: 8.13,
      fga: 17.07,
      fgpct: 0.476,
      oreb: 0.7,
      dreb: 3.82,
      reb: 4.52,
      ast: 6.61,
      stl: 1.72,
      blk: 0.22,
      tov: 3.12,
      tspct: 0.623,
      img_url:
        "https://www.basketball-reference.com/req/202012211/images/players/curryst01.jpg",
      team_player: {
        id: 8,
        team_id: 2,
        player_id: 201939,
        playerId: 201939,
        teamId: 2,
      },
    },
    {
      id: 203110,
      player_name: "Draymond Green",
      pts_total: 5170,
      gp: 576,
      pts: 8.98,
      fgm: 3.26,
      fga: 7.48,
      fgpct: 0.435,
      oreb: 1.12,
      dreb: 5.76,
      reb: 6.89,
      ast: 4.96,
      stl: 1.37,
      blk: 1.06,
      tov: 2.06,
      tspct: 0.531,
      img_url:
        "https://www.basketball-reference.com/req/202012211/images/players/greendr01.jpg",
      team_player: {
        id: 9,
        team_id: 2,
        player_id: 203110,
        playerId: 203110,
        teamId: 2,
      },
    },
    {
      id: 202691,
      player_name: "Klay Thompson",
      pts_total: 11995,
      gp: 615,
      pts: 19.5,
      fgm: 7.34,
      fga: 15.97,
      fgpct: 0.459,
      oreb: 0.44,
      dreb: 3.02,
      reb: 3.46,
      ast: 2.3,
      stl: 0.91,
      blk: 0.54,
      tov: 1.71,
      tspct: 0.575,
      img_url:
        "https://www.basketball-reference.com/req/202012211/images/players/thompkl01.jpg",
      team_player: {
        id: 10,
        team_id: 2,
        player_id: 202691,
        playerId: 202691,
        teamId: 2,
      },
    },
  ],
};

const Best = {
  id: 3,
  name: "The Best",
  user_id: 2,
  user: {
    id: 2,
    name: "AJ",
    email: "aj@hotmail.com",
    password: "$2b$10$jllbQ0yVhS4z9bqrBc23nOf4HBiU1XcLRtP/Xii0KIvbbv0eTvkkG",
  },
  players: [
    {
      id: 1,
      player_name: "Kareem Abdul-Jabbar",
      gp: 1560,
      pts: 24.61,
      fgm: 10.15,
      fga: 18.15,
      fgpct: 0.559,
      oreb: 1.91,
      dreb: 6.02,
      reb: 11.18,
      ast: 3.63,
      stl: 0.74,
      blk: 2.04,
      tov: 1.62,
      tspct: 0.592,
      team_player: {
        id: 11,
        team_id: 3,
        player_id: 1,
        playerId: 1,
        teamId: 3,
      },
    },
    {
      id: 2,
      player_name: "Karl Malone",
      gp: 1476,
      pts: 25.02,
      fgm: 9.17,
      fga: 17.76,
      fgpct: 0.516,
      oreb: 2.41,
      dreb: 7.73,
      reb: 10.14,
      ast: 3.56,
      stl: 1.41,
      blk: 0.78,
      tov: 3.07,
      tspct: 0.577,
      team_player: {
        id: 12,
        team_id: 3,
        player_id: 2,
        playerId: 2,
        teamId: 3,
      },
    },
    {
      id: 3,
      player_name: "LeBron James",
      gp: 1265,
      pts: 27.07,
      fgm: 9.87,
      fga: 19.59,
      fgpct: 0.504,
      oreb: 1.19,
      dreb: 6.24,
      reb: 7.43,
      ast: 7.39,
      stl: 1.59,
      blk: 0.76,
      tov: 3.5,
      tspct: 0.586,
      team_player: {
        id: 13,
        team_id: 3,
        player_id: 3,
        playerId: 3,
        teamId: 3,
      },
    },
    {
      id: 4,
      player_name: "Kobe Bryant",
      gp: 1346,
      pts: 24.99,
      fgm: 8.71,
      fga: 19.47,
      fgpct: 0.447,
      oreb: 1.11,
      dreb: 4.12,
      reb: 5.24,
      ast: 4.68,
      stl: 1.44,
      blk: 0.48,
      tov: 2.98,
      tspct: 0.55,
      team_player: {
        id: 14,
        team_id: 3,
        player_id: 4,
        playerId: 4,
        teamId: 3,
      },
    },
    {
      id: 5,
      player_name: "Michael Jordan",
      gp: 1072,
      pts: 30.12,
      fgm: 11.37,
      fga: 22.89,
      fgpct: 0.497,
      oreb: 1.56,
      dreb: 4.67,
      reb: 6.22,
      ast: 5.25,
      stl: 2.35,
      blk: 0.83,
      tov: 2.73,
      tspct: 0.569,
      team_player: {
        id: 15,
        team_id: 3,
        player_id: 5,
        playerId: 5,
        teamId: 3,
      },
    },
  ],
};

module.exports = {
    Cavs,
    Warriors,
    Best
}