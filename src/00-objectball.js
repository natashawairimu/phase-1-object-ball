function gameObject() {
  const home = {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Alan Anderson": {
        Number: 0,
        shoe: 16,
        points: 22,
        redbounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
      },
    },

    players: {
      "Reggie Evans": {
        Number: 30,
        shoe: 14,
        points: 12,
        redbounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
      },
    },

    players: {
      "Brook Lopez": {
        Number: 11,
        shoe: 17,
        points: 17,
        redbounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15,
      },
    },

    players: {
      "Mason Plumlee": {
        Number: 1,
        shoe: 19,
        points: 26,
        redbounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5,
      },
    },

    players: {
      "Jason Terry": {
        Number: 31,
        shoe: 15,
        points: 19,
        redbounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1,
      },
    },
  };
  const away = {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
      "Jeff Adrien": {
        Number: 4,
        shoe: 18,
        points: 10,
        redbounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
      },

      players: {
        "Bismark Biyombo": {
          Number: 0,
          shoe: 16,
          points: 12,
          redbounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },

        players: {
          "DeSagna Diop": {
            Number: 2,
            shoe: 14,
            points: 24,
            redbounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },

          players: {
            "Ben Gordon": {
              Number: 8,
              shoe: 15,
              points: 33,
              redbounds: 3,
              assists: 2,
              steals: 1,
              blocks: 1,
              slamDunks: 0,
            },

            players: {
              "Brendan Haywood": {
                Number: 33,
                shoe: 15,
                points: 6,
                redbounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12,
              },
            },
          },
        },
      },
    },
  };
  return gameObject()
}
console.log(gameObject())
