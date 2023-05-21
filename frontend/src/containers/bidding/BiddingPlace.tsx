import { PaperAirplaneIcon, PlusCircleIcon } from '@heroicons/react/20/solid';
import TButton from '../../components/ui/TButton';
import BiddingListItem from './BiddingListItem';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { useCallback } from 'react';

const biddingOffers = [
  {
    id: 1,
    name: "Renan",
    offer: 1000,
  },
  {
    id: 2,
    name: "Renan",
    offer: 1000,
  },
  {
    id: 3,
    name: "Renan",
    offer: 1000,
  },
  {
    id: 4,
    name: "Renan",
    offer: 1000,
  },
]

const BiddingPlace: React.FC = () => {

  const validationSchema = Yup.object({
    offer: Yup.string().matches(/\d/).required('O valor deve conter apenas números'),
  });
  const initialValues = {
    offer: 200.0,
  }

  const handleLogin = useCallback(async (values: FormikValues) => {
      try {
        console.log(values);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    [],
  );

  return (
      <>
        <header className='flex justify-center items-center pb-6'>
          <h2 className='text-xl font-bold'>Licitação 1</h2>
        </header>
        <div className='items-center max-h-96 mx-6'>
          {biddingOffers.map((bidding) => (
            <div key={bidding.id}>
              <BiddingListItem {...bidding} />
              <br />
            </div>
          ))}
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleLogin}
          validationSchema={validationSchema}>
          <div className='pt-4 border-t-2 border-t-black dark:border-t-white'>
            <Form className='flex justify-around '>
              <div className='w-[80%] '>
                <Field
                  id="offer"
                  name="offer"
                  type="number"
                  required
                  placeholder="Nova oferta..."
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage name='offer' component='div' className='error' />
              </div>
              <div className='flex justify-center items-center'>
                <TButton color='black' to="create">
                  <PaperAirplaneIcon className="h-8 w-8" />
                </TButton>
              </div>
            </Form>

          </div>
        </Formik>
      </>
  );
};

export default BiddingPlace;
