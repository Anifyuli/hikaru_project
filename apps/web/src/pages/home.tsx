import BrandingImg from "/src/assets/img/branding.png";

export default function HomePage() {
  return (
    <div className="flex flex-row h-screen w-full">
      <div className="bg-primary w-1/2 h-full flex flex-col gap-2 items-center justify-center">
        <p className="text-primary-content">Provided by</p>
        <img src={BrandingImg} alt="Hikaru Exam Service small branding img" />
      </div>
      <div className="bg-base-300 w-1/2 h-full flex flex-col items-center justify-center gap-8">
        <div className="absolute top-4 right-4 z-10 m-3">
          <p>Need help?</p>
          <a href="#" className="font-bold">
            Ask Your Proctor
          </a>
        </div>
        <h1 className="text-3xl font-bold">
          Hi Student 👋🏼 <br /> Start your exam here!{" "}
        </h1>
        <a
          href="/login"
          className="btn btn-xl btn-accent rounded-xl font-bold text-2xl"
        >
          Start Exam
        </a>
      </div>
    </div>
  );
}
