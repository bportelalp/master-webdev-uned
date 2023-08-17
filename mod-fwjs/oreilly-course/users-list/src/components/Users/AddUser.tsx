import { useState } from "react";
import { User } from "../../interfaces/User";
import Button from "../UI/Button";
import Card from "../UI/Card";
import css from "./AddUser.module.css"
import ErrorModal from "../UI/ErrorModal";

interface AddUserProps {
  onNewUser?(user: User): void 
}

const AddUser: React.FC<AddUserProps> = (props) => {
  const [enteredUser, setEnteredUser] = useState<User>({ userName: "", age: 0 });
  const [errMsg, setErrMsg] = useState<string>('');

  const addUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const errMessage = validateData();

    if(errMessage === undefined){
      props.onNewUser?.(enteredUser);
      setEnteredUser({userName: "", age: 0});
    }
    else {
      setErrMsg(errMessage);
    }
  }

  const validateData = (): string | undefined => {
    let errMessage = undefined;
    // validate age
    if (enteredUser.age < 0)
      errMessage = "La edad debe ser un valor positivo";
    if (enteredUser.userName.trim().length === 0)
      errMessage = "Debes introducir un nombre";
    return errMessage;
  }

  return (
    <>
    <ErrorModal title="Error" message={errMsg} show={!(errMsg === '')} onModalRequestHide={() => setErrMsg('')}/>
    <Card className={css.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUser?.userName}
          onChange={(e) => setEnteredUser((pr) => {
            return {
              ...pr,
              userName: e.target.value
            }
          })
          } />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredUser?.age}
          onChange={(e) => setEnteredUser((pr) => {
            return {
              ...pr,
              age: +e.target.value
            }
          })
          } />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </>
  );
}

export default AddUser;