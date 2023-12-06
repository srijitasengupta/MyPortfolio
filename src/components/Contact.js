import React from 'react';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const Contact = () => {

    // const [name, setName] = React.useState("");
    // const [email, setEmail] = React.useState("");
    // const [message, setMessage] = React.useState("");
    // constructor(props) {
    //   super(props);
      const[state,setState] = React.useState({ name: "", email: "", message: "" });
    // }

    /* Here’s the juicy bit for posting the form submission */

    const handleSubmit = e => {
        console.log(state)
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    const handleChange = e => setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }));

    return (
        <div id="contact" className="min-h-screen bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=600')]">
            <div className='h-auto w-full flex flex-wrap flex-col items-center text-center p-10'>
                {/* <ChipIcon className="md:w-18 w-10 inline-block mb-4 stroke-stone-800 hover:stroke-stone-600" /> */}
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-stone-800 hover:stroke-stone-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z" />
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                </div>
                <h3 className='text-3xl font-bold text-stone-800'>Contact Me</h3>
                <br></br>
                <div className='w-8 border-t-4 top-0 border-stone-900 shadow-lg'></div>
            </div>
            <div className='px-18'>
            <div className=' bg-stone-800 rounded-2xl flex flex-wrap lg:w-1/2 mx-auto sm:mb-2 -mx-2 items-center text-center p-10'>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 items-center text-center">
                    <p className="leading-relaxed mb-5 text-lg text-slate-500">
                    Feel free to Contact me by submitting the form below
                    </p>
                    <input type='hidden' name='form-name' value='contact'/>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={state.name} onChange={handleChange}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={state.email} onChange={handleChange}
                        />
                    </div>
                    <div className="relative mb-4">
                        <label
                            htmlFor="message"
                            className="leading-7 text-sm text-gray-400">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="w-full bg-gray-900 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            value={state.message} onChange={handleChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-slate-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Submit
                    </button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default Contact;
