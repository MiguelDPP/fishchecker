const data = [
  {
    'semana': 1,
    'faseCultivo': 'Alevinaje',
    'dencidad': 250,
    'peso': [1.0, 2.0],
    'alimentoDiario': 0.14,
    'racionesDiarias': 10,
  },
  {
    'semana': 2,
    'faseCultivo': 'Alevinaje',
    'dencidad': 250,
    'peso': [2.0, 4.5],
    'alimentoDiario': 0.25,
    'racionesDiarias': 10,
  },
  {
    'semana': 3,
    'faseCultivo': 'Alevinaje',
    'dencidad': 250,
    'peso': [4.5, 8.0],
    'alimentoDiario': 0.47,
    'racionesDiarias': 9,
  },
  {
    'semana': 4,
    'faseCultivo': 'Alevinaje',
    'dencidad': 250,
    'peso': [8.0, 14],
    'alimentoDiario': 0.56,
    'racionesDiarias': 9,
  },
  {
    'semana': 5,
    'faseCultivo': 'Alevinaje',
    'dencidad': 250,
    'peso': [14, 20],
    'alimentoDiario': 0.64,
    'racionesDiarias': 9,
  },
  {
    'semana': 6,
    'faseCultivo': 'Alevinaje',
    'dencidad': 250,
    'peso': [20, 28],
    'alimentoDiario': 1.25,
    'racionesDiarias': 9,
  },
  {
    'semana': 7,
    'faseCultivo': 'Juveniles',
    'dencidad': 500,
    'peso': [28, 38],
    'alimentoDiario': 1.34,
    'racionesDiarias': 7,
  },
  {
    'semana': 8,
    'faseCultivo': 'Juveniles',
    'dencidad': 500,
    'peso': [38, 48],
    'alimentoDiario': 1.60,
    'racionesDiarias': 7,
  },
  {
    'semana': 9,
    'faseCultivo': 'Juveniles',
    'dencidad': 500,
    'peso': [48, 58],
    'alimentoDiario': 1.83,
    'racionesDiarias': 6,
  },
  {
    'semana': 10,
    'faseCultivo': 'Juveniles',
    'dencidad': 500,
    'peso': [58, 68],
    'alimentoDiario': 2.07,
    'racionesDiarias': 6,
  },
  {
    'semana': 11,
    'faseCultivo': 'Juveniles',
    'dencidad': 900,
    'peso': [68, 80],
    'alimentoDiario': 2.34,
    'racionesDiarias': 6,
  },
  {
    'semana': 12,
    'faseCultivo': 'Juveniles',
    'dencidad': 900,
    'peso': [80, 100],
    'alimentoDiario': 2.20,
    'racionesDiarias': 6,
  },
  {
    'semana': 13,
    'faseCultivo': 'Juveniles',
    'dencidad': 900,
    'peso': [100, 120],
    'alimentoDiario': 2.24,
    'racionesDiarias': 6,
  },
  {
    'semana': 14,
    'faseCultivo': 'Juveniles',
    'dencidad': 900,
    'peso': [120, 140],
    'alimentoDiario': 3.79,
    'racionesDiarias': 5,
  },
  {
    'semana': 15,
    'faseCultivo': 'Pro-engorde',
    'dencidad': 1200,
    'peso': [140, 160],
    'alimentoDiario': 3.87,
    'racionesDiarias': 5,
  },
  {
    'semana': 16,
    'faseCultivo': 'Pro-engorde',
    'dencidad': 1200,
    'peso': [160, 180],
    'alimentoDiario': 4.05,
    'racionesDiarias': 5,
  },
  {
    'semana': 17,
    'faseCultivo': 'Pro-engorde',
    'dencidad': 1200,
    'peso': [180, 200],
    'alimentoDiario': 4.23,
    'racionesDiarias': 5,
  },
  {
    'semana': 18,
    'faseCultivo': 'Pro-engorde',
    'dencidad': 1200,
    'peso': [200, 220],
    'alimentoDiario': 4.32,
    'racionesDiarias': 5,
  },
  {
    'semana': 19,
    'faseCultivo': 'Pro-engorde',
    'dencidad': 1200,
    'peso': [220, 245],
    'alimentoDiario': 4.50,
    'racionesDiarias': 5,
  },
  {
    'semana': 20,
    'faseCultivo': 'Pro-engorde',
    'dencidad': 1200,
    'peso': [245, 270],
    'alimentoDiario': 4.58,
    'racionesDiarias': 4,
  },
  {
    'semana': 21,
    'faseCultivo': 'Engorde',
    'dencidad': 1500,
    'peso': [270, 295],
    'alimentoDiario': 4.68,
    'racionesDiarias': 4,
  },
  {
    'semana': 22,
    'faseCultivo': 'Engorde',
    'dencidad': 1500,
    'peso': [295, 320],
    'alimentoDiario': 4.77,
    'racionesDiarias': 4,
  },
  {
    'semana': 23,
    'faseCultivo': 'Engorde',
    'dencidad': 1500,
    'peso': [320, 345],
    'alimentoDiario': 4.95,
    'racionesDiarias': 4,
  },
  {
    'semana': 24,
    'faseCultivo': 'Engorde',
    'dencidad': 1500,
    'peso': [345, 370],
    'alimentoDiario': 5.31,
    'racionesDiarias': 4,
  },
  {
    'semana': 25,
    'faseCultivo': 'Engorde',
    'dencidad': 1500,
    'peso': [370, 395],
    'alimentoDiario': 5.40,
    'racionesDiarias': 4,
  },
  {
    'semana': 26,
    'faseCultivo': 'Engorde',
    'dencidad': 1500,
    'peso': [395, 420],
    'alimentoDiario': 5.67,
    'racionesDiarias': 4,
  },
  {
    'semana': 27,
    'faseCultivo': 'Engorde',
    'dencidad': 1500,
    'peso': [420, 445],
    'alimentoDiario': 5.94,
    'racionesDiarias': 4,
  },
  {
    'semana': 28,
    'faseCultivo': 'Engorde',
    'dencidad': 1500,
    'peso': [445, 470],
    'alimentoDiario': 6.21,
    'racionesDiarias': 4,
  },
  {
    'semana': 29,
    'faseCultivo': 'Engorde',
    'dencidad': 1500,
    'peso': [470, 500],
    'alimentoDiario': 6.57,
    'racionesDiarias': 4,
  },
  {
    'semana': 30,
    'faseCultivo': 'Engorde',
    'dencidad': 1500,
    'peso': [500, 530],
    'alimentoDiario': 6.84,
    'racionesDiarias': 4,
  },
];

export default data;