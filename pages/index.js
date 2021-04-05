import Layout from 'components/layout'

function Home() {
  return (
    <Layout title='Nazir Bahrul Ulum' homepage>
      <div>
        <h1 className='text-5xl font-extralight transition duration-700 animate-leftToRight'>Hello</h1>
        <h2 className='text-2xl font-extralight w-full leading-snug my-10 lg:w-6/12 md:text-4xl md:leading-normal animate-fadeIn'>I'm <span className='font-normal'>Nazir Bahrul Ulum</span>, a front-end web developer focused on building beautiful websites and awesome</h2>
        <h3>Get in touch <span></span> <a href="mailto:nazirbachrululum@gmail.com">nazirbachrululum@gmail.com</a></h3>
      </div>

      <div className='fixed bottom-0 left-0 right-0 -z-1'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 344 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,320L48,314.7C96,309,192,299,288,272C384,245,480,203,576,176C672,149,768,139,864,128C960,117,1056,107,1152,106.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </Layout>
  )
}

export default Home