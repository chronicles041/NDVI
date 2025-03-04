
const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++){
    arr.push(i);
  }
  return arr;
}

const newPerson = () => {
  const statusChange = Math.random();
  return {
    firstName: "First Name", 
    lastName: "Last Name",
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChange > 0.66 ?
        'relationship' : statusChange > 0.33 ?
        'complicated' : 'single'
  }
}

export default function makeData(...lens: number[]) {
  const makeDataLevel = (depth: number = 0) => {
    const len = lens[depth];
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel();
}