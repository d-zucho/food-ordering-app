const SectionHeader = ({ subheader, header }) => {
  return (
    <div className='text-center mb-8 mt-24 pt-4'>
      <h2 className='text-gray-500 font-semibold uppercase leading-4'>
        {subheader}
      </h2>
      <h3 className='text-primary font-bold text-4xl italic'>{header}</h3>
    </div>
  )
}

export default SectionHeader
