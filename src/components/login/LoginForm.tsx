import React, {
    useCallback, 
    useState, 
    memo
} from 'react';

const Login: React.FC<LoginFormProps> = ({handleLogin}) => {

    const [identifiant, setIdentifiant] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeIdentifiant = useCallback((event:  React.ChangeEvent<HTMLInputElement>) => {
        setIdentifiant(event.target.value);
    }, [setIdentifiant]);

    const handleChangePassword = useCallback((event:  React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }, [setPassword]);

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleLogin(true);
    }, [handleLogin]);

    return (
        <form onSubmit={handleSubmit}>
            <label  htmlFor="identifiant">
                Identifiant
            </label>
            <input 
                type="text" 
                id="identifiant" 
                name="identifiant" 
                value={identifiant} 
                onChange={handleChangeIdentifiant} 
            />
            <br />
            <label htmlFor="password" >
                Password
            </label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                value={password} 
                onChange={handleChangePassword}
            />
            <input  type="submit" value="Submit"/>
        </form>          
    );
}

type LoginFormProps = {
    handleLogin: (isLogged: boolean) => void
}

export default memo(Login);