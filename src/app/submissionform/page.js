"use client"
import { motion } from "framer-motion";
const SubmissionForm = () => {
    return (
        <>
            <section className="  px-6 md:px-40 bg-[#fff] flex flex-col lg:flex-row items-center gap-10">
                <div className=" w-full lg:w-[40%]">
                    <motion.div className="  py-4  bottom-0 left-0  px-3 "
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2 }}>
                        <h3 className="text-4xl justify-center">Thank You</h3>
                        <p className="text-sm text-gray-500 w-40 py-4 text-center justify-center">Thank You</p>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default SubmissionForm
             