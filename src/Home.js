import React from 'react'
// import Banner from '../Components/Home/Banner';
// import SingupForm from '../Components/Home/SignupForm';
import Registration from './Registration';
import Banner from './Banner';
const Home = () => {
  return (
    <div style={{display:"flex"}}>
      <Banner/>
      {/* <SingupForm/> */}
      <Registration/>
    </div>
  )
}

export default Home;