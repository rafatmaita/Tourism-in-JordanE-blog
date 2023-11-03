// import React from 'react';

// const Login = () => {
//   return (
//     <div>
//       <h2>Login</h2>
//       {/* Login form */}
//     </div>
//   );
// }
// export default Login;


// export default function Login() {
//     return (
//         <form>
//         <div className="mb-6">
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="name@flowbite.com"
//             required=""
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//           >
//             Your password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             required=""
//           />
//         </div>
//         <div className="flex items-start mb-6">
//           <div className="flex items-center h-5">
//             <input
//               id="remember"
//               type="checkbox"
//               defaultValue=""
//               className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
//               required=""
//             />
//           </div>
//           <label
//             htmlFor="remember"
//             className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Remember me
//           </label>
//         </div>
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Submit
//         </button>
//       </form>
      
//     );
//   }






// import React, { useState } from 'react';


// export default function Login() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     remember: false,
//   });

//   const handleFormChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     const newValue = type === 'checkbox' ? checked : value;

//     setFormData({
//       ...formData,
//       [name]: newValue,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Here, you can send the formData to your JSON server using fetch or axios.
//     // Make an API POST request to your JSON server to add this data to your JSON file.
//     // Remember to update the server URL and endpoint to match your JSON server setup.

//     fetch('http://127.0.0.1:5000/login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Data has been added successfully.
//         alert("success")
//         console.log('Data added:', data);
//       })
//       .catch((error) => {
//         // Handle error
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-6">
//         <label
//           htmlFor="email"
//           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//         >
//           Your email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email" // Add a name attribute
//           value={formData.email}
//           onChange={handleFormChange}
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           placeholder="name@flowbite.com"
//           required
//         />
//       </div>
//       <div className="mb-6">
//         <label
//           htmlFor="password"
//           className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//         >
//           Your password
//         </label>
//         <input
//           type="password"
//           id="password"
//           name="password" // Add a name attribute
//           value={formData.password}
//           onChange={handleFormChange}
//           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           required
//         />
//       </div>
   
//       <button
//         type="submit"
//         className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm w-full sm-w-auto px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
//       >
//         Submit
//       </button>
//     </form>
//   );
// }




// import React, { useState } from 'react';
// import axios from 'axios';

// const LoginForm = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//       });
//       console.log(formData);
      
//   const [errors, setErrors] = useState({});

//   const handleInputChange = (e) => {
//     const  name  = e.target.name;
//     const  value  = e.target.value;
//     setFormData({ ...formData, [name]: value });
//     console.log(e.target)
//   };

//   const validateForm = () => {
//     let errors = {};

//     if (!formData.username.trim()) {
//       errors.username = 'Username is required';
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!formData.email || !emailRegex.test(formData.email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!formData.password || formData.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//     }

//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const redirectToHome = () => {
//     window.location.href = '/home';
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//       //  if (validateForm()) {
//       try {
//         const response = await axios.post('http://127.0.0.1:5000/login', formData);
//         console.log(response.data.message);

//         const user = response.data.user;
//         if (user) {
//           redirectToHome();
//          alert(`Welcome, ${user.username}!`);
//         } else {
//           console.error('User not found.');
//         }
//       } catch (error) {
//         console.error('Error logging in:', error);
//         setErrors(error.response.data.errors);
//       }
//     //  }
//   };



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: 'saifomara@gmail.com',
    password: 'saif#01'
  });
console.log(formData)
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    }

    if (!formData.password || formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // Replace 'your-api-endpoint' with the actual API endpoint for login
        const response = await axios.post('http://127.0.0.1:5000/login', formData);

        console.log(response.data.message);

        if (response.data) {
          navigate('/')
         
        } else {
          console.error('User not found.');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        // Handle errors more gracefully, depending on your server response structure
        if (error.response && error.response.data) {
          setErrors(error.response.data);
        } else {
          setErrors({ general: 'An error occurred while logging in.' });
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-blue-950 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-extrabold text-white text-center">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email" className="sr-only">
                Email 
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-blue-900 border-blue-900 placeholder-blue-900 text-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10"
                placeholder="Email address"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border text-blue-900 border-blue-900 placeholder-blue-900 text-sm focus:outline-none focus:ring-blue-400 focus:border-blue-400 focus:z-10"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
             
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-950 bg-white hover:bg-white-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-950"
            >
         Login 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

