// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import style from "./Sidebar.module.css"
import bgImg from "../../assets/images/about-BgAkqdr2.jpg";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { IoIosCodeWorking, IoMdHome } from 'react-icons/io';
import { FcAbout } from 'react-icons/fc';
import { GiSkills } from 'react-icons/gi';
import { AiFillExperiment } from 'react-icons/ai';
import { TbLayoutSidebarLeftCollapseFilled, TbLayoutSidebarRightCollapseFilled } from 'react-icons/tb';



export default function Sidebarr() {
  let [collapsed , isCollapsed] = useState()

  let toggleCollapsed= ()=>{
    isCollapsed(! collapsed)
  }
  return (
    <div className="sidebarContainer min-vh-100 ">
      {collapsed ? <TbLayoutSidebarRightCollapseFilled onClick={toggleCollapsed} size={30} />
            : <TbLayoutSidebarLeftCollapseFilled onClick={toggleCollapsed} size={30} />  
      }
      
        <Sidebar   collapsedWidth='0px' collapsed={collapsed} className=''>
          <div className="iconCollaps my-4  d-flex align-items-center justify-content-center ">
            
          
          </div>
          <div className={`${style.sideImg} my-5 text-center`}>
            <img src={bgImg} alt="" className='my-4' />
           <h5>Abdelwahab Azhary</h5>
            <p className='h6 my-3'>
              <span className='text-info '>UI/UX/Designer</span>  in Philippines
            </p> 

          </div>
          <Menu >
              <MenuItem className='link' icon={<IoMdHome />} component={<Link to="/" />}> Home</MenuItem>
              <MenuItem className='link' icon={<FcAbout />} component={<Link to="/about" />}> About</MenuItem>
              <MenuItem className='link' icon={<GiSkills />} component={<Link to="/skills" />}> Skills</MenuItem>
              <MenuItem className='link' icon={<AiFillExperiment />} component={<Link to="/experince" />}> Experince</MenuItem>
              <MenuItem className='link' icon={<IoIosCodeWorking />} component={<Link to="/work" />}> Work</MenuItem>
            </Menu>
        </Sidebar>
     
    </div>
  )
}
