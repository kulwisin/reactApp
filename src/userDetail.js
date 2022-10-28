import React from 'react';

const userDetail = (props) =>{
    const currentRecord = props.selectedData[0].length === 0 ? props.selectedData[1] : props.selectedData[0][0];
    return(
        <div className={"userDetail"}>
            <h2>User Details Section</h2>
            {currentRecord && (
                <div className={"userDetailsSection"}>
                    <img alt={currentRecord.name.first} src={currentRecord.picture.large} />
                    <p>Name : {currentRecord.name.first} {currentRecord.name.last}</p>
                    <p>Age : {currentRecord.dob.age} </p>
                    <p>Gender : {currentRecord.gender} </p>
                    <p>Address : {currentRecord.location.street.number} {currentRecord.location.street.name}, {currentRecord.location.city}, {currentRecord.location.state}, {currentRecord.location.country}, {currentRecord.location.postcode}</p>
                    <p>Member Since : {currentRecord.registered.age} </p>
                </div>
            )}
        </div>
        )
}
export default userDetail;