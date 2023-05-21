import { CheckCircleIcon } from "@heroicons/react/20/solid";

const HomeContent = () => {
  return (
    <div className="flex-1 text-sm">
      <h2 className="italic font-semibold mb-2 text-lg">
        Teste técnico da Licitar Digital 2023
      </h2>
      <p className="border-b w-fit border-black dark:border-neutral-200 text-xs">
        <span>22 de maio de 2023 por</span> <a href="https://www.linkedin.com/in/renan-torres-3ba43560/">Renan Torres</a>
      </p>

      <div className="my-12">
        <h3>Frontend Requisitos</h3>
        <ul className="ml-6 list-disc">
          <li className="flex"> <CheckCircleIcon className="w-4"/>  Desenvolver utilizando React e TypeScript.  </li>
          <li>Usar MaterialUI como framework UI. (opcional)</li>
          <li className="flex"> <CheckCircleIcon className="w-4"/> Usar Formik para gerenciamento de formulários. (opcional)</li>
          <li className="flex"> <CheckCircleIcon className="w-4"/> Usar Yup para validação de dados. (opcional)</li>
          <li className="flex"> <CheckCircleIcon className="w-4"/> Usar Axios para realizar requisições ao backend. (opcional)</li>
          <li>Implementar WebSocket para atualização em tempo real. (opcional)</li>
        </ul>
      </div>
      <div className="my-12">
        <h3>Funcionalidades do Frontend</h3>
        <ul className="ml-6 list-disc">
          <li className="flex"> <CheckCircleIcon className="w-4"/> Tela de login: uma tela onde o usuário deve fazer login para acessar a tela de disputa.</li>
          <li className="flex"> <CheckCircleIcon className="w-4"/>Tela de disputa: uma tela onde os usuários logados podem participar de uma disputa de lance.</li>
          <li>Ao enviar um lance, o sistema deve verificar se o valor é menor que o valor de referência e menor que o último lance, respeitando o intervalo entre lances.</li>
          <li>O usuário deve receber um alerta em caso de erro e sucesso no seu lance.</li>
        </ul>
      </div>
      <div className="my-12">
        <h3>Backend Requisitos</h3>
        <ul className="ml-6 list-disc">
          <li className="flex"> <CheckCircleIcon className="w-4"/>  Desenvolver utilizando Nestjs e TypeScript.</li>
          <li className="flex"> <CheckCircleIcon className="w-4"/> Implementar autenticação JWT para permitir apenas usuários logados acessem a aplicação</li>
          <li className="flex"> <CheckCircleIcon className="w-4"/> Usar um banco de dados SQL para armazenar dados do aplicativo. (Opcional)</li>
          <li>Implementar WebSocket para atualização em tempo real. (Opcional)</li>
          <li className="flex"> <CheckCircleIcon className="w-4"/> Usar Class Validator para validar dados de entrada de requisições. (Opcional)</li>
        </ul>
      </div>
      <div className="my-12">
        <h3>Funcionalidades do backend</h3>
        <ul className="ml-6 list-disc">
          <li> Implementar uma API que permita a criação de disputas e lances.</li>
          <li>As disputas devem iniciar automaticamente após o término da anterior, com um limite de tempo de 10 minutos para cada disputa.</li>
        </ul>
      </div>


    </div>
  );
};

export default HomeContent;
