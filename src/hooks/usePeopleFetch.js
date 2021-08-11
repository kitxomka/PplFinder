import { useState, useEffect } from "react";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    let response = await axios.get(`https://randomuser.me/api/?results=25&page=1`);
    setIsLoading(false);
    setUsers(resMock.results);
    // setUsers(response.data.results);
  }

  return { users, isLoading, fetchUsers };
};

const resMock = {
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Jorge",
        "last": "Allen"
      },
      "location": {
        "street": {
          "number": 878,
          "name": "Ash Dr"
        },
        "city": "Bathurst",
        "state": "Northern Territory",
        "country": "Australia",
        "postcode": 7847,
        "coordinates": {
          "latitude": "-87.8913",
          "longitude": "-121.6358"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "jorge.allen@example.com",
      "login": {
        "uuid": "80910241-fa3c-4f9a-aec1-96584bedf566",
        "username": "smallbutterfly642",
        "password": "treasure",
        "salt": "0PnX9MO6",
        "md5": "acdbd29c3e63e73ae66e9dd5656b1982",
        "sha1": "d317731c9efc0a668120ae645188ff8f68f37bb3",
        "sha256": "bf9c36cbbaaa80e7f931a94e6b066a47a3c2a02fd3921eda2bc97810b4cbc8bf"
      },
      "dob": {
        "date": "1967-03-01T16:56:11.786Z",
        "age": 54
      },
      "registered": {
        "date": "2008-10-05T06:38:29.541Z",
        "age": 13
      },
      "phone": "03-7989-3346",
      "cell": "0428-808-623",
      "id": {
        "name": "TFN",
        "value": "416276339"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/55.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/55.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/55.jpg"
      },
      "nat": "AU"
    }, 
    {
      "gender": "male",
      "name": {
        "title": "Mr",
        "first": "Sebastian",
        "last": "Christiansen"
      },
      "location": {
        "street": {
          "number": 6867,
          "name": "Lindevænget"
        },
        "city": "Lundby",
        "state": "Nordjylland",
        "country": "Denmark",
        "postcode": 37698,
        "coordinates": {
          "latitude": "18.2652",
          "longitude": "-76.9791"
        },
        "timezone": {
          "offset": "-12:00",
          "description": "Eniwetok, Kwajalein"
        }
      },
      "email": "sebastian.christiansen@example.com",
      "login": {
        "uuid": "de1ea357-1a4c-4955-bc56-c10a77a4052d",
        "username": "bluewolf980",
        "password": "xxxxxxx",
        "salt": "auiZrqU1",
        "md5": "0e75549c07c418cc0757471544dae88b",
        "sha1": "4c49b446e69bb3ec5498a7f773c10c2472c1368e",
        "sha256": "db376c1a9bf3a5cf712f3cf3ef8169156a6e491a26a8df03bcaa70ed6f2c1f25"
      },
      "dob": {
        "date": "1979-01-17T02:07:36.293Z",
        "age": 42
      },
      "registered": {
        "date": "2002-08-07T08:11:14.852Z",
        "age": 19
      },
      "phone": "02394765",
      "cell": "68051946",
      "id": {
        "name": "CPR",
        "value": "170179-0492"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/72.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
      },
      "nat": "BR"
    }, 
    // {
    //   "gender": "female",
    //   "name": {
    //     "title": "Miss",
    //     "first": "Iina",
    //     "last": "Wuollet"
    //   },
    //   "location": {
    //     "street": {
    //       "number": 6585,
    //       "name": "Fredrikinkatu"
    //     },
    //     "city": "Rautavaara",
    //     "state": "Uusimaa",
    //     "country": "Finland",
    //     "postcode": 39818,
    //     "coordinates": {
    //       "latitude": "-38.7385",
    //       "longitude": "-86.7764"
    //     },
    //     "timezone": {
    //       "offset": "-9:00",
    //       "description": "Alaska"
    //     }
    //   },
    //   "email": "iina.wuollet@example.com",
    //   "login": {
    //     "uuid": "bdf2ffa0-b046-4f6b-a9ae-192f6a16f36a",
    //     "username": "angrymeercat780",
    //     "password": "beezer",
    //     "salt": "AC2Ysxs0",
    //     "md5": "cbc4f041c1563239d0e69764ac0c1735",
    //     "sha1": "c610e187ef22689a3ef8ebc9fe61bd327090e661",
    //     "sha256": "8fa6fa322109080bbca6912608e24299fcbdda939d8ec82533ac07493e034ba3"
    //   },
    //   "dob": {
    //     "date": "1981-12-22T07:56:46.755Z",
    //     "age": 40
    //   },
    //   "registered": {
    //     "date": "2016-12-13T02:43:43.935Z",
    //     "age": 5
    //   },
    //   "phone": "04-692-266",
    //   "cell": "044-621-98-96",
    //   "id": {
    //     "name": "HETU",
    //     "value": "NaNNA692undefined"
    //   },
    //   "picture": {
    //     "large": "https://randomuser.me/api/portraits/women/52.jpg",
    //     "medium": "https://randomuser.me/api/portraits/med/women/52.jpg",
    //     "thumbnail": "https://randomuser.me/api/portraits/thumb/women/52.jpg"
    //   },
    //   "nat": "AU"
    // }, {
    //   "gender": "male",
    //   "name": {
    //     "title": "Mr",
    //     "first": "Nathan",
    //     "last": "Wilson"
    //   },
    //   "location": {
    //     "street": {
    //       "number": 1862,
    //       "name": "Aldwins Road"
    //     },
    //     "city": "Napier",
    //     "state": "Tasman",
    //     "country": "New Zealand",
    //     "postcode": 93816,
    //     "coordinates": {
    //       "latitude": "-25.2060",
    //       "longitude": "176.0758"
    //     },
    //     "timezone": {
    //       "offset": "-9:00",
    //       "description": "Alaska"
    //     }
    //   },
    //   "email": "nathan.wilson@example.com",
    //   "login": {
    //     "uuid": "21a1bf56-7dc4-454f-a09c-bd849f43a96a",
    //     "username": "happycat968",
    //     "password": "reggie",
    //     "salt": "8sLW9DWP",
    //     "md5": "5f9712603bbc4aed87a052e3aadca244",
    //     "sha1": "cdf183a3cf3b98318e8edb409c692911fb650646",
    //     "sha256": "0f5133b6216e46535b9f6049c25d84fea7120bf21d090710e3e5b8ee9be1db83"
    //   },
    //   "dob": {
    //     "date": "1966-09-21T14:54:39.060Z",
    //     "age": 55
    //   },
    //   "registered": {
    //     "date": "2007-07-28T05:19:57.444Z",
    //     "age": 14
    //   },
    //   "phone": "(580)-155-9811",
    //   "cell": "(370)-824-3197",
    //   "id": {
    //     "name": "",
    //     "value": null
    //   },
    //   "picture": {
    //     "large": "https://randomuser.me/api/portraits/men/10.jpg",
    //     "medium": "https://randomuser.me/api/portraits/med/men/10.jpg",
    //     "thumbnail": "https://randomuser.me/api/portraits/thumb/men/10.jpg"
    //   },
    //   "nat": "AU"
    // }, {
    //   "gender": "female",
    //   "name": {
    //     "title": "Miss",
    //     "first": "Ege",
    //     "last": "Adan"
    //   },
    //   "location": {
    //     "street": {
    //       "number": 4013,
    //       "name": "Kushimoto Sk"
    //     },
    //     "city": "Manisa",
    //     "state": "Kırıkkale",
    //     "country": "Turkey",
    //     "postcode": 83431,
    //     "coordinates": {
    //       "latitude": "-40.9211",
    //       "longitude": "-111.9273"
    //     },
    //     "timezone": {
    //       "offset": "-3:00",
    //       "description": "Brazil, Buenos Aires, Georgetown"
    //     }
    //   },
    //   "email": "ege.adan@example.com",
    //   "login": {
    //     "uuid": "feebaf5d-2ce1-4207-8ef4-9cf7cab62f64",
    //     "username": "silversnake235",
    //     "password": "dodgers",
    //     "salt": "Trw9lsEQ",
    //     "md5": "79f4b7b58c2e4afdab0be0a9115f067b",
    //     "sha1": "e27d3acb60257ad9e18b47b83a7a7470ca6cbeaa",
    //     "sha256": "bed81e6ba5e63c4b11dffb98c3bb3e0ce9cc83d2a0c8d3b409b1da7132bd04fd"
    //   },
    //   "dob": {
    //     "date": "1996-03-27T15:11:23.830Z",
    //     "age": 25
    //   },
    //   "registered": {
    //     "date": "2019-09-17T08:13:14.059Z",
    //     "age": 2
    //   },
    //   "phone": "(505)-942-9028",
    //   "cell": "(369)-764-1228",
    //   "id": {
    //     "name": "",
    //     "value": null
    //   },
    //   "picture": {
    //     "large": "https://randomuser.me/api/portraits/women/92.jpg",
    //     "medium": "https://randomuser.me/api/portraits/med/women/92.jpg",
    //     "thumbnail": "https://randomuser.me/api/portraits/thumb/women/92.jpg"
    //   },
    //   "nat": "TR"
    // }
  ],
  "info": {
    "seed": "617e0bd4cd57f56a",
    "results": 25,
    "page": 1,
    "version": "1.3"
  }
}