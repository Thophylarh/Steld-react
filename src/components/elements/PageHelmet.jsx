import { Helmet } from "react-helmet";

const PageHelmet = ({ title = "" }) => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>{title} | Steld</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
);

export default PageHelmet;
