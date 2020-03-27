import React, { useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

export default function GetAPI(props) {
  const [ticker, setTicker] = useState("");

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .label("Name")
      .required()
      .min(2, "Must have at least 2 characters"),
    email: Yup.string()
      .label("Email")
      .email("Enter a valid email")
      .required("Please enter a registered email"),
    password: Yup.string()
      .label("Password")
      .required()
      .min(4, "Password must have more than 4 characters "),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Confirm Password must matched Password")
      .required("Confirm Password is required")
  });
  function handleTicker(e) {
    setTicker(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    console.log("the link was clicked");
    axios
      .get(
        `https://finnhub.io/api/v1/stock/profile?symbol=${ticker.current.value}&token=bpo09nfrh5ra872e0oi0`
      )
      .then(res => {
        console.log(res.data);
      });
  }

  // if (ticker !== null && ticker.current !== null) {
  return (
    <SafeAreaView>
      <form onSubmit={handleClick}>
        <label>
          <input
            type="text"
            onChange={handleTicker}
            placeholder="Enter Ticker"
          />
        </label>
        <button onClick={handleClick}> submit </button>
      </form>
      <p>{ticker.current.value}</p>
    </SafeAreaView>
  );
  // } else {
  //   return (
  //     <div>
  //       <form onSubmit={handleClick}>
  //         <label>
  //           <input
  //             type="text"
  //             onChange={handleTicker}
  //             placeholder="Enter Ticker"
  //           />
  //         </label>
  //         <button onClick={handleClick}> submit </button>
  //       </form>
  //     </div>
  //   );
  // }
}
