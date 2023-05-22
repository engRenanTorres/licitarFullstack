import { PaperAirplaneIcon } from '@heroicons/react/20/solid';
import TButton from '../../components/ui/TButton';
import BiddingListItem from './BiddingListItem';
import { ErrorMessage, Field, Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { useCallback, useEffect, useState } from 'react';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';
import useAuth from '../../utils/hooks/useAuth';

interface Offer {
  id?: string;
  name: string;
  value: number;
}


const socket = io(import.meta.env.VITE_BACKEND);


const BiddingPlace: React.FC = () => {
  const [baseOffer, setBaseOffer] = useState<Offer>({name: 'Inicial', value: 50});
  const [offers, setOffers] = useState<Offer[]>([{id: uuidv4(), name: baseOffer.name, value: baseOffer.value}]);

  const validationSchema = Yup.object({
    offer: Yup.number()
      .min(baseOffer.value, 'O lance mínimo é R$ ' + baseOffer.value)
      .required('O valor deve conter apenas números'),
  });
  const initialValues = {
    offer: baseOffer,
  };

  const { currentUser } = useAuth();

  const sendOffer = (values: FormikValues) => {

    const offer: Offer = {
      name: currentUser? currentUser.name : 'Não identificado',
      value: values.offer,
    }
    socket.emit('offerToServer', offer)
    try {
      console.log(values);
    } catch (error) {
      alert(error);
      console.log(error);
    }

  }

  const receivedOffer = useCallback((offer: Offer) => {
    const newOffer: Offer = {
      id: uuidv4(),
      name: offer.name,
      value: offer.value,
    }
    const ordenedOffers = offers.sort((offer1, offer2) => offer1.value > offer2.value? 1 : -1)
    //console.log(ordenedOffers);
    if(ordenedOffers.length > 0){
      const biggestOffer = ordenedOffers[ordenedOffers.length -1];
      setBaseOffer(biggestOffer)
    }

    setOffers([...ordenedOffers,newOffer]);
  },[offers]);

  useEffect(()=>{
    socket.on('offerToClient',(offer: Offer) => {
      receivedOffer(offer);
    })
  },[offers]);

  return (
    <>
      <header className="flex-1 justify-center items-center pb-6">
        <h2 className="text-xl text-center font-bold">Licitação 1</h2>
        <h4 className="text-l text-center font-semibold">Lance base: R$ {baseOffer.value}</h4>
      </header>
      <div className="items-center max-h-96 mx-6 overflow-auto">
        {offers.map((bidding) => (
          <div key={bidding.id}>
            <BiddingListItem {...bidding} />
            <br />
          </div>
        ))}
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={sendOffer}
        validationSchema={validationSchema}
      >
        <div className="pt-4 border-t-2 border-t-black dark:border-t-white">
          <Form className="flex justify-around items-center">
            <div className="w-[80%] ">
              <Field
                id="offer"
                name="offer"
                type="number"
                required
                placeholder="Nova oferta..."
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <ErrorMessage name="offer" component="div" className="text-sm text-red-700" />
            </div>
            <div className="flex justify-center items-center ">
              <TButton submitType bg='blue' color="black">
                <PaperAirplaneIcon className="h-8 w-8 text-black dark:text-neutral-200" />
              </TButton>
            </div>
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default BiddingPlace;

/*const biddingOffers = [
  {
    id: 1,
    name: 'Renan',
    offer: 1000,
  },
  {
    id: 2,
    name: 'Renan',
    offer: 1000,
  },
  {
    id: 3,
    name: 'Renan',
    offer: 1000,
  },
  {
    id: 4,
    name: 'Renan',
    offer: 1000,
  },
];*/


