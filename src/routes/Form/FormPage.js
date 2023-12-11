import { useRef } from "react";
import "./form.css";

const firstNameVal = /[a-z]{3,}$/
const lastNameVal = /[a-z]{3,}$/
const emailVal = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
const phoneVal = /\(\d{3}\)\d{7}$/

const FormPage = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const commentRef = useRef();

  const validate = () => {
    let alert = ''
    if(!firstNameRef.current.value.match(firstNameVal))
    {
      alert += 'First name is incorrect\n'
    }
    if(!lastNameRef.current.value.match(lastNameVal))
    {
      alert += 'Last name is incorrect\n'
    }
    if(!emailRef.current.value.match(emailVal))
    {
      alert += 'Email is incorrect\n'
    }
    if(!phoneRef.current.value.match(phoneVal))
    {
      alert += 'Phone number is incorrect\n'
    }
    if(alert != '')
    {
      window.alert(alert)
    }
    else{
      window.alert("Form has been submitted")
    }
  };

  return (
    <>
      <div className="page-content">
        <form>
          <div className="row">
            <h1>Feedback form</h1>
          </div>
          <div className="row">
            <h3>First name:</h3>
            <input ref={firstNameRef}></input>
          </div>
          <div className="row">
            <h3>Last name:</h3>
            <input ref={lastNameRef}></input>
          </div>
          <div className="row">
            <h3>E-mail:</h3>
            <input
              ref={emailRef}
              placeholder="example@exp.com"
              size="30"
            ></input>
          </div>
          <div className="row">
            <h3>Phone number:</h3>
            <input placeholder="(888)8888888" ref={phoneRef}></input>
          </div>
          <div className="row">
            <h3>Your comment:</h3>
            <textarea rows={8} ref={commentRef}></textarea>
          </div>
        </form>
        <div className="row">
            <button
              onClick={validate}
              className="submit"
            >Send feedback</button>
          </div>  
      </div>
    </>
  );
};

export default FormPage;
