const SITE_NAME = "Pocket Creatives";

interface Props {
  title?: string;
  description?: string;
}

export default function Seo({ title, description }: Props) {
  return (
    <>
      <title>{title ? `${title} | ${SITE_NAME}` : SITE_NAME}</title>
      {description && <meta name="description" content={description} />}
    </>
  );
}
