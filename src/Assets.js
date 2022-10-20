import React from 'react'
import Mail from './assets/email.svg'
import Phone from './assets/phone.svg'
import Location from './assets/location.svg'

const Assets = ({user,getUser}) => {
    console.log(user)
    const{name,picture,phone,location,email,dob,registered}=user
    console.log(name)
  return (
    <div className='container' >
        <div className="first">
                <img className='ilkimg' src={picture?.large} alt="" />
                   <h2> {name?.title} {name?.first} {name?.last} </h2>
        </div>
        <div className="first">
            <img className='ilk' src={Mail} width="25px" alt="" />
           <p> {email} </p>
           
        </div>
        <div className="first">
          <img className='ilk' src={Phone } width="25px"  alt="" />
        <p> {phone} </p>


        </div>
           <div className="first">
              <img className='ilk' src={Location} width="25px"  alt="" />
                 <p> {location?.state} {location?.country}  </p>
             </div>

             <div className="footer">
                <p>  Age:{dob?.age} </p>
                <br />
                <p>  Registered Date:{registered?.date} </p>
             </div>

        <button  onClick={getUser}  className='button' >Random user</button>
 

    </div>
 

  )
}

export default Assets