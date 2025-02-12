// custom hook we made to fetch students from local storage, which we saved on clicking submit button 
import { useState, useEffect } from 'react';

const useFetchStudents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
        const storedStudentsArray =  localStorage.getItem('students');
        console.log(storedStudentsArray);
        
        const result = JSON.parse(storedStudentsArray);
        setData(result);
    };

    fetchData();
  }, []);

  return { data };
};

export default useFetchStudents;
