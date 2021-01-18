import React from 'react'

const ProfileItem = ({ profile }) => {
    return (
        <div className="col">
            <ul className="list-group">
                <li className="list-group-item p-3">FirstName : {profile.FirstName}</li>
                <li className="list-group-item p-3">LastName : {profile.LastName}</li>
                <li className="list-group-item p-3">Gender : {profile.Gender}</li>
                <li className="list-group-item p-3">Latitude : {profile.Latitude}</li>
                <li className="list-group-item p-3">Longitude : {profile.Longitude}</li>
                <li className="list-group-item p-3">CreditCardNumber : <p className="text-center">{profile.CreditCardNumber}</p></li>
                <li className="list-group-item p-3">CreditCardType : <p className="text-center">{profile.CreditCardType}</p></li>
                <li className="list-group-item p-3">Email : <p className="text-center">{profile.Email}</p></li>
                <li className="list-group-item p-3">DomainName : <p className="text-center">{profile.DomainName}</p></li>
                <li className="list-group-item p-3">PhoneNumber : <p className="text-center">{profile.PhoneNumber}</p></li>
                <li className="list-group-item p-3">MacAddress : <p className='text-center'>{profile.MacAddress}</p></li>
                <li className="list-group-item p-3">URL : <p className='text-center'>{profile.URL}</p></li>
                <li className="list-group-item p-3">UserName : {profile.UserName}</li>
                <li className="list-group-item p-3">LastLogin : <p className="text-center">{profile.LastLogin}</p></li>
                <li className="list-group-item p-3">PaymentMethod : <p className="text-center">{profile.PaymentMethod}</p></li>
            </ul>
        </div>
    )
}

export default ProfileItem
