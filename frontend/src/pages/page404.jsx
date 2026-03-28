import '../scss/page404.scss';

function Page404() {
  return (
    <div className="container bgpage404 align-items-center text-center d-flex flex-column">
        <div className="logo-404">
          <img src="/images/Logo.png" alt="Logo Trouve ton artisan" className="img-fluid mb-4" />
        </div>
        <div className="align-items-left text-404 align-items-center">
          <div>
            <h1>Page 404</h1>
          </div>
          <div>
            <h2>Page non trouvée</h2>
            <p>La page que vous recherchez n'existe pas.</p>
          </div>
        </div>
    </div>
  )
}

export default Page404;