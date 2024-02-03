import React from 'react';

const InputButtonGroup = ({ options, selectedValue, onChange, isMultiple, className }) => {
  return (
    <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          className={`${
            selectedValue.includes(option.value) ? 'bg-[#E5C3C2] text-black' : 'bg-white text-black'
          } py-2 px-4 rounded focus:outline-none focus:shadow-outline flex-grow`}
          onClick={() => {
            if (isMultiple) {
              const updatedSelection = selectedValue.includes(option.value)
                ? selectedValue.filter((value) => value !== option.value)
                : [...selectedValue, option.value];
              onChange(updatedSelection);
            } else {
              onChange(option.value);
            }
          }}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default InputButtonGroup;
