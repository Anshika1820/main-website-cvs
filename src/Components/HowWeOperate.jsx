import React, {useState} from "react";
import {FiClipboardCheck, FiShieldExclamation} from 'react-icons/fi';

const HowWeOperate = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleCard = (index) => {
        setActiveIndex(activeIndex === index ? null:index);
    };
    return(
        <section></section>
    );
};