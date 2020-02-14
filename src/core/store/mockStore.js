

/**
 * JSDoc types
 */

/**
 * @typedef PersonalInfo
 * @type {object}
 * @property {string} fullName
 * @property {string} email
 * @property {string} gender
 * @property {string} address
 * @property {number} age
 */

/**
* @typedef Favourites
* @type {object}
* @property {string} film
* @property {string} hobby
*/

/**
* @typedef AccountInfo
* @type {object}
* @property {string} avatar
*/

/**
* @typedef About
* @type {object}
* @property {string} slogan
* @property {object} favourites
* @property {AccountInfo} account
*/

/**
 * @typedef User
 * @type {object}
 * @property {number} id
 * @property {PersonalInfo} personal
 * @property {About} about
 */

/**
 * @typedef Store
 * @type {object}
 * @property {User[]} users
 */

/** @type {Store} mockStore  */
export const mockStore = {
  users: [
    {
      id: 1,
      personal: {
        fullName: "Davide Duthie",
        email: "dduthie0@marriott.com",
        gender: "Male",
        address: "5 Scott Point",
        age: 98
      },
      about: {
        slogan: "drive user-centric e-markets",
        favourites: {
          film: "Bad Day at Black Rock",
          hobby: "RS485"
        },
        account: {
          avatar: "https://robohash.org/quialaboreet.jpg?size=100x100&set=set1"
        }
      }
    },
    {
      id: 2,
      personal: {
        fullName: "Merrill Vanetti",
        email: "mvanetti1@technorati.com",
        gender: "Male",
        address: "329 Victoria Way",
        age: 20
      },
      about: {
        slogan: "engage robust models",
        favourites: {
          film: "Whoopee!",
          hobby: "QKA"
        },
        account: {
          avatar: "https://robohash.org/dolorasperioressimilique.jpg?size=100x100&set=set1"
        }
      }
    },
    {
      id: 3,
      personal: {
        fullName: "Renie Acutt",
        email: "racutt2@umich.edu",
        gender: "Female",
        address: "94 Mosinee Avenue",
        age: 81
      },
      about: {
        slogan: "extend cutting-edge supply-chains",
        favourites: {
          film: "Animal Farm",
          hobby: "HMO"
        },
        account: {
          avatar: "https://robohash.org/sitnequequi.jpg?size=100x100&set=set1"
        }
      }
    },
    {
      id: 4,
      personal: {
        fullName: "Danyette Durston",
        email: "ddurston3@e-recht24.de",
        gender: "Female",
        address: "7960 Longview Avenue",
        age: 90
      },
      about: {
        slogan: "iterate B2C relationships",
        favourites: {
          film: "Mystic Pizza",
          hobby: "Business Planning"
        },
        account: {
          avatar: "https://robohash.org/quosevenietex.jpg?size=100x100&set=set1"
        }
      }
    },
    {
      id: 5,
      personal: {
        fullName: "Cos Newgrosh",
        email: "cnewgrosh4@joomla.org",
        gender: "Male",
        address: "9 Oak Center",
        age: 71
      },
      about: {
        slogan: "expedite ubiquitous solutions",
        favourites: {
          film: "Among Us (Onder Ons)",
          hobby: "Award Winner"
        },
        account: {
          avatar: "https://robohash.org/accusantiumtemporevoluptatibus.jpg?size=100x100&set=set1"
        }
      }
    },
    {
      id: 6,
      personal: {
        fullName: "Gasper Olyonov",
        email: "golyonov5@businesswire.com",
        gender: "Male",
        address: "5204 Alpine Parkway",
        age: 25
      },
      about: {
        slogan: "exploit cross-media solutions",
        favourites: {
          film: "Premonition",
          hobby: "GWT"
        },
        account: {
          avatar: "https://robohash.org/utodiocorporis.jpg?size=100x100&set=set1"
        }
      }
    },
    {
      id: 7,
      personal: {
        fullName: "Vivien Pinchen",
        email: "vpinchen6@home.pl",
        gender: "Female",
        address: "20860 Melby Road",
        age: 71
      },
      about: {
        slogan: "deliver proactive schemas",
        favourites: {
          film: "Ladies in Retirement",
          hobby: "GML"
        },
        account: {
          avatar: "https://robohash.org/etdoloremvoluptas.jpg?size=100x100&set=set1"
        }
      }
    },
    {
      id: 8,
      personal: {
        fullName: "Jillayne Kearey",
        email: "jkearey7@earthlink.net",
        gender: "Female",
        address: "3434 Jay Center",
        age: 95
      },
      about: {
        slogan: "transform killer applications",
        favourites: {
          film: "Teorema",
          hobby: "Acting"
        },
        account: {
          avatar: "https://robohash.org/etestmolestiae.jpg?size=100x100&set=set1"
        }
      }
    },
    {
      id: 9,
      personal: {
        fullName: "Becka Cornwell",
        email: "bcornwell8@paginegialle.it",
        gender: "Female",
        address: "8 Sundown Terrace",
        age: 86
      },
      about: {
        slogan: "harness collaborative e-markets",
        favourites: {
          film: "Occurrence at Owl Creek Bridge, An (La rivière du hibou)",
          hobby: "CX"
        },
        account: {
          avatar: "https://robohash.org/enimveniameligendi.jpg?size=100x100&set=set1"
        }
      }
    },
  ]
};