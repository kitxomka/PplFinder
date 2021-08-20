import React, { useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";




const UserList = ({ users, isLoading, setIsLoading, page, setPage, fetchUsers }) => {
  const [hoveredUserId, setHoveredUserId] = useState();
  const [filteredCountries, setFilteredCountries] = useState([]);
  
  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };

  const handleMouseLeave = () => {
    setHoveredUserId();
  };

  /**
   * Saving and fetch the favorite users array in/from local storage
   */
  const savedFavUsers = JSON.parse(localStorage.getItem('favUsers'));
  const [favUsers, setFavUsers] = useState(savedFavUsers || []);

  useEffect(() => {
    localStorage.setItem('favUsers', JSON.stringify(favUsers));
  }, [favUsers]);

/**
   * @param {*} val 
   * @returns array of checked checkbox (countries)
   */
  const handeleCheckBoxClick = ({val, filteredCountries, setFilteredCountries}) => {
  let tmpFilteredCountries = JSON.parse(JSON.stringify(filteredCountries));
  let index = tmpFilteredCountries.indexOf(val);
  if(tmpFilteredCountries.length > 0 && index > -1){
    tmpFilteredCountries.splice(index, 1)
  }else{
    tmpFilteredCountries.push(val);
  }
  setFilteredCountries(tmpFilteredCountries);
  }

  /**
   * @param {*} user 
   * @returns true if the user nat exsist in filteredCountries array or if the filteredCountries array is empty(no selected checkboxes), otherwise returns false   
   * 
   */
  const filterUsersByCountry = (user) => filteredCountries.length === 0 || filteredCountries.includes(user.nat); // add memozation?

  /**
   * @param {*} user 
   * @returns array of favorite users
   */
  const handleClick = (user) => {
    let tmpFavUsers = JSON.parse(JSON.stringify(favUsers));
    let filrterArr = tmpFavUsers.filter(fabUser => fabUser.id?.value === user.id?.value);
    let favIndex = tmpFavUsers.indexOf(filrterArr[0]); // some times indexOf will not find the needed object (by referens)
    if(tmpFavUsers.length > 0 && favIndex > -1){
      tmpFavUsers.splice(favIndex, 1);
    } else {
      tmpFavUsers.push(user);
    }
    setFavUsers(tmpFavUsers);

  }
 
/**
 * fet the fav-tab index from local storage 
 * cheking the page index if its 1: render only the fav users else render the all users arr 
 */
const tabIndex = localStorage.getItem('value');
const userToShow = tabIndex === "1" ? favUsers : users;

/**
 * 
 * @param {*} user 
 * @returns true if the user in favUsers array 
 */
const checkUserLike = (user, favUsers) => {
  if(favUsers.length > 0 ){
    for(let i = 0; i < favUsers.length; i++){
      let favUsersId = favUsers[i].id?.value;
      if(favUsersId === user.id?.value){
        return true;
      }
    }
    return false;
  }
}

const handleScroll = (e) => {
  var bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
  if(bottom){
    if(!isLoading){
      let pg = page + 1;
      setPage(pg);
      fetchUsers();
    }
  }
} 

  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="BR" label="Brazil" onChange={(val) => handeleCheckBoxClick({val, filteredCountries, setFilteredCountries})} />
        <CheckBox value="AU" label="Australia" onChange={(val) => handeleCheckBoxClick({val, filteredCountries, setFilteredCountries})} />
        <CheckBox value="CA" label="Canada" onChange={(val) => handeleCheckBoxClick({val, filteredCountries, setFilteredCountries})} />
        <CheckBox value="DE" label="Germany" onChange={(val) => handeleCheckBoxClick({val, filteredCountries, setFilteredCountries})} />
        <CheckBox value="ES" label="Spain" onChange={(val) => handeleCheckBoxClick({val, filteredCountries, setFilteredCountries})} />
      </S.Filters>
      <S.List onScroll={handleScroll}>
        {userToShow.filter(filterUsersByCountry).map((user, index) => {
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(user)}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper isVisible={index === hoveredUserId || checkUserLike(user, favUsers)} >
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );
        })}
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )} 
      </S.List>
    </S.UserList>
  );
};

export default UserList;