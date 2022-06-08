// Modules

// Files
import './App.css';
import IndexNavbar from './components/navbar';
import IndexHeader from './components/header/index';
import IndexPayment from './components/payment/index';
import IndexContent from './components/content';
import IndexCard from './components/yourCard';
import IndexContact from './components/contact';
import IndexFooter from './components/footer';

function App() {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className='flex w-full'>
        <div className='relative w-full h-[900px] flex'>
          <div className='absolute z-0 flex w-full h-full'>
            <div className='hidden lg:flex w-8/12 h-full bg-white'></div>
            <div className='lg:w-4/12 h-full bg-black-violet '></div>
          </div>
          <div className='absolute z-10 flex flex-col h-full w-full'>
            {/* Navbar */}
            <IndexNavbar />
            {/* Header */}
            <IndexHeader />
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full'>
          {/* Payment */}
          <IndexPayment />
          <div className='mt-12 flex justify-center'>
            <IndexContent />
          </div>
          {/* Card information */}
          <IndexCard />
          {/* Send Email */}
          <IndexContact />
          {/* Footer */}
          <IndexFooter />
      </div>
    </div>
  );
}

export default App;
