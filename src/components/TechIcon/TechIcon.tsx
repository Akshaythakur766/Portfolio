export default function TechIcon({
  component,
}: {
  component: React.ElementType;
}) {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon)]" />
      <svg className="size-0  absolute" >
        <linearGradient id="tech-icon">
          <stop offset="0%" stop-color="rgb(47, 128, 237)" />
          <stop offset="100%" stop-color="rgb(138, 43, 226)" />
        </linearGradient>
      </svg>
    </>
  )
}

