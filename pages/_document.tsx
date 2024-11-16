import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                <link rel="icon" href="/images/favicon.png" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
