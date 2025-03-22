import { React, useState } from "react";

export default function DashboardSettings() {
  const [formData, setFormData] = useState({
    displayName: "",
    username: "",
    fullName: "",
    email: "",
    secondaryemail: "",
    phoneNumber: "",
    country: "",
    state: "",
    zipCode: "",
  });

  const [emailError, setEmailError] = useState("");
  const [secondaryemailError, setsecondaryemailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  };

  const handleSecondaryEmail = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    //Secondary Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (value && !emailRegex.test(value)) {
      setsecondaryemailError("Invalid email format");
    } else {
      setsecondaryemailError("");
    }
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const countries = [
    "India",
    "United States",
    "Canada",
    "United Kingdom",
    // Add more countries as needed
  ];

  const states = {
    India: ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar" /* ... */],
    "United States": ["Alabama", "Alaska", "Arizona", "Arkansas" /* ... */],
    // Add more states for other countries
  };

  const handleSaveChanges = () => {
    // Handle form submission or update account settings
    console.log("Display Name:", displayName);
    console.log("Username:", username);
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Secondary Email:", secondaryEmail);
    console.log("Phone Number:", phoneNumber);
    console.log("Country:", country);
    console.log("State:", state);
    console.log("Zip Code:", zipCode);
  };

  const handleProfileChanges = () => {
    console.log(formData);
  };
  return (
    <div>
      <div className="border border-1  border-[#E4E7E9] rounded-sm">
        <h2 className="text-sm font-bold mb-4  border-b p-4 border-[#E4E7E9] rounded-sm">
          ACCOUNT SETTINGS
        </h2>
        <form action="" onSubmit={handleProfileChanges}>
          <div className="lg:flex flex-row mb-4">
            <img
              src="/images/profile.jpg"
              alt="Profile Picture"
              className="w-48 h-48 rounded-full mr-4"
            />
            <div className="space-x-4">
              <div className="flex mb-2">
                <div className="w-1/2 mr-3 ml-4">
                  <h3 className=" mb-1 font-bold text-sm">Display Name</h3>
                  <input
                    type="text"
                    placeholder="Display name "
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        displayName: e.target.value,
                      })
                    }
                    className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                  />
                </div>
                <div className="w-1/2 ">
                  <h3 className=" mb-1 font-bold text-sm">Username</h3>
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        username: e.target.value,
                      })
                    }
                    className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                  />
                </div>
              </div>
              <div className="flex mb-2">
                <div className="w-1/2 mr-2">
                  <h3 className="font-bold text-sm mb-1">Full Name</h3>
                  <input
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                    className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <h3 className="font-bold text-sm mb-1">Email</h3>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                    className={`block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded ${
                      emailError ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {emailError && (
                    <p className="text-red-500 text-xs mt-1">{emailError}</p>
                  )}
                </div>
              </div>
              <div className="flex mb-2">
                <div className="w-1/2 mr-2">
                  <h3 className="font-bold text-sm mb-1">Secondary Email</h3>
                  <input
                    type="email"
                    name="secondaryemail"
                    placeholder="Secondary Email"
                    value={formData.secondaryEmail}
                    onChange={handleSecondaryEmail}
                    className={`block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded ${
                      secondaryemailError ? "border-red-500" : ""
                    }`}
                  />
                  {secondaryemailError && (
                    <p className="text-red-500 text-xs mt-1">
                      {secondaryemailError}
                    </p>
                  )}
                </div>
                <div className="w-1/2 ml-2">
                  <h3 className="font-bold text-sm mb-1">Phone Number</h3>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    maxLength={10}
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      const input = e.target.value;
                      const phoneNumber = input.replace(/\D/g, "");
                      setFormData({
                        ...formData,
                        phoneNumber: phoneNumber,
                      });
                    }}
                    className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                  />
                </div>
              </div>
              <div className="lg:flex mg:flex mb-4">
                <div className="lg:w-2/3 md:w-80">
                  <h3 className="font-bold text-sm mb-1">Country/Region</h3>
                  <select
                    id="country"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        country: e.target.value,
                        state: "",
                      })
                    }
                    className="block w-full border border-1   p-[11px] border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                  >
                    <option value="" selected disabled>
                      Select Country
                    </option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-row space-x-8 lg:ml-4  mt-3 lg:mt-0 md:mt-3">
                  <div className="w-full ">
                    <h3 className="font-bold text-sm mb-1 ">State</h3>
                    <select
                      id="state"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          state: e.target.value,
                        })
                      }
                      className="block w-full border border-1 p-[11px] border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                    >
                      <option value="" selected disabled>
                        Mumbai
                      </option>
                      {formData.country && states[country]
                        ? states[country].map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))
                        : null}
                    </select>
                  </div>
                  <div className="w-full lg:ml-2 md:ml-3 ml-6">
                    <h3 className="font-bold text-sm mb-1 ">Zip Code</h3>
                    <input
                      type="text"
                      placeholder="Zip Code"
                      value={formData.zipCode}
                      onChange={(e) => {
                        const input = e.target.value;
                        const zipCode = input.replace(/\D/g, "");
                        const maxLength = 6; // Example: for 5-digit zip code
                        const formattedZipCode = zipCode.slice(0, maxLength);
                        setFormData({
                          ...formData,
                          zipCode: formattedZipCode,
                        });
                      }}
                      className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#006FAB]  text-white font-bold py-3 px-4 text-sm rounded"
              >
                SAVE CHANGES
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="sm:flex mt-4 space-x-4">
        <div className="max-w-md mx-auto  border border-1 border-[#E4E7E9] rounded-md">
          <h2 className="text-sm font-bold mb-4  border-b p-4 border-[#E4E7E9] rounded-sm">
            BILLING ADDRESS
          </h2>
          <div className="mb-4 p-4">
            <div className="flex mb-2">
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="firstName"
                  className="block font-bold text-sm mb-1"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full border border-1  p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  htmlFor="lastName"
                  className="block font-bold text-sm mb-1"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full border border-1  p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="companyName"
                className="block font-bold text-sm mb-1"
              >
                Company Name (Optional)
              </label>
              <input
                id="companyName"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="block w-full border border-1  p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address" className="block font-bold text-sm mb-1">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="block w-full border border-1  p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
              />
            </div>
            <div className=" mr-2 mb-2">
              <h3 className="font-bold text-sm mb-1">Country</h3>
              <select
                id="country"
                className="block w-full border border-1  p-[11px] border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full mb-2">
              <h3 className="font-bold text-sm mb-1 ">Region/State</h3>
              <select
                id="state"
                className="block w-full border border-1 p-[11px] border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
              >
                <option value="">Select State</option>
                {formData.country && states[country]
                  ? states[country].map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))
                  : null}
              </select>
            </div>
            <div className="flex mb-2">
              <div className="w-1/2 mr-2">
                <label htmlFor="city" className="block font-bold text-sm mb-1">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  htmlFor="zipCode"
                  className="block font-bold text-sm mb-1"
                >
                  Zip Code
                </label>
                <input
                  id="zipCode"
                  type="text"
                  placeholder="Zip Code"
                  className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block font-bold text-sm mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block font-bold text-sm mb-1"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
              />
            </div>
            <button
              onClick={handleSaveChanges}
              className="bg-[#006FAB]  text-white font-bold text-sm py-3 px-4 rounded"
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
        <div className="max-w-md mx-auto  border border-1 border-[#E4E7E9] rounded-md">
          <h2 className="text-sm font-bold mb-4  border-b p-4 border-[#E4E7E9] rounded-sm">
            SHIPPING ADDRESS
          </h2>
          <div className="mb-4 p-4">
            <div className="flex mb-2">
              <div className="w-1/2 mr-2">
                <label
                  htmlFor="firstName"
                  className="block font-bold text-sm mb-1"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="block w-full border border-1  p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  htmlFor="lastName"
                  className="block font-bold text-sm mb-1"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="block w-full border border-1  p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                />
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="companyName"
                className="block font-bold text-sm mb-1"
              >
                Company Name (Optional)
              </label>
              <input
                id="companyName"
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="block w-full border border-1  p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="address" className="block font-bold text-sm mb-1">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="block w-full border border-1  p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
              />
            </div>
            <div className=" mr-2 mb-2">
              <h3 className="font-bold text-sm mb-1">Country</h3>
              <select
                id="country"
                className="block w-full border border-1  p-[11px] border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
              >
                <option value="">Select Country</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full mb-2">
              <h3 className="font-bold text-sm mb-1 ">Region/State</h3>
              <select
                id="state"
                className="block w-full border border-1 p-[11px] border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
              >
                <option value="">Select State</option>
                {formData.country && states[country]
                  ? states[country].map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))
                  : null}
              </select>
            </div>
            <div className="flex mb-2">
              <div className="w-1/2 mr-2">
                <label htmlFor="city" className="block font-bold text-sm mb-1">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                />
              </div>
              <div className="w-1/2 ml-2">
                <label
                  htmlFor="zipCode"
                  className="block font-bold text-sm mb-1"
                >
                  Zip Code
                </label>
                <input
                  id="zipCode"
                  type="text"
                  placeholder="Zip Code"
                  onChange={(e) => setZipCode(e.target.value)}
                  className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
                />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="block font-bold text-sm mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block font-bold text-sm mb-1"
              >
                Phone Number
              </label>
              <input
                id="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="block w-full border border-1 p-2 border-[#E4E7E9] text-[#475156] font-bold text-sm rounded"
              />
            </div>
            <button
              onClick={handleSaveChanges}
              className="bg-[#006FAB]  text-white font-bold text-sm py-3 px-4 rounded"
            >
              SAVE CHANGES
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 border border-1 mt-4  border-gray-100 rounded-sm">
        <h2 className="text-sm font-bold border-gray-100 rounded-sm border border-1 p-4">
          CHANGE PASSWORD
        </h2>
        <div className=" p-4">
          <div>
            <label
              htmlFor="currentPassword"
              className="block font-bold text-sm mb-1"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border border-[#E4E7E9] text-[#77878F] rounded px-3 py-2 focus:outline-none  "
            />
          </div>
          <div>
            <label
              htmlFor="newPassword"
              className="block font-bold text-sm mt-2 mb-1 "
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              placeholder="8+ characters"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border border-[#E4E7E9] text-[#77878F] rounded px-3 py-2 0 font-semibold"
              minLength={8}
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block font-bold text-sm mb-1 mt-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border border-[#E4E7E9] text-[#77878F] rounded px-3 py-2 "
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#006FAB] text-white font-bold text-sm py-3 px-4 rounded mt-4 md-4"
          >
            CHANGE PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
}
