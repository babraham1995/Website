//import useState hook to create menu collapse state
import React, { useState } from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
// import "react-pro-sidebar/dist/css/styles.css";
import styles from  "./sidebar.module.css";


export default function SideBar({ children, home }) {
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
       <div className={styles.sidebar}>
         <p className={styles.project}>Projects</p>
         <p>Shopping List</p>
         <p>Ideas</p>
         <p>Notes</p>
         <p>Todos</p>
         <p>Reminders</p>
         <p>Shopping List</p>
         <p>Ideas</p>
         <p>Notes</p>
         <p>Todos</p>
         <p>Reminders</p>
         <p>Reminders</p>
         <p>Shopping List</p>
         <p>Ideas</p>
         <p>Notes</p>
         <p>Todos</p>
         <p>Reminders</p>
         <p>Reminders</p>
         <p>Shopping List</p>
         <p>Ideas</p>
         <p>Notes</p>
         <p>Todos</p>
         <p>Reminders</p>
       </div>
    </>
  );
};