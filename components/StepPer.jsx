import React, { useState } from 'react';

function StepPer() {


    const [currentStep, setCurrentStep] = useState(0);
  const steps = ['Step 1', 'Step 2', 'Step 3', 'step 4'];
    return (
        <div className="completed mt-5">
            <ul className="relative flex flex-row gap-x-2">
                {steps.map((step, index) => (
                    <li key={index} className={`flex items-center gap-x-2 shrink basis-0 flex-1 group ${currentStep >= index ? 'success' : ''}`} data-hs-stepper-nav-item={`{ "index": ${index + 1}, "isCompleted": ${currentStep >= index} }`}>
                        <span className="min-w-7 min-h-7 group inline-flex items-center text-xs align-middle focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                            <span className={`size-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full ${currentStep === index ? 'bg-blue-600 text-white' : ''}`}>
                                {currentStep > index ? (
                                    <svg className="size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                ) : (
                                    index + 1
                                )}
                            </span>
                        </span>
                        <div className={`w-full h-px flex-1 bg-gray-200 ${currentStep > index ? 'bg-teal-600' : ''}`}></div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StepPer