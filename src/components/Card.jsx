import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { motion, scale } from "motion/react"
const Card = ({data, reference}) => {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.2}
            dragTransition={{bounceStiffness:100 ,bounceDamping:20}}
            className='relative flex-shrink-0 w-60 h-72 px-4 py-8 rounded-[40px] bg-zinc-500/90 text-white p-5 overflow-hidden'>
          <FaRegFileAlt />
          <p className='text-sm mt-5 font-semibold leading-tight left-3'>{data.desc}</p>
          <div className='footer absolute bottom-0 w-full h-[50px] left-0 mb-[60px]'>
              <div className='flex items-center justify-between px-6 py-5'>
                  <h5>{data.filesize}</h5>
                  <span className='w-7 h-7 bg-sky-200 rounded-full flex items-center justify-center'>
                      {data.close ?<IoIosClose /> : <MdOutlineFileDownload size="1em" color='#000' />}
                      
                  </span>
              </div>
              {
                  data.tag.isOpen && (
                      <div className={`tag w-full py-3 bg-blue-600 flex items-center justify-center`}>
                          <h3 className='text-sm font-semibold'>{ data.tag.tagTitle}</h3>
                      </div>
                  )}
          </div>
     </motion.div>
  )
}

export default Card