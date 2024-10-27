import React, { useContext, useState } from 'react';
import { TokenContext } from '../Context/TokenContext';
import Logo from '../../public/logo.png'
import { FaUserCircle } from 'react-icons/fa';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import CustomModal from '../Components/CustomModal';
import LoginForm from '../Components/LoginForm';


const Header = () => {
    const {token , removeToken} = useContext(TokenContext)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  return (
    <>
    <header className="bg-purple shadow-md">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-2 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center flex-row-reverse space-x-reverse space-x-2">
    <a href="/" className="flex items-center">
                        <img src={Logo} alt="Logo" className="h-8 w-auto" />
                        <h3 className="md:text-2xl sm:text-xl antialiased font-bold mr-2 text-violet-950">وی هتل</h3>
                    </a>
                </div>

                {/* Navigation Links */}
                <div className="flex items-center space-x-4">
                    <a href="/" className="text-gray-700 hover:text-violet-500 pl-2 antialiased ">ثبت رزرو</a>
                    {token ? (
                        // <a href="#" className="text-gray-700 hover:text-violet-500 pr-2">پروفایل کاربری</a>
                        <Popover className="pr-2">
                        <PopoverButton className="block text-sm/6 font-semibold text-purple focus:outline-none data-[active]:text-purple data-[hover]:text-purple data-[focus]:outline-1 data-[focus]:outline-purple">
                        <FaUserCircle className="h-6 w-6" />
                        </PopoverButton>
                        <PopoverPanel
                          transition
                          anchor="bottom"
                          className="divide-y divide-black/5 rounded-xl bg-gray-300 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
                        >
                          <div className="p-3">
                            <a className="block rounded-lg py-2 px-3 transition hover:bg-gray-300" href="/account">
                              <p className="font-semibold text-gray-900">پروفایل کاربری</p>
                              {/* <p className="text-white/50">Measure actions your users take</p> */}
                            </a>
                            <a className="block rounded-lg py-2 px-3 transition hover:bg-gray-300" href="/reserves">
                              <p className="font-semibold text-gray-900">رزروهای من</p>
                            </a>
                          </div>
                        </PopoverPanel>
                      </Popover> 
                    ) : (
                        <a href="#" className="text-gray-700 hover:text-violet-500 pr-2 antialiased "
                        onClick={openModal}>ورود / ثبت نام</a>
                    )}
                </div>
            </div>
        </header>
        <CustomModal isOpen={isModalOpen} onClose={closeModal} title="" footer={[]}>
        <LoginForm />
      </CustomModal>
        </>
  );
};

export default Header;