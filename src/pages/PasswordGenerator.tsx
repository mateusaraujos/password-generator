import { useState } from "react";
import "../styles/passwordGenerator.css";
import { Link } from "react-router-dom";

export default function PasswordGenerator() {
  const [password, setPassword] = useState(" ");

  const generatePassword = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let result = "";
    const length = 12;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setPassword(result);
  };

  return (
    <div className="main">
      <div className="link-educ">
        <Link to="/educacional">Segurança Digital</Link>
      </div>
      <div className="password">
        <h1>Gerador de Senhas</h1>
        <h2>Gere sua senha segura clicando no botão</h2>
        <button onClick={generatePassword}>Gerar Senha</button>
        {password && (
          <span className="generated-password">Senha: {password}</span>
        )}
      </div>
    </div>
  );
}
