import React from "react";
import "../styles/globals.css";
import Header from "./Header";

// page 관리를 해당 컴포넌츠에서 실행할 예정이라서 pages에 있던 index, _document를 제거한 상태임
// next.config.js 폴더에 experimental: {appDir: true} 앱 디렉토리를 사용한다고 바꿨기 때문임
// 기존의 pages에서 이런 저런 페이지 설정을 했지만 appDir에서 하는 강좌이기 때문에 바꿈
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>My Website</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
