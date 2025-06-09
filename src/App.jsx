import Layout from './Layout';
import { Header } from './components';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import GoToTopBtn from './components/GoToTopBtn';
import { useAuth } from './store/useAuth';
import { useEffect } from 'react';
function App() {

  const {  authCheck } = useAuth()
  useEffect(() => {
    authCheck()
  },[ authCheck])
  return (
    <div >
      <Header />
      <Sidebar />
      <main className="pt-[119px] md:pt-[104px] w-full ">
        <Layout />
      </main>
      <Footer />
      <GoToTopBtn />
    </div>
  );
}

export default App;
