const ComponentHeader = ({ title, description }) => {
  return (
    <div className='flex flex-col items-center justify-center mb-10'>
      <div
        className={`${
          title === 'Departmental Services' ? 'bg-[#D4EEFF]' : 'bg-[#E6F5FF]'
        } font-serif font-medium text-xl mb-6 py-2 px-6 text-[#0080D2] rounded-full flex items-center`}
      >
        {title}
      </div>

      <h1 className='text-[#000B47] font-extrabold font-serif text-5xl'>
        {description}
      </h1>
    </div>
  );
};

export default ComponentHeader;
