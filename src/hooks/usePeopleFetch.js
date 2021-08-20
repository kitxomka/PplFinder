import { useState, useEffect } from "react";
import axios from "axios";


export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1)

  
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setIsLoading(true);
    await axios.get(`https://randomuser.me/api/?results=25&page=${page}`)
      .then(response => {
        setIsLoading(false);
        if(page > 1){
          let newUsersData = [...users, ...response.data.results];
          setUsers(newUsersData);
        }else{
          setUsers(response.data.results);
        }
      })
      .catch(error => {
        alert('Axios GET request failed')
      })
  }

  return { users, isLoading, setIsLoading, page, setPage ,fetchUsers };

};