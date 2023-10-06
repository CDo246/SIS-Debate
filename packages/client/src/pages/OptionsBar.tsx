import { Listbox, Transition } from "@headlessui/react";
import { useState } from "react";
import { Cog6ToothIcon, XMarkIcon } from "@heroicons/react/24/solid";

export default function OptionsBar() {
  const [isOpen, setIsOpen] = useState(false);
  const roles: Array<string> = [
    // temporary
    "Philosopher",
    "Angry Drunk",
    "Conspiracy Theorist",
    "Cowboy",
    "Pirate",
    "Valley Girl",
    "Shakespearean Bard",
    "Hyperactive Dog That Can Talk",
    "Mime",
    "Professional Rapper That Rhymes Everything",
    "Caveman",
    //Character From Media (that we may or may not be allowed to use)
    "Super Mario",
    "Yoda",
  ];
  const [selectedRoleFor, setSelectedRoleFor] = useState(null);
  const [selectedRoleAgainst, setSelectedRoleAgainst] = useState(null);

  return (
    <>
      <div
        className={`${
          !isOpen && " pointer-events-none"
        } flex fixed left-0 right-0 mx-auto lg:flex-row z-40 flex-col lg:w-[54%] w-screen lg:min-w-[825px] my-5 lg:my-2 lg:h-14 lg:items-center lg:space-x-4 lg:space-y-0 space-y-4 lg:justify-between justify-center align-start`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex align-center pointer-events-auto drop-shadow-xl justify-center bg-opacity-20 text-sm dark:text-gray-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-75 px-0 ml-8 lg:ml-0 py-0 w-9 h-9"
        >
          {!isOpen && <Cog6ToothIcon className="w-9 h-9" title="Options" />}
          {isOpen && <XMarkIcon className="w-9 h-9" title="Close" />}
        </button>
        <Transition
          appear
          show={isOpen}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="lg:space-y-0 space-y-2 p-2 mx-auto flex flex-col lg:flex-row lg:justify-between lg:w-[100%] w-[85%] md:h-fit lg:h-14 rounded-lg bg-white/90 dark:bg-gray-800/90 shadow-lg"
        >
          <Listbox
            value={selectedRoleAgainst}
            onChange={setSelectedRoleAgainst}
          >
            <div className="flex lg:items-center relative lg:flex-row flex-col lg:w-96 lg:space-y-0">
              <Listbox.Label className="dark:text-white font-bold sm:pb-0">
                Against:&nbsp;
              </Listbox.Label>
              <Listbox.Button className="bg-sky-200 text-black text-sm">
                {!selectedRoleAgainst && <span>Choose role...</span>}
                {selectedRoleAgainst}
              </Listbox.Button>
              <Transition
                appear
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute left-0 top-16 lg:top-0 w-full z-40"
              >
                <Listbox.Options className="lg:space-y-0 space-y-3 lg:mt-12 z-40 max-h-56 rounded-md overflow-y-auto bg-white">
                  {roles.map((role) => (
                    <Listbox.Option value={role} className="cursor-pointer">
                      {({ active, selected }) => (
                        <li
                          className={`${active && "bg-sky-100 rounded-md"} ${
                            selected && "bg-sky-200"
                          } p-1 pl-2`}
                        >
                          {role}
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
          <Listbox value={selectedRoleFor} onChange={setSelectedRoleFor}>
            <div className="flex lg:items-center relative lg:flex-row flex-col lg:space-y-0">
              <Transition
                appear
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute right-0 top-16 lg:top-0 lg:w-96 w-full z-40"
              >
                <Listbox.Options className="lg:space-y-0 space-y-3 lg:mt-12 z-40 max-h-56 rounded-md overflow-y-auto bg-white">
                  {roles.map((role) => (
                    <Listbox.Option value={role} className="cursor-pointer">
                      {({ active, selected }) => (
                        <li
                          className={`${active && "bg-sky-100 rounded-md"} ${
                            selected && "bg-sky-200"
                          } p-1 pl-2`}
                        >
                          {role}
                        </li>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
              <Listbox.Label className="dark:text-white font-bold sm:pb-0 text-end">
                For:&nbsp;
              </Listbox.Label>
              <Listbox.Button className="bg-sky-200 text-black text-sm">
                {!selectedRoleFor && <span>Choose role...</span>}
                {selectedRoleFor}
              </Listbox.Button>
            </div>
          </Listbox>
        </Transition>
      </div>
    </>
  );
}
