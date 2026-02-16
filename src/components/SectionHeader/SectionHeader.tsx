export default function SectionHeader({ title, eyebrow, description }: {
  title?: string,
  eyebrow?: string,
  description?: string
}) {
  return (
    <>
      <div className="flex justify-center  absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-[100%] blur-[280px] -z-10 pointer-events-none">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-primary to-accent text-transparent bg-clip-text text-center text-sm md:text-base">
          {eyebrow}
        </p>
      </div>
      <h2 className="font-sans text-3xl md:text-5xl text-center mt-6 text-white font-black tracking-tight">
        {title}
      </h2>
      <p className="text-center md:text-lg text-white/60 mt-4 max-w-md mx-auto lg:text-xl leading-relaxed">
        {description}
      </p>
    </>
  );
}
