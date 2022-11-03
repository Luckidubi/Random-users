import { Helmet } from "react-helmet-async";
export default function SEO({ title, name, description, type, imgUrl, url }) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta rel="canonical" href={url} />
      {/* End standard metadata tags */}

      {/* <!-- Google / Search Engine Tags --> */}
<meta itemprop="name" content={title}/>
<meta itemprop="description" content={description} />
<meta itemprop="image" content={imgUrl}/>


      {/* Facebook tags */}
      <meta property="og:url" content={url}/>
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imgUrl} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imgUrl}/>
      {/* End Twitter tags */}
    </Helmet>
  );
}
