import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';
import { clearAlls } from '../features/Slice';
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Input,
} from "@material-tailwind/react";

import {
  UserCircleIcon,
  ChevronDownIcon,
  LifebuoyIcon,
  PowerIcon,

} from "@heroicons/react/24/outline";



const adminMenuItems = [
  {
    label: "Admin Profile",
    icon: UserCircleIcon,
  },

  {
    label: "Product List",
    icon: UserCircleIcon,
  },

  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
const Header = () => {
  const { userInfo } = useSelector((store) => store.userInfo);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  return (
    // <div>
    //   <div className='flex justify-between px-10'>

    //     <NavLink to='/'>Home</NavLink>
    //     {userInfo === null && <NavLink to='/user/login'>Login</NavLink>}
    //     {/* {userInfo !== null && <NavLink to='/user/login'>Logout</NavLink>} */}
    //     {userInfo !== null && <NavLink to='/addproduct'>Add</NavLink>}
    //   </div>
    // </div>



    <Navbar className=" p-2 px-7 mx-auto bg-black h-[10vh] md:h-[12vh]">
      <div className=" flex justify-between text-white">
        <Menu>
          <MenuHandler>
            <i className="fa-solid fa-bars hidden md:flex items-center">

            </i>

          </MenuHandler>

          <MenuList className='hidden md:flex  space-y-2 flex-col items-center'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            <NavLink to='fruit'>Fruits & juices</NavLink>
            {userInfo === null && <NavLink to='/user/login'>Login</NavLink>}
          </MenuList>
        </Menu>

        <Typography
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium md:hidden"
        >
          <NavLink className="flex items-center gap-2" to='/' replace><img className="h-10 w-10 " src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fruit-logo-design-template-7e683dfd73ca0b9689c4e78f4efce998_screen.jpg?ts=1638214676" alt="" />  Home</NavLink>
        </Typography>

        <div className="flex items-center space-x-5">
          <div className="space-x-5 md:hidden">


            {/* <NavLink to='fruit'>Fruits & Juices</NavLink> */}
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            {userInfo === null && <NavLink to='/user/login'>Login</NavLink>}
          </div>


          {userInfo !== null && <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
              >
                <Avatar
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="border border-blue-500 p-0.5"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                    }`}
                />
              </Button>
            </MenuHandler>

            <MenuList className="p-1">
              {(userInfo.token !== null ? adminMenuItems : '').map(({ label, icon }, key) => {
                const isLastItem = key === ''.length - 1;
                return (
                  <MenuItem
                    key={label}
                    onClick={() => {
                      switch (label) {
                        case 'Sign Out':
                          dispatch(clearAlls());
                          nav('/', { replace: true });
                          closeMenu();

                          break;

                        case 'Product List':

                          nav('/products/all');
                          closeMenu();
                          break;
                        case 'My Profile':
                          nav('/user/profile');
                          closeMenu();

                          break;
                        case 'Admin Profile':
                          nav('/user/allDetail');
                          closeMenu();
                          break;
                        default:
                          closeMenu();
                      }


                    }}
                    className={`flex items-center gap-2 rounded ${isLastItem
                      ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                      : ""
                      }`}
                  >
                    {React.createElement(icon, {
                      className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                      strokeWidth: 2,
                    })}
                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                      color={isLastItem ? "red" : "inherit"}
                    >
                      {label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>


          </Menu>
          }
        </div>





      </div>
    </Navbar>
  )
}

export default Header
