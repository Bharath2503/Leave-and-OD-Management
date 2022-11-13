import React,{useState} from "react";
import { Button } from "react-bootstrap";

import Form from 'react-bootstrap/Form';
import Select from "react-select";
import option from "./Data";
import "../css/Registerform.css";

function Registerform()
{

  //select
  const [selectedOptions, setSelectedOptions] = useState();
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  //logout
  // const { logOut } = useUserAuth();
  // const navigate = useNavigate();
  // const handleLogout = async () => {
  //   try {
  //     await logOut();
  //     navigate("/");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
    return(
      <div className="page">
      <div className="container">
        <h3 className="Auth-form-title">Leave and OD Details</h3>
        <Form className="content" autoComplete="off">
        
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Department</Form.Label>
          <Select className="letter"
                  options={option}
                  placeholder="Select Department"
                  value={selectedOptions}
                  onChange={handleSelect}
                  isSearchable={true}
                />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" className="letter" placeholder="Eg:20ITR001" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Class and Section</Form.Label>
          <Form.Control type="text" className="letter" placeholder="Enter Class and Section" />
        </Form.Group>
        <Form.Group>

        <Form.Label>Choose the option</Form.Label>
          <Form.Check className="letter" value="Leave" type='radio' name="purpose" label="Leave"/>
          <Form.Check className="letter" value="OD" type='radio' name="purpose" label="OD"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control className="letter" type="date"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Period</Form.Label>
          <Form.Control type="text" className="letter" placeholder="Enter Period" />
        </Form.Group>

        <Form.Group>
        <Button variant="primary" className="button" type="submit">
          Submit
        </Button>
        {/* <Button  variant="danger" className="button" onClick={handleLogout}>
          Log out
        </Button> */}
        </Form.Group>
      </Form>
      </div>
      </div>
    );
}
export default Registerform;