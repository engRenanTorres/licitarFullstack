import { useCallback } from 'react';
import useAuth from '../../utils/hooks/useAuth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormikValues {
  email: string;
  password: string;
}


const Login: React.FC = () => {
  const { signin } = useAuth();

  const validationSchema = Yup.object({
    email: Yup.string().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,'Email inválido').required('O Email é obrigatório'),
    password: Yup.string().required('O password é obrigatório'),
  });
  const initialValues = {
    email: '',
    password: '',
  }


  const handleLogin = useCallback(async (values: FormikValues) => {
      try {
        console.log(values);
        signin(values.email, values.password);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    [signin],
  );
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
        validationSchema={validationSchema}
        >
        <Form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6"
            >
              Email
            </label>
            <div className="mt-2">
              <Field
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="email aqui..."
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage name='email' component='div' className='error' />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 dark:text-purple-300 hover:text-indigo-500"
                >
                  Esqueceu seu password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <Field
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder="Password..."
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage name='password' component='div' className='error' />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Logar
            </button>
          </div>
        </Form>
      </Formik>


      <p className="mt-10 text-center text-sm">
        Não é membro?{' '}
        <a
          href="#"
          className="font-semibold leading-6 text-indigo-600 dark:text-purple-300 hover:text-indigo-500"
        >
          Cadastre-se aqui
        </a>
      </p>
    </div>
  );
};

export default Login;