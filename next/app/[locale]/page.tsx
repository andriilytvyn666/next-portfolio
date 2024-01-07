const Home = () => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-subtitle">Andrii Lytvyn</h1>
      <p className="max-w-[32rem]">
        Graphical designer and photographer focused on result and quality. I
        have my own approach and unique vision. I am incredibly eager to work in
        design field. Ready to learn quickly and constantly improve my skills. I
        have skills in photography, UI/UX design and website development.
      </p>
      <div className="flex gap-2 [&>a]:font-bold ">
        <a
          target="_blank"
          href="https://drive.google.com/file/d/12cmJzs0HtAFRbk1kJ9YZPkfceoyn8yrB/view?usp=sharing"
        >
          My resume
        </a>
        <a target="_blank" href="mailto:lytvyn.andrii.contact@gmail.com">
          Email me
        </a>
      </div>
    </div>
  )
}

export default Home
