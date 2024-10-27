import React, { useContext, useEffect, useRef, useState } from 'react';
import { TokenContext } from '../Context/TokenContext';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [submitPhoneNumber, setSubmitPhoneNumber] = useState(false)
  const [code, setCode] = useState(["", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef([]);
  const {saveToken} = useContext(TokenContext)


  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmitPhoneNumber = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Phone Number:", phoneNumber);
    console.log("Accepted Terms:", isChecked);
  };
  useEffect(() => {
    if (submitPhoneNumber){
    // Countdown timer
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(countdown);
}
  }, submitPhoneNumber);

  const handleChange = (e, index) => {
    const value = e.target.value.slice(0, 1); // Only allow one digit
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Focus on the next input if the current input has a value
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmitOTP = (e) => {
    e.preventDefault();
    console.log("Verification Code:", code.join(""));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white p-8 w-full h-full">
        {submitPhoneNumber ? 
        (<>
         <h2 className="text-center text-xl font-bold mb-2">کد تایید را وارد کنید</h2>
        <p className="text-center text-gray-600 mb-6">
          کد ۵ رقمی به شماره {phoneNumber} ارسال شد.
        </p>
        
        <form onSubmit={handleSubmitOTP} className="space-y-4">
          <div className="flex justify-center space-x-2 rtl:space-x-reverse mb-4">
            {code.map((digit, index) => (
              <input
                style="direction:ltr;"
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                value={digit}
                onChange={(e) => handleChange(e, index)}
                className="w-12 h-12 text-center text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-950 ml-2"
                maxLength="1"
              />
            ))}
          </div>

          <div className="text-center text-purple-950 mb-4 cursor-pointer">اصلاح شماره موبایل</div>
          
          <p className="text-center text-gray-600">
            {timer > 0 ? `۰:${String(timer).padStart(2, "0")} تا درخواست مجدد کد` : "کد منقضی شده، دوباره ارسال کنید"}
          </p>
          
          <button
            type="submit"
            className="w-full py-2 text-white bg-purple-950 rounded-lg hover:bg-purple-850 focus:outline-none focus:ring-2 focus:ring-purple-950 mt-4"
          onClick={()=>{saveToken('gjv3jev2h3v');location.reload()}}>
            تایید و ادامه
          </button>
        </form>
        </>)
        : 
        (<>
        <h2 className="text-center text-2xl font-bold mb-4">ورود یا ثبت‌نام</h2>
        <p className="text-center text-gray-600 mb-6">
          برای ادامه شماره موبایل خود را وارد کنید.
        </p>
        
        <form onSubmit={handleSubmitPhoneNumber} className="space-y-4">
          <div className="relative">
            <span className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500">+98</span>
            <input
              type="tel"
              placeholder="شماره موبایل"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="w-full pl-14 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-950"
              required
            />
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mr-2"
              required
            />
            <label className="text-gray-600 text-sm">
              استفاده از وی هتل به معنی پذیرش <a href="#" className="text-purple-950">قوانین و مقررات</a> این سرویس است.
            </label>
          </div>
          
          <button
            type="submit"
            className="w-full py-2 text-white bg-purple-950 rounded-lg hover:bg-purple-850 focus:outline-none focus:ring-2 focus:ring-purple-950"
          onClick={()=>{setSubmitPhoneNumber(true)}}>
            تایید و دریافت کد
          </button>
          </form>
          </> )
          }
          
          
          <div className="text-center mt-4">
            <a href="#" className="text-purple-950">ورود با کلمه عبور</a>
          </div>
        
      </div>
    </div>
  );
};

export default LoginForm;
