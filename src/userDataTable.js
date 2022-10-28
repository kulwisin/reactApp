import React, {useState} from 'react';
import UserDetail from './userDetail';

const userDataTable = (props) =>{
  const [selectedData, setSelectedData] = useState([]);
  const shortedData = Object.values(props).sort((a, b) => a.name.first.localeCompare(b.name.first));
  const userDetails = (e) =>{
    const selectedRecord = shortedData.filter(item => item.id.value === e.target.attributes.value.value);
    setSelectedData(selectedRecord);
  }

  const tableData = shortedData.map(({name, gender, email, phone, id}) =>(
    <tr>
      <td>{name.first}</td>
      <td>{gender}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td><input type="radio" value={id.value} name="checkBox" onChange={userDetails}></input></td>
    </tr>
  ));

    return(
      <div>
        <div className={"tableDetails"}>
          <table data={props} className={"tableIndex"}>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Emial</th>
            <th>Phone</th>
            <th>More Info</th>
          </tr>
            {tableData}
          </table>
        </div>
        <UserDetail selectedData={[selectedData, shortedData[0]]} />
      </div>
      )
}

export default userDataTable;