import React from 'react';
import img from '../images/dp.jpg';

const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-[url('https://media.istockphoto.com/id/625726746/photo/white-luxury-marble-surface.jpg?s=2048x2048&w=is&k=20&c=O6BD9wWnO33lvMWBbVyJQZ8Ua2X_Bnj-lP0qIf2RCyU=')] flex justify-between px-5 md:px-10 fixed top-0 z-50">
      <div>
        <img
          className="w-16 h-14 p-1 rounded-full mt-2"
          src={img}
          alt="fgh"
        />
      </div>
      <ul className="flex text-black justify-center mt-6">
        <li className="font-semibold mx-4 md:text-lg">
          <a href="#about">About</a>
        </li>
        <li className="font-semibold mx-4 cursor-pointer md:text-lg">
          <a href="#projects">Projects</a>
        </li>
        <li className="font-semibold mx-4 cursor-pointer md:text-lg">
          <a href="#contact">Lets Chat</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
