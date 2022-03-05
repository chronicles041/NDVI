const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};
function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  


const newPerson = (i) => {
  const statusChange = Math.random();
  const d = randomDate(new Date(2012, 0, 1), new Date());
  return {
    fieldId: i + 1,
    fullName: getRandomString(6),
    plantationDate: '02-02-2022',
    province: getRandomString(6),
    district: getRandomString(6),
    community: getRandomString(6),
    cropName: "Maize",
    phaseName: "Phase 1",
    endvi: 1.034,
    lndvi: 0.223,
    endwi: 0.978,
    lndwi: 0.038,
    detail: "Detail",
  };
};


export default function makeData(...lens: number[]) {
  const makeDataLevel = (depth: number = 0) => {
    const len = lens[depth];
    return range(len).map((d, i) => {
      return {
        ...newPerson(i),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
}
