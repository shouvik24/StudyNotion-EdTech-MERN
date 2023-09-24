import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../../services/apiconnector";
import { contactusEndpoint } from "../../../services/apis";
import { setLoading } from "../../../slices/authSlice";
import CountryCode from "../../../data/countrycode.json";

const ContactUsForm = () => {
  const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Logging Data", data);
    try {
      setLoading(true);
      const response = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      console.log("Logging Response", response);
      setLoading(false);
    } catch (error) {
      console.log("Error :", error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstName: "",
        lastName: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);
  return (
    <form
      onSubmit={handleSubmit(submitContactForm)}
      className="flex flex-col gap-7"
    >
      <div>
        <div className="flex flex-col gap-5 lg:flex-row ">
          {/* first name */}
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="firstname" className="label-style">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="form-style"
              placeholder="Enter First name"
              {...register("firstname", { required: true })}
            />
            {errors.firstName && (
              <span className="-mt-1 text-[12px] text-yellow-100">
                Please enter your first name
              </span>
            )}
          </div>

          {/* last name */}
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="lastname" className="label-style">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="form-style"
              placeholder="Enter Last name"
              {...register("lastname")}
            />
          </div>
        </div>
        {/* email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="label-style mt-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            className="form-style"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your email address
            </span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="phonenumber" className="label-style mt-2">
            Phone Number
          </label>
          <div className="flex gap-5">
            {/* Country Code Dropdown */}
            <div className="flex w-[81px] flex-col gap-2">
              <select
                type="text"
                name="dropdown"
                id="dropdown"
                placeholder="Enter your phone number"
                className="form-style"
                {...register("countrycode", { required: true })}
              >
                {CountryCode.map((element, index) => {
                  return (
                    <option key={index} value={element.code}>
                      {element.code} - {element.country}
                    </option>
                  );
                })}
              </select>
            </div>
            {/* Phone Number Field */}
            <div className="flex w-[calc(100%-90px)] flex-col gap-2">
              <input
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="12345 67890"
                className="form-style"
                {...register("phoneNo", {
                  required: {
                    value: true,
                    message: "Please enter phone number",
                  },
                  maxLength: { value: 10, message: "Invalid Phone Number" },
                  minLength: { value: 8, message: "Invalid Phone Number" },
                })}
              />
            </div>
          </div>
          {errors.phoneNo && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              {errors.phoneNo.message}
            </span>
          )}
        </div>
        {/* message box */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="label-style mt-2">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={7}
            placeholder="Enter Your Message here"
            className="form-style"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your Message.
            </span>
          )}
        </div>
        <button
          disabled={loading}
          type="submit"
          className={`w-full mt-6 rounded-md bg-yellow-50 px-6 py-3 text-center 
        text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] w-full mt-6 `}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
