import "../styles/educational.css";

export default function Educational() {
  return (
    <div className="main">
      <div className="educ">
        <h1>Boas Práticas de Segurança Digital</h1>
        <p>
          1. Use senhas únicas e complexas para cada serviço: Evite reutilizar a
          mesma senha em múltiplos serviços. Utilize uma combinação de letras,
          números e símbolos.
        </p>
        <p>
          2. Evite usar informações pessoais: Não utilize informações como datas
          de nascimento, nomes ou outras informações fáceis de adivinhar.
        </p>
        <p>
          3. Habilite a autenticação de dois fatores (2FA): Sempre que possível,
          ative o 2FA para adicionar uma camada extra de segurança.
        </p>
        <p>
          4. Utilize um gerenciador de senhas: Ferramentas como LastPass,
          1Password ou Bitwarden ajudam a criar e armazenar senhas seguras.
        </p>
        <p>
          5. Mantenha seu software atualizado: Atualize regularmente seus
          dispositivos e aplicativos para evitar vulnerabilidades.
        </p>
        <p>
          6. Desconfie de links suspeitos e e-mails de phishing: Não clique em
          links ou abra anexos em e-mails não solicitados ou suspeitos.
        </p>
        <p>
          7. Faça backup regularmente: Mantenha backups de seus dados
          importantes em locais seguros, como armazenamento na nuvem ou discos
          rígidos externos.
        </p>
        <p>
          8. Use redes Wi-Fi seguras: Evite usar redes Wi-Fi públicas sem
          proteção. Use uma VPN (Rede Privada Virtual) quando precisar acessar
          informações sensíveis em redes públicas.
        </p>
        <p>
          9. Revise as permissões de aplicativos: Verifique as permissões que os
          aplicativos solicitam e assegure-se de que são necessárias para o
          funcionamento deles.
        </p>
        <p>
          10. Fique atento ao compartilhar informações pessoais: Sempre avalie
          se é realmente necessário compartilhar informações pessoais em sites e
          redes sociais.
        </p>

        <button onClick={() => (window.location.href = "/")}>Voltar</button>
      </div>
    </div>
  );
}
