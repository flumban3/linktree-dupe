import "./App.css";

function App() {
  return (
    <div className='App'>
      <div className='photo'>
        <img
          className='profile-picture'
          src='/images/profilePicture.jpg'
          alt='profile'
        />
      </div>
      <div className='name'>Francis Lumban III</div>
      <div className='description'>Software Engineer</div>
      <div className='links'>
        <a
          href='https://github.com/flumban3?tab=repositories'
          target='_blank'
          rel='noreferrer'
        >
          <button className='github'>GitHub</button>
        </a>
        <a
          href='https://www.linkedin.com/in/francis-lumban-iii-54bb16177/'
          target='_blank'
          rel='noreferrer'
        >
          <button className='linkedIn'>LinkedIn</button>
        </a>
        <a
          href='https://www.instagram.com/flumban3/'
          target='_blank'
          rel='noreferrer'
        >
          <button className='instagram'>Instagram</button>
        </a>
      </div>
    </div>
  );
}

export default App;
