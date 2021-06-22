import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import * as parkData from "./data/skateboard-parks.json";
import "./App.css";

export const icon = new Icon({
  iconUrl: "/skateboarding.svg",
  iconSize: [25, 25]
});

export default function App() {
  const [activePark, setActivePark] = React.useState(null);

  return (
    <MapContainer center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {parkData.features.map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(park);
          }}
          icon={icon}
        />
      ))}

      {activePark && (
        <Popup
          position={[
            activePark.geometry.coordinates[1],
            activePark.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActivePark(null);
          }}
        >
          <div>
            <h2>{activePark.properties.NAME}</h2>
            <p>{activePark.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}
    </MapContainer>
  );
}




{activeUser && (
    <Popup
      position={[
        activeUser.coords[0],
        activeUser.coords[1]
      ]}
      onClose={() => {
        setActiveUser(null);
      }}
    >
      <div>
        <h2>{activeUser.address}</h2>
        <p>{activeUser.popup}</p>
      </div>
    </Popup>
  )}


  console.log("first");

            let fetchStreet = street.current.value.replace(/\s/g, "+")
            let fetchCity = city.current.value.replace(/\s/g, "+")
            let fetchState = stateDrop.current.value.replace(/\s/g, "+")
            let fetchZip = zip.current.value.replace(/\s/g, "+")
            let fullAddress = fetchStreet+"+"+fetchCity+"+"+fetchState+"+"+fetchZip  

            const getGeo = (fullAddress) => {
                return fetch(`https://geocode.search.hereapi.com/v1/geocode?q=${fullAddress}&apiKey=${process.env.REACT_APP_HERE_GEOCODE_API_KEY}`,)
                .then(res => res.json())
                .then(res => {return coords = res.items[0].position})
            }
            
            // let originLatLong = {}
            // return getLatLong(origin)
            // .then(res => {
            //     // res.items[0].position is an object containing lat and long as key value pairs
            //     return originLatLong = res.items[0].position
            // })

            let coords = getGeo(fullAddress)
            console.log("COORDS: "+ coords);



            <main style={{ textAlign: "center" }}>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Edit your info:</h1>
                <fieldset>
                
                <div>
                <select value={personById.person_type.id}>
                    <option value="1">GIVE</option>
                    <option value="2">NEED</option>
                </select>
                </div>
                
                </fieldset>
                
                <fieldset>
                    <label htmlFor="username"> Username </label>
                    <input value={personById.user.username} type="text" name="username" className="form-control" placeholder="Username" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input value={personById.firstName} type="text" name="firstName" className="form-control" placeholder="First name" required  />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input value={personById.lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input value={personById.email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputStreet"> Street </label>
                    <input value={personById.street} type="street" name="street" className="form-control" placeholder="Street" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputCity"> City address </label>
                    <input value={personById.city} type="city" name="city" className="form-control" placeholder="City" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputState"> State </label>
                    {/* <input length="2" maxLength="2" value={personById.state} type="state" name="state" className="form-control" placeholder="State" required /> */}
                        <select value={personById.stateDrop} className="form-control">
                            <StateList />
                    </select>				
	
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Zip </label>
                    <input value={personById.zip} type="zip" name="zip" className="form-control" placeholder="Zip" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPhone"> Phone </label>
                    <input value={personById.phone} type="phone" name="phone" className="form-control" placeholder="Phone" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input value={personById.password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input value={personById.verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputBio"> Bio </label>
                    <textarea value={personById.bio} name="bio" className="form-control" placeholder="Write a short bio" />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPopup"> Map Marker Popup </label>
                    <input value={personById.popup} type="popup" name="popup" className="form-control" placeholder="Hi I'm So and So!" required />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1 btn-sep icon-send" type="submit">Register</button>
                </fieldset>
            </form>
        </main>




const [person, setPersonById] = useState({
  username:"",
  firstName:"",
  lastName:"",
  email:"",
  street:"",
  city:"",
  stateDrop:"",
  zip:"",
  phone:"",
  lat:"",
  long:"",
  bio:"",
  popup:"",
  password:"",
  verifyPassword:"",
  passwordDialog:"",
  person_type_id:""
})

useEffect(() => {
  getPersonById(0)
 
      setIsloading(false)
  })
},[])

const handleRegister = (e) => {
  e.preventDefault()

  if (person.password === person.verifyPassword) {
      updatePerson({
          // username:person.username,
          // firstName:person.firstName,
          // lastName:person.lastName,
          // email:person.email,
          // street:person.street,
          // city:person.city,
          // stateDrop:person.stateDrop,
          // zip:person.zip,
          // phone:person.phone,
          // bio:person.bio,
          // popup:person.popup,
          // password:person.password,
          // person_type_id:person.person_type_id
          // available: crew.available
      })
      // .then(() => history.push(`/`))

      // localStorage.setItem( "gys_latitude", res.lat ) // lat/long to center map on first render
      // localStorage.setItem( "gys_longitude", res.long )
      // props.history.push("/strmap")

  } else {
      passwordDialog.current.showModal()
  }
}    


          // fetch user again to reset username and geocode if changed

            // getPersonById(0)
            // .then(logPerson => {
            //     setLoggedInPerson(logPerson)
                // localStorage.setItem( "gys_username", loggedInPerson.user.username ) // for logout navbar
                // localStorage.setItem( "gys_latitude", loggedInPerson.latitude ) // lat/long to center map on first render
                // localStorage.setItem( "gys_longitude", loggedInPerson.longitude )
            // })


        // if (loggedInPerson.password === loggedInPerson.verifyPassword) {
            // .then(() => history.push(`/`))

            // localStorage.setItem( "gys_latitude", res.lat ) // lat/long to center map on first render
            // localStorage.setItem( "gys_longitude", res.long )
            // props.history.push("/strmap")

        // } else {
        //     alert("Passwords must match")
        // }


                            {/* <Checkbox size="small" id="chk" onChange={handler} isChecked="true"/> */}


                                      {/* <Select id="optionsGiveNeed" 
                    value={selectedGiveNeed}
                    onChange={setSelectedGiveNeed}
                    options={optionsGiveNeed} /> */}

                                  {/* <MultiSelect
            
                    options={options}
                    value={selectedDays}
                    onChange={setSelectedDays}
                    labelledBy="Select"
                    /> */}


                    import { Radio } from 'antd';

                    const App = () => {
                      const [value, setValue] = React.useState(1);
                    
                      const onChange = e => {
                        console.log('radio checked', e.target.value);
                        setValue(e.target.value);
                      };
                    
                      return (
                        <Radio.Group onChange={onChange} value={value}>
                          <Radio value={1}>A</Radio>
                          <Radio value={2}>B</Radio>
                          <Radio value={3}>C</Radio>
                          <Radio value={4}>D</Radio>
                        </Radio.Group>
                      );
                    };
                    
                    ReactDOM.render(<App />, mountNode);

                    import { Radio } from 'antd';

                    import { Radio, Input, Space } from 'antd';

class App extends React.Component {
  state = {
    value: 1,
  };

  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <Radio.Group onChange={this.onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Option A</Radio>
          <Radio value={2}>Option B</Radio>
          <Radio value={3}>Option C</Radio>
          <Radio value={4}>
            More...
            {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
          </Radio>
        </Space>
      </Radio.Group>
    );
  }
}

ReactDOM.render(<App />, mountNode);

<Radio.Group onChange={handleSelected} value={} >
<Radio value="1">GIVE</Radio>
<Radio value="2">NEED</Radio>
</Radio.Group>

import { Select } from 'antd';

const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <>
    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} disabled>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} loading>
      <Option value="lucy">Lucy</Option>
    </Select>
    <Select defaultValue="lucy" style={{ width: 120 }} allowClear>
      <Option value="lucy">Lucy</Option>
    </Select>
  </>,
  mountNode,
);

import { Checkbox } from 'antd';

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

<Checkbox value="true" onChange={onChange}>Checkbox</Checkbox>

<Checkbox checked={loggedInPerson.on_call} onChange={onChange}>Checkbox</Checkbox>
            if(loggedInPerson.person_type_id===1) setSelectedGiveNeed({ value: '1', label: <div>Give <img src={gyslogogive} height="" width="55px"/></div> })
            if(loggedInPerson.person_type_id===2) setSelectedGiveNeed({ value: '2', label: <div>Give <img src={gyslogoneed} height="" width="55px"/></div> })


            const options = [
              // { value: 'Give', label: <div><img src={icon1} height="30px" width="30px"/></div> },
              // { value: 'Need', label: <div><img src={icon2} height="30px" width="30px"/></div> },
              { value: '1', label: "Monday" },
              { value: '2', label: "Tuesday" },
              { value: '3', label: "Wednesday" },
              { value: '4', label: "Thursday" },
              { value: '5', label: "Friday" },
              { value: '6', label: "Saturday" },
              { value: '7', label: "Sunday" },
          ]
      

       // useEffect(() => {
    //     getPersonById(0)
    //     .then(logPerson => {
    //         setLoggedInPerson(logPerson)
    //         debugger
    //         setStateCenter([
    //             logPerson.latitude,
    //             logPerson.longitude
    //         ])
    //     })
    // },[])


     {/* <MultiSelect
            
        options={options}
        value={selectedDays}
        onChange={setSelectedDays}
        labelledBy="Select"
    /> */}