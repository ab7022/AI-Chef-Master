import './DateInput.css';

const DateInput = ({ value, setValue, keyName }) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const handleDateChange = (e) => {
        const date = e.target.value;
        const newValue = { ...value, [keyName]: `${date}/${value[keyName].split('/')[1]}/${value[keyName].split('/')[2]}` };
        setValue(newValue);
    };

    const handleMonthChange = (e) => {
        const monthIndex = e.target.selectedIndex - 1;
        const newValue = { ...value, [keyName]: `${value[keyName].split('/')[0]}/${monthIndex + 1}/${value[keyName].split('/')[2]}` };
        setValue(newValue);
    };

    const handleYearChange = (e) => {
        const year = e.target.value;
        const newValue = { ...value, [keyName]: `${value[keyName].split('/')[0]}/${value[keyName].split('/')[1]}/${year}` };
        setValue(newValue);
    };

    return (
        <div className='flex gap-2'>
            <input
                className='input-num p-2 custom-input focus:outline-none w-[50px] text-center'
                type="number"
                min="1"
                max="31"
                onChange={handleDateChange}
                placeholder="Date"
            />
            <select
                className=' p-2 custom-input focus:outline-none'
                onChange={handleMonthChange}
            >
                <option value="">Month</option>
                {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                ))}
            </select>
            <input
                className='input-num p-2 custom-input focus:outline-none w-[75px] text-center'
                type="number"
                min="1990"
                max={new Date().getFullYear()}
                onChange={handleYearChange}
                placeholder="Year"
            />
        </div>
    );
};

export default DateInput;