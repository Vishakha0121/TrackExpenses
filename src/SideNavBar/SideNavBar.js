import React, { useState } from "react";
import "./SideNavBar.css";
import ExpenseTrack from '../images/expenseTracker.svg'
import Expense from '../images/expense.svg'
import wishList from '../images/wishList.svg'
import dues from '../images/dues.svg'
import user from '../images/user.svg'
import calculator from '../images/calculator.svg'
import logout from '../images/logout.svg'
import Button from "react-bootstrap/Button";
import { useContext } from 'react';
import ExpenseTracker from "../ExpenseTracker";
import Proj3 from "../Proj3/Proj3";
import Proj2 from "../Proj2/Proj2";
import SwitchingTabs from "../SwitchingTabs/SwitchingTabs";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "User Profile",
			icon: user,
			path:'/'
		},
		{
			text: "Expense Tracker",
			icon: ExpenseTrack,
			path:'/ExpenseTracker'
		},
		{
			text: "Wish List",
			icon: wishList,
			path:'/WishList'
		},
		{
			text: "Dues",
			icon: dues,
			path:'/Dues'
		},
		{
			text: "Calculator",
			icon: calculator,
			path:'/Calculator'
		},
		{
			text: "Logout",
			icon: logout,
			path:'/'
		},
		// {
		// 	text: "Settings",
		// 	icon: "icons/settings.svg",
		// },
	];
	return (
		<>
	
		<div className={isExpanded?"side-nav-container":"side-nav-container side-nav-container-NX"}>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (<div className="nav-brand">
						<img src={Expense} alt="nav brand"/>
						<h2>Expenses</h2>
					</div>)}
					<button 
						className={isExpanded?"hamburger hamburger-in":"hamburger hamburger-out"}
						onClick={()=>{setExpendState(!isExpanded)}}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map((item,index)=>{
						return(
							<Link to={item.path}  className={isExpanded?"menu-item active":"menu-item menu-item-NX"} key={index}>
							<img src={item.icon} alt="nav icon" srcSet="" />
							{isExpanded &&(<p>{item.text}</p>)}
							{isExpanded && (<div className="tooltip">{item.text}</div>)}
							</Link>
						)
					})}
				</div>
			</div>
			<div className="nav-footer">
				<a href="/" className={isExpanded?"nav-details":"nav-details nav-details-NX"}>
				{/* <img className={isExpanded?"logout-icon":"logout-icon logout-icon-Nx"} src="icons/logout.svg" alt="Logout"/> */}
				{isExpanded && (<p className="nav-footer-user-name">My Expenses</p>)}
				
				</a>
			{/* {isExpanded && (<div className="footer-brand">
						<img className="logout-icon" src="icons/Logout.svg" alt="nav brand"/>
						<p className="nav-footer-user-name" >Coachshala</p>
						<p className="nav-footer-user-position">Student</p>
					</div>)} */}
				
				
			</div>
			{/* <img className="logout-icon" src="icons/logout.svg" alt="Logout"/> */}
		</div>
		
		</>
	);
};

export default SideNavBar;
