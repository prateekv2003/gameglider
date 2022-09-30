import React from "react";
import GameCard from "./GamesCard";
import SectionTitle from "../../title/SectionTitle";
import GameDetailThumb from '../../../assets/images/game/game-details-thumb.webp'
import PopulerGameThum5 from '../../../assets/images/game/popular-game-thumb5.webp'
import PopulerGameThum1 from '../../../assets/images/game/popular-game-thumb1.webp'
import PopulerGameThum3 from '../../../assets/images/game/popular-game-thumb3.webp'
import PopulerGameThum6 from '../../../assets/images/game/popular-game-thumb6.webp'

const PopulerGamesArea = () => {

    const sectionTitle = {
        "heading": "POPULAR GAME",
        "showDescription": true,
        "subHeading": null,
        "color": null,
        "description": "When unknown printer took type and scrambled it to make type specimen book centuries,",
        "align": "center"
    }

    const data = [
        {
            "id": "3c18dc8e-9470-5941-bce2-034d00b78ca9",
            "slug": "alien-space-five-star",
            "title": "Alien Space Five Star",
            "gameThum": {
                "alt": "Anonymous",
                "src": PopulerGameThum5
            },
            "buttons": [
                {
                    "color": null,
                    "shape": null,
                    "path": null,
                    "id": "1",
                    "content": "Game Details",
                    "size": "lg"
                }
            ],
            "categories": [
                {
                    "title": "Drawing",
                    "slug": "drawing"
                },
                {
                    "title": "Alien Space",
                    "slug": "alien-space"
                }
            ],
            "date": "2021-01-02 13:01:00",
            "updated": "2021-01-02",
            "size": "98MB",
            "installs": "80,000,000+",
            "currentVersion": "03.00.28.00.00",
            "inAppProducts": "$0.85 - $985.00",
            "quoteText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500 printer took galley of type scrambled it to make a type specimen book.",
            "images": [
                {
                    "alt": "Games Details",
                    "src": GameDetailThumb
                },
                {
                    "alt": "Games Details",
                    "src": GameDetailThumb
                },
                {
                    "alt": "Games Details",
                    "src": GameDetailThumb
                }
            ],
            "content": [
                {
                    "id": "game-details-per-one",
                    "section": "game-details-per-one",
                    "headings": null,
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
                    "headings": [
                        {
                            "content": "DESCRIPTION:"
                        }
                    ],
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
                    "id": "game-details-per-three",
                    "section": "game-details-per-three",
                    "headings": [
                        {
                            "content": "FEATURES:"
                        }
                    ],
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
                    "id": "game-details-per-whats-new",
                    "section": "game-details-per-whats-new",
                    "headings": [
                        {
                            "content": "WHAT’S NEW!"
                        }
                    ],
                    "items": [
                        {
                            "id": "game-details-1",
                            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        }
                    ]
                },
                {
                    "id": "game-details-per-04",
                    "section": "game-details-per-04",
                    "headings": null,
                    "items": [
                        {
                            "id": "game-details-1",
                            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        {
                            "id": "game-details-2",
                            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro recently with desktop publishing software like including versions."
                        }
                    ]
                }
            ]
        },
        {
            "id": "e3630788-14e8-5a02-ac76-f6130b8cb3a3",
            "slug": "alien-space-sniper-shooter",
            "title": "Alien Space - SNIPER SHOOTER",
            "gameThum": {
                "alt": "Anonymous",
                "src": PopulerGameThum1
            },
            "buttons": [
                {
                    "color": null,
                    "shape": null,
                    "path": null,
                    "id": "1",
                    "content": "Game Details",
                    "size": "lg"
                }
            ],
            "categories": [
                {
                    "title": "Drawing",
                    "slug": "drawing"
                },
                {
                    "title": "Collage",
                    "slug": "collage"
                }
            ],
            "date": "2021-01-02 13:01:00",
            "updated": "2021-01-02",
            "size": "98MB",
            "installs": "80,000,000+",
            "currentVersion": "03.00.28.00.00",
            "inAppProducts": "$0.85 - $985.00",
            "quoteText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500 printer took galley of type scrambled it to make a type specimen book.",
            "images": [
                {
                    "alt": "Games Details",
                    "src": {
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#98e8f8",
                                "images": {
                                    "fallback": {
                                        "src": "/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp",
                                        "srcSet": "/static/b160641ae55b008a0e48a74273dfc14a/10675/game-details-thumb.webp 293w,\n/static/b160641ae55b008a0e48a74273dfc14a/95f3d/game-details-thumb.webp 585w,\n/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp 1170w",
                                        "sizes": "(min-width: 1170px) 1170px, 100vw"
                                    },
                                    "sources": []
                                },
                                "width": 1170,
                                "height": 540
                            }
                        }
                    }
                },
                {
                    "alt": "Games Details",
                    "src": {
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#98e8f8",
                                "images": {
                                    "fallback": {
                                        "src": "/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp",
                                        "srcSet": "/static/b160641ae55b008a0e48a74273dfc14a/10675/game-details-thumb.webp 293w,\n/static/b160641ae55b008a0e48a74273dfc14a/95f3d/game-details-thumb.webp 585w,\n/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp 1170w",
                                        "sizes": "(min-width: 1170px) 1170px, 100vw"
                                    },
                                    "sources": []
                                },
                                "width": 1170,
                                "height": 540
                            }
                        }
                    }
                },
                {
                    "alt": "Games Details",
                    "src": {
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#98e8f8",
                                "images": {
                                    "fallback": {
                                        "src": "/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp",
                                        "srcSet": "/static/b160641ae55b008a0e48a74273dfc14a/10675/game-details-thumb.webp 293w,\n/static/b160641ae55b008a0e48a74273dfc14a/95f3d/game-details-thumb.webp 585w,\n/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp 1170w",
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
            ],
            "content": [
                {
                    "id": "game-details-per-one",
                    "section": "game-details-per-one",
                    "headings": null,
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
                    "headings": [
                        {
                            "content": "DESCRIPTION:"
                        }
                    ],
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
                    "id": "game-details-per-three",
                    "section": "game-details-per-three",
                    "headings": [
                        {
                            "content": "FEATURES:"
                        }
                    ],
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
                    "id": "game-details-per-whats-new",
                    "section": "game-details-per-whats-new",
                    "headings": [
                        {
                            "content": "WHAT’S NEW!"
                        }
                    ],
                    "items": [
                        {
                            "id": "game-details-1",
                            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        }
                    ]
                },
                {
                    "id": "game-details-per-04",
                    "section": "game-details-per-04",
                    "headings": null,
                    "items": [
                        {
                            "id": "game-details-1",
                            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        {
                            "id": "game-details-2",
                            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro recently with desktop publishing software like including versions."
                        }
                    ]
                }
            ]
        },
        {
            "id": "95801af7-2c3f-5735-8594-1e2c4d3f43b9",
            "slug": "space-adventure-sniper-shooter",
            "title": "Space Adventure - SNIPER SHOOTER",
            "gameThum": {
                "alt": "Anonymous",
                "src": PopulerGameThum3
            },
            "buttons": [
                {
                    "color": null,
                    "shape": null,
                    "path": null,
                    "id": "1",
                    "content": "Game Details",
                    "size": "lg"
                }
            ],
            "categories": [
                {
                    "title": "Drawing",
                    "slug": "drawing"
                },
                {
                    "title": "Collage",
                    "slug": "collage"
                }
            ],
            "date": "2021-01-02 13:01:00",
            "updated": "2021-01-02",
            "size": "98MB",
            "installs": "80,000,000+",
            "currentVersion": "03.00.28.00.00",
            "inAppProducts": "$0.85 - $985.00",
            "quoteText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500 printer took galley of type scrambled it to make a type specimen book.",
            "images": [
                {
                    "alt": "Games Details",
                    "src": {
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#98e8f8",
                                "images": {
                                    "fallback": {
                                        "src": "/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp",
                                        "srcSet": "/static/b160641ae55b008a0e48a74273dfc14a/10675/game-details-thumb.webp 293w,\n/static/b160641ae55b008a0e48a74273dfc14a/95f3d/game-details-thumb.webp 585w,\n/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp 1170w",
                                        "sizes": "(min-width: 1170px) 1170px, 100vw"
                                    },
                                    "sources": []
                                },
                                "width": 1170,
                                "height": 540
                            }
                        }
                    }
                },
                {
                    "alt": "Games Details",
                    "src": {
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#98e8f8",
                                "images": {
                                    "fallback": {
                                        "src": "/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp",
                                        "srcSet": "/static/b160641ae55b008a0e48a74273dfc14a/10675/game-details-thumb.webp 293w,\n/static/b160641ae55b008a0e48a74273dfc14a/95f3d/game-details-thumb.webp 585w,\n/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp 1170w",
                                        "sizes": "(min-width: 1170px) 1170px, 100vw"
                                    },
                                    "sources": []
                                },
                                "width": 1170,
                                "height": 540
                            }
                        }
                    }
                },
                {
                    "alt": "Games Details",
                    "src": {
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#98e8f8",
                                "images": {
                                    "fallback": {
                                        "src": "/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp",
                                        "srcSet": "/static/b160641ae55b008a0e48a74273dfc14a/10675/game-details-thumb.webp 293w,\n/static/b160641ae55b008a0e48a74273dfc14a/95f3d/game-details-thumb.webp 585w,\n/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp 1170w",
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
            ],
            "content": [
                {
                    "id": "game-details-per-one",
                    "section": "game-details-per-one",
                    "headings": null,
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
                    "headings": [
                        {
                            "content": "DESCRIPTION:"
                        }
                    ],
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
                    "id": "game-details-per-three",
                    "section": "game-details-per-three",
                    "headings": [
                        {
                            "content": "FEATURES:"
                        }
                    ],
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
                    "id": "game-details-per-whats-new",
                    "section": "game-details-per-whats-new",
                    "headings": [
                        {
                            "content": "WHAT’S NEW!"
                        }
                    ],
                    "items": [
                        {
                            "id": "game-details-1",
                            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        }
                    ]
                },
                {
                    "id": "game-details-per-04",
                    "section": "game-details-per-04",
                    "headings": null,
                    "items": [
                        {
                            "id": "game-details-1",
                            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        {
                            "id": "game-details-2",
                            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro recently with desktop publishing software like including versions."
                        }
                    ]
                }
            ]
        },
        {
            "id": "8a31e6c5-593b-56f2-89e4-5352a77418b6",
            "slug": "alien-space-saven-star",
            "title": "Alien Space Saven Star",
            "gameThum": {
                "alt": "Anonymous",
                "src": PopulerGameThum6
            },
            "buttons": [
                {
                    "color": null,
                    "shape": null,
                    "path": null,
                    "id": "1",
                    "content": "Game Details",
                    "size": "lg"
                }
            ],
            "categories": [
                {
                    "title": "Hunter Sniper",
                    "slug": "hunter-sniper"
                },
                {
                    "title": "Collage",
                    "slug": "collage"
                }
            ],
            "date": "2021-01-02 13:01:00",
            "updated": "2021-01-02",
            "size": "98MB",
            "installs": "80,000,000+",
            "currentVersion": "03.00.28.00.00",
            "inAppProducts": "$0.85 - $985.00",
            "quoteText": "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the 1500 printer took galley of type scrambled it to make a type specimen book.",
            "images": [
                {
                    "alt": "Games Details",
                    "src": {
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#98e8f8",
                                "images": {
                                    "fallback": {
                                        "src": "/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp",
                                        "srcSet": "/static/b160641ae55b008a0e48a74273dfc14a/10675/game-details-thumb.webp 293w,\n/static/b160641ae55b008a0e48a74273dfc14a/95f3d/game-details-thumb.webp 585w,\n/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp 1170w",
                                        "sizes": "(min-width: 1170px) 1170px, 100vw"
                                    },
                                    "sources": []
                                },
                                "width": 1170,
                                "height": 540
                            }
                        }
                    }
                },
                {
                    "alt": "Games Details",
                    "src": {
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#98e8f8",
                                "images": {
                                    "fallback": {
                                        "src": "/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp",
                                        "srcSet": "/static/b160641ae55b008a0e48a74273dfc14a/10675/game-details-thumb.webp 293w,\n/static/b160641ae55b008a0e48a74273dfc14a/95f3d/game-details-thumb.webp 585w,\n/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp 1170w",
                                        "sizes": "(min-width: 1170px) 1170px, 100vw"
                                    },
                                    "sources": []
                                },
                                "width": 1170,
                                "height": 540
                            }
                        }
                    }
                },
                {
                    "alt": "Games Details",
                    "src": {
                        "childImageSharp": {
                            "gatsbyImageData": {
                                "layout": "constrained",
                                "backgroundColor": "#98e8f8",
                                "images": {
                                    "fallback": {
                                        "src": "/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp",
                                        "srcSet": "/static/b160641ae55b008a0e48a74273dfc14a/10675/game-details-thumb.webp 293w,\n/static/b160641ae55b008a0e48a74273dfc14a/95f3d/game-details-thumb.webp 585w,\n/static/b160641ae55b008a0e48a74273dfc14a/0a8d7/game-details-thumb.webp 1170w",
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
            ],
            "content": [
                {
                    "id": "game-details-per-one",
                    "section": "game-details-per-one",
                    "headings": null,
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
                    "headings": [
                        {
                            "content": "DESCRIPTION:"
                        }
                    ],
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
                    "id": "game-details-per-three",
                    "section": "game-details-per-three",
                    "headings": [
                        {
                            "content": "FEATURES:"
                        }
                    ],
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
                    "id": "game-details-per-whats-new",
                    "section": "game-details-per-whats-new",
                    "headings": [
                        {
                            "content": "WHAT’S NEW!"
                        }
                    ],
                    "items": [
                        {
                            "id": "game-details-1",
                            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        }
                    ]
                },
                {
                    "id": "game-details-per-04",
                    "section": "game-details-per-04",
                    "headings": null,
                    "items": [
                        {
                            "id": "game-details-1",
                            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                        },
                        {
                            "id": "game-details-2",
                            "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap electro recently with desktop publishing software like including versions."
                        }
                    ]
                }
            ]
        }
    ]
    return (
        <section className="populer-games-section pt-16 md:pt-24 py-16 md:py-28">
            <div className="container">
                {sectionTitle && (
                    <div className="section-title mb-15">
                        <SectionTitle
                            heading={sectionTitle.heading}
                            {...sectionTitle}
                        />
                    </div>
                )}

                <div className="flex flex-wrap -mt-8">
                    {data &&
                        data.map((item) => (
                            <div
                                className="w-full md:w-1/2 lg:w-1/2 px-4"
                                key={item.id}
                            >
                                <GameCard
                                    date={item?.date}
                                    slug={item?.slug}
                                    image={item?.gameThum?.src}
                                    alt={item?.gameThum?.alt}
                                    buttons={item?.buttons}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default PopulerGamesArea;
