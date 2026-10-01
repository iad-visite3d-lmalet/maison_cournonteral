var APP_DATA = {
  "scenes": [
    {
      "id": "0-entree-princiale",
      "name": "Entree princiale",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 1.5871182594978483,
        "pitch": -0.09774579260638028,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 1.2166344561618931,
          "pitch": 0.2599818013311399,
          "rotation": 0,
          "target": "1-entree-centrale"
        },
        {
          "yaw": 2.3855846833541987,
          "pitch": 0.0061692111481299605,
          "rotation": 0,
          "target": "25-terrasse-pergola"
        },
        {
          "yaw": 0.6007290424099754,
          "pitch": 0.07252989378180885,
          "rotation": 0,
          "target": "23-cote-gauche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entree-centrale",
      "name": "Entree centrale",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.4032647257904465,
        "pitch": 0.029033962072968933,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -0.7243388679994176,
          "pitch": 0.06135931434573649,
          "rotation": 0,
          "target": "2-entree-maison"
        },
        {
          "yaw": 0.0023997180012145236,
          "pitch": -0.022941697497941504,
          "rotation": 0,
          "target": "22-entree-arbre"
        },
        {
          "yaw": 0.7885245198541568,
          "pitch": 0.1949020117030127,
          "rotation": 0,
          "target": "0-entree-princiale"
        },
        {
          "yaw": -2.3924120638511734,
          "pitch": 0.02913802731384152,
          "rotation": 0,
          "target": "23-cote-gauche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entree-maison",
      "name": "Entree maison",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0.753359324918911,
        "pitch": 0.0729785411116417,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 0.787078064531741,
          "pitch": 0.1575546235732439,
          "rotation": 0,
          "target": "3-salon"
        },
        {
          "yaw": -0.17165155395083076,
          "pitch": 0.38604751098521284,
          "rotation": 0,
          "target": "4-salle-a-manger"
        },
        {
          "yaw": 1.8591648575262933,
          "pitch": 0.29591000957089975,
          "rotation": 0,
          "target": "1-entree-centrale"
        },
        {
          "yaw": -2.7478510453976135,
          "pitch": 0.5812772034094316,
          "rotation": 0,
          "target": "7-salle-piano"
        },
        {
          "yaw": -1.5461240336698907,
          "pitch": 0.4043272547303989,
          "rotation": 0,
          "target": "8-entree-nuit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-salon",
      "name": "Salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -0.9518140977911855,
        "pitch": 0.15816007892863126,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -1.2081652885838086,
          "pitch": 0.38486885241519175,
          "rotation": 0,
          "target": "4-salle-a-manger"
        },
        {
          "yaw": -2.503383173884762,
          "pitch": 0.24431310988133959,
          "rotation": 0,
          "target": "2-entree-maison"
        },
        {
          "yaw": -1.7888054098851978,
          "pitch": 0.1474156962687001,
          "rotation": 0,
          "target": "5-cuisine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-salle-a-manger",
      "name": "Salle a manger",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.5210311570291317,
        "pitch": 0.1572237278240216,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -1.9426026822482907,
          "pitch": 0.25195155566628813,
          "rotation": 0,
          "target": "5-cuisine"
        },
        {
          "yaw": 1.6678718330608229,
          "pitch": 0.38140880971208446,
          "rotation": 0,
          "target": "3-salon"
        },
        {
          "yaw": 2.5556426639544343,
          "pitch": 0.3418496023568558,
          "rotation": 0,
          "target": "2-entree-maison"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-cuisine",
      "name": "Cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 1.8614123153865014,
        "pitch": 0.15281761454876452,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -1.4186510001404251,
          "pitch": 0.26044110837169043,
          "rotation": 0,
          "target": "6-cuisine-verriere"
        },
        {
          "yaw": 0.28993598791610253,
          "pitch": 0.2727991822914859,
          "rotation": 0,
          "target": "4-salle-a-manger"
        },
        {
          "yaw": -0.9407655578644061,
          "pitch": 0.18231369361505045,
          "rotation": 0,
          "target": "27-terrasse-piscine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cuisine-verriere",
      "name": "Cuisine verriere",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 3.1204701859309942,
        "pitch": 0.2989570125591676,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 1.7067686850867085,
          "pitch": 0.14073940539930163,
          "rotation": 0,
          "target": "5-cuisine"
        },
        {
          "yaw": -0.41227876086348303,
          "pitch": 0.18118495662824685,
          "rotation": 0,
          "target": "27-terrasse-piscine"
        },
        {
          "yaw": 0.736605546203883,
          "pitch": 0.14386404885594573,
          "rotation": 0,
          "target": "4-salle-a-manger"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-salle-piano",
      "name": "Salle piano",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -2.0463976231661913,
        "pitch": 0.26078075605521,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 1.478047377436603,
          "pitch": 0.5642197788168719,
          "rotation": 0,
          "target": "2-entree-maison"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-entree-nuit",
      "name": "Entree nuit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 2.727225868955289,
        "pitch": 0.05754253727616465,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -2.8409963172976767,
          "pitch": 0.1984952466905643,
          "rotation": 0,
          "target": "9-chambre-1"
        },
        {
          "yaw": -3.086464258561314,
          "pitch": 0.2797763189414777,
          "rotation": 0,
          "target": "13-couloir"
        },
        {
          "yaw": 1.6584795305827758,
          "pitch": 0.14426790844151505,
          "rotation": 0,
          "target": "1-entree-centrale"
        },
        {
          "yaw": 2.3252198840139755,
          "pitch": 0.247935106819817,
          "rotation": 0,
          "target": "7-salle-piano"
        },
        {
          "yaw": 1.2103248039671914,
          "pitch": 0.15564156238828275,
          "rotation": 0,
          "target": "3-salon"
        },
        {
          "yaw": 3.054802258761743,
          "pitch": 0.16855688184335094,
          "rotation": 0,
          "target": "12-bureau"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-chambre-1",
      "name": "Chambre 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.3345595008255806,
        "pitch": 0.12155872481788066,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -0.9487094229269886,
          "pitch": 0.15091010575631003,
          "rotation": 0,
          "target": "10-dressing-1"
        },
        {
          "yaw": 0.5850143623666462,
          "pitch": 0.22253669421190203,
          "rotation": 0,
          "target": "11-sdb-1"
        },
        {
          "yaw": 2.7715281895271007,
          "pitch": 0.32153828464067935,
          "rotation": 0,
          "target": "8-entree-nuit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-dressing-1",
      "name": "Dressing 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.5545796037365687,
        "pitch": 0.13539947153851273,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 2.2033375346480017,
          "pitch": 0.13048743005191454,
          "rotation": 0,
          "target": "9-chambre-1"
        },
        {
          "yaw": -1.89236256918357,
          "pitch": 0.42227493808071515,
          "rotation": 0,
          "target": "8-entree-nuit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-sdb-1",
      "name": "SDB 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -0.7834657471835946,
        "pitch": 0.41150192460574786,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 1.8062198314162865,
          "pitch": 0.40077999587324165,
          "rotation": 0,
          "target": "9-chambre-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bureau",
      "name": "Bureau",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -2.0683354492175337,
        "pitch": 0.19836575934806788,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 2.0990180700364434,
          "pitch": 0.18970755711747067,
          "rotation": 0,
          "target": "13-couloir"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-couloir",
      "name": "Couloir",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 1.3959688606509761,
        "pitch": -0.09720309602055188,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -1.066168617609744,
          "pitch": 0.2510590894731983,
          "rotation": 0,
          "target": "12-bureau"
        },
        {
          "yaw": -1.943169941085415,
          "pitch": 0.2100700500832442,
          "rotation": 0,
          "target": "10-dressing-1"
        },
        {
          "yaw": -1.4883713093883468,
          "pitch": 0.2129766277807459,
          "rotation": 0,
          "target": "8-entree-nuit"
        },
        {
          "yaw": 1.6471293430941252,
          "pitch": 0.3280573800440738,
          "rotation": 0,
          "target": "14-chambre-2-bureau-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-chambre-2-bureau-",
      "name": "Chambre 2 bureau ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -2.292849591341188,
        "pitch": 0.2794010384567436,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -1.4576958112843243,
          "pitch": 0.6205651601532072,
          "rotation": 0,
          "target": "15-chambre-2-nuit"
        },
        {
          "yaw": -1.420046009768626,
          "pitch": -0.0876514743939083,
          "rotation": 0,
          "target": "16-mezzanine"
        },
        {
          "yaw": 1.2687662044887595,
          "pitch": 0.20774306993592795,
          "rotation": 0,
          "target": "8-entree-nuit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-chambre-2-nuit",
      "name": "Chambre 2 nuit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.1402204953758606,
        "pitch": 0.10985344356087623,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -0.1592499333240589,
          "pitch": -0.034989187145496814,
          "rotation": 0,
          "target": "16-mezzanine"
        },
        {
          "yaw": 0.928078524712852,
          "pitch": 0.2901026676825964,
          "rotation": 0,
          "target": "14-chambre-2-bureau-"
        },
        {
          "yaw": 0.5255294157348516,
          "pitch": 0.14191600030413554,
          "rotation": 0,
          "target": "19-couloir-dressing-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-mezzanine",
      "name": "Mezzanine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 1.6407904321499576,
        "pitch": 0.3931112238471126,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 1.1885600746441618,
          "pitch": 0.6795800140911226,
          "rotation": 0,
          "target": "15-chambre-2-nuit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-dressing-2",
      "name": "Dressing 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.759396302695741,
        "pitch": -0.03544435434598725,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 1.2809175535180604,
          "pitch": 0.10950430262817079,
          "rotation": 0,
          "target": "19-couloir-dressing-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-sdb-2",
      "name": "SDB 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -0.24911740927201897,
        "pitch": 0.30062704111453264,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 1.4950096401826896,
          "pitch": 0.27126800739826784,
          "rotation": 0,
          "target": "19-couloir-dressing-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-couloir-dressing-2",
      "name": "Couloir dressing 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -2.523777054113113,
        "pitch": 0.03475121851075258,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 3.1261414079876015,
          "pitch": 0.21325163678246106,
          "rotation": 0,
          "target": "15-chambre-2-nuit"
        },
        {
          "yaw": -2.921731821258126,
          "pitch": 0.2382659537436016,
          "rotation": 0,
          "target": "17-dressing-2"
        },
        {
          "yaw": 2.264684554833189,
          "pitch": 0.12779940342191232,
          "rotation": 0,
          "target": "18-sdb-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-arriere-droite",
      "name": "Arriere droite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.0952643032935043,
        "pitch": -0.11860045419114584,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -1.4633866620367613,
          "pitch": 0.057766910735113086,
          "rotation": 0,
          "target": "24-terrasse-pergola-canisse"
        },
        {
          "yaw": 1.2795164149442915,
          "pitch": 0.09602941667557907,
          "rotation": 0,
          "target": "21-arriere-gauche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-arriere-gauche",
      "name": "Arriere gauche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.3679559298204111,
        "pitch": 0.055635027659597824,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -1.7809836114327169,
          "pitch": 0.09613025446773449,
          "rotation": 0,
          "target": "20-arriere-droite"
        },
        {
          "yaw": -0.13698690229522015,
          "pitch": 0.04918854463521072,
          "rotation": 0,
          "target": "23-cote-gauche"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-entree-arbre",
      "name": "Entree arbre",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -2.4550378966225104,
        "pitch": -0.034331628801750114,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -2.4550378966225104,
          "pitch": -0.034331628801750114,
          "rotation": 0,
          "target": "1-entree-centrale"
        },
        {
          "yaw": -3.083030572218714,
          "pitch": 0.042808610499164956,
          "rotation": 0,
          "target": "1-entree-centrale"
        },
        {
          "yaw": -1.707961735768503,
          "pitch": 0.005805118180521873,
          "rotation": 0,
          "target": "27-terrasse-piscine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-cote-gauche",
      "name": "Cote gauche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -0.7602108742970906,
        "pitch": 0.07125856282427634,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -1.5651203620614886,
          "pitch": 0.056590345570626255,
          "rotation": 0,
          "target": "21-arriere-gauche"
        },
        {
          "yaw": 0.31430501895151153,
          "pitch": 0.23598781633033816,
          "rotation": 0,
          "target": "1-entree-centrale"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-terrasse-pergola-canisse",
      "name": "Terrasse pergola canisse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -0.8575840399478274,
        "pitch": 0.13374079530071548,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 0.022288891147685064,
          "pitch": 0.14920421618453084,
          "rotation": 0,
          "target": "20-arriere-droite"
        },
        {
          "yaw": -0.8716751660755229,
          "pitch": 0.02330212767539841,
          "rotation": 0,
          "target": "6-cuisine-verriere"
        },
        {
          "yaw": 1.6817418883439892,
          "pitch": 0.21914426383517238,
          "rotation": 0,
          "target": "28-pool-house"
        },
        {
          "yaw": -1.5716610249883551,
          "pitch": 0.09439023094582666,
          "rotation": 0,
          "target": "25-terrasse-pergola"
        },
        {
          "yaw": -1.3240230897667669,
          "pitch": 0.02431030255239719,
          "rotation": 0,
          "target": "22-entree-arbre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-terrasse-pergola",
      "name": "Terrasse pergola",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 2.7065314102119142,
        "pitch": -0.0670668826581533,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 3.097765737150141,
          "pitch": 0.1050221727728271,
          "rotation": 0,
          "target": "28-pool-house"
        },
        {
          "yaw": 2.4069381786701616,
          "pitch": 0.07259428841138238,
          "rotation": 0,
          "target": "6-cuisine-verriere"
        },
        {
          "yaw": 2.5032233644989237,
          "pitch": 0.28642731276492306,
          "rotation": 0,
          "target": "27-terrasse-piscine"
        },
        {
          "yaw": 0.5802346697976439,
          "pitch": 0.07348308202007559,
          "rotation": 0,
          "target": "22-entree-arbre"
        },
        {
          "yaw": 2.7955077055864948,
          "pitch": 0.09817610426136802,
          "rotation": 0,
          "target": "24-terrasse-pergola-canisse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-piscine",
      "name": "Piscine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -1.7979938618524542,
        "pitch": 0.18234014368655238,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": -1.5751759730699089,
          "pitch": 0.09527658413034956,
          "rotation": 0,
          "target": "6-cuisine-verriere"
        },
        {
          "yaw": -1.6925794733171493,
          "pitch": 0.24268138705515696,
          "rotation": 0,
          "target": "27-terrasse-piscine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-terrasse-piscine",
      "name": "Terrasse piscine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -2.2338384746450455,
        "pitch": 0.2766508909648415,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 1.455245805712444,
          "pitch": 0.11652740525398464,
          "rotation": 0,
          "target": "6-cuisine-verriere"
        },
        {
          "yaw": -2.7227080227283516,
          "pitch": 0.12234971602028999,
          "rotation": 0,
          "target": "28-pool-house"
        },
        {
          "yaw": -0.5672463773766765,
          "pitch": 0.11463845127560113,
          "rotation": 0,
          "target": "25-terrasse-pergola"
        },
        {
          "yaw": 2.8394084424932498,
          "pitch": 0.15954615026959473,
          "rotation": 0,
          "target": "20-arriere-droite"
        },
        {
          "yaw": 0.05717964787515584,
          "pitch": 0.01729794283062347,
          "rotation": 0,
          "target": "22-entree-arbre"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-pool-house",
      "name": "Pool house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 1.5083978201851407,
        "pitch": 0.39998845775930825,
        "fov": 1.4628963779807613
      },
      "linkHotspots": [
        {
          "yaw": 1.8185040056016888,
          "pitch": 0.18319573747364615,
          "rotation": 0,
          "target": "27-terrasse-piscine"
        },
        {
          "yaw": 0.9513407405204788,
          "pitch": 0.10363323506950373,
          "rotation": 0,
          "target": "26-piscine"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Maison Cournonteral",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
