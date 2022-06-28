const express = require('express')
const app = express()
const PORT = 8000

const countries = {
    'afghanistan': {
        'capital': 'Kabul',
        'population': 38928346,
        'populationRank': 37,
        'lifeExpectancy': 65.98,
        'femaleLifeExpectancy': 67.59,
        'maleLifeExpectancy': 64.47,
        'lifeExpectancyRank': 158, 
        'worldSharePopulation': 0.50,
        'totalArea': 251827,
        'totalAreaRank': 41,
        'worldShareTotalArea': 0.4
    },
    'albania': {
        'capital': 'Tirana',
        'population': 2877797,
        'populationRank': 140,
        'lifeExpectancy': 78.96,
        'femaleLifeExpectancy': 80.48,
        'maleLifeExpectancy': 77.48,
        'lifeExpectancyRank': 49, 
        'worldSharePopulation': 0.04,
        'totalArea': 11100,
        'totalAreaRank': 144,
        'worldShareTotalArea': 0.0 
    },
    'algeria': {
        'capital': 'Algiers',
        'population': 43851044 ,
        'populationRank': 33,
        'lifeExpectancy': 77.50,
        'femaleLifeExpectancy': 78.76,
        'maleLifeExpectancy': 76.30,
        'lifeExpectancyRank': 63, 
        'worldSharePopulation': 0.56,
        'totalArea': 919595,
        'totalAreaRank': 10,
        'worldShareTotalArea': 1.6  
    },
    'american samoa': {
        'capital': 'Apia',
        'population': 55191,
        'populationRank': 210,
        'lifeExpectancy': 73.75,
        'femaleLifeExpectancy': 75.97,
        'maleLifeExpectancy': 71.69 ,
        'lifeExpectancyRank': 106, 
        'worldSharePopulation': 0.0,
        'totalArea': 77,
        'totalAreaRank': 215,
        'worldShareTotalArea': 0.0 
    },
    'andorra': {
        'capital': 'Andorra la Vella',
        'population': 77265,
        'populationRank': 203 ,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 181,
        'totalAreaRank': 195,
        'worldShareTotalArea': 0.00 
    },
    'angola': {
        'capital': 'Luanda',
        'population': 32866272 ,
        'populationRank': 44,
        'lifeExpectancy': 62.22,
        'femaleLifeExpectancy': 65.12,
        'maleLifeExpectancy': 59.46,
        'lifeExpectancyRank': 177, 
        'worldSharePopulation': .42,
        'totalArea': 481353,
        'totalAreaRank': 23,
        'worldShareTotalArea': 0.80 
    },
    'anguilla': {
        'capital': 'The Valley',
        'population': 	15003,
        'populationRank': 224,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.0,
        'totalArea': 35,
        'totalAreaRank': 222,
        'worldShareTotalArea': 0.00 
    },
    'antigua and barbuda': {
        'capital': 'Saint John\'s',
        'population': 97929,
        'populationRank': 201,
        'lifeExpectancy': 77.47,
        'femaleLifeExpectancy': 78.58,
        'maleLifeExpectancy': 76.26,
        'lifeExpectancyRank': 64, 
        'worldSharePopulation': 0.0,
        'totalArea': 171,
        'totalAreaRank': 200,
        'worldShareTotalArea': 0.00 
    },
    'argentina': {
        'capital': 'Buenos Aires',
        'population': 45195774,
        'populationRank': 32,
        'lifeExpectancy': 	77.17,
        'femaleLifeExpectancy': 80.42,
        'maleLifeExpectancy': 73.82,
        'lifeExpectancyRank': 71, 
        'worldSharePopulation': 0.58,
        'totalArea': 1073518,
        'totalAreaRank': 8,
        'worldShareTotalArea': 1.8 
    },

    'armenia': {
        'capital': 'Yerevan',
        'population': 2963243,
        'populationRank': 137,
        'lifeExpectancy': 75.55,
        'femaleLifeExpectancy': 78.90,
        'maleLifeExpectancy': 71.82,
        'lifeExpectancyRank': 87, 
        'worldSharePopulation': 0.04,
        'totalArea': 11484,
        'totalAreaRank': 142,
        'worldShareTotalArea': 0.00 
    },

    'aruba': {
        'capital': 'Oranjestad',
        'population': 106766,
        'populationRank': 197,
        'lifeExpectancy': 76.79,
        'femaleLifeExpectancy': 79.10,
        'maleLifeExpectancy': 74.26,
        'lifeExpectancyRank': 72, 
        'worldSharePopulation': 0.0,
        'totalArea': 69,
        'totalAreaRank': 217,
        'worldShareTotalArea': 0.00 
    },

    'australia': {
        'capital': 'Canberra',
        'population': 25499884,
        'populationRank': 55,
        'lifeExpectancy': 83.94,
        'femaleLifeExpectancy': 85.80,
        'maleLifeExpectancy': 82.08,
        'lifeExpectancyRank': 8, 
        'worldSharePopulation': 0.33,
        'totalArea': 2969906,
        'totalAreaRank': 6,
        'worldShareTotalArea': 5.20 
    },

    'austria': {
        'capital': 'Vienna',
        'population': 9006398,
        'populationRank': 97,
        'lifeExpectancy': 82.05,
        'femaleLifeExpectancy': 84.19,
        'maleLifeExpectancy': 79.88,
        'lifeExpectancyRank': 26, 
        'worldSharePopulation': 0.12,
        'totalArea': 32383,
        'totalAreaRank': 115,
        'worldShareTotalArea': 0.10 
    },

    'azerbaijan': {
        'capital': 'Baku',
        'population': 	10139177,
        'populationRank': 90,
        'lifeExpectancy': 73.33,
        'femaleLifeExpectancy': 75.87,
        'maleLifeExpectancy': 70.76,
        'lifeExpectancyRank': 112, 
        'worldSharePopulation': 0.13,
        'totalArea': 33436,
        'totalAreaRank': 114,
        'worldShareTotalArea': 0.10 
    },

    'bahamas': {
        'capital': 'Nassau',
        'population': 393244,
        'populationRank': 179,
        'lifeExpectancy': 74.28,
        'femaleLifeExpectancy': 76.51,
        'maleLifeExpectancy': 71.95,
        'lifeExpectancyRank': 100, 
        'worldSharePopulation': 0.01,
        'totalArea': 5383,
        'totalAreaRank': 160,
        'worldShareTotalArea': 0.00 
    },

    'bahrain': {
        'capital': 'Manama',
        'population': 	1701575,
        'populationRank': 152,
        'lifeExpectancy': 77.73,
        'femaleLifeExpectancy': 78.88,
        'maleLifeExpectancy': 76.87,
        'lifeExpectancyRank': 60, 
        'worldSharePopulation': 0.02 ,
        'totalArea': 295,
        'totalAreaRank': 187,
        'worldShareTotalArea': 0.00 
    },

    'bangladesh': {
        'capital': 'Dhaka',
        'population': 164689383 ,
        'populationRank': 8,
        'lifeExpectancy': 73.57,
        'femaleLifeExpectancy': 75.60,
        'maleLifeExpectancy': 71.80,
        'lifeExpectancyRank': 109, 
        'worldSharePopulation': 2.11,
        'totalArea': 56977,
        'totalAreaRank': 94,
        'worldShareTotalArea': 0.10 
    },

    'barbados': {
        'capital': 'Bridgetown',
        'population': 287375,
        'populationRank': 184,
        'lifeExpectancy': 79.64,
        'femaleLifeExpectancy': 80.85,
        'maleLifeExpectancy': 78.36,
        'lifeExpectancyRank': 42, 
        'worldSharePopulation': 0.0,
        'totalArea': 166,
        'totalAreaRank': 201,
        'worldShareTotalArea': 0.00 
    },

    'belarus': {
        'capital': 'Minsk',
        'population': 9449323,
        'populationRank': 96 ,
        'lifeExpectancy': 75.20,
        'femaleLifeExpectancy': 79.90,
        'maleLifeExpectancy': 70.15,
        'lifeExpectancyRank': 92, 
        'worldSharePopulation': 0.12,
        'totalArea': 80155,
        'totalAreaRank': 86,
        'worldShareTotalArea': 0.10 
    },

    'belgium': {
        'capital': 'Brussels',
        'population': 11589623,
        'populationRank': 81,
        'lifeExpectancy': 82.17,
        'femaleLifeExpectancy': 84.31,
        'maleLifeExpectancy': 80.00,
        'lifeExpectancyRank': 25, 
        'worldSharePopulation': 0.15,
        'totalArea': 11787,
        'totalAreaRank': 140,
        'worldShareTotalArea': 0.00 
    },

    'belize': {
        'capital': 'Belmopan',
        'population': 397628,
        'populationRank': 178,
        'lifeExpectancy': 75.09,
        'femaleLifeExpectancy': 78.25,
        'maleLifeExpectancy': 72.14,
        'lifeExpectancyRank': 93, 
        'worldSharePopulation': 0.01,
        'totalArea': 8867,
        'totalAreaRank': 151,
        'worldShareTotalArea': 0.00 
    },

    'benin': {
        'capital': 'Porto Novo',
        'population': 	12123200,
        'populationRank': 77,
        'lifeExpectancy': 62.84,
        'femaleLifeExpectancy': 64.45,
        'maleLifeExpectancy': 61.23,
        'lifeExpectancyRank': 174, 
        'worldSharePopulation': 0.16,
        'totalArea': 43484,
        'totalAreaRank': 102,
        'worldShareTotalArea': 0.10 
    },

    'bermuda': {
        'capital': 'Hamilton',
        'population': 62278,
        'populationRank': 206,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 21,
        'totalAreaRank': 224,
        'worldShareTotalArea': 0.00 
    },

    'bhutan': {
        'capital': 'Thimphu',
        'population': 	771608,
        'populationRank': 165,
        'lifeExpectancy': 72.77,
        'femaleLifeExpectancy': 73.33,
        'maleLifeExpectancy': 72.27,
        'lifeExpectancyRank': 116, 
        'worldSharePopulation': 0.01,
        'totalArea': 14824,
        'totalAreaRank': 136,
        'worldShareTotalArea': 0.00 
    },

    'bolivia': {
        'capital': 'La Paz',
        'population': 11673021,
        'populationRank': 80,
        'lifeExpectancy': 72.35,
        'femaleLifeExpectancy': 75.35,
        'maleLifeExpectancy': 69.50,
        'lifeExpectancyRank': 120, 
        'worldSharePopulation': 0.15,
        'totalArea': 424164,
        'totalAreaRank': 28,
        'worldShareTotalArea': 0.70 
    },

    'bosnia and herzegovina': {
        'capital': 'Sarajevo',
        'population': 3280819,
        'populationRank': 135,
        'lifeExpectancy': 77.93,
        'femaleLifeExpectancy': 80.32,
        'maleLifeExpectancy': 75.48,
        'lifeExpectancyRank': 57, 
        'worldSharePopulation': 0.04,
        'totalArea': 19772,
        'totalAreaRank': 128,
        'worldShareTotalArea': 0.00 
    },

    'botswana': {
        'capital': 'Gaborone',
        'population': 	2351627,
        'populationRank': 145,
        'lifeExpectancy': 69.86,
        'femaleLifeExpectancy': 72.69,
        'maleLifeExpectancy': 66.72,
        'lifeExpectancyRank': 140, 
        'worldSharePopulation': 0.03,
        'totalArea': 224711,
        'totalAreaRank': 47,
        'worldShareTotalArea': 0.40
    },

    'brazil': {
        'capital': 'Brasilia',
        'population': 212559417,
        'populationRank': 6,
        'lifeExpectancy': 76.57,
        'femaleLifeExpectancy': 80.14,
        'maleLifeExpectancy': 73.01,
        'lifeExpectancyRank': 75, 
        'worldSharePopulation': 2.73,
        'totalArea': 3287955,
        'totalAreaRank': 5,
        'worldShareTotalArea': 5.60 
    },

    'british virgin islands': {
        'capital': 'Road Town',
        'population': 30231 ,
        'populationRank': 220 ,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 58,
        'totalAreaRank': 219,
        'worldShareTotalArea': 0.00 
    },

    'brunei': {
        'capital': 'Bandar Seri Begawan',
        'population': 	437479,
        'populationRank': 176,
        'lifeExpectancy': 76.35,
        'femaleLifeExpectancy': 77.64,
        'maleLifeExpectancy': 75.17,
        'lifeExpectancyRank': 79, 
        'worldSharePopulation': 0.01,
        'totalArea': 2226,
        'totalAreaRank': 171,
        'worldShareTotalArea': 0.00 
    },
    'bulgaria': {
        'capital': 'Sofia',
        'population': 6948445,
        'populationRank': 107,
        'lifeExpectancy': 75.49,
        'femaleLifeExpectancy': 79.06,
        'maleLifeExpectancy': 72.05,
        'lifeExpectancyRank': 89, 
        'worldSharePopulation': 0.09 ,
        'totalArea': 42811,
        'totalAreaRank': 105,
        'worldShareTotalArea': 0.10 
    },
    'burkina faso': {
        'capital': 'Ouagadougou',
        'population': 20903273,
        'populationRank': 59,
        'lifeExpectancy': 62.98,
        'femaleLifeExpectancy': 63.78,
        'maleLifeExpectancy': 62.06,
        'lifeExpectancyRank': 173, 
        'worldSharePopulation': 0.27,
        'totalArea': 105393,
        'totalAreaRank': 75,
        'worldShareTotalArea': 0.20 
    },
    'burundi': {
        'capital': 'Gitega',
        'population': 11890784,
        'populationRank': 78,
        'lifeExpectancy': 62.71,
        'femaleLifeExpectancy': 64.56,
        'maleLifeExpectancy': 60.85,
        'lifeExpectancyRank': 175, 
        'worldSharePopulation': 0.15,
        'totalArea': 10747,
        'totalAreaRank': 146,
        'worldShareTotalArea': 0.00 
    },
    'cabo verde': {
        'capital': 'Praia',
        'population': 	555987,
        'populationRank': 172,
        'lifeExpectancy': 73.58,
        'femaleLifeExpectancy': 76.83,
        'maleLifeExpectancy': 70.15,
        'lifeExpectancyRank': 108, 
        'worldSharePopulation': 0.01 ,
        'totalArea': 1557,
        'totalAreaRank': 174,
        'worldShareTotalArea': 0.00 
    },

    'cambodia': {
        'capital': 'Phnom Penh',
        'population': 16718965,
        'populationRank': 71,
        'lifeExpectancy': 70.54,
        'femaleLifeExpectancy': 72.69,
        'maleLifeExpectancy': 68.20,
        'lifeExpectancyRank': 134, 
        'worldSharePopulation': 0.21,
        'totalArea': 69898,
        'totalAreaRank': 90,
        'worldShareTotalArea': 0.10 
    },

    'cameroon': {
        'capital': 'Yaounde',
        'population': 26545863 ,
        'populationRank': 52,
        'lifeExpectancy': 60.32,
        'femaleLifeExpectancy': 61.66,
        'maleLifeExpectancy': 58.99,
        'lifeExpectancyRank': 183, 
        'worldSharePopulation': .34,
        'totalArea': 183569,
        'totalAreaRank': 54,
        'worldShareTotalArea': 0.30 
    },

    'canada': {
        'capital': 'Ottawa',
        'population': 37742154,
        'populationRank': 39,
        'lifeExpectancy': 82.96,
        'femaleLifeExpectancy': 84.74,
        'maleLifeExpectancy': 81.15,
        'lifeExpectancyRank': 16, 
        'worldSharePopulation': 0.48,
        'totalArea': 3855101,
        'totalAreaRank': 2,
        'worldShareTotalArea': 6.10 
    },

    'caribbean netherlands': {
        'capital': 'Bonaire Kralendijk',
        'population': 26223,
        'populationRank': 221,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 127,
        'totalAreaRank': 207,
        'worldShareTotalArea': 0.00 
    },

    'cayman islands': {
        'capital': 'George Town',
        'population': 65722,
        'populationRank': 205,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 102,
        'totalAreaRank': 210,
        'worldShareTotalArea': 0.00 
    },

    'central african republic': {
        'capital': 'Bangui',
        'population': 4829767,
        'populationRank': 125,
        'lifeExpectancy': 54.36,
        'femaleLifeExpectancy': 56.58,
        'maleLifeExpectancy': 52.16,
        'lifeExpectancyRank': 193, 
        'worldSharePopulation': 0.06,
        'totalArea': 240535,
        'totalAreaRank': 43,
        'worldShareTotalArea': 0.40 
    },

    'chad': {
        'capital': 'N\'Djamena',
        'population': 16425864,
        'populationRank': 72,
        'lifeExpectancy': 55.17,
        'femaleLifeExpectancy': 56.65,
        'maleLifeExpectancy': 53.73,
        'lifeExpectancyRank': 192, 
        'worldSharePopulation': 0.21,
        'totalArea': 495755,
        'totalAreaRank': 21,
        'worldShareTotalArea': 0.80 
    },

    'channel islands': {
        'capital': 'Saint Peter Port',
        'population': 173863,
        'populationRank': 191,
        'lifeExpectancy': 83.60,
        'femaleLifeExpectancy': 85.31,
        'maleLifeExpectancy': 81.82,
        'lifeExpectancyRank': 9, 
        'worldSharePopulation': 0.00,
        'totalArea': 73,
        'totalAreaRank': 234,
        'worldShareTotalArea': 0.00 
    },

    'chile': {
        'capital': 'Santiago',
        'population': 19116201,
        'populationRank': 63,
        'lifeExpectancy': 80.74,
        'femaleLifeExpectancy': 82.80,
        'maleLifeExpectancy': 78.54,
        'lifeExpectancyRank': 36, 
        'worldSharePopulation': 0.25,
        'totalArea': 291932,
        'totalAreaRank': 38,
        'worldShareTotalArea': 0.50 
    },

    'china': {
        'capital': 'Beijing',
        'population': 1439323776,
        'populationRank': 1,
        'lifeExpectancy': 77.47,
        'femaleLifeExpectancy': 79.73,
        'maleLifeExpectancy': 75.36,
        'lifeExpectancyRank': 64, 
        'worldSharePopulation': 18.47,
        'totalArea': 3747877,
        'totalAreaRank': 3,
        'worldShareTotalArea': 6.30
    },

    'colombia': {
        'capital': 'Bogota',
        'population': 50882891,
        'populationRank': 29,
        'lifeExpectancy': 77.87,
        'femaleLifeExpectancy': 80.54,
        'maleLifeExpectancy': 75.18,
        'lifeExpectancyRank': 58, 
        'worldSharePopulation': 0.65 ,
        'totalArea': 440831,
        'totalAreaRank': 26,
        'worldShareTotalArea': 0.70 
    },

    'comoros': {
        'capital': 'Moroni',
        'population': 869601,
        'populationRank': 163,
        'lifeExpectancy': 65.03,
        'femaleLifeExpectancy': 66.88,
        'maleLifeExpectancy': 63.24,
        'lifeExpectancyRank': 163, 
        'worldSharePopulation': 0.01 ,
        'totalArea': 719,
        'totalAreaRank': 179,
        'worldShareTotalArea': 0.00 
    },

    'congo': {
        'capital': 'Kinshasa',
        'population': 5518087,
        'populationRank': 117,
        'lifeExpectancy': 65.21,
        'femaleLifeExpectancy': 66.73,
        'maleLifeExpectancy': 63.67,
        'lifeExpectancyRank': 162, 
        'worldSharePopulation': 0.07,
        'totalArea': 132047,
        'totalAreaRank': 65,
        'worldShareTotalArea': 0.20 
    },

    'cook islands': {
        'capital': 'Avarua District',
        'population': 17564,
        'populationRank': 223,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00 ,
        'totalArea': 91,
        'totalAreaRank': 214,
        'worldShareTotalArea': 0.00 
    },

    'costa rica': {
        'capital': 'San Jose',
        'population': 	5094118,
        'populationRank': 122,
        'lifeExpectancy': 80.94,
        'femaleLifeExpectancy': 83.39,
        'maleLifeExpectancy': 78.53,
        'lifeExpectancyRank': 35, 
        'worldSharePopulation': 0.07,
        'totalArea': 19730,
        'totalAreaRank': 129,
        'worldShareTotalArea': 0.00 
    },

    'croatia': {
        'capital': 'Zagreb',
        'population': 	4105267,
        'populationRank': 130,
        'lifeExpectancy': 79.02,
        'femaleLifeExpectancy': 82.02,
        'maleLifeExpectancy': 75.95,
        'lifeExpectancyRank': 48, 
        'worldSharePopulation': 0.05,
        'totalArea': 21851,
        'totalAreaRank': 127,
        'worldShareTotalArea': 0.00 
    },
    'cuba': {
        'capital': 'Havana',
        'population': 11326616,
        'populationRank': 83,
        'lifeExpectancy': 79.18,
        'femaleLifeExpectancy': 81.12,
        'maleLifeExpectancy': 77.25,
        'lifeExpectancyRank': 45, 
        'worldSharePopulation': .15,
        'totalArea': 42426,
        'totalAreaRank': 106,
        'worldShareTotalArea': 0.10 
    },
    'curaçao': {
        'capital': 'Willemstad',
        'population': 164093,
        'populationRank': 193,
        'lifeExpectancy': 79.41,
        'femaleLifeExpectancy': 82.08,
        'maleLifeExpectancy': 76.42,
        'lifeExpectancyRank': 43, 
        'worldSharePopulation': 0.00,
        'totalArea': 171,
        'totalAreaRank': 199,
        'worldShareTotalArea': 0.00
    },
    'cyprus': {
        'capital': 'Nicosia',
        'population': 	1207359,
        'populationRank': 158,
        'lifeExpectancy': 81.51,
        'femaleLifeExpectancy': 83.45,
        'maleLifeExpectancy': 79.55,
        'lifeExpectancyRank': 31, 
        'worldSharePopulation': 0.02,
        'totalArea': 3572,
        'totalAreaRank': 168,
        'worldShareTotalArea': 0.00 
    },
    'czech republic': {
        'capital': 'Prague',
        'population': 10708981,
        'populationRank': 86,
        'lifeExpectancy': 79.85,
        'femaleLifeExpectancy': 82.35,
        'maleLifeExpectancy': 77.33,
        'lifeExpectancyRank': 41, 
        'worldSharePopulation': 0.14 ,
        'totalArea': 30450,
        'totalAreaRank': 118,
        'worldShareTotalArea': 0.10 
    },
    "cote d'ivoire": {
        'capital': 'Yamoussoukro',
        'population': 26378274,
        'populationRank': 53 ,
        'lifeExpectancy': 58.75,
        'femaleLifeExpectancy': 60.13,
        'maleLifeExpectancy': 57.50,
        'lifeExpectancyRank': 186, 
        'worldSharePopulation': 0.34,
        'totalArea': 124504,
        'totalAreaRank': 70,
        'worldShareTotalArea': 0.20 
    },
    'denmark': {
        'capital': 'Copenhagen',
        'population': 5792202,
        'populationRank': 115,
        'lifeExpectancy': 81.40,
        'femaleLifeExpectancy': 83.27,
        'maleLifeExpectancy': 79.54,
        'lifeExpectancyRank': 32, 
        'worldSharePopulation': 0.07,
        'totalArea': 16639,
        'totalAreaRank': 133,
        'worldShareTotalArea': 0.00 
    },
    'djibouti': {
        'capital': 'Djibouti',
        'population': 988000,
        'populationRank': 160,
        'lifeExpectancy': 67.87,
        'femaleLifeExpectancy': 70.16,
        'maleLifeExpectancy': 65.84,
        'lifeExpectancyRank': 148, 
        'worldSharePopulation': 0.01,
        'totalArea': 8958,
        'totalAreaRank': 150,
        'worldShareTotalArea': 0.00 
    },
    'dominica': {
        'capital': 'Roseau',
        'population': 71986,
        'populationRank': 204,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00 ,
        'totalArea': 290,
        'totalAreaRank': 188,
        'worldShareTotalArea': 0.00 
    },
    'dominican republic': {
        'capital': 'Santo Domingo',
        'population': 10847910,
        'populationRank': 85,
        'lifeExpectancy': 74.65,
        'femaleLifeExpectancy': 77.90,
        'maleLifeExpectancy': 71.58,
        'lifeExpectancyRank': 97, 
        'worldSharePopulation': 0.14,
        'totalArea': 18792,
        'totalAreaRank': 131,
        'worldShareTotalArea': 0.00 
    },
    'dr congo': {
        'capital': 'Kinshasa',
        'population': 89561403,
        'populationRank': 16,
        'lifeExpectancy': 61.60,
        'femaleLifeExpectancy': 63.21,
        'maleLifeExpectancy': 60.01,
        'lifeExpectancyRank': 180, 
        'worldSharePopulation': 1.15,
        'totalArea': 905354,
        'totalAreaRank': 11,
        'worldShareTotalArea': 1.50 
    },
    'ecuador': {
        'capital': 'Quito',
        'population': 17643054,
        'populationRank': 67,
        'lifeExpectancy': 77.71,
        'femaleLifeExpectancy': 80.45,
        'maleLifeExpectancy': 75.05,
        'lifeExpectancyRank': 61, 
        'worldSharePopulation': 0.23,
        'totalArea': 106889,
        'totalAreaRank': 74,
        'worldShareTotalArea': 0.20 
    },
    'egypt': {
        'capital': 'Cairo',
        'population': 102334404,
        'populationRank': 14,
        'lifeExpectancy': 72.54,
        'femaleLifeExpectancy': 74.95,
        'maleLifeExpectancy': 70.23,
        'lifeExpectancyRank': 118, 
        'worldSharePopulation': 1.31,
        'totalArea': 387048,
        'totalAreaRank': 30,
        'worldShareTotalArea': 0.70 
    },
    'el salvador': {
        'capital': 'San Salvador',
        'population': 6486205,
        'populationRank': 112,
        'lifeExpectancy': 74.06,
        'femaleLifeExpectancy': 78.48,
        'maleLifeExpectancy': 69.27,
        'lifeExpectancyRank': 103, 
        'worldSharePopulation': 0.08,
        'totalArea': 8124,
        'totalAreaRank': 152,
        'worldShareTotalArea': 0.00 
    },
    'equatorial guinea': {
        'capital': 'Malabo',
        'population': 1402985,
        'populationRank': 153,
        'lifeExpectancy': 59.82,
        'femaleLifeExpectancy': 61.08,
        'maleLifeExpectancy': 58.76,
        'lifeExpectancyRank': 184, 
        'worldSharePopulation': 0.02,
        'totalArea': 10831,
        'totalAreaRank': 145,
        'worldShareTotalArea': 0.00 
    },
    'eritrea': {
        'capital': 'Asmara',
        'population': 3546421,
        'populationRank': 133,
        'lifeExpectancy': 67.48,
        'femaleLifeExpectancy': 69.75,
        'maleLifeExpectancy': 65.26,
        'lifeExpectancyRank': 152, 
        'worldSharePopulation': 0.05,
        'totalArea': 45406,
        'totalAreaRank': 101,
        'worldShareTotalArea': 0.10 
    },
    'estonia': {
        'capital': 'Tallinn',
        'population': 1326535,
        'populationRank': 155,
        'lifeExpectancy': 79.18,
        'femaleLifeExpectancy': 83.06,
        'maleLifeExpectancy': 74.98,
        'lifeExpectancyRank': 45, 
        'worldSharePopulation': 0.02,
        'totalArea': 17462,
        'totalAreaRank': 132,
        'worldShareTotalArea': 0.00 
    },
    'eswatini': {
        'capital': 'Mbabana',
        'population': 1160164,
        'populationRank': 159,
        'lifeExpectancy': 61.05,
        'femaleLifeExpectancy': 65.67,
        'maleLifeExpectancy': 56.98,
        'lifeExpectancyRank': 181, 
        'worldSharePopulation': 0.01,
        'totalArea': 6704,
        'totalAreaRank': 158,
        'worldShareTotalArea': 0.00 
    },
    'ethiopia': {
        'capital': 'Addis Ababa',
        'population': 114963588,
        'populationRank': 12,
        'lifeExpectancy': 67.81,
        'femaleLifeExpectancy': 69.80,
        'maleLifeExpectancy': 65.86,
        'lifeExpectancyRank': 149, 
        'worldSharePopulation': 1.47,
        'totalArea': 426372,
        'totalAreaRank': 27,
        'worldShareTotalArea': 0.70 
    },
    'faeroe islands': {
        'capital': 'Tórshavn',
        'population': 48863,
        'populationRank': 212,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 538,
        'totalAreaRank': 181,
        'worldShareTotalArea': 0.00 
    },
    'falkland islands': {
        'capital': 'Stanley',
        'population': 	3480,
        'populationRank': 232,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 4700,
        'totalAreaRank': 163,
        'worldShareTotalArea': 0.00 
    }, 
    'fiji': {
        'capital': 'Suva',
        'population': 896445,
        'populationRank': 161,
        'lifeExpectancy': 67.91,
        'femaleLifeExpectancy': 69.97,
        'maleLifeExpectancy': 66.00,
        'lifeExpectancyRank': 147, 
        'worldSharePopulation': 0.01,
        'totalArea': 7055,
        'totalAreaRank': 156,
        'worldShareTotalArea': 0.00 
    },

    'finland': {
        'capital': 'Helsinki',
        'population': 5540720,
        'populationRank': 116,
        'lifeExpectancy': 82.48,
        'femaleLifeExpectancy': 85.14,
        'maleLifeExpectancy': 79.82,
        'lifeExpectancyRank': 24, 
        'worldSharePopulation': 0.07,
        'totalArea': 130666,
        'totalAreaRank': 66,
        'worldShareTotalArea': 0.20 
    },

    'france': {
        'capital': 'Paris',
        'population': 65273511,
        'populationRank': 22,
        'lifeExpectancy': 83.13,
        'femaleLifeExpectancy': 85.82,
        'maleLifeExpectancy': 80.32,
        'lifeExpectancyRank': 14, 
        'worldSharePopulation': 0.84,
        'totalArea': 213011,
        'totalAreaRank': 49,
        'worldShareTotalArea': 0.40 
    },

    'french guiana': {
        'capital': 'Cayenne',
        'population': 298682,
        'populationRank': 183,
        'lifeExpectancy': 80.53,
        'femaleLifeExpectancy': 83.38,
        'maleLifeExpectancy': 77.80,
        'lifeExpectancyRank': 39, 
        'worldSharePopulation': 0.00,
        'totalArea': 32253,
        'totalAreaRank': 117,
        'worldShareTotalArea': 0.10 
    },

    'french polynesia': {
        'capital': 'Papeete',
        'population': 280908,
        'populationRank': 186,
        'lifeExpectancy': 78.23,
        'femaleLifeExpectancy': 80.41,
        'maleLifeExpectancy': 76.23,
        'lifeExpectancyRank': 54, 
        'worldSharePopulation': 0.00,
        'totalArea': 1609,
        'totalAreaRank': 173,
        'worldShareTotalArea': 0.00 
    },

    'gabon': {
        'capital': 'Libreville',
        'population': 	2225734,
        'populationRank': 146,
        'lifeExpectancy': 67.03,
        'femaleLifeExpectancy': 69.27,
        'maleLifeExpectancy': 64.93,
        'lifeExpectancyRank': 154, 
        'worldSharePopulation': 0.03,
        'totalArea': 103347,
        'totalAreaRank': 77,
        'worldShareTotalArea': 0.20 
    },

    'gambia': {
        'capital': 'Banjul',
        'population': 2416668,
        'populationRank': 144,
        'lifeExpectancy': 63.26,
        'femaleLifeExpectancy': 64.73,
        'maleLifeExpectancy': 61.80,
        'lifeExpectancyRank': 172, 
        'worldSharePopulation': 0.03,
        'totalArea': 4127,
        'totalAreaRank': 166,
        'worldShareTotalArea': 0.00 
    },

    'georgia': {
        'capital': 'Tbilisi',
        'population': 3989167,
        'populationRank': 132,
        'lifeExpectancy': 74.24,
        'femaleLifeExpectancy': 78.54,
        'maleLifeExpectancy': 69.85,
        'lifeExpectancyRank': 101, 
        'worldSharePopulation': 0.05,
        'totalArea': 26911,
        'totalAreaRank': 122,
        'worldShareTotalArea': 0.00 
    },

    'germany': {
        'capital': 'Berlin',
        'population': 83783942,
        'populationRank': 19,
        'lifeExpectancy': 81.88,
        'femaleLifeExpectancy': 84.14,
        'maleLifeExpectancy': 79.62,
        'lifeExpectancyRank': 27, 
        'worldSharePopulation': 1.07,
        'totalArea': 137882,
        'totalAreaRank': 63,
        'worldShareTotalArea': 0.20
    },

    'ghana': {
        'capital': 'Accra',
        'population': 31072940,
        'populationRank': 47,
        'lifeExpectancy': 64.94,
        'femaleLifeExpectancy': 66.13,
        'maleLifeExpectancy': 63.78,
        'lifeExpectancyRank': 166, 
        'worldSharePopulation': 0.40,
        'totalArea': 92098,
        'totalAreaRank': 82,
        'worldShareTotalArea': 0.20 
    },

    'gibraltar': {
        'capital': 'Westside',
        'population': 33691,
        'populationRank': 219,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 2,
        'totalAreaRank': 231,
        'worldShareTotalArea': 0.20 
    },

    'greece': {
        'capital': 'Athens',
        'population': 10423054,
        'populationRank': 87,
        'lifeExpectancy': 82.80,
        'femaleLifeExpectancy': 85.08,
        'maleLifeExpectancy': 80.52,
        'lifeExpectancyRank': 19, 
        'worldSharePopulation': 0.13,
        'totalArea': 50962,
        'totalAreaRank': 97,
        'worldShareTotalArea': 0.10 
    },

    'greenland': {
        'capital': 'Nuuk',
        'population': 56770,
        'populationRank': 209,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 836330,
        'totalAreaRank': 12,
        'worldShareTotalArea': 0.30 
    },

    'grenada': {
        'capital': 'Saint George\'s',
        'population': 112523,
        'populationRank': 195,
        'lifeExpectancy': 72.59,
        'femaleLifeExpectancy': 75.16,
        'maleLifeExpectancy': 70.24,
        'lifeExpectancyRank': 117, 
        'worldSharePopulation': 0.00,
        'totalArea': 133,
        'totalAreaRank': 206,
        'worldShareTotalArea': 0.00 
    },

    'guadeloupe': {
        'capital': 'Basse-Terre',
        'population': 400124,
        'populationRank': 177,
        'lifeExpectancy': 82.74,
        'femaleLifeExpectancy': 85.94,
        'maleLifeExpectancy': 79.16,
        'lifeExpectancyRank': 22, 
        'worldSharePopulation': 0.01,
        'totalArea': 629,
        'totalAreaRank': 180,
        'worldShareTotalArea': 0.00 
    },

    'guam': {
        'capital': 'Hagåtña',
        'population': 168775,
        'populationRank': 192,
        'lifeExpectancy': 80.74,
        'femaleLifeExpectancy': 83.98,
        'maleLifeExpectancy': 77.63,
        'lifeExpectancyRank': 36, 
        'worldSharePopulation': 0.00,
        'totalArea': 212,
        'totalAreaRank': 194,
        'worldShareTotalArea': 0.00 
    },

    'guatemala': {
        'capital': 'Guatemala City',
        'population': 17915568,
        'populationRank': 66,
        'lifeExpectancy': 75.05,
        'femaleLifeExpectancy': 77.89,
        'maleLifeExpectancy': 72.14,
        'lifeExpectancyRank': 94, 
        'worldSharePopulation': 0.23,
        'totalArea': 42042,
        'totalAreaRank': 107,
        'worldShareTotalArea': 0.10 
    },

    'guinea': {
        'capital': 'Conakry',
        'population': 	13132795,
        'populationRank': 75,
        'lifeExpectancy': 62.64,
        'femaleLifeExpectancy': 63.25,
        'maleLifeExpectancy': 61.79,
        'lifeExpectancyRank': 176, 
        'worldSharePopulation': 0.17,
        'totalArea': 94926,
        'totalAreaRank': 79,
        'worldShareTotalArea': 0.20 
    },

    'guinea-bissau': {
        'capital': 'Bissau',
        'population': 1968001,
        'populationRank': 150,
        'lifeExpectancy': 59.38,
        'femaleLifeExpectancy': 61.33,
        'maleLifeExpectancy': 57.31,
        'lifeExpectancyRank': 185, 
        'worldSharePopulation': 0.03,
        'totalArea': 13948,
        'totalAreaRank': 138,
        'worldShareTotalArea': 0.00 
    },

    'guyana': {
        'capital': 'Georgetown',
        'population': 786552,
        'populationRank': 164,
        'lifeExpectancy': 70.26,
        'femaleLifeExpectancy': 73.53,
        'maleLifeExpectancy': 67.22,
        'lifeExpectancyRank': 137, 
        'worldSharePopulation': 0.01,
        'totalArea': 83000,
        'totalAreaRank': 85,
        'worldShareTotalArea': 0.10 
    },

    'haiti': {
        'capital': 'Port au Prince',
        'population': 11402528,
        'populationRank': 82,
        'lifeExpectancy': 64.99,
        'femaleLifeExpectancy': 67.21,
        'maleLifeExpectancy': 62.77,
        'lifeExpectancyRank': 165, 
        'worldSharePopulation': 0.15,
        'totalArea': 10714,
        'totalAreaRank': 147,
        'worldShareTotalArea': 0.00 
    },

    'holy see': {
        'capital': 'Vatican City',
        'population': 801,
        'populationRank': 235,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 0.00,
        'totalAreaRank': 233,
        'worldShareTotalArea': 0.00 
    },

    'honduras': {
        'capital': 'Tegucigalpa',
        'population': 	9904607,
        'populationRank': 92,
        'lifeExpectancy': 75.87,
        'femaleLifeExpectancy': 78.14,
        'maleLifeExpectancy': 73.57,
        'lifeExpectancyRank': 82, 
        'worldSharePopulation': 0.13,
        'totalArea': 43433,
        'totalAreaRank': 103,
        'worldShareTotalArea': 0.10 
    },

    'hong kong': {
        'capital': 'Hong Kong',
        'population': 7496981,
        'populationRank': 104,
        'lifeExpectancy': 85.29,
        'femaleLifeExpectancy': 88.17,
        'maleLifeExpectancy': 82.38,
        'lifeExpectancyRank': 1, 
        'worldSharePopulation': 0.10,
        'totalArea': 'unknown',
        'totalAreaRank': 'unknown',
        'worldShareTotalArea':'unknown' 
    },

    'hungary': {
        'capital': 'Budapest',
        'population': 9660351,
        'populationRank': 94,
        'lifeExpectancy': 77.31,
        'femaleLifeExpectancy': 80.66,
        'maleLifeExpectancy': 73.78,
        'lifeExpectancyRank': 70, 
        'worldSharePopulation': 0.12,
        'totalArea': 35918,
        'totalAreaRank': 110,
        'worldShareTotalArea': 0.10 
    },

    'iceland': {
        'capital': 'Reykjavik',
        'population': 	341243,
        'populationRank': 181,
        'lifeExpectancy': 83.52,
        'femaleLifeExpectancy': 84.90,
        'maleLifeExpectancy': 82.15,
        'lifeExpectancyRank': 10, 
        'worldSharePopulation': 0.00,
        'totalArea': 39769,
        'totalAreaRank': 108,
        'worldShareTotalArea': 0.10 
    },

    'india': {
        'capital': 'New Delhi',
        'population': 1380004385,
        'populationRank': 2,
        'lifeExpectancy': 70.42,
        'femaleLifeExpectancy': 71.80,
        'maleLifeExpectancy': 69.16,
        'lifeExpectancyRank': 136, 
        'worldSharePopulation': 17.70,
        'totalArea': 1269345,
        'totalAreaRank': 7,
        'worldShareTotalArea': 2.00
    },

    'indonesia': {
        'capital': 'Jakarta',
        'population': 273523615,
        'populationRank': 4,
        'lifeExpectancy': 72.37,
        'femaleLifeExpectancy': 74.64,
        'maleLifeExpectancy': 70.12,
        'lifeExpectancyRank': 122, 
        'worldSharePopulation': 3.51,
        'totalArea': 735358,
        'totalAreaRank': 15,
        'worldShareTotalArea': 1.20 
    },

    'iran': {
        'capital': 'Tehran',
        'population': 83992949,
        'populationRank': 18,
        'lifeExpectancy': 77.33,
        'femaleLifeExpectancy': 78.54,
        'maleLifeExpectancy': 76.22,
        'lifeExpectancyRank': 69, 
        'worldSharePopulation': 1.08,
        'totalArea': 636371,
        'totalAreaRank': 18,
        'worldShareTotalArea': 1.10 
    },

    'iraq': {
        'capital': 'Baghdad',
        'population': 40222493,
        'populationRank': 36,
        'lifeExpectancy': 71.08,
        'femaleLifeExpectancy': 73.21,
        'maleLifeExpectancy': 68.96,
        'lifeExpectancyRank': 131, 
        'worldSharePopulation': 0.52,
        'totalArea': 169235,
        'totalAreaRank': 59,
        'worldShareTotalArea': 0.30 
    },

    'ireland': {
        'capital': 'Dublin',
        'population': 4937786,
        'populationRank': 124,
        'lifeExpectancy': 82.81,
        'femaleLifeExpectancy': 84.32,
        'maleLifeExpectancy': 81.29,
        'lifeExpectancyRank': 18, 
        'worldSharePopulation': 124,
        'totalArea': 27133,
        'totalAreaRank': 121,
        'worldShareTotalArea': 0.00 
    },

    'isle of man': {
        'capital': 'Douglas',
        'population': 85033,
        'populationRank': 202,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 221,
        'totalAreaRank': 193,
        'worldShareTotalArea': 0.00
    },

    'israel': {
        'capital': 'Jerusalem',
        'population': 	8655535,
        'populationRank': 100,
        'lifeExpectancy': 83.49,
        'femaleLifeExpectancy': 84.91,
        'maleLifeExpectancy': 81.98,
        'lifeExpectancyRank': 12, 
        'worldSharePopulation': 0.11,
        'totalArea': 8019,
        'totalAreaRank': 153,
        'worldShareTotalArea': 0.00 
    },

    'italy': {
        'capital': 'Rome',
        'population': 	60461826,
        'populationRank': 23,
        'lifeExpectancy': 84.01,
        'femaleLifeExpectancy': 85.97,
        'maleLifeExpectancy': 81.90,
        'lifeExpectancyRank': 6, 
        'worldSharePopulation': 0.78,
        'totalArea': 116346,
        'totalAreaRank': 73,
        'worldShareTotalArea': 0.20 
    },

    'jamaica': {
        'capital': 'Kingston',
        'population': 	2961167,
        'populationRank': 138,
        'lifeExpectancy': 74.88,
        'femaleLifeExpectancy': 76.60,
        'maleLifeExpectancy': 73.17,
        'lifeExpectancyRank': 96, 
        'worldSharePopulation': 0.04,
        'totalArea': 4244,
        'totalAreaRank': 165,
        'worldShareTotalArea': 0.00 
    },

    'japan': {
        'capital': 'Tokyo',
        'population': 	126476461,
        'populationRank': 11,
        'lifeExpectancy': 85.03,
        'femaleLifeExpectancy': 88.09,
        'maleLifeExpectancy': 81.91,
        'lifeExpectancyRank': 2, 
        'worldSharePopulation': 1.62,
        'totalArea': 145920,
        'totalAreaRank': 62,
        'worldShareTotalArea': 0.20 
    },

    'jordan': {
        'capital': 'Amman',
        'population': 	10203134,
        'populationRank': 88,
        'lifeExpectancy': 75.01,
        'femaleLifeExpectancy': 76.82,
        'maleLifeExpectancy': 73.28,
        'lifeExpectancyRank': 95, 
        'worldSharePopulation': 0.13,
        'totalArea': 34495,
        'totalAreaRank': 112,
        'worldShareTotalArea': 0.10 
    },

    'kazakhstan': {
        'capital': 'Nur-Sultan',
        'population': 18776707,
        'populationRank': 64,
        'lifeExpectancy': 73.90,
        'femaleLifeExpectancy': 77.97,
        'maleLifeExpectancy': 69.55,
        'lifeExpectancyRank': 105, 
        'worldSharePopulation': 0.24,
        'totalArea': 1052089,
        'totalAreaRank': 9,
        'worldShareTotalArea': 1.80 
    },

    'kenya': {
        'capital': 'Nairobi',
        'population': 53771296,
        'populationRank': 27,
        'lifeExpectancy': 67.47,
        'femaleLifeExpectancy': 69.87,
        'maleLifeExpectancy': 65.04,
        'lifeExpectancyRank': 153, 
        'worldSharePopulation': 0.69,
        'totalArea': 224081,
        'totalAreaRank': 48,
        'worldShareTotalArea': 0.40
    },

    'kiribati': {
        'capital': 'Tarawa Atoll',
        'population': 119449,
        'populationRank': 194,
        'lifeExpectancy': 69.17,
        'femaleLifeExpectancy': 73.12,
        'maleLifeExpectancy': 65.00,
        'lifeExpectancyRank': 141, 
        'worldSharePopulation': 0.00,
        'totalArea': 313,
        'totalAreaRank': 186,
        'worldShareTotalArea': 0.00 
    },

    'kuwait': {
        'capital': 'Kuwait City',
        'population': 4270571,
        'populationRank': 129,
        'lifeExpectancy': 75.85,
        'femaleLifeExpectancy': 77.06,
        'maleLifeExpectancy': 75.09,
        'lifeExpectancyRank': 83, 
        'worldSharePopulation': 0.05,
        'totalArea': 6880,
        'totalAreaRank': 157,
        'worldShareTotalArea': 0.00 
    },

    'kyrgyzstan': {
        'capital': 'Bishkek',
        'population': 6524195,
        'populationRank': 111,
        'lifeExpectancy': 71.95,
        'femaleLifeExpectancy': 76.03,
        'maleLifeExpectancy': 67.85,
        'lifeExpectancyRank': 126, 
        'worldSharePopulation': 0.08,
        'totalArea': 77201,
        'totalAreaRank': 87,
        'worldShareTotalArea': 0.10 
    },

    'laos': {
        'capital': 'Vientiane',
        'population': 7275560,
        'populationRank': 105,
        'lifeExpectancy': 68.89,
        'femaleLifeExpectancy': 70.79,
        'maleLifeExpectancy': 67.04,
        'lifeExpectancyRank': 142, 
        'worldSharePopulation': 0.09,
        'totalArea': 91429,
        'totalAreaRank': 84,
        'worldShareTotalArea': 0.20 
    },
    
    'latvia': {
        'capital': 'Riga',
        'population': 1886198,
        'populationRank': 151,
        'lifeExpectancy': 75.73,
        'femaleLifeExpectancy': 80.37,
        'maleLifeExpectancy': 70.81,
        'lifeExpectancyRank': 85, 
        'worldSharePopulation': 0.02,
        'totalArea': 24926,
        'totalAreaRank': 125,
        'worldShareTotalArea': 0.00 
    },

    'lebanon': {
        'capital': 'Beirut',
        'population': 6825445,
        'populationRank': 109,
        'lifeExpectancy': 79.27,
        'femaleLifeExpectancy': 81.17,
        'maleLifeExpectancy': 77.53,
        'lifeExpectancyRank': 44, 
        'worldSharePopulation': 0.09,
        'totalArea': 4036,
        'totalAreaRank': 167,
        'worldShareTotalArea': 0.00 
    },

    'lesotho': {
        'capital': 'Maseru',
        'population': 	2142249,
        'populationRank': 147,
        'lifeExpectancy': 55.65,
        'femaleLifeExpectancy': 58.90,
        'maleLifeExpectancy': 52.52,
        'lifeExpectancyRank': 191, 
        'worldSharePopulation': 0.03,
        'totalArea': 11720,
        'totalAreaRank': 141,
        'worldShareTotalArea': 0.00 
    },

    'liberia': {
        'capital': 'Monrovia',
        'population': 5057681,
        'populationRank': 123,
        'lifeExpectancy': 65.00,
        'femaleLifeExpectancy': 66.48,
        'maleLifeExpectancy': 63.54,
        'lifeExpectancyRank': 164, 
        'worldSharePopulation': 0.06,
        'totalArea': 43000,
        'totalAreaRank': 104,
        'worldShareTotalArea': 0.10 
    },

    'libya': {
        'capital': 'Tripoli',
        'population': 6871292,
        'populationRank': 108,
        'lifeExpectancy': 73.44,
        'femaleLifeExpectancy': 76.46,
        'maleLifeExpectancy': 70.61,
        'lifeExpectancyRank': 110, 
        'worldSharePopulation': 0.09,
        'totalArea': 679362,
        'totalAreaRank': 17,
        'worldShareTotalArea': 1.2 
    },

    'liechtenstein': {
        'capital': 'Vaduz',
        'population': 38128,
        'populationRank': 217,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 62,
        'totalAreaRank': 218,
        'worldShareTotalArea': 0.00 
    },

    'lithuania': {
        'capital': 'Vilnius',
        'population': 2722289,
        'populationRank': 142,
        'lifeExpectancy': 76.41,
        'femaleLifeExpectancy': 81.70,
        'maleLifeExpectancy': 70.97,
        'lifeExpectancyRank': 78, 
        'worldSharePopulation': 0.03,
        'totalArea': 25212,
        'totalAreaRank': 124,
        'worldShareTotalArea': 0.00 
    },

    'luxembourg': {
        'capital': 'Luxembourg',
        'population': 625978,
        'populationRank': 169,
        'lifeExpectancy': 82.79,
        'femaleLifeExpectancy': 84.76,
        'maleLifeExpectancy': 80.83,
        'lifeExpectancyRank': 20, 
        'worldSharePopulation': 0.01,
        'totalArea': 998,
        'totalAreaRank': 176,
        'worldShareTotalArea': 0.00 
    },

    'macao': {
        'capital': 'Macao',
        'population': 649335,
        'populationRank': 167,
        'lifeExpectancy': 84.68,
        'femaleLifeExpectancy': 87.62,
        'maleLifeExpectancy': 81.73,
        'lifeExpectancyRank': 3, 
        'worldSharePopulation': 0.01,
        'totalArea': 'unknown',
        'totalAreaRank': 'unknown',
        'worldShareTotalArea': 'unknown' 
    },

    'madagascar': {
        'capital': 'Antananarivo',
        'population': 27691018,
        'populationRank': 51,
        'lifeExpectancy': 68.21,
        'femaleLifeExpectancy': 69.92,
        'maleLifeExpectancy': 66.53,
        'lifeExpectancyRank': 146, 
        'worldSharePopulation': 0.36,
        'totalArea': 226658,
        'totalAreaRank': 46,
        'worldShareTotalArea': 0.40 
    },

    'malawi': {
        'capital': 'Lilongwe',
        'population': 19129952,
        'populationRank': 62,
        'lifeExpectancy': 65.62,
        'femaleLifeExpectancy': 68.77,
        'maleLifeExpectancy': 62.45,
        'lifeExpectancyRank': 159, 
        'worldSharePopulation': .25,
        'totalArea': 45747,
        'totalAreaRank': 100,
        'worldShareTotalArea': 0.10 
    },

    'malaysia': {
        'capital': 'Kuala Lumpur',
        'population': 	32365999,
        'populationRank': 45,
        'lifeExpectancy': 76.65,
        'femaleLifeExpectancy': 78.78,
        'maleLifeExpectancy': 74.71,
        'lifeExpectancyRank': 74, 
        'worldSharePopulation': 0.42,
        'totalArea': 127724,
        'totalAreaRank': 68,
        'worldShareTotalArea': 0.20 
    },

    'maldives': {
        'capital': 'Male',
        'population': 540544,
        'populationRank': 174,
        'lifeExpectancy': 79.89,
        'femaleLifeExpectancy': 81.58,
        'maleLifeExpectancy': 78.53,
        'lifeExpectancyRank': 40, 
        'worldSharePopulation': 0.01,
        'totalArea': 116,
        'totalAreaRank': 209,
        'worldShareTotalArea': 0.00 
    },

    'mali': {
        'capital': 'Bamako',
        'population': 20250833,
        'populationRank': 60,
        'lifeExpectancy': 60.54,
        'femaleLifeExpectancy': 61.39,
        'maleLifeExpectancy': 59.69,
        'lifeExpectancyRank': 182, 
        'worldSharePopulation': .26,
        'totalArea': 478841,
        'totalAreaRank': 24,
        'worldShareTotalArea': 0.80 
    },

    'malta': {
        'capital': 'Valletta',
        'population': 441543,
        'populationRank': 175,
        'lifeExpectancy': 83.06,
        'femaleLifeExpectancy': 84.68,
        'maleLifeExpectancy': 81.37,
        'lifeExpectancyRank': 15, 
        'worldSharePopulation': 0.01,
        'totalArea': 122,
        'totalAreaRank': 208,
        'worldShareTotalArea': 0.00 
    },

    'marshall islands': {
        'capital': 'Majuro',
        'population': 	59190,
        'populationRank': 207,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 70,
        'totalAreaRank': 216,
        'worldShareTotalArea': 0.00 
    },

    'martinique': {
        'capital': 'Fort-de-France',
        'population': 375265,
        'populationRank': 180,
        'lifeExpectancy': 83.13,
        'femaleLifeExpectancy': 86.10,
        'maleLifeExpectancy': 79.85,
        'lifeExpectancyRank': 14, 
        'worldSharePopulation': 0.00,
        'totalArea': 436,
        'totalAreaRank': 182,
        'worldShareTotalArea': 0.00 
    },

    'mauritania': {
        'capital': 'Nouakchott',
        'population': 4649658,
        'populationRank': 127,
        'lifeExpectancy': 65.57,
        'femaleLifeExpectancy': 67.24,
        'maleLifeExpectancy': 63.88,
        'lifeExpectancyRank': 160, 
        'worldSharePopulation': 0.06,
        'totalArea': 397955,
        'totalAreaRank': 29,
        'worldShareTotalArea': 0.70 
    },

    'mauritius': {
        'capital': 'Port Louis',
        'population': 1271768,
        'populationRank': 157,
        'lifeExpectancy': 75.51,
        'femaleLifeExpectancy': 78.92,
        'maleLifeExpectancy': 72.21,
        'lifeExpectancyRank': 88, 
        'worldSharePopulation': 0.02,
        'totalArea': 788,
        'totalAreaRank': 178,
        'worldShareTotalArea': 0.00 
    },
    
    'mayotte': {
        'capital': 'Mamoudzou',
        'population': 	272815,
        'populationRank': 187,
        'lifeExpectancy': 79.85,
        'femaleLifeExpectancy': 83.24,
        'maleLifeExpectancy': 76.62,
        'lifeExpectancyRank': 41, 
        'worldSharePopulation': 0.00,
        'totalArea': 144,
        'totalAreaRank': 204,
        'worldShareTotalArea': 0.00 
    },

    'mexico': {
        'capital': 'Mexico City',
        'population': 128932753,
        'populationRank': 10,
        'lifeExpectancy': 75.41,
        'femaleLifeExpectancy': 78.17,
        'maleLifeExpectancy': 72.62,
        'lifeExpectancyRank': 90, 
        'worldSharePopulation': 1.65,
        'totalArea': 758449,
        'totalAreaRank': 14,
        'worldShareTotalArea': 1.30 
    },

    'micronesia': {
        'capital': 'Palikir',
        'population': 548914,
        'populationRank': 173,
        'lifeExpectancy': 74.08,
        'femaleLifeExpectancy': 77.20,
        'maleLifeExpectancy': 71.14,
        'lifeExpectancyRank': 102, 
        'worldSharePopulation': 0.01,
        'totalArea': 271,
        'totalAreaRank': 191,
        'worldShareTotalArea': 0.00 
    },

    'moldova': {
        'capital': 'Chisinau',
        'population': 	4033963,
        'populationRank': 131,
        'lifeExpectancy': 72.30,
        'femaleLifeExpectancy': 76.53,
        'maleLifeExpectancy': 68.02,
        'lifeExpectancyRank': 123, 
        'worldSharePopulation': 0.05,
        'totalArea': 13068,
        'totalAreaRank': 139,
        'worldShareTotalArea': 0.00 
    },

    'monaco': {
        'capital': 'Monaco',
        'population': 	39242,
        'populationRank': 214,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 1,
        'totalAreaRank': 232,
        'worldShareTotalArea': 0.00 
    },

    'mongolia': {
        'capital': 'Ulaanbaatar',
        'population': 3278290,
        'populationRank': 136,
        'lifeExpectancy': 70.53,
        'femaleLifeExpectancy': 74.79,
        'maleLifeExpectancy': 66.43,
        'lifeExpectancyRank': 135, 
        'worldSharePopulation': 0.04,
        'totalArea': 603906,
        'totalAreaRank': 19,
        'worldShareTotalArea': 1.00 
    },

    'montenegro': {
        'capital': 'Podgorica',
        'population': 628066,
        'populationRank': 168,
        'lifeExpectancy': 77.39,
        'femaleLifeExpectancy': 79.77,
        'maleLifeExpectancy': 74.99,
        'lifeExpectancyRank': 67, 
        'worldSharePopulation': 0.01,
        'totalArea': 5333,
        'totalAreaRank': 161,
        'worldShareTotalArea': 0.00 
    },

    'montserrat': {
        'capital': 'Brades',
        'population': 4992,
        'populationRank': 231,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 39,
        'totalAreaRank': 221,
        'worldShareTotalArea': 0.00 
    },

    'morocco': {
        'capital': 'Rabat',
        'population': 36910560,
        'populationRank': 40,
        'lifeExpectancy': 77.43,
        'femaleLifeExpectancy': 78.66,
        'maleLifeExpectancy': 76.17,
        'lifeExpectancyRank': 66, 
        'worldSharePopulation': 0.47,
        'totalArea': 172414,
        'totalAreaRank': 58,
        'worldShareTotalArea': 0.30 
    },

    'mozambique': {
        'capital': 'Maputo',
        'population': 	31255435,
        'populationRank': 46,
        'lifeExpectancy': 62.13,
        'femaleLifeExpectancy': 64.95,
        'maleLifeExpectancy': 59.05,
        'lifeExpectancyRank': 179, 
        'worldSharePopulation': 0.40,
        'totalArea': 309496,
        'totalAreaRank': 36,
        'worldShareTotalArea': 0.50 
    },

    'myanmar': {
        'capital': 'Nay Pyi Taw',
        'population': 	54409800,
        'populationRank': 26,
        'lifeExpectancy': 67.78,
        'femaleLifeExpectancy': 70.81,
        'maleLifeExpectancy': 64.65,
        'lifeExpectancyRank': 151, 
        'worldSharePopulation': 0.70,
        'totalArea': 261228,
        'totalAreaRank': 40,
        'worldShareTotalArea': 0.40 
    },

    'namibia': {
        'capital': 'Windhoek',
        'population': 2540905,
        'populationRank': 143,
        'lifeExpectancy': 64.86,
        'femaleLifeExpectancy': 67.67,
        'maleLifeExpectancy': 61.83,
        'lifeExpectancyRank': 168, 
        'worldSharePopulation': 0.03,
        'totalArea': 318772,
        'totalAreaRank': 35,
        'worldShareTotalArea': 0.60 
    },

    'nauru': {
        'capital': 'Yaren',
        'population': 	10824,
        'populationRank': 227,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 8,
        'totalAreaRank': 229,
        'worldShareTotalArea': 0.00 
    },

    'nepal': {
        'capital': 'Kathmandu',
        'population': 	29136808,
        'populationRank': 49,
        'lifeExpectancy': 71.74,
        'femaleLifeExpectancy': 73.23,
        'maleLifeExpectancy': 70.13,
        'lifeExpectancyRank': 128, 
        'worldSharePopulation': .37,
        'totalArea': 56827,
        'totalAreaRank': 95,
        'worldShareTotalArea': 0.10 
    },

    'netherlands': {
        'capital': 'Amsterdam',
        'population': 17134872,
        'populationRank': 69,
        'lifeExpectancy': 82.78,
        'femaleLifeExpectancy': 84.35,
        'maleLifeExpectancy': 81.20,
        'lifeExpectancyRank': 21, 
        'worldSharePopulation': 0.22,
        'totalArea': 16158,
        'totalAreaRank': 134,
        'worldShareTotalArea': 0.00 
    },

    'new caledonia': {
        'capital': 'Noumea',
        'population': 	285498,
        'populationRank': 185,
        'lifeExpectancy': 78.16,
        'femaleLifeExpectancy': 80.89,
        'maleLifeExpectancy': 75.61,
        'lifeExpectancyRank': 55, 
        'worldSharePopulation': 0.00,
        'totalArea': 7172,
        'totalAreaRank': 155,
        'worldShareTotalArea': 0.00 
    },

    'new zealand': {
        'capital': 'Wellington',
        'population': 4822233,
        'populationRank': 126,
        'lifeExpectancy': 82.80,
        'femaleLifeExpectancy': 84.38,
        'maleLifeExpectancy': 81.20,
        'lifeExpectancyRank': 19, 
        'worldSharePopulation': 0.06,
        'totalArea': 104428,
        'totalAreaRank': 76,
        'worldShareTotalArea': 0.20 
    },

    'nicaragua': {
        'capital': 'Managua',
        'population': 6624554,
        'populationRank': 110,
        'lifeExpectancy': 75.23,
        'femaleLifeExpectancy': 78.65,
        'maleLifeExpectancy': 71.75,
        'lifeExpectancyRank': 91, 
        'worldSharePopulation': 0.08,
        'totalArea': 50337,
        'totalAreaRank': 98,
        'worldShareTotalArea': 0.10 
    },

    'niger': {
        'capital': 'Niamey',
        'population': 24206644,
        'populationRank': 56,
        'lifeExpectancy': 63.62,
        'femaleLifeExpectancy': 64.89,
        'maleLifeExpectancy': 62.41,
        'lifeExpectancyRank': 171, 
        'worldSharePopulation': 0.31,
        'totalArea': 489191,
        'totalAreaRank': 22,
        'worldShareTotalArea': 0.90 
    },

    'nigeria': {
        'capital': 'Abuja',
        'population': 	206139589,
        'populationRank': 7,
        'lifeExpectancy': 55.75,
        'femaleLifeExpectancy': 56.75,
        'maleLifeExpectancy': 54.80,
        'lifeExpectancyRank': 190, 
        'worldSharePopulation': 2.64,
        'totalArea': 356669,
        'totalAreaRank': 32,
        'worldShareTotalArea': 0.60 
    },

    'niue': {
        'capital': 'Alofi',
        'population': 	1626,
        'populationRank': 233,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 100,
        'totalAreaRank': 212,
        'worldShareTotalArea': 0.00 
    },

    'north korea': {
        'capital': 'Pyongyang',
        'population': 25778816,
        'populationRank': 54,
        'lifeExpectancy': 72.89,
        'femaleLifeExpectancy': 76.37,
        'maleLifeExpectancy': 69.26,
        'lifeExpectancyRank': 115, 
        'worldSharePopulation': 0.33,
        'totalArea': 46540,
        'totalAreaRank': 99,
        'worldShareTotalArea': 0.10 
    },

    'north macedonia': {
        'capital': 'Skopje',
        'population': 2083374,
        'populationRank': 148,
        'lifeExpectancy': 76.26,
        'femaleLifeExpectancy': 78.32,
        'maleLifeExpectancy': 74.26,
        'lifeExpectancyRank': 80, 
        'worldSharePopulation': 0.03,
        'totalArea': 'unknown',
        'totalAreaRank': 'unknown',
        'worldShareTotalArea': 'unknown'
    },

    'northern mariana islands': {
        'capital': 'Saipan',
        'population': 57559,
        'populationRank': 208,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 179,
        'totalAreaRank': 196,
        'worldShareTotalArea': 0.00 
    },

    'norway': {
        'capital': 'Oslo',
        'population': 5421241,
        'populationRank': 119,
        'lifeExpectancy': 82.94,
        'femaleLifeExpectancy': 84.78,
        'maleLifeExpectancy': 81.11,
        'lifeExpectancyRank': 17, 
        'worldSharePopulation': 0.07,
        'totalArea': 125021,
        'totalAreaRank': 69,
        'worldShareTotalArea': 0.20 
    },

    'oman': {
        'capital': 'Muscat',
        'population': 5106626,
        'populationRank': 120,
        'lifeExpectancy': 78.58,
        'femaleLifeExpectancy': 80.94,
        'maleLifeExpectancy': 76.90,
        'lifeExpectancyRank': 50, 
        'worldSharePopulation': 0.07,
        'totalArea': 119499,
        'totalAreaRank': 72,
        'worldShareTotalArea': 0.20 
    },

    'pakistan': {
        'capital': 'Islamabad',
        'population': 220892340,
        'populationRank': 5,
        'lifeExpectancy': 67.79,
        'femaleLifeExpectancy': 68.90,
        'maleLifeExpectancy': 66.77,
        'lifeExpectancyRank': 150, 
        'worldSharePopulation': 2.83,
        'totalArea': 340508,
        'totalAreaRank': 34,
        'worldShareTotalArea': 0.50 
    },

    'palau': {
        'capital': 'Melekeok',
        'population': 18094,
        'populationRank': 222,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 177,
        'totalAreaRank': 197,
        'worldShareTotalArea': 0.00 
    },

    'panama': {
        'capital': 'Panama City',
        'population': 4314767,
        'populationRank': 128,
        'lifeExpectancy': 79.10,
        'femaleLifeExpectancy': 82.20,
        'maleLifeExpectancy': 76.14,
        'lifeExpectancyRank': 47, 
        'worldSharePopulation': 0.06,
        'totalArea': 29119,
        'totalAreaRank': 119,
        'worldShareTotalArea': 0.00 
    },

    'papua new guinea': {
        'capital': 'Port Moresby',
        'population': 8947024,
        'populationRank': 98,
        'lifeExpectancy': 65.22,
        'femaleLifeExpectancy': 66.62,
        'maleLifeExpectancy': 63.92,
        'lifeExpectancyRank': 161, 
        'worldSharePopulation': 0.11,
        'totalArea': 178703,
        'totalAreaRank': 55,
        'worldShareTotalArea': 0.30 
    },

    'paraguay': {
        'capital': 'Asuncion',
        'population': 	7132538,
        'populationRank': 106,
        'lifeExpectancy': 74.59,
        'femaleLifeExpectancy': 76.78,
        'maleLifeExpectancy': 72.55,
        'lifeExpectancyRank': 99, 
        'worldSharePopulation': 0.09,
        'totalArea': 157048,
        'totalAreaRank': 60,
        'worldShareTotalArea': 0.30 
    },

    'peru': {
        'capital': 'Lima',
        'population': 32971854,
        'populationRank': 43,
        'lifeExpectancy': 77.44,
        'femaleLifeExpectancy': 80.15,
        'maleLifeExpectancy': 74.87,
        'lifeExpectancyRank': 65, 
        'worldSharePopulation': 0.42,
        'totalArea': 496224,
        'totalAreaRank': 20,
        'worldShareTotalArea': 0.90 
    },

    'philippines': {
        'capital': 'Manila',
        'population': 109581078,
        'populationRank': 13,
        'lifeExpectancy': 71.66,
        'femaleLifeExpectancy': 75.92,
        'maleLifeExpectancy': 67.67,
        'lifeExpectancyRank': 129, 
        'worldSharePopulation': 1.41,
        'totalArea': 132183,
        'totalAreaRank': 64,
        'worldShareTotalArea': 0.20 
    },

    'poland': {
        'capital': 'Warsaw',
        'population': 37846611,
        'populationRank': 38,
        'lifeExpectancy': 79.27,
        'femaleLifeExpectancy': 82.98,
        'maleLifeExpectancy': 75.51,
        'lifeExpectancyRank': 44, 
        'worldSharePopulation': 0.49,
        'totalArea': 120726,
        'totalAreaRank': 71,
        'worldShareTotalArea': 0.20 
    },

    'portugal': {
        'capital': 'Lisbon',
        'population': 	10196709,
        'populationRank': 89,
        'lifeExpectancy': 82.65,
        'femaleLifeExpectancy': 85.28,
        'maleLifeExpectancy': 79.79,
        'lifeExpectancyRank': 23, 
        'worldSharePopulation': 0.13,
        'totalArea': 35556,
        'totalAreaRank': 111,
        'worldShareTotalArea': 0.10 
    },

    'puerto rico': {
        'capital': 'San Juan',
        'population': 2860853,
        'populationRank': 141,
        'lifeExpectancy': 80.69,
        'femaleLifeExpectancy': 83.92,
        'maleLifeExpectancy': 77.27,
        'lifeExpectancyRank': 38, 
        'worldSharePopulation': 0.04,
        'totalArea': 3425,
        'totalAreaRank': 169,
        'worldShareTotalArea': 0.00 
    },

    'qatar': {
        'capital': 'Doha',
        'population': 2881053,
        'populationRank': 139,
        'lifeExpectancy': 80.73,
        'femaleLifeExpectancy': 82.49,
        'maleLifeExpectancy': 79.78,
        'lifeExpectancyRank': 37, 
        'worldSharePopulation': 0.04,
        'totalArea': 4473,
        'totalAreaRank': 164,
        'worldShareTotalArea': 0.00 
    },

    'romania': {
        'capital': 'Bucharest',
        'population': 	19237691,
        'populationRank': 61,
        'lifeExpectancy': 76.50,
        'femaleLifeExpectancy': 79.91,
        'maleLifeExpectancy': 73.13,
        'lifeExpectancyRank': 76, 
        'worldSharePopulation': 0.25,
        'totalArea': 92043,
        'totalAreaRank': 83,
        'worldShareTotalArea': 0.20 
    },

    'russia': {
        'capital': 'Moscow',
        'population': 145934462,
        'populationRank': 9,
        'lifeExpectancy': 72.99,
        'femaleLifeExpectancy': 78.15,
        'maleLifeExpectancy': 67.62,
        'lifeExpectancyRank': 113, 
        'worldSharePopulation': 1.87,
        'totalArea': 6601665,
        'totalAreaRank': 1,
        'worldShareTotalArea': 11.00 
    },

    'rwanda': {
        'capital': 'Kigali',
        'population': 12952218,
        'populationRank': 76,
        'lifeExpectancy': 70.00,
        'femaleLifeExpectancy': 72.16,
        'maleLifeExpectancy': 67.75,
        'lifeExpectancyRank': 139, 
        'worldSharePopulation': 0.17,
        'totalArea': 10169,
        'totalAreaRank': 148,
        'worldShareTotalArea': 0.00 
    },

    'reunion': {
        'capital': 'Saint-Denis',
        'population': 	895312,
        'populationRank': 162,
        'lifeExpectancy': 81.55,
        'femaleLifeExpectancy': 84.45,
        'maleLifeExpectancy': 78.52,
        'lifeExpectancyRank': 30, 
        'worldSharePopulation': 0.01,
        'totalArea': 970,
        'totalAreaRank': 177,
        'worldShareTotalArea': 0.00 
    },

    'saint barthelemy': {
        'capital': 'Gustavia',
        'population': 9877,
        'populationRank': 228,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 8,
        'totalAreaRank': 229,
        'worldShareTotalArea': 0.00 
    },

    'saint helena': {
        'capital': 'Jamestown',
        'population': 6077,
        'populationRank': 229,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 152,
        'totalAreaRank': 202,
        'worldShareTotalArea': 0.00 
    },

    'saint kitts & nevis': {
        'capital': 'Basseterre',
        'population': 53199,
        'populationRank': 211,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 101,
        'totalAreaRank': 211,
        'worldShareTotalArea': 0.00 
    },

    'saint lucia': {
        'capital': 'Castries',
        'population': 183627,
        'populationRank': 190,
        'lifeExpectancy': 76.67,
        'femaleLifeExpectancy': 78.06,
        'maleLifeExpectancy': 75.27,
        'lifeExpectancyRank': 73, 
        'worldSharePopulation': 0.00,
        'totalArea': 238,
        'totalAreaRank': 192,
        'worldShareTotalArea': 0.00 
    },

    'saint martin': {
        'capital': 'Philipsburg',
        'population': 38666,
        'populationRank': 216,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 20,
        'totalAreaRank': 225,
        'worldShareTotalArea': 0.00 
    },

    'saint pierre & miquelon': {
        'capital': 'Saint-Pierre',
        'population': 5794,
        'populationRank': 230,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 93,
        'totalAreaRank': 213,
        'worldShareTotalArea': 0.00 
    },

    'samoa': {
        'capital': 'Apia',
        'population': 198414,
        'populationRank': 189,
        'lifeExpectancy': 73.75,
        'femaleLifeExpectancy': 75.97,
        'maleLifeExpectancy': 71.69,
        'lifeExpectancyRank': 106, 
        'worldSharePopulation': 0.00,
        'totalArea': 1097,
        'totalAreaRank': 175,
        'worldShareTotalArea': 0.00 
    },

    'san marino': {
        'capital': 'San Marino',
        'population': 33931,
        'populationRank': 218,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 24,
        'totalAreaRank': 223,
        'worldShareTotalArea': 0.00 
    },

    'sao tome & principe': {
        'capital': 'Sao Tome',
        'population': 219159,
        'populationRank': 188,
        'lifeExpectancy': 71.01,
        'femaleLifeExpectancy': 73.50,
        'maleLifeExpectancy': 68.54,
        'lifeExpectancyRank': 132, 
        'worldSharePopulation': 0.00,
        'totalArea': 372,
        'totalAreaRank': 184,
        'worldShareTotalArea': 0.00 
    },

    'saudi arabia': {
        'capital': 'Riyadh',
        'population': 34813871,
        'populationRank': 41,
        'lifeExpectancy': 75.69,
        'femaleLifeExpectancy': 77.37,
        'maleLifeExpectancy': 74.47,
        'lifeExpectancyRank': 86, 
        'worldSharePopulation': 0.45,
        'totalArea': 830000,
        'totalAreaRank': 13,
        'worldShareTotalArea': 1.4 
    },

    'senegal': {
        'capital': 'Dakar',
        'population': 16743927,
        'populationRank': 70,
        'lifeExpectancy': 68.87,
        'femaleLifeExpectancy': 70.88,
        'maleLifeExpectancy': 66.64,
        'lifeExpectancyRank': 143, 
        'worldSharePopulation': 0.21,
        'totalArea': 75955,
        'totalAreaRank': 88,
        'worldShareTotalArea': 0.10 
    },

    'serbia': {
        'capital': 'Belgrade',
        'population': 8737371,
        'populationRank': 99,
        'lifeExpectancy': 76.47,
        'femaleLifeExpectancy': 79.05,
        'maleLifeExpectancy': 73.89,
        'lifeExpectancyRank': 77, 
        'worldSharePopulation': 0.11,
        'totalArea': 34116,
        'totalAreaRank': 113,
        'worldShareTotalArea': 0.10 
    },

    'seychelles': {
        'capital': 'Victoria',
        'population': 	98347,
        'populationRank': 200,
        'lifeExpectancy': 73.74,
        'femaleLifeExpectancy': 77.71,
        'maleLifeExpectancy': 70.26,
        'lifeExpectancyRank': 107, 
        'worldSharePopulation': 0.00,
        'totalArea': 175,
        'totalAreaRank': 198,
        'worldShareTotalArea': 0.00 
    },

    'sierra leone': {
        'capital': 'Freetown',
        'population': 	7976983,
        'populationRank': 103,
        'lifeExpectancy': 55.92,
        'femaleLifeExpectancy': 56.78,
        'maleLifeExpectancy': 55.01,
        'lifeExpectancyRank': 189, 
        'worldSharePopulation': 0.10,
        'totalArea': 27699,
        'totalAreaRank': 120,
        'worldShareTotalArea': 0.00 
    },

    'singapore': {
        'capital': 'Singapore',
        'population': 5850342,
        'populationRank': 114,
        'lifeExpectancy': 84.07,
        'femaleLifeExpectancy': 86.15,
        'maleLifeExpectancy': 82.06,
        'lifeExpectancyRank': 5, 
        'worldSharePopulation': 0.08,
        'totalArea': 274,
        'totalAreaRank': 190,
        'worldShareTotalArea': 0.00 
    },

    'sint maarten': {
        'capital': 'Philipsburg',
        'population': 42876,
        'populationRank': 213,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 13,
        'totalAreaRank': 226,
        'worldShareTotalArea': 0.00 
    },

    'slovakia': {
        'capital': 'Bratislava',
        'population': 5459642,
        'populationRank': 118,
        'lifeExpectancy': 78.00,
        'femaleLifeExpectancy': 81.35,
        'maleLifeExpectancy': 74.59,
        'lifeExpectancyRank': 56, 
        'worldSharePopulation': 0.07,
        'totalArea': 18933,
        'totalAreaRank': 130,
        'worldShareTotalArea': 0.00 
    },

    'slovenia': {
        'capital': 'Ljubljana',
        'population': 2078938,
        'populationRank': 149,
        'lifeExpectancy': 81.85,
        'femaleLifeExpectancy': 84.44,
        'maleLifeExpectancy': 79.26,
        'lifeExpectancyRank': 28, 
        'worldSharePopulation': 0.03,
        'totalArea': 7827,
        'totalAreaRank': 154,
        'worldShareTotalArea': 0.00 
    },

    'solomon islands': {
        'capital': 'Honiara',
        'population': 686884,
        'populationRank': 166,
        'lifeExpectancy': 73.38,
        'femaleLifeExpectancy': 75.31,
        'maleLifeExpectancy': 71.60,
        'lifeExpectancyRank': 111, 
        'worldSharePopulation': 0.01,
        'totalArea': 11157,
        'totalAreaRank': 143,
        'worldShareTotalArea': 0.00 
    },

    'somalia': {
        'capital': 'Mogadishu',
        'population': 15893222,
        'populationRank': 73,
        'lifeExpectancy': 58.34,
        'femaleLifeExpectancy': 60.11,
        'maleLifeExpectancy': 56.62,
        'lifeExpectancyRank': 188, 
        'worldSharePopulation': 0.20,
        'totalArea': 246201,
        'totalAreaRank': 42,
        'worldShareTotalArea': 0.40 
    },

    'south africa': {
        'capital': 'Cape Town',
        'population': 	59308690,
        'populationRank': 25,
        'lifeExpectancy': 64.88,
        'femaleLifeExpectancy': 68.42,
        'maleLifeExpectancy': 61.46,
        'lifeExpectancyRank': 167, 
        'worldSharePopulation': 0.76,
        'totalArea': 471445,
        'totalAreaRank': 25,
        'worldShareTotalArea': 0.80 
    },

    'south korea': {
        'capital': 'Seoul',
        'population': 51269185,
        'populationRank': 28,
        'lifeExpectancy': 83.50,
        'femaleLifeExpectancy': 86.42,
        'maleLifeExpectancy': 80.46,
        'lifeExpectancyRank': 11, 
        'worldSharePopulation': 0.66,
        'totalArea': 38691,
        'totalAreaRank': 109,
        'worldShareTotalArea': 0.10 
    },

    'south sudan': {
        'capital': 'Juba',
        'population': 11193725,
        'populationRank': 28,
        'lifeExpectancy': 58.74,
        'femaleLifeExpectancy': 60.31,
        'maleLifeExpectancy': 57.21,
        'lifeExpectancyRank': 187, 
        'worldSharePopulation': 0.66,
        'totalArea': 239285,
        'totalAreaRank': 44,
        'worldShareTotalArea': 0.40 
    },

    'spain': {
        'capital': 'Madrid',
        'population': 	46754778,
        'populationRank': 30,
        'lifeExpectancy': 83.99,
        'femaleLifeExpectancy': 86.68,
        'maleLifeExpectancy': 81.27,
        'lifeExpectancyRank': 7, 
        'worldSharePopulation': 0.60,
        'totalArea': 195365,
        'totalAreaRank': 52,
        'worldShareTotalArea': 0.30 
    },

    'sri lanka': {
        'capital': 'Sri Jayawardenapura Kotte',
        'population': 21413249,
        'populationRank': 58,
        'lifeExpectancy': 77.56,
        'femaleLifeExpectancy': 80.74,
        'maleLifeExpectancy': 74.25,
        'lifeExpectancyRank': 62, 
        'worldSharePopulation': .27,
        'totalArea': 25332,
        'totalAreaRank': 123,
        'worldShareTotalArea': 0.00 
    },

    'st. vincent & grenadines': {
        'capital': 'Kingstown',
        'population': 110940,
        'populationRank': 196,
        'lifeExpectancy': 72.98,
        'femaleLifeExpectancy': 75.62,
        'maleLifeExpectancy': 70.66,
        'lifeExpectancyRank': 114, 
        'worldSharePopulation': 0.00,
        'totalArea': 'unknown',
        'totalAreaRank': 'unknown',
        'worldShareTotalArea': 'unknown' 
    },

    'state of palestine': {
        'capital': 'Jerusalem',
        'population': 5101414,
        'populationRank': 121,
        'lifeExpectancy': 74.62,
        'femaleLifeExpectancy': 76.38,
        'maleLifeExpectancy': 72.92,
        'lifeExpectancyRank': 98, 
        'worldSharePopulation': 0.07,
        'totalArea': 2402,
        'totalAreaRank': 170,
        'worldShareTotalArea': 0.00 
    },

    'sudan': {
        'capital': 'Khartoum',
        'population': 	43849260,
        'populationRank': 34,
        'lifeExpectancy': 66.09,
        'femaleLifeExpectancy': 68.03,
        'maleLifeExpectancy': 64.18,
        'lifeExpectancyRank': 157, 
        'worldSharePopulation': 0.56,
        'totalArea': 728215,
        'totalAreaRank': 16,
        'worldShareTotalArea': 1.20 
    },

    'suriname': {
        'capital': 'Paramaribo',
        'population': 586632,
        'populationRank': 171,
        'lifeExpectancy': 72.13,
        'femaleLifeExpectancy': 75.55,
        'maleLifeExpectancy': 68.88,
        'lifeExpectancyRank': 124, 
        'worldSharePopulation': 0.01,
        'totalArea': 63251,
        'totalAreaRank': 92,
        'worldShareTotalArea': 0.10 
    },

    'sweden': {
        'capital': 'Stockholm',
        'population': 10099265,
        'populationRank': 91,
        'lifeExpectancy': 83.33,
        'femaleLifeExpectancy': 84.97,
        'maleLifeExpectancy': 81.69,
        'lifeExpectancyRank': 13, 
        'worldSharePopulation': 0.13,
        'totalArea': 173860,
        'totalAreaRank': 56,
        'worldShareTotalArea': 0.30 
    },

    'switzerland': {
        'capital': 'Bern',
        'population': 	8654622,
        'populationRank': 91,
        'lifeExpectancy': 84.25,
        'femaleLifeExpectancy': 86.02,
        'maleLifeExpectancy': 82.42,
        'lifeExpectancyRank': 4, 
        'worldSharePopulation': 0.13,
        'totalArea': 15940,
        'totalAreaRank': 135,
        'worldShareTotalArea': 0.00 
    },

    'syria': {
        'capital': 'Damascus',
        'population': 17500658,
        'populationRank': 68,
        'lifeExpectancy': 76.06,
        'femaleLifeExpectancy': 79.11,
        'maleLifeExpectancy': 73.13,
        'lifeExpectancyRank': 81, 
        'worldSharePopulation': 0.22,
        'totalArea': 71498,
        'totalAreaRank': 89,
        'worldShareTotalArea': 0.10 
    },

    'taiwan': {
        'capital': 'Taipei',
        'population': 23816775,
        'populationRank': 57,
        'lifeExpectancy': 81.04,
        'femaleLifeExpectancy': 83.64,
        'maleLifeExpectancy': 78.49,
        'lifeExpectancyRank': 34, 
        'worldSharePopulation': 0.31,
        'totalArea': 13974,
        'totalAreaRank': 137,
        'worldShareTotalArea': 0.00 
    },

    'tajikistan': {
        'capital': 'Dushanbe',
        'population': 9537645,
        'populationRank': 95,
        'lifeExpectancy': 71.76,
        'femaleLifeExpectancy': 74.11,
        'maleLifeExpectancy': 69.50,
        'lifeExpectancyRank': 127, 
        'worldSharePopulation': 0.12,
        'totalArea': 55251,
        'totalAreaRank': 96,
        'worldShareTotalArea': 0.10 
    },

    'tanzania': {
        'capital': 'Dodoma',
        'population': 59734218,
        'populationRank': 24,
        'lifeExpectancy': 66.39,
        'femaleLifeExpectancy': 68.25,
        'maleLifeExpectancy': 64.52,
        'lifeExpectancyRank': 156, 
        'worldSharePopulation': .77,
        'totalArea': 364900,
        'totalAreaRank': 31,
        'worldShareTotalArea': 0.60 
    },

    'thailand': {
        'capital': 'Bangkok',
        'population': 69799978,
        'populationRank': 20,
        'lifeExpectancy': 77.74,
        'femaleLifeExpectancy': 81.34,
        'maleLifeExpectancy': 74.16,
        'lifeExpectancyRank': 59, 
        'worldSharePopulation': 0.90,
        'totalArea': 198117,
        'totalAreaRank': 51,
        'worldShareTotalArea': 0.30 
    },

    'timor-leste': {
        'capital': 'Dili',
        'population': 1318445,
        'populationRank': 156,
        'lifeExpectancy': 70.18,
        'femaleLifeExpectancy': 72.36,
        'maleLifeExpectancy': 68.14,
        'lifeExpectancyRank': 138, 
        'worldSharePopulation': 0.02,
        'totalArea': 5743,
        'totalAreaRank': 159,
        'worldShareTotalArea': 0.00 
    },

    'togo': {
        'capital': 'Lome',
        'population': 8278724,
        'populationRank': 102,
        'lifeExpectancy': 62.13,
        'femaleLifeExpectancy': 63.08,
        'maleLifeExpectancy': 61.16,
        'lifeExpectancyRank': 179, 
        'worldSharePopulation': 0.11,
        'totalArea': 21925,
        'totalAreaRank': 126,
        'worldShareTotalArea': 0.00 
    },

    'tokelau': {
        'capital': 'Nukunonu',
        'population': 1357,
        'populationRank': 234,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 5,
        'totalAreaRank': 230,
        'worldShareTotalArea': 0.00 
    },

    'tonga': {
        'capital': 'Nuku\'alofa',
        'population': 105695,
        'populationRank': 198,
        'lifeExpectancy': 71.32,
        'femaleLifeExpectancy': 73.38,
        'maleLifeExpectancy': 69.28,
        'lifeExpectancyRank': 130, 
        'worldSharePopulation': 0.00,
        'totalArea': 288,
        'totalAreaRank': 189,
        'worldShareTotalArea': 0.00 
    },

    'trinidad and tobago': {
        'capital': 'Port of Spain',
        'population': 1399488,
        'populationRank': 154,
        'lifeExpectancy': 73.91,
        'femaleLifeExpectancy': 76.66,
        'maleLifeExpectancy': 71.24,
        'lifeExpectancyRank': 104, 
        'worldSharePopulation': 0.02,
        'totalArea': 1981,
        'totalAreaRank': 172,
        'worldShareTotalArea': 0.00 
    },

    'tunisia': {
        'capital': 'Tunis',
        'population': 11818619,
        'populationRank': 79,
        'lifeExpectancy': 77.36,
        'femaleLifeExpectancy': 79.34,
        'maleLifeExpectancy': 75.37,
        'lifeExpectancyRank': 68, 
        'worldSharePopulation': 0.15,
        'totalArea': 63170,
        'totalAreaRank': 93,
        'worldShareTotalArea': 0.10 
    },

    'turkey': {
        'capital': 'Istanbul',
        'population': 84339067,
        'populationRank': 17,
        'lifeExpectancy': 78.45,
        'femaleLifeExpectancy': 81.21,
        'maleLifeExpectancy': 75.57,
        'lifeExpectancyRank': 52, 
        'worldSharePopulation': 1.08,
        'totalArea': 302535,
        'totalAreaRank': 37,
        'worldShareTotalArea': 0.50 
    },

    'turkmenistan': {
        'capital': 'Ashgabat',
        'population': 6031200,
        'populationRank': 113,
        'lifeExpectancy': 68.63,
        'femaleLifeExpectancy': 72.19,
        'maleLifeExpectancy': 65.10,
        'lifeExpectancyRank': 144, 
        'worldSharePopulation': 0.08,
        'totalArea': 188456,
        'totalAreaRank': 53,
        'worldShareTotalArea': 0.30 
    },

    'turks and caicos': {
        'capital': 'Cockburn Town',
        'population': 38717,
        'populationRank': 215,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 366,
        'totalAreaRank': 185,
        'worldShareTotalArea': 0.00 
    },

    'tuvalu': {
        'capital': 'Funafuti',
        'population': 11792,
        'populationRank': 225,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 10,
        'totalAreaRank': 228,
        'worldShareTotalArea': 0.00 
    },

    '	u.s. virgin islands': {
        'capital': 'Charlotte Amalie',
        'population': 104425,
        'populationRank': 199,
        'lifeExpectancy': 81.17,
        'femaleLifeExpectancy': 83.52,
        'maleLifeExpectancy': 78.64,
        'lifeExpectancyRank': 33, 
        'worldSharePopulation': 0.00,
        'totalArea': 'unknown',
        'totalAreaRank': 'unknown',
        'worldShareTotalArea': 'unknown' 
    },

    'uganda': {
        'capital': 'Kampala',
        'population': 45741007,
        'populationRank': 31,
        'lifeExpectancy': 64.38,
        'femaleLifeExpectancy': 66.67,
        'maleLifeExpectancy': 61.99,
        'lifeExpectancyRank': 170, 
        'worldSharePopulation': 0.59,
        'totalArea': 93263,
        'totalAreaRank': 81,
        'worldShareTotalArea': 0.10 
    },

    'ukraine': {
        'capital': 'Kiev',
        'population': 43733762,
        'populationRank': 35,
        'lifeExpectancy': 72.50,
        'femaleLifeExpectancy': 77.27,
        'maleLifeExpectancy': 67.56,
        'lifeExpectancyRank': 119, 
        'worldSharePopulation': 0.56,
        'totalArea': 233013,
        'totalAreaRank': 45,
        'worldShareTotalArea': 0.40 
    },

    'united arab emirates': {
        'capital': 'Abu Dhabi',
        'population': 9890402,
        'populationRank': 93,
        'lifeExpectancy': 78.46,
        'femaleLifeExpectancy': 79.80,
        'maleLifeExpectancy': 77.79,
        'lifeExpectancyRank': 51, 
        'worldSharePopulation': 0.13,
        'totalArea': 32278,
        'totalAreaRank': 116,
        'worldShareTotalArea': 0.10 
    },

    'united kingdom': {
        'capital': 'London',
        'population': 	67886011,
        'populationRank': 21,
        'lifeExpectancy': 81.77,
        'femaleLifeExpectancy': 83.28,
        'maleLifeExpectancy': 80.22,
        'lifeExpectancyRank': 29, 
        'worldSharePopulation': .87,
        'totalArea': 93784,
        'totalAreaRank': 80,
        'worldShareTotalArea': 0.20 
    },

    'united states': {
        'capital': 'Washington D.C.',
        'population': 	331002651,
        'populationRank': 3,
        'lifeExpectancy': 79.11,
        'femaleLifeExpectancy': 81.65,
        'maleLifeExpectancy': 76.61,
        'lifeExpectancyRank': 46, 
        'worldSharePopulation': 4.25,
        'totalArea': 3618783,
        'totalAreaRank': 4,
        'worldShareTotalArea': 6.10 
    },

    'uruguay': {
        'capital': 'Montevideo',
        'population': 3473730,
        'populationRank': 134,
        'lifeExpectancy': 78.43,
        'femaleLifeExpectancy': 81.88,
        'maleLifeExpectancy': 74.75,
        'lifeExpectancyRank': 53, 
        'worldSharePopulation': 0.04,
        'totalArea': 69898,
        'totalAreaRank': 91,
        'worldShareTotalArea': 0.10 
    },

    'uzbekistan': {
        'capital': 'Tashkent',
        'population': 33469203,
        'populationRank': 42,
        'lifeExpectancy': 72.04,
        'femaleLifeExpectancy': 74.26,
        'maleLifeExpectancy': 69.80,
        'lifeExpectancyRank': 125, 
        'worldSharePopulation': 0.43,
        'totalArea': 172742,
        'totalAreaRank': 57,
        'worldShareTotalArea': 0.30 
    },

    'vanuatu': {
        'capital': 'Port Vila',
        'population': 307145,
        'populationRank': 182,
        'lifeExpectancy': 70.99,
        'femaleLifeExpectancy': 72.75,
        'maleLifeExpectancy': 69.40,
        'lifeExpectancyRank': 133, 
        'worldSharePopulation': 0.00,
        'totalArea': 4706,
        'totalAreaRank': 162,
        'worldShareTotalArea': 0.00 
    },

    'venezuela': {
        'capital': 'Caracas',
        'population': 	28435940,
        'populationRank': 50,
        'lifeExpectancy': 72.34,
        'femaleLifeExpectancy': 76.25,
        'maleLifeExpectancy': 68.59,
        'lifeExpectancyRank': 121, 
        'worldSharePopulation': .36,
        'totalArea': 353841,
        'totalAreaRank': 33,
        'worldShareTotalArea': 0.60 
    },

    'vietnam': {
        'capital': 'Hanoi',
        'population': 97338579,
        'populationRank': 15,
        'lifeExpectancy': 75.77,
        'femaleLifeExpectancy': 79.85,
        'maleLifeExpectancy': 71.73,
        'lifeExpectancyRank': 84, 
        'worldSharePopulation': 1.25,
        'totalArea': 127882,
        'totalAreaRank': 67,
        'worldShareTotalArea': 0.20 
    },

    'wallis & futuna': {
        'capital': 'Matā\'utu',
        'population': 11239,
        'populationRank': 226,
        'lifeExpectancy': 'unknown',
        'femaleLifeExpectancy': 'unknown',
        'maleLifeExpectancy': 'unknown',
        'lifeExpectancyRank': 'unknown', 
        'worldSharePopulation': 0.00,
        'totalArea': 55,
        'totalAreaRank': 220,
        'worldShareTotalArea': 0.00 
    },
    'western sahara': {
        'capital': 'Laayoune',
        'population': 597339,
        'populationRank': 170,
        'lifeExpectancy': 71.08,
        'femaleLifeExpectancy': 73.19,
        'maleLifeExpectancy': 69.36,
        'lifeExpectancyRank': 131, 
        'worldSharePopulation': 0.01,
        'totalArea': 102703,
        'totalAreaRank': 78,
        'worldShareTotalArea': 0.20
    },
    'yemen': {
        'capital': 'Sana\'a',
        'population': 29825964,
        'populationRank': 48,
        'lifeExpectancy': 66.44,
        'femaleLifeExpectancy': 68.16,
        'maleLifeExpectancy': 64.72,
        'lifeExpectancyRank': 155, 
        'worldSharePopulation': 0.38,
        'totalArea': 203850,
        'totalAreaRank': 78,
        'worldShareTotalArea': 0.20 
    },
    'zambia': {
        'capital': 'Lusaka',
        'population': 	18383955,
        'populationRank': 65,
        'lifeExpectancy': 64.70,
        'femaleLifeExpectancy': 67.71,
        'maleLifeExpectancy': 61.66,
        'lifeExpectancyRank': 169, 
        'worldSharePopulation': 0.24,
        'totalArea': 290850,
        'totalAreaRank': 50,
        'worldShareTotalArea': 0.40 
    },
    'zimbabwe': {
        'capital': 'Harare',
        'population': 14862924,
        'populationRank': 74,
        'lifeExpectancy': 62.16,
        'femaleLifeExpectancy': 63.66,
        'maleLifeExpectancy': 60.39,
        'lifeExpectancyRank': 178, 
        'worldSharePopulation': 0.19,
        'totalArea': 150872,
        'totalAreaRank': 61,
        'worldShareTotalArea': 0.30 
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html') 
})

app.get('/api/:name', (request, response)=>{
    let nameOfCountry = request.params.name.toLowerCase()
    if(countries[nameOfCountry]) {
        response.json(countries[nameOfCountry])
    }else{
        response.json(countries['unknown'])
    }
    response.json(countries)
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})