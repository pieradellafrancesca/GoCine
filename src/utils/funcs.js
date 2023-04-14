export const numFormat = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
};

//---------------------------------------------------//
// Per la Info Page
//---------------------------------------------------//

export const convertMinsToHrsMins = (mins) => {
  let h = Math.floor(mins / 60);
  let m = mins % 60;
  h = h < 10 ? +h : h;
  m = m < 10 ? "0" + m : m;

  if (mins === 60 || mins === 120 || mins === 180) {
    return `${h}h`;
  } else {
    return `${h}h ${m}m`;
  }
};

export const arrayShortener = (arr = []) => {
  let movieGenres = arr;
  const emptyArr = [];
  if (arr.length > 2) {
    let newMovieGenres = movieGenres.slice(0, 2);
    newMovieGenres.map((item) => emptyArr.push(item.name));
    newMovieGenres = [...emptyArr];
    return newMovieGenres;
  } else {
    movieGenres?.map((item) => emptyArr.push(item.name));
    movieGenres = [...emptyArr];
    return movieGenres;
  }
};

export const sortDate = (arr) => {
  const arrayDate = arr?.split("-");
  let day = arrayDate[2];
  const month = arrayDate[1];
  const years = arrayDate[0];

  day[0] === "0" && (day = day.substring(1));

  const fullMonth = Intl.DateTimeFormat("it", { month: "long" }).format(
    new Date(month)
  );

  const sortedDate = `${day} ${fullMonth}, ${years}`;
  return sortedDate;
};
