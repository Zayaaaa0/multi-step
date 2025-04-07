// "use client";
// import Head from "@/components/Head";
// import FirstStep from "@/components/Firststep";
// import SecondStep from "@/components/SecondStep";
// import ThirdStep from "@/components/ThirdStep";
// import Fourth from "@/components/Fourth";
// import { useState } from "react";
// import { Thasadith } from "next/font/google";

// export default function Home() {
//   const [imageUrl, setImageUrl] = useState();
//   const onFileUploud = (event) => {
//     const file = event.target.files[0];
//     setImageUrl(URL.createObjectURL(file));
//   };
//   const [currentStep, setCurrentStep] = useState(0);
//   const FormSteps = [FirstStep, SecondStep, ThirdStep, Fourth][currentStep];

//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     console.log(name, value);
//     setFormErrors((prev) => ({ ...prev, [name]: "" }));

//     setFormValues((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleClick = () => {
//     const { firstName, lastName, userName } = formValues;
//     let isValid = true;

//     if (!firstName.trim()) {
//       setFormErrors((prev) => ({
//         ...prev,
//         firstName: "First name cannot contain special characters or numbers.",
//       }));
//       isValid = false;
//     }

//     if (!lastName.trim()) {
//       setFormErrors((prev) => ({
//         ...prev,
//         lastName: "Last name cannot contain special characters or numbers.",
//       }));
//       isValid = false;
//     }

//     if (!userName.trim()) {
//       setFormErrors((prev) => ({
//         ...prev,
//         userName: "This username is already taken. Please choose another one.",
//       }));
//       isValid = false;
//     }

//     if (isValid) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   return (
//     <div className="  flex justify-center items-center">
//       <FormSteps
//         handleChange={handleChange}
//         handleClick={handleClick}
//         formErrors={formErrors}
//         onFileUploud={onFileUploud}
//         imageUrl={imageUrl}
//       />
//     </div>
//   );
// }
"use client";

import { MultiStepForm } from "@/components/ui/MultiStepForm";

const Home = () => <MultiStepForm />;

export default Home;
