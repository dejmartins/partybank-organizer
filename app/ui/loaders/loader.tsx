import { Transition } from '@headlessui/react';
import Image from 'next/image';

export default function Loader({ isOpen, message }: { isOpen: boolean, message: string }) {
  return (
    <Transition show={isOpen} as="div" className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pb-20 text-center sm:block sm:p-0">
        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-slate-950 md:opacity-75 opacity-85"></div>
        </Transition.Child>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <Transition.Child
          as="div"
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          className="inline-block overflow-hidden text-center align-bottom transition-all transform rounded-lg sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div className="flex flex-col items-center text-[var(--pb-c-white)] p-10">
            <Image src='/loader.png' width={100} height={100} alt='Partybank Loader' className='mb-4 animate-pulse' />
            <p className='text-[22px] font-[700]'>{ message }</p>
            <p className='text-[15px]'>This will only take few seconds</p>
          </div>
        </Transition.Child>
      </div>
    </Transition>
  );
}
