// custom hook we made to fetch students from local storage, which we saved on clicking submit button 
import { useState, useEffect } from 'react';

const useFetchUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = () => {
          const response =  fetch('https://jsonplaceholder.typicode.com/users');
          const result = response.json();
          // console.log(result)
          setUsers(result);
      };

    fetchData();
  }, []);

  return { users };
};

export default useFetchUsers;
