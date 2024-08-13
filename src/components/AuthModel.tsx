import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'choice' | 'login' | 'otp' | 'success'>('choice');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'login') {
      setStep('otp');
    } else if (step === 'otp') {
      setStep('success');
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  const contentVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              {step === 'choice' && (
                <motion.div
                  key="choice"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="p-8 text-center"
                >
                  <h2 className="text-3xl font-bold text-[#3093CB] mb-2">MY ACCOUNT</h2>
                  <p className="text-gray-600 mb-6">LOGIN TO ACCESS YOUR ACCOUNT</p>
                  <div className=" flex gap-2">
                    <button
                      onClick={() => setStep('login')}
                      className="w-full py-2 px-4 border-2 border-[#3093CB] text-[#3093CB]  hover:bg-blue-50 transition duration-300"
                    >
                      LOGIN
                    </button>
                    <button
                      onClick={() => setStep('login')}
                      className="w-full py-2 px-4 bg-[#3093CB] text-white  hover:bg-white hover:text-[#3093CB] hover:border-2 transition duration-300"
                    >
                      SIGNUP
                    </button>
                  </div>
                  <p className="mt-6 text-gray-500 text-sm cursor-pointer hover:underline">
                    Click here to contact us
                  </p>
                </motion.div>
              
              )}

              {step === 'login' && (
                <motion.form
                  key="login"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="p-6"
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-2xl font-semibold text-[#3093CB] text-center uppercase mb-4">Login or Signup</h2>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Enter Full Name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4 flex">
                    <select className="px-3 py-2 border rounded-l-md bg-gray-100">
                      <option>+91</option>
                    </select>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="Enter Your Mobile no."
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="flex-1 px-3 py-2 border rounded-r-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Remember Me</span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md"
                  >
                    Request OTP
                  </button>
                  <p className="text-sm text-center mt-4">
                    By continuing, I agree to Terms of Use & Privacy Policy
                  </p>
                  <p className="text-sm text-center mt-2">
                    Already Member with us ? LOGIN
                  </p>
                </motion.form>
              )}

              {step === 'otp' && (
                <motion.form
                  key="otp"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="p-6"
                  onSubmit={handleSubmit}
                >
                  <h2 className="text-2xl font-semibold mb-4">Verify Mobile OTP</h2>
                  <p className="mb-4">OTP Sent to Mobile No.: {formData.mobile}</p>
                  <div className="flex justify-between mb-4">
                    {[...Array(6)].map((_, i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength={1}
                        className="w-12 h-12 text-center border rounded-md"
                      />
                    ))}
                  </div>
                  <p className="text-sm mb-4">Resend OTP ? Request in 2:00</p>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md"
                  >
                    Verify OTP
                  </button>
                  <p className="text-sm text-center mt-4">
                    By continuing, I agree to Terms of Use & Privacy Policy
                  </p>
                </motion.form>
              )}

              {step === 'success' && (
                <motion.div
                  key="success"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="p-6 text-center"
                >
                  <h2 className="text-2xl font-semibold mb-4">Congratulation!!</h2>
                  <p>You have successfully created your account.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;