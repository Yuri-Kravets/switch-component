
export default function MyArr({ myArr, activeIndex, handleClick }) {
  return (
    <div className="flex items-center rounded-2xl text-lg font-semibold  bg-white">
      {myArr.map((item, index) => (
        <label
          key={index}
          className={`flex items-center space-x-2 cursor-pointer transition-colors duration-300 ${activeIndex === index
            ? 'text-white rounded-2xl p-2 bg-green-500 h-full'
            : 'text-gray-800 rounded-l-lg p-2 '
          }`}
        >
          <input
            type="checkbox"
            checked={activeIndex === index}
            onChange={() => handleClick(index)}
            className="form-checkbox appearance-none border-gray-300 rounded-md checked:bg-green-500 checked:border-transparent focus:outline-none"
          />
          <span>{item}</span>
        </label>
      ))}
    </div>
  );
}
