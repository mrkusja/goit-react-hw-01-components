export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li>
      {isOnline === true ? <span>green</span> : <span>red</span>}
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};
