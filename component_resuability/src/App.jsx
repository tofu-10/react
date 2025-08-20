import React from 'react';
import './App.css';
import content from './components/contentLists/Content';
import { ContentDisplay } from './components/reuseabilityContent/ContentDisplay';
function App() {
return (
  <>
    <div className="fullContainer">
      <ContentDisplay
        img={content.url1}
        price="33898.00$"
        Bname="Ducati Panigale V4"
      />
      <ContentDisplay
        img={content.url2}
        price="58100.00$"
        Bname="Kawasaki Ninja H2R"
      />
    </div>
    <div className="fullContainer">
      <ContentDisplay img={content.url3} price="27699.00$" Bname="Yamaha R1M" />
      <ContentDisplay
        img={content.url4}
        price="5899.98$"
        Bname="Royal Enfield Himalayan 450"
      />
    </div>
    <div className="fullContainer">
      <ContentDisplay img={content.url5} price="33898$" Bname="KTM Duke 1290" />
      <ContentDisplay img={content.url6} price="33898$" Bname="Yamaha MT-09" />
    </div>
  </>
);

}
export default App;