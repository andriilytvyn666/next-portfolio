export default function Home() {
  return (
    <div className="flex flex-col gap-4 text-body">
      <h1 className="text-headerXl text-fg">Andrii Lytvyn</h1>
      <div className="flex flex-col gap-[28px]">
        <p>
          Hi there! My name is Andrii Lytvyn, and I am currently studying
          Computer Science & Artificial Intelligence at Lviv Polytechnic
          National University.
        </p>
        <p>
          I enjoy creating design in Figma & learning web dev. Right now I’m
          discovering Next.js. You can find project list here.
        </p>
        <p>
          Outside of the computer world, I enjoy Ukrainian underground music. In
          the future, I’d like to create something to showcase those musicians
          because some deserve more attention.
        </p>
        <p>
          Feel free to contact me at any time. Below you could find my contacts,
          CV & skills summary.
        </p>
      </div>
      <div className="flex flex-col px-6 py-5 rounded-lg bg-bg-active">
        <span>Mail me at lytvyn.andrii.contact@gmail.com.</span>
        <span> Contact me in Skype, Telegram. </span>
        <span>Find me on LinkedIn, Github.</span>
      </div>
      <div className="flex flex-col px-6 py-5 rounded-lg bg-bg-active">
        <span>Here’s my CV.</span>
        <span>Read my skills summary.</span>
      </div>
    </div>
  );
}
