import { User } from "../../interfaces/User";
import Card from "../UI/Card";
import css from "./UsersList.module.css"

interface UsersListProps {
  users: User[]
}

const UsersList: React.FC<UsersListProps> = (props) => {
  return (
    <Card className={css.users}>
      <ul>
        {props.users.map((usr, idx) =>
          <li key={idx}>
            {usr.userName} ({usr.age} years old)
          </li>)}
      </ul>
    </Card>
  );
}

export default UsersList;