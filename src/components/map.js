

const Maps = () => {
  let Students = ['John', 'Mary', 'Doe', 'Samuel'];
  
  let StudentList = Students.map((student) => (
    <h1 key={student}>{student}</h1>
  ))
  
  return <div>{StudentList}</div>;
};

export default Maps;
