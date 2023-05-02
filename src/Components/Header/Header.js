import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Usermenu from './Usermenu'
import { NavLink } from 'react-router-dom'


const navigation = {
    categories: [
        {
            id: 'Trang chủ',
            name: 'Trang chủ',


        }

    ],

    lichChieu: [
        {
            id: 'Lịch chiếu',
            name: 'Lịch chiếu',

        }
    ],

    rap: [
        { name: 'Rạp' }
    ],

    ungdung: [
        { name: 'Ứng dụng', href: '#' }
    ]


}

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-gray-900">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pt-5 pb-2">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-black"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}

                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-black',
                                                            'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    <NavLink to={"/"}>
                                                        {category.name}
                                                    </NavLink>
                                                </Tab>
                                            ))}

                                            {navigation.lichChieu.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-black',
                                                            'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    <NavLink to={"/list"}>
                                                        {category.name}
                                                    </NavLink>
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>

                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 py-6 px-4">


                                    {navigation.ungdung.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <NavLink className="-m-2 block p-2 font-medium text-black" to={"/ungdung"}>{page.name}</NavLink>

                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 border-t border-gray-300 py-6 px-4">
                                    <div className="flow-root">
                                        <Usermenu></Usermenu>

                                    </div>

                                </div>


                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative bg-white">


                <nav aria-label="Top" className=" bg-white  mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200 ">
                        <div className="flex h-16 items-center">
                            <button
                                type="button"
                                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>

                            {/* Logo */}
                            <NavLink to={"/"}>
                                <div className="ml-4 flex lg:ml-0">

                                    <span className='sr-only'>Your Company</span>

                                    <img
                                        className="h-8 w-auto"
                                        src="https://demo1.cybersoft.edu.vn/logo.png"
                                        alt=""
                                    />


                                </div></NavLink>


                            {/* Flyout menus */}

                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            {({ open }) => (
                                                <>

                                                    <div className="relative flex">


                                                        <Popover.Button
                                                            className={classNames(
                                                                open

                                                                    ? 'border-indigo-600 text-indigo-600'
                                                                    : 'text-gray-700 hover:text-gray-800 ',
                                                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                                            )}
                                                        >
                                                            <NavLink to={"/"}>
                                                                {category.name}
                                                            </NavLink>

                                                        </Popover.Button>

                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />


                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                    {navigation.lichChieu.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            {({ open }) => (
                                                <>

                                                    <div className="relative flex">


                                                        <Popover.Button
                                                            className={classNames(
                                                                open

                                                                    ? 'border-indigo-600 text-indigo-600'
                                                                    : 'text-gray-700 hover:text-gray-800 ',
                                                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                                            )}
                                                        >
                                                            <NavLink to={"/list"}>
                                                                {category.name}
                                                            </NavLink>

                                                        </Popover.Button>

                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />


                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                    {navigation.rap.map((page) => (
                                        <NavLink key={page.name}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800" to={"/rap"}>{page.name}</NavLink>

                                    ))}

                                    {navigation.ungdung.map((page) => (

                                        <NavLink key={page.name}
                                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800" to={"/ungdung"}>{page.name}</NavLink>

                                    ))}
                                </div>
                            </Popover.Group>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                                    <Usermenu></Usermenu>
                                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

                                </div>



                                {/* Search */}
                                <div className="search-box flex lg:ml-6">
                                    <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus: dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-blue-500" placeholder="Search..." />




                                    <MagnifyingGlassIcon className="timkiem h-6 w-6" aria-hidden="true" />





                                </div>



                                {/* Cart */}

                            </div>
                        </div>
                    </div>
                </nav >

            </header >
        </div >
    )
}

