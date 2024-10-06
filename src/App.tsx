import './App.css';
import { Header } from './header';
import { HotelSearchContainer } from './hotels/hotel-search-container';

function App() {
  return (
    <div className="flex mx-5 my-8 mr-5 flex-col gap-5" >
     <Header></Header>
     <HotelSearchContainer ></HotelSearchContainer>
    </div>
  );
}

export default App;
