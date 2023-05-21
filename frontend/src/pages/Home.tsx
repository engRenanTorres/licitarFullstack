import { ContactsComp } from '../components/ContactsComp';
import HomeContent from '../containers/home/Home';
import HomeSideContent from '../containers/home/HomeSideContent';
import DefaultLayout from '../components/layout/DefaultLayout';

function Home() {
  return (
    <DefaultLayout
      jumbotronTitle="Software de Disputa de Lances"
      jumbotronSubtitle="Candidato Renan Torres"
      sideContent={HomeSideContent}
      sideContent2={
        <ContactsComp linkedin="https://www.linkedin.com/in/renan-torres-3ba43560/" />
      }
    >
      <HomeContent />
    </DefaultLayout>
  );
}

export default Home;
