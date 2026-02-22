import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/' },
        { name: 'Services', href: '/'},
        { name: 'Contact', href: '/'},
    ];

    return (

    );

};

export default Navbar;