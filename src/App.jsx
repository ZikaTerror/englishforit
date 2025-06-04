import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Home from "./pages/Home";
import Glossary from "./pages/Glossary";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Glossary", href: "/glossary" },
];

export default function App() {
  return (
    <Router>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      alt="Yes its windows"
                      src="https://winaero.com/blog/wp-content/uploads/2015/06/this-pc-computer-icon.png"
                      className="size-8"
                    />
                    <div className="hidden md:block ml-10 flex space-x-4">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <DisclosureButton className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block size-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block size-6" aria-hidden="true" />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>
              <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>

        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/glossary" element={<Glossary />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
