import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { localUserServ } from '../../service/localService';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment } from 'react'
import classNames from 'classnames';

export default function Usermenu() {
    let userInfo = useSelector((state) => {
        return state.userReducer.userInfo;
    })

    let hanleLogout = () => {
        localUserServ.remove();
        window.location.reload();
    }

    let renderContent = () => {
        if (userInfo) {
            return (
                <>

                    <Menu as="div" className="relative ml-3">
                        <div>

                            <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="h-8 w-8 rounded-full mr-2"
                                    src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                                    alt=""
                                />
                                <span className='text-black'>{userInfo.hoTen}</span>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Hồ sơ của bạn
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Cài Đặt
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            onClick={hanleLogout}
                                            href="#"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                        >
                                            Đăng xuất
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </>
            );
        }
        else {
            return (
                <>
                    <NavLink to={"/login"}>

                        <a href="" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                            Đăng nhập
                        </a>
                    </NavLink>

                    <NavLink to={"/register"}>
                        <a href="" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                            Đăng ký
                        </a>
                    </NavLink>



                </>
            )
        }




    }
    return (
        <div className='space-x-5'>{renderContent()}</div>
    )

}
