import { Listbox, Transition } from "@headlessui/react";
import { useState } from "react";
import {
  Cog6ToothIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

export default function OptionsBar(props: {
  selectedRoleAgainst: string;
  setSelectedRoleAgainst: React.Dispatch<React.SetStateAction<string>>;
  selectedRoleFor: string;
  setSelectedRoleFor: React.Dispatch<React.SetStateAction<string>>;
  messageCount: number;
  setMessageCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  const selectedRoleAgainst = props.selectedRoleAgainst;
  const setSelectedRoleAgainst = props.setSelectedRoleAgainst;
  const selectedRoleFor = props.selectedRoleFor;
  const setSelectedRoleFor = props.setSelectedRoleFor;
  const messageCount = props.messageCount;
  const setMessageCount = props.setMessageCount;
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
          className="flex align-center pointer-events-auto shadow-xl justify-center bg-opacity-20 text-sm dark:text-gray-300 hover:bg-opacity-30 focus:outline-none focus-visible:ring-1 focus-visible:ring-white focus-visible:ring-opacity-75 px-0 ml-8 lg:ml-0 py-0 w-9"
        >
          {!isOpen && (
            <Cog6ToothIcon
              className="w-9 h-9 bg-gray-800/90 rounded-lg"
              title="Options"
            />
          )}
          {isOpen && (
            <XMarkIcon
              className="w-9 h-9 bg-gray-800/90 rounded-lg"
              title="Close"
            />
          )}
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
          className="lg:space-y-0 lg:-mx-2 space-y-2 p-2 mx-auto lg:mx-[initial] flex flex-col lg:flex-row lg:justify-between lg:w-[100%] w-[85%] md:h-fit lg:h-14 rounded-lg bg-white/90 dark:bg-gray-800/90 shadow-lg"
        >
          <Listbox
            value={selectedRoleAgainst}
            onChange={setSelectedRoleAgainst}
          >
            <div className="flex lg:grow lg:basis-80 lg:mx-2 items-start lg:items-center relative lg:flex-row flex-col lg:space-y-0 lg:border-r lg:border-gray-500 pr-4">
              <Listbox.Label className="dark:text-white font-bold sm:pb-0 lg:mr-2">
                Against:
              </Listbox.Label>
              <Listbox.Button className="flex justify-between items-center text-left bg-sky-200 text-black text-sm lg:max-w-[75%] w-11/12 lg:p-1">
                <span className="pl-2">
                  {!selectedRoleAgainst && "Choose role..."}
                  {selectedRoleAgainst}
                </span>
                <ChevronDownIcon className="h-6 inline"></ChevronDownIcon>
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
          <div className="flex grow basis-[12%] lg:mx-2 lg:order-2 order-last items-center lg:justify-center relative lg:flex-row flex-col lg:space-y-0">
            <label
              className="dark:text-white font-bold sm:pb-0 lg:mr-2"
              htmlFor="Message Count"
              title="Number of messages per debater"
            >
              Message Count:
            </label>
            <input
              onChange={(e) => {
                if (
                  (e.target.value as unknown as number) >= 1 &&
                  (e.target.value as unknown as number) <= 4
                )
                  setMessageCount(e.target.value as unknown as number);
              }}
              type="number"
              id="messageCount"
              name="Message Count"
              defaultValue={messageCount}
              min="1"
              max="4"
              className="w-16 p-1.5 text-center rounded-lg bg-sky-200"
            ></input>
          </div>
          <Listbox value={selectedRoleFor} onChange={setSelectedRoleFor}>
            <div className="flex lg:grow lg:basis-80 lg:mx-2 pl-4 items-end lg:items-center lg:order-last order-2 relative lg:flex-row flex-col lg:space-y-0 lg:border-l lg:border-gray-500">
              <Transition
                appear
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute right-0 top-16 lg:top-0 w-full z-40"
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
              <Listbox.Label className="dark:text-white font-bold sm:pb-0 text-end lg:mr-2">
                For:
              </Listbox.Label>
              <Listbox.Button className="flex justify-between items-center text-left bg-sky-200 text-black text-sm lg:max-w-[75%] w-11/12 lg:p-1">
                <span className="pl-2">
                  {!selectedRoleFor && "Choose role..."}
                  {selectedRoleFor}
                </span>
                <ChevronDownIcon className="h-6 inline"></ChevronDownIcon>
              </Listbox.Button>
            </div>
          </Listbox>
          {isOpen && (
            <span className="fixed border-x-0 rounded-b-lg rounded-t-lg lg:rounded-t-none lg:top-36 sm:top-[23rem] top-[26rem] left-0 right-0 lg:left-[initial] lg:right-[initial] mx-auto w-[85%] lg:w-[initial] p-2 dark:text-white dark:bg-gray-800/90">
              These changes will take effect when a new debate is generated.
            </span>
          )}
        </Transition>
      </div>
    </>
  );
}
