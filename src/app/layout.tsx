/* eslint-disable @next/next/no-sync-scripts */
import StyledComponentsRegistry from './registry'
import Header from './global/ui/outlines/Header'
import Footer from './global/ui/outlines/Footer'
import { CommonProvider } from './global/contexts/CommonContext'
import { Metadata } from 'next'
import { getUserInfo } from './member/services/actions'
import { UserProvider } from './global/contexts/UserContext'
import 'react-datepicker/dist/react-datepicker.css'
import './globals.css'

declare global {
  interface Window {
    kakao: any
  }
}

export const metadata: Metadata = {
  title: '핀테크 과정 포트폴리오',
  description: '설명...',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const userInfo = await getUserInfo()
  return (
    <html lang="ko">
      <head>
        <script
          type="text/javascript"
          src={
            'https://dapi.kakao.com/v2/maps/sdk.js?appkey=' +
            process.env.NEXT_PUBLIC_KAKAO_KEY
          }
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <UserProvider _userInfo={userInfo}>
            <CommonProvider>
              <Header />
              <main className="main-content">{children}</main>
              <Footer />
            </CommonProvider>
          </UserProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
