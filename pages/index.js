import Layout from 'components/layout'
export default function Home() {
  return (
    <Layout title='Nazir Bahrul Ulum' homepage>
      <div className=''>
        <h1 className='text-5xl font-extralight transition duration-700'>Hello</h1>
        <h2 className='text-2xl font-extralight w-full leading-snug my-10 lg:w-6/12 md:text-4xl md:leading-normal'>I'm <span className='font-normal'>Nazir Bahrul Ulum</span>, a front-end web developer focused on building beautiful websites and awesome</h2>
        <h3>Get in touch <span></span> <a href="mailto:nazirbachrululum@gmail.com">nazirbachrululum@gmail.com</a></h3>
      </div>
    </Layout>
  )
}