import BrandingImg from '/src/assets/img/branding.png';

export default function HomePage() {
  return (
    <div className="flex h-screen w-full flex-row">
      <div className="bg-primary flex h-full w-1/2 flex-col items-center justify-center gap-2">
        <p className="text-primary-content">Provided by</p>
        <img src={BrandingImg} alt="Hikaru Exam Service small branding img" />
      </div>
      <div className="bg-base-300 flex h-full w-1/2 flex-col items-center justify-center gap-8">
        <div className="absolute top-4 right-4 z-10 m-3">
          <p>Need help?</p>
          <a href="#" className="font-bold">
            Ask Your Proctor
          </a>
        </div>
        <h1 className="text-3xl font-bold">
          Hi Student 👋🏼 <br /> Start your exam here!{' '}
        </h1>
        <a href="/login" className="btn btn-xl btn-accent rounded-xl text-2xl font-bold">
          Start Exam
        </a>
      </div>
    </div>
  );
}
