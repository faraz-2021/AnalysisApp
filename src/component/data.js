export const   data ={
    labels: ["2007", "2008", "2009", "2010", "2011", "2012", "2013"],
    datasets: [
      {
        data: [106898, 103937, 99492, 87213, 101943, 118848, 103120],
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(255,0,0,${opacity})`,
      },
      {
        data: [97516, 94796, 91818, 69673, 94684, 110633, 95993],
        color: () => `rgba(0,128,0,1)`,
      },
    ],
    legend: ["Men", "Female",],
  }