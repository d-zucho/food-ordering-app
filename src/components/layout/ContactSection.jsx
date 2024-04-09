import Button from '../Button'
import SectionHeader from './SectionHeader'

const ContactSection = () => {
  return (
    <section id='contact' className=''>
      <SectionHeader subheader={'Get in touch'} header={'Contact us'} />
      <p className='text-gray-500 max-w-2xl mx-auto'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        nemo aperiam suscipit laudantium odio alias quidem, non nihil mollitia
        consectetur qui ipsa itaque delectus similique esse? Rem, consectetur
        quas commodi quos dolorem qui dolor? Odio illum debitis laudantium
        beatae. Numquam hic, perspiciatis iure dicta reprehenderit voluptates
        cupiditate. Doloremque, quos minus?
      </p>
      <div className='mt-12'>
        <form className='max-w-sm mx-auto space-y-4'>
          <div>
            <label htmlFor='name' className='block text-gray-500 text-sm'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full border-b-2 border-gray-400 focus:outline-none focus:border-primary placeholder:text-black/30'
              placeholder='John Doe'
            />
          </div>
          <div className='relative'>
            <label htmlFor='email' className='block text-gray-500 text-sm'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='your_email@email.com'
              className='w-full border-b-2 border-gray-400 focus:outline-none focus:border-primary placeholder:text-black/30'
            />
          </div>
          <Button
            rounded={'full'}
            color={'white'}
            bg={'primary'}
            className={'px-8 mx-auto block hover:scale-[102%] transition'}
          >
            Send
          </Button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
