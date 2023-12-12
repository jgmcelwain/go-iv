import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='antialiased'>
        <Head>
          <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
          <link
            rel='shortcut icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link
            rel='shortcut icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />

          <link rel='manifest' href='/manifest.json' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap'
            rel='stylesheet'
          />

          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${
                  process.env.NEXT_PUBLIC_GA_KEY ?? ''
                }`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_KEY ?? ''}', {
                page_path: window.location.pathname,
              });
          `,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
