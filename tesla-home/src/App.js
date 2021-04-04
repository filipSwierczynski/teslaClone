
import './App.css';
import Header from './components/Header'

import Accessories from './assets/Desktop-Accessories.jpg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
// iport SolarRoof from './assets/Desktop-SolarRoof.jpeg'

import Item from './components/Item'  

function App() {
  return (
    <div className="App">
     <Header/>

     <div className="app_itemsContainer">
       <Item
        title ='Model S'
        desc='Order Online for Touchless Delivery'
        descLink = ''
        backgroundImg = {ModelS}
        leftBtnTxt = 'CUSTOM ORDER'
        leftBtnLink = ''
        rightBtnTxt = 'EXISTING INVENTORY'
        rightBtnLink = ''
        twoButtons = 'true'
        first
       />

<Item
        title ='Model Y'
        desc='Order Online for Touchless Delivery'
        descLink = ''
        backgroundImg = {ModelY}
        leftBtnTxt = 'CUSTOM ORDER'
        leftBtnLink = ''
        rightBtnTxt = 'EXISTING INVENTORY'
        rightBtnLink = ''
        twoButtons = 'true'
       />

<Item
        title ='Model X'
        desc='Order Online for Touchless Delivery'
        descLink = ''
        backgroundImg = {ModelX}
        leftBtnTxt = 'CUSTOM ORDER'
        leftBtnLink = ''
        rightBtnTxt = 'EXISTING INVENTORY'
        rightBtnLink = ''
        twoButtons = 'true'
       />

<Item
        title ='Model 3'
        desc='Order Online for Touchless Delivery'
        descLink = ''
        backgroundImg = {Model3}
        leftBtnTxt = 'CUSTOM ORDER'
        leftBtnLink = ''
        rightBtnTxt = 'EXISTING INVENTORY'
        rightBtnLink = ''
        twoButtons = 'true'
       />

<Item
        title ='Solar and Powerwall'
        desc='Money-back guarantee'
        descLink = ''
        backgroundImg = {SolarPanels}
        leftBtnTxt = ''
        leftBtnLink = ''
        rightBtnTxt = 'LEARN MORE'
        rightBtnLink = ''
        twoButtons = 'false'
        
       />

<Item
        title ='Accessories'
        desc='Money-back guarantee'
        descLink = ''
        backgroundImg = {Accessories}
        
        rightBtnTxt = 'SHOP NOW'
        rightBtnLink = ''
        twoButtons = 'false'
        
       />
     </div>
    </div>
  );
}

export default App;
