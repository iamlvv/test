import React from "react";
import "firebase/auth";
import axios from "axios";
import { ref, child, get, set } from "firebase/database";
import { database } from "./firebase";
function App() {
  //Initial states
  const [phone, setPhone] = React.useState("");
  const [accesscode, setAccesscode] = React.useState("");
  const [flag, setFlag] = React.useState(false);
  const dbRef = ref(database);
  const [phoneReturn, setPhoneReturn] = React.useState("");
  const [accesscodeReturn, setAccesscodeReturn] = React.useState("");

  //Working with firebase
  const getPhoneNumber = () => {
    get(child(dbRef, `user/phone`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        setPhoneReturn(parseInt(snapshot.val()));
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }
  const setAccesscodeToFirebase = (accesscode) => {
    set(child(dbRef, `user/token`), accesscode);
  }
  const getAccessCoce = () => {
    get(child(dbRef, `user/token/code`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setAccesscode(parseInt(snapshot.val()));
          console.log(parseInt(document.getElementById("accesscode").value));
          if (accesscodeReturn.code === parseInt(document.getElementById("accesscode").value)) {
            console.log("success");
          } else {
            console.log("failure");
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  //Deal with form
  const handleSubmit = (e) => {
    e.preventDefault();
    setPhone(parseInt(e.target.elements.phone.value));
    getPhoneNumber();
    //if phoneReturn === phone then setFlag to true and request to generate access code. Then request to set new access code
    //in firebase and text that new access code to phone. User type the given code in the input field, after 6-digit code is
    //typed, system automatically verify the code. If the code is correct, then a success popup shows up. If the code is wrong,
    //then a failure popup shows up.
    if (phoneReturn === phone) {
      setFlag(true);
      const generateCode = async(phone) => {
        const response = await axios.post("http://localhost:3001/gencode", {
          phone: phone,
        });
        return response.data;
      }
      generateCode(phone).then((data) => {
        setAccesscodeToFirebase(data);
        setAccesscodeReturn(data);
      });
    }
    if (flag) {
      getAccessCoce();
      const responseVerify = async(phone, accesscode) => {
        const response = await axios.post("http://localhost:3001/verifycode", {
          phone: phone,
          accesscode: accesscode,
        });
        return response.data;
      }
      responseVerify(phone, accesscode).then((data) => {
        console.log(data.success);
      }
      );
    }
  };
  return (
    <div className="text-center mt-20 ml-20 mr-20">
      <form className="border" onSubmit={handleSubmit}>
        <h1 className="uppercase font-bold text-lg mt-5 mb-5">
          Coding Challenge
        </h1>
        <div className="">
          <div>
            <label htmlFor="phone">Phone Number</label>
            <div className="mt-5">
              <input
                id="phone"
                type="text"
                name="phone"
                className="border border-black"
                required
              />
            </div>
          </div>
          <div className="mt-5">
            <button className="bg-green-500 px-2 py-3 rounded-xl" type="submit">
              Submit phone number
            </button>
          </div>
          <div className="mt-5">
            <label htmlFor="accesscode">Access code</label>
            <div className="mt-5">
              <input
                id="accesscode"
                type="text"
                name="accesscode"
                className="border border-black"
              />
            </div>
          </div>
          <div className="mt-5 mb-5">
            <button
              className="bg-orange-500 px-2 py-3 rounded-xl"
              type="submit"
            >
              Submit access code
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
