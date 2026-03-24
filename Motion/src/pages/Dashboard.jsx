import { ArrowBigLeft, ChevronLeft, ChevronRight, Contact, EarthLockIcon, HomeIcon, Link, MoveLeft, Settings, ShoppingBag, StepBack, UserIcon } from 'lucide-react'
import React, { useState } from 'react'
import { motion, transform } from 'motion/react'
function Dashboard() {
    // / animation orchestration - means managing the animations 
  // variants --> is an object which can be reused by passing it to multiple motion components
    const [isOpen , setIsOpen] = useState(false)
    const Links = [
        { title : "Home" , 
          icon : (<HomeIcon/>)
        },
        { title : "Cart" , 
            icon : (<ShoppingBag/>)
        },
        { title : "Contact Us" , 
            icon : (<UserIcon/>)
        },
        { title : "Setting" , 
            icon : (<Settings/>)
          },
    ]
    const sidebarVariant = {
        open : {
            width : "16rem"
        } , 
        closed : {
            width : "4.5rem"
        }
    }
    const childVariant = {
        open : {
            opacity : 1 ,
            y : 0
        } ,
        closed : {
            opacity : 0 ,
            y : -10
        }
    }
    const parentVariant = {
        open : {    
            transition : {
                staggerChildren : 0.05 ,
                delayChildren : 0.2 
            }
        } ,
        closed : {    
            transition : {
                staggerChildren : 0.05 
            }
        }
    }
    const dashBoardVariant = {
        open : {
            opacity : 1 ,
            x : 0
        } ,
        closed : {
            opacity : 0 ,
            x : -100
        }
    }
  return (
    <motion.div className='w-full min-h-screen flex'
     
    >
        {/* sidebar */}
        <motion.div className='border-r min-h-screen border-neutral-100 shadow-sm '
            // animate= {isOpen ? "open" : "closed"}
            initial = "closed"
            whileHover = "open"
            transition={{
                duration : 0.3
            }}
        >
            <motion.nav 
                variants={sidebarVariant}
            >
                <div className='p-4 flex items-center justify-between'>
                    <motion.h2 
                        variants={dashBoardVariant}
                    >Dashboard
                    </motion.h2>
                    <button className='rounded-full p-3'
                        onClick={()=> setIsOpen(!isOpen)}
                    >
                        {isOpen ? (<ChevronRight/>) : (<ChevronLeft/>)}
                    </button>
                </div>
                <div className="p-4">
                    <nav>
                        <motion.ul variants={parentVariant} className="space-y-4">
                            {Links.map((eachLink)=>(
                                <motion.li key={eachLink.title} variants={childVariant}>
                                    <a href="#" className='flex items-center space-x-4 p-2 rounded-md hover:bg-neutral-100'>
                                        {eachLink.icon}
                                        {<p>{eachLink.title}</p>}
                                    </a>
                                </motion.li>

                            ))}
                        </motion.ul>
                    </nav>
                </div>
            </motion.nav>


        </motion.div>
        {/* actual  dashboard */}
        
        {/* sample dashboard */}
        <main className='flex-1 p-6 overflow-auto'>
          <h1 className='text-2xl font-semibold mb-6'>Sample Dashboard</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6'>
            <div className='bg-white border rounded-lg p-4 shadow-sm'>
              <p className='text-sm text-gray-500'>Total Revenue</p>
              <p className='text-2xl font-bold'>$12,345</p>
            </div>
            <div className='bg-white border rounded-lg p-4 shadow-sm'>
              <p className='text-sm text-gray-500'>Active Users</p>
              <p className='text-2xl font-bold'>1,234</p>
            </div>
            <div className='bg-white border rounded-lg p-4 shadow-sm'>
              <p className='text-sm text-gray-500'>Orders</p>
              <p className='text-2xl font-bold'>567</p>
            </div>
            <div className='bg-white border rounded-lg p-4 shadow-sm'>
              <p className='text-sm text-gray-500'>Conversion</p>
              <p className='text-2xl font-bold'>3.2%</p>
            </div>
          </div>
          <div className='bg-white border rounded-lg p-4 shadow-sm'>
            <h2 className='text-lg font-medium mb-3'>Recent Activity</h2>
            <ul className='space-y-2 text-sm text-gray-600'>
              <li>• New order #1024 received</li>
              <li>• User signup — john@example.com</li>
              <li>• Payment of $99.00 completed</li>
            </ul>
          </div>
        </main>
    </motion.div>
  )
}

export default Dashboard