import Spacing from '../Spacing';

export default function Section({
  topSpaceMd = '',
  topSpaceLg = '_',
  bottomSpaceMd = '_',
  bottomSpaceLg = '_',
  backgroundImage = '',
  className,
  id = '',
  children,
  ...props
}) {
  return (
    <section
      className={`${className ? className : ''}`}
      id={id}
      {...props}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
            }
          : {}
      }
    >
      <Spacing lg={topSpaceLg} md={topSpaceMd} />
      {children}
      <Spacing lg={bottomSpaceLg} md={bottomSpaceMd} />
    </section>
  );
}
