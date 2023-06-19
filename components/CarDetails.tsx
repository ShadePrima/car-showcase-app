'use client'

import React from 'react'

import Image from 'next/image'
import { Dialog, Transition } from '@headlessui/react'

import { CarProps } from '@/types'

interface CarDetailProps {
  isOpen: boolean
  closeModal: () => void
  car: CarProps
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={React.Fragment}
            enter='easy-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='easy-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25 ' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex nin-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={React.Fragment}
                enter='easy-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='easy-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel>
                  <button type='button' onClick={closeModal}>
                    <Image
                      src='/close.svg'
                      alt='close'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails
