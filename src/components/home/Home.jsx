import React from 'react'
import HomeHero from './hero/HomeHero';
import MatchArea from './match/MatchArea';
import WatchLiveStremingArea from './watch-live-streaming/WatchLiveStremingArea';
import WelcomeFeaturesArea from './welcome-features/WelcomeFeaturesArea'
import UpcomingMatch1 from "../../assets/images/team-logo/upcoming-game-thumb1.webp"
import UpcomingMatch2 from "../../assets/images/team-logo/upcoming-game-thumb2.webp"
import UpcomingMatch3 from "../../assets/images/team-logo/upcoming-game-thumb3.webp"

const Home = () => {

  const upcomming_match = {
    "section": "upcoming-match",
    "items": [
        {
            "id": "upcoming-match-1",
            "title": null,
            "description": null,
            "designation": null,
            "link": "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
            "name": null,
            "rating": null,
            "subject": null,
            "icon": null,
            "countNumber": null,
            "headings": [
                {
                    "level": "h3",
                    "content": "Roar Spring Game 2021"
                }
            ],
            "images": [
                {
                    "src": {
                        "name": "upcoming-game-thumb1",
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#080808",
                                "images": {
                                    "fallback": {
                                        "src": "/static/8a70da1cc61053ce3247477282967551/2f873/upcoming-game-thumb1.webp",
                                        "srcSet": "/static/8a70da1cc61053ce3247477282967551/be195/upcoming-game-thumb1.webp 24w,\n/static/8a70da1cc61053ce3247477282967551/a5523/upcoming-game-thumb1.webp 49w,\n/static/8a70da1cc61053ce3247477282967551/2f873/upcoming-game-thumb1.webp 97w",
                                        "sizes": "(min-width: 97px) 97px, 100vw"
                                    },
                                    "sources": []
                                },
                                "width": 97,
                                "height": 119
                            }
                        }
                    },
                    "alt": "Panda"
                },
                {
                    "src": {
                        "name": "game-vs1",
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#080808",
                                "images": {
                                    "fallback": {
                                        "src": "/static/1d44d2c6b40f9c3613568f7fa08f3cd1/82bbe/game-vs1.webp",
                                        "srcSet": "/static/1d44d2c6b40f9c3613568f7fa08f3cd1/14daf/game-vs1.webp 22w,\n/static/1d44d2c6b40f9c3613568f7fa08f3cd1/ad755/game-vs1.webp 44w,\n/static/1d44d2c6b40f9c3613568f7fa08f3cd1/82bbe/game-vs1.webp 87w",
                                        "sizes": "(min-width: 87px) 87px, 100vw"
                                    },
                                    "sources": []
                                },
                                "width": 87,
                                "height": 87
                            }
                        }
                    },
                    "alt": "VS"
                },
                {
                    "src": {
                        "name": "upcoming-game-thumb2",
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#080808",
                                "images": {
                                    "fallback": {
                                        "src": "/static/371d99f93252437e28ee990e6cd87a81/53638/upcoming-game-thumb2.webp",
                                        "srcSet": "/static/371d99f93252437e28ee990e6cd87a81/06130/upcoming-game-thumb2.webp 23w,\n/static/371d99f93252437e28ee990e6cd87a81/84710/upcoming-game-thumb2.webp 47w,\n/static/371d99f93252437e28ee990e6cd87a81/53638/upcoming-game-thumb2.webp 93w",
                                        "sizes": "(min-width: 93px) 93px, 100vw"
                                    },
                                    "sources": []
                                },
                                "width": 93,
                                "height": 120
                            }
                        }
                    },
                    "alt": "Panda"
                }
            ],
            "action_link": null
        },
        {
            "id": "upcoming-match-2",
            "title": null,
            "description": null,
            "designation": null,
            "link": "eS9Qm4AOOBY",
            "name": null,
            "rating": null,
            "subject": null,
            "icon": null,
            "countNumber": null,
            "headings": [
                {
                    "level": "h3",
                    "content": "Roar Spring Game 2022"
                }
            ],
            "images": [
                {
                    "src": {
                        "name": "upcoming-game-thumb1",
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#080808",
                                "images": {
                                    "fallback": {
                                        "src": "/static/8a70da1cc61053ce3247477282967551/2f873/upcoming-game-thumb1.webp",
                                        "srcSet": "/static/8a70da1cc61053ce3247477282967551/be195/upcoming-game-thumb1.webp 24w,\n/static/8a70da1cc61053ce3247477282967551/a5523/upcoming-game-thumb1.webp 49w,\n/static/8a70da1cc61053ce3247477282967551/2f873/upcoming-game-thumb1.webp 97w",
                                        "sizes": "(min-width: 97px) 97px, 100vw"
                                    },
                                    "sources": []
                                },
                                "width": 97,
                                "height": 119
                            }
                        }
                    },
                    "alt": "Panda"
                },
                {
                    "src": {
                        "name": "game-vs1",
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#080808",
                                "images": {
                                    "fallback": {
                                        "src": "/static/1d44d2c6b40f9c3613568f7fa08f3cd1/82bbe/game-vs1.webp",
                                        "srcSet": "/static/1d44d2c6b40f9c3613568f7fa08f3cd1/14daf/game-vs1.webp 22w,\n/static/1d44d2c6b40f9c3613568f7fa08f3cd1/ad755/game-vs1.webp 44w,\n/static/1d44d2c6b40f9c3613568f7fa08f3cd1/82bbe/game-vs1.webp 87w",
                                        "sizes": "(min-width: 87px) 87px, 100vw"
                                    },
                                    "sources": []
                                },
                                "width": 87,
                                "height": 87
                            }
                        }
                    },
                    "alt": "Panda"
                },
                {
                    "src": {
                        "name": "upcoming-game-thumb2",
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#080808",
                                "images": {
                                    "fallback": {
                                        "src": "/static/371d99f93252437e28ee990e6cd87a81/53638/upcoming-game-thumb2.webp",
                                        "srcSet": "/static/371d99f93252437e28ee990e6cd87a81/06130/upcoming-game-thumb2.webp 23w,\n/static/371d99f93252437e28ee990e6cd87a81/84710/upcoming-game-thumb2.webp 47w,\n/static/371d99f93252437e28ee990e6cd87a81/53638/upcoming-game-thumb2.webp 93w",
                                        "sizes": "(min-width: 93px) 93px, 100vw"
                                    },
                                    "sources": []
                                },
                                "width": 93,
                                "height": 120
                            }
                        }
                    },
                    "alt": "Panda"
                }
            ],
            "action_link": null
        }
    ],
    "buttons": [
        {
            "id": "1",
            "path": "/match",
            "content": "Other’s Match ",
            "variant": null,
            "color": null,
            "shape": null,
            "size": "lg"
        }
    ],
    "section_title": {
        "heading": "UPCOMING MATCH",
        "showDescription": true,
        "subHeading": null,
        "color": null,
        "description": "When unknown printer took type and scrambled it to make type specimen book centuries,",
        "align": "center"
    },


    //nodes.....
    items : [
      {
          "id": "dad00850-b66e-5c8a-b225-662c9f3e1030",
          "date": "03 January, 2021, 05:01:00 AM",
          "title": "SKRIT TOURNAMENT 2021",
          "slug": "skrit-tournament-2021",
          "playerNumber": "06",
          "teamNubmber": "03",
          "winningPrize": "4,100",
          "liveStreaming": {
              "id": "watch-live-1",
              "link": "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
              "headings": [
                  {
                      "content": "SKRIT Watch Live",
                      "level": "h3"
                  }
              ],
              "images": [
                  {
                      "alt": "SKRIT LIVE STREAMING",
                      "src": {
                          "childImageSharp": {
                              "gatsbyImageData": {
                                  "layout": "constrained",
                                  "backgroundColor": "#281868",
                                  "images": {
                                      "fallback": {
                                          "src": "/static/40259a30cb4b2bf6d1b9877053fa1183/0a8d7/gaming-bg1.webp",
                                          "srcSet": "/static/40259a30cb4b2bf6d1b9877053fa1183/10675/gaming-bg1.webp 293w,\n/static/40259a30cb4b2bf6d1b9877053fa1183/95f3d/gaming-bg1.webp 585w,\n/static/40259a30cb4b2bf6d1b9877053fa1183/0a8d7/gaming-bg1.webp 1170w",
                                          "sizes": "(min-width: 1170px) 1170px, 100vw"
                                      },
                                      "sources": []
                                  },
                                  "width": 1170,
                                  "height": 540
                              }
                          }
                      }
                  }
              ]
          },
          "teams": [
              {
                  "name": "Ninja",
                  "logo": {
                      "alt": "Ninja",
                      "src": UpcomingMatch1
                  },
                  "teamPlayer": [
                      {
                          "id": "player-01",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#584878",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/b64af85f7b08b16209462e1d0bf0af4e/5376c/players1.webp",
                                                      "srcSet": "/static/b64af85f7b08b16209462e1d0bf0af4e/f4afd/players1.webp 43w,\n/static/b64af85f7b08b16209462e1d0bf0af4e/8f0cc/players1.webp 85w,\n/static/b64af85f7b08b16209462e1d0bf0af4e/5376c/players1.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-02",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#483858",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/cc8c19afb51ba281836e561b735e4e51/5376c/players2.webp",
                                                      "srcSet": "/static/cc8c19afb51ba281836e561b735e4e51/f4afd/players2.webp 43w,\n/static/cc8c19afb51ba281836e561b735e4e51/8f0cc/players2.webp 85w,\n/static/cc8c19afb51ba281836e561b735e4e51/5376c/players2.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-03",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#181828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp",
                                                      "srcSet": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/f4afd/players3.webp 43w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/8f0cc/players3.webp 85w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-04",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080838",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp",
                                                      "srcSet": "/static/23dd208cdc3982a6e2061f77af3da3ba/f4afd/players4.webp 43w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/8f0cc/players4.webp 85w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-05",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080808",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp",
                                                      "srcSet": "/static/4b4d53731dee43afacae43a78187c5ce/f4afd/players5.webp 43w,\n/static/4b4d53731dee43afacae43a78187c5ce/8f0cc/players5.webp 85w,\n/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-06",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#282828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/287b9581c048a81c331b063affceaefd/5376c/players6.webp",
                                                      "srcSet": "/static/287b9581c048a81c331b063affceaefd/f4afd/players6.webp 43w,\n/static/287b9581c048a81c331b063affceaefd/8f0cc/players6.webp 85w,\n/static/287b9581c048a81c331b063affceaefd/5376c/players6.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-07",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#181828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp",
                                                      "srcSet": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/f4afd/players3.webp 43w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/8f0cc/players3.webp 85w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      }
                  ]
              },
              {
                  "name": "Panda",
                  "logo": {
                      "alt": "Panda",
                      "src": UpcomingMatch1
                  },
                  "teamPlayer": [
                      {
                          "id": "player-01",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#483858",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/cc8c19afb51ba281836e561b735e4e51/5376c/players2.webp",
                                                      "srcSet": "/static/cc8c19afb51ba281836e561b735e4e51/f4afd/players2.webp 43w,\n/static/cc8c19afb51ba281836e561b735e4e51/8f0cc/players2.webp 85w,\n/static/cc8c19afb51ba281836e561b735e4e51/5376c/players2.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-02",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080838",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp",
                                                      "srcSet": "/static/23dd208cdc3982a6e2061f77af3da3ba/f4afd/players4.webp 43w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/8f0cc/players4.webp 85w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-03",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080808",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp",
                                                      "srcSet": "/static/4b4d53731dee43afacae43a78187c5ce/f4afd/players5.webp 43w,\n/static/4b4d53731dee43afacae43a78187c5ce/8f0cc/players5.webp 85w,\n/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-04",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080838",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp",
                                                      "srcSet": "/static/23dd208cdc3982a6e2061f77af3da3ba/f4afd/players4.webp 43w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/8f0cc/players4.webp 85w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-05",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080808",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp",
                                                      "srcSet": "/static/4b4d53731dee43afacae43a78187c5ce/f4afd/players5.webp 43w,\n/static/4b4d53731dee43afacae43a78187c5ce/8f0cc/players5.webp 85w,\n/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-06",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#282828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/287b9581c048a81c331b063affceaefd/5376c/players6.webp",
                                                      "srcSet": "/static/287b9581c048a81c331b063affceaefd/f4afd/players6.webp 43w,\n/static/287b9581c048a81c331b063affceaefd/8f0cc/players6.webp 85w,\n/static/287b9581c048a81c331b063affceaefd/5376c/players6.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-07",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#181828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp",
                                                      "srcSet": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/f4afd/players3.webp 43w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/8f0cc/players3.webp 85w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      }
                  ]
              }
          ],
          "quoteText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500 printer took galley of type scrambled it to make a type specimen book.",
          "content": [
              {
                  "id": "game-details-per-one",
                  "section": "game-details-per-one",
                  "items": [
                      {
                          "id": "game-details-1",
                          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      },
                      {
                          "id": "game-details-2",
                          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      }
                  ]
              },
              {
                  "id": "game-details-per-two",
                  "section": "game-details-per-two",
                  "items": [
                      {
                          "id": "game-details-1",
                          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      },
                      {
                          "id": "game-details-2",
                          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      }
                  ]
              }
          ]
      },
      {
          "id": "a83bede1-7f01-51fe-8063-d5b61b285eec",
          "date": "02 January, 2021, 01:01:00 PM",
          "title": "NINJA 360 GAME 2021",
          "slug": "ninja-360-game-2021",
          "playerNumber": "24",
          "teamNubmber": "04",
          "winningPrize": "9,100",
          "liveStreaming": {
              "id": "watch-live-1",
              "link": "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
              "headings": [
                  {
                      "content": "Watch Live Streaming",
                      "level": "h3"
                  }
              ],
              "images": [
                  {
                      "alt": "LIVE STREAMING",
                      "src": {
                          "childImageSharp": {
                              "gatsbyImageData": {
                                  "layout": "constrained",
                                  "backgroundColor": "#281868",
                                  "images": {
                                      "fallback": {
                                          "src": "/static/40259a30cb4b2bf6d1b9877053fa1183/0a8d7/gaming-bg1.webp",
                                          "srcSet": "/static/40259a30cb4b2bf6d1b9877053fa1183/10675/gaming-bg1.webp 293w,\n/static/40259a30cb4b2bf6d1b9877053fa1183/95f3d/gaming-bg1.webp 585w,\n/static/40259a30cb4b2bf6d1b9877053fa1183/0a8d7/gaming-bg1.webp 1170w",
                                          "sizes": "(min-width: 1170px) 1170px, 100vw"
                                      },
                                      "sources": []
                                  },
                                  "width": 1170,
                                  "height": 540
                              }
                          }
                      }
                  }
              ]
          },
          "teams": [
              {
                  "name": "Anonymous",
                  "logo": {
                      "alt": "Anonymous",
                      "src": UpcomingMatch2
                  },
                  "teamPlayer": [
                      {
                          "id": "player-01",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#584878",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/b64af85f7b08b16209462e1d0bf0af4e/5376c/players1.webp",
                                                      "srcSet": "/static/b64af85f7b08b16209462e1d0bf0af4e/f4afd/players1.webp 43w,\n/static/b64af85f7b08b16209462e1d0bf0af4e/8f0cc/players1.webp 85w,\n/static/b64af85f7b08b16209462e1d0bf0af4e/5376c/players1.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-02",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#483858",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/cc8c19afb51ba281836e561b735e4e51/5376c/players2.webp",
                                                      "srcSet": "/static/cc8c19afb51ba281836e561b735e4e51/f4afd/players2.webp 43w,\n/static/cc8c19afb51ba281836e561b735e4e51/8f0cc/players2.webp 85w,\n/static/cc8c19afb51ba281836e561b735e4e51/5376c/players2.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-03",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#181828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp",
                                                      "srcSet": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/f4afd/players3.webp 43w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/8f0cc/players3.webp 85w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-04",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080838",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp",
                                                      "srcSet": "/static/23dd208cdc3982a6e2061f77af3da3ba/f4afd/players4.webp 43w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/8f0cc/players4.webp 85w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-05",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080808",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp",
                                                      "srcSet": "/static/4b4d53731dee43afacae43a78187c5ce/f4afd/players5.webp 43w,\n/static/4b4d53731dee43afacae43a78187c5ce/8f0cc/players5.webp 85w,\n/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-06",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#282828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/287b9581c048a81c331b063affceaefd/5376c/players6.webp",
                                                      "srcSet": "/static/287b9581c048a81c331b063affceaefd/f4afd/players6.webp 43w,\n/static/287b9581c048a81c331b063affceaefd/8f0cc/players6.webp 85w,\n/static/287b9581c048a81c331b063affceaefd/5376c/players6.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-07",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#181828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp",
                                                      "srcSet": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/f4afd/players3.webp 43w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/8f0cc/players3.webp 85w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      }
                  ]
              },
              {
                  "name": "Ninja",
                  "logo": {
                      "alt": "Panda",
                      "src": UpcomingMatch2
                  },
                  "teamPlayer": [
                      {
                          "id": "player-01",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#584878",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/b64af85f7b08b16209462e1d0bf0af4e/5376c/players1.webp",
                                                      "srcSet": "/static/b64af85f7b08b16209462e1d0bf0af4e/f4afd/players1.webp 43w,\n/static/b64af85f7b08b16209462e1d0bf0af4e/8f0cc/players1.webp 85w,\n/static/b64af85f7b08b16209462e1d0bf0af4e/5376c/players1.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-02",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": UpcomingMatch2
                              }
                          ]
                      },
                      {
                          "id": "player-03",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#181828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp",
                                                      "srcSet": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/f4afd/players3.webp 43w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/8f0cc/players3.webp 85w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-04",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080838",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp",
                                                      "srcSet": "/static/23dd208cdc3982a6e2061f77af3da3ba/f4afd/players4.webp 43w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/8f0cc/players4.webp 85w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-05",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080808",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp",
                                                      "srcSet": "/static/4b4d53731dee43afacae43a78187c5ce/f4afd/players5.webp 43w,\n/static/4b4d53731dee43afacae43a78187c5ce/8f0cc/players5.webp 85w,\n/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-06",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#282828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/287b9581c048a81c331b063affceaefd/5376c/players6.webp",
                                                      "srcSet": "/static/287b9581c048a81c331b063affceaefd/f4afd/players6.webp 43w,\n/static/287b9581c048a81c331b063affceaefd/8f0cc/players6.webp 85w,\n/static/287b9581c048a81c331b063affceaefd/5376c/players6.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-07",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#181828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp",
                                                      "srcSet": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/f4afd/players3.webp 43w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/8f0cc/players3.webp 85w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      }
                  ]
              }
          ],
          "quoteText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500 printer took galley of type scrambled it to make a type specimen book.",
          "content": [
              {
                  "id": "game-details-per-one",
                  "section": "game-details-per-one",
                  "items": [
                      {
                          "id": "game-details-1",
                          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      },
                      {
                          "id": "game-details-2",
                          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      }
                  ]
              },
              {
                  "id": "game-details-per-two",
                  "section": "game-details-per-two",
                  "items": [
                      {
                          "id": "game-details-1",
                          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      },
                      {
                          "id": "game-details-2",
                          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      }
                  ]
              }
          ]
      },
      {
          "id": "3d819c3e-82db-51fd-ad9c-a43c6c7bf808",
          "date": "01 January, 2021, 06:01:00 AM",
          "title": "ROAR SPRING GAME 2021",
          "slug": "roar-spring-game-2021",
          "playerNumber": "24",
          "teamNubmber": "02",
          "winningPrize": "5,100",
          "liveStreaming": {
              "id": "watch-live-1",
              "link": "https://www.youtube.com/watch?v=eS9Qm4AOOBY",
              "headings": [
                  {
                      "content": "Watch Live Streaming",
                      "level": "h3"
                  }
              ],
              "images": [
                  {
                      "alt": "LIVE STREAMING",
                      "src": {
                          "childImageSharp": {
                              "gatsbyImageData": {
                                  "layout": "constrained",
                                  "backgroundColor": "#281868",
                                  "images": {
                                      "fallback": {
                                          "src": "/static/40259a30cb4b2bf6d1b9877053fa1183/0a8d7/gaming-bg1.webp",
                                          "srcSet": "/static/40259a30cb4b2bf6d1b9877053fa1183/10675/gaming-bg1.webp 293w,\n/static/40259a30cb4b2bf6d1b9877053fa1183/95f3d/gaming-bg1.webp 585w,\n/static/40259a30cb4b2bf6d1b9877053fa1183/0a8d7/gaming-bg1.webp 1170w",
                                          "sizes": "(min-width: 1170px) 1170px, 100vw"
                                      },
                                      "sources": []
                                  },
                                  "width": 1170,
                                  "height": 540
                              }
                          }
                      }
                  }
              ]
          },
          "teams": [
              {
                  "name": "Anonymous",
                  "logo": {
                      "alt": "Anonymous",
                      "src": UpcomingMatch3
                  },
                  "teamPlayer": [
                      {
                          "id": "player-01",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#584878",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/b64af85f7b08b16209462e1d0bf0af4e/5376c/players1.webp",
                                                      "srcSet": "/static/b64af85f7b08b16209462e1d0bf0af4e/f4afd/players1.webp 43w,\n/static/b64af85f7b08b16209462e1d0bf0af4e/8f0cc/players1.webp 85w,\n/static/b64af85f7b08b16209462e1d0bf0af4e/5376c/players1.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-02",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#483858",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/cc8c19afb51ba281836e561b735e4e51/5376c/players2.webp",
                                                      "srcSet": "/static/cc8c19afb51ba281836e561b735e4e51/f4afd/players2.webp 43w,\n/static/cc8c19afb51ba281836e561b735e4e51/8f0cc/players2.webp 85w,\n/static/cc8c19afb51ba281836e561b735e4e51/5376c/players2.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-03",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#181828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp",
                                                      "srcSet": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/f4afd/players3.webp 43w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/8f0cc/players3.webp 85w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-04",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080838",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp",
                                                      "srcSet": "/static/23dd208cdc3982a6e2061f77af3da3ba/f4afd/players4.webp 43w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/8f0cc/players4.webp 85w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-05",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080808",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp",
                                                      "srcSet": "/static/4b4d53731dee43afacae43a78187c5ce/f4afd/players5.webp 43w,\n/static/4b4d53731dee43afacae43a78187c5ce/8f0cc/players5.webp 85w,\n/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-06",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#282828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/287b9581c048a81c331b063affceaefd/5376c/players6.webp",
                                                      "srcSet": "/static/287b9581c048a81c331b063affceaefd/f4afd/players6.webp 43w,\n/static/287b9581c048a81c331b063affceaefd/8f0cc/players6.webp 85w,\n/static/287b9581c048a81c331b063affceaefd/5376c/players6.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-07",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#181828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp",
                                                      "srcSet": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/f4afd/players3.webp 43w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/8f0cc/players3.webp 85w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      }
                  ]
              },
              {
                  "name": "Panda",
                  "logo": {
                      "alt": "Panda",
                      "src": UpcomingMatch3
                  },
                  "teamPlayer": [
                      {
                          "id": "player-01",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#483858",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/cc8c19afb51ba281836e561b735e4e51/5376c/players2.webp",
                                                      "srcSet": "/static/cc8c19afb51ba281836e561b735e4e51/f4afd/players2.webp 43w,\n/static/cc8c19afb51ba281836e561b735e4e51/8f0cc/players2.webp 85w,\n/static/cc8c19afb51ba281836e561b735e4e51/5376c/players2.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-02",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080838",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp",
                                                      "srcSet": "/static/23dd208cdc3982a6e2061f77af3da3ba/f4afd/players4.webp 43w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/8f0cc/players4.webp 85w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-03",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080808",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp",
                                                      "srcSet": "/static/4b4d53731dee43afacae43a78187c5ce/f4afd/players5.webp 43w,\n/static/4b4d53731dee43afacae43a78187c5ce/8f0cc/players5.webp 85w,\n/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-04",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080838",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp",
                                                      "srcSet": "/static/23dd208cdc3982a6e2061f77af3da3ba/f4afd/players4.webp 43w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/8f0cc/players4.webp 85w,\n/static/23dd208cdc3982a6e2061f77af3da3ba/5376c/players4.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-05",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#080808",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp",
                                                      "srcSet": "/static/4b4d53731dee43afacae43a78187c5ce/f4afd/players5.webp 43w,\n/static/4b4d53731dee43afacae43a78187c5ce/8f0cc/players5.webp 85w,\n/static/4b4d53731dee43afacae43a78187c5ce/5376c/players5.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-06",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#282828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/287b9581c048a81c331b063affceaefd/5376c/players6.webp",
                                                      "srcSet": "/static/287b9581c048a81c331b063affceaefd/f4afd/players6.webp 43w,\n/static/287b9581c048a81c331b063affceaefd/8f0cc/players6.webp 85w,\n/static/287b9581c048a81c331b063affceaefd/5376c/players6.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      },
                      {
                          "id": "player-07",
                          "name": "Mark Jone",
                          "images": [
                              {
                                  "alt": "Panda",
                                  "src": {
                                      "childImageSharp": {
                                          "gatsbyImageData": {
                                              "layout": "constrained",
                                              "backgroundColor": "#181828",
                                              "images": {
                                                  "fallback": {
                                                      "src": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp",
                                                      "srcSet": "/static/8c84e43ff07e6e9112f0d2ed857c92c8/f4afd/players3.webp 43w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/8f0cc/players3.webp 85w,\n/static/8c84e43ff07e6e9112f0d2ed857c92c8/5376c/players3.webp 170w",
                                                      "sizes": "(min-width: 170px) 170px, 100vw"
                                                  },
                                                  "sources": []
                                              },
                                              "width": 170,
                                              "height": 170
                                          }
                                      }
                                  }
                              }
                          ]
                      }
                  ]
              }
          ],
          "quoteText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500 printer took galley of type scrambled it to make a type specimen book.",
          "content": [
              {
                  "id": "game-details-per-one",
                  "section": "game-details-per-one",
                  "items": [
                      {
                          "id": "game-details-1",
                          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      },
                      {
                          "id": "game-details-2",
                          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      }
                  ]
              },
              {
                  "id": "game-details-per-two",
                  "section": "game-details-per-two",
                  "items": [
                      {
                          "id": "game-details-1",
                          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      },
                      {
                          "id": "game-details-2",
                          "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                      }
                  ]
              }
          ]
      }
  ]
}
  return (
    <>
        <HomeHero/>
        <WelcomeFeaturesArea/>
        <WatchLiveStremingArea/>
        <MatchArea data={upcomming_match}/>
    </>
  )
}

export default Home