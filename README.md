# Next.js 대시보드 보호(비밀번호 게이트) 예시

## 기능
- 첫 접속 시 `/`에서 **비밀번호 입력 화면** 표시
- 비밀번호가 **`1234`** 인 경우에만 `/dashboard` 접근 가능
- `/dashboard`에는 **Looker Studio iframe을 넣을 자리(Placeholder)** 포함
- 전체 UI는 Tailwind 기반 **모던 다크 모드** 스타일

## 동작 방식(간단 설명)
- `/api/login`에서 비밀번호를 확인하고, 성공 시 **HttpOnly 쿠키(`dash_auth=1`)**를 발급합니다.
- `src/middleware.ts`가 `/dashboard` 접근 시 해당 쿠키를 검사해, 없으면 `/`로 리다이렉트합니다.

> 이 방식은 데모/프로토타입 용도입니다. 실제 서비스라면 사용자 인증/세션/SSO 등으로 교체하세요.

## 로컬 실행
Node.js(권장 LTS)가 설치되어 있어야 합니다.

```bash
cd next-dashboard-gate
npm install
npm run dev
```

브라우저에서 `http://localhost:3000` 접속 후 비밀번호 `1234`를 입력하세요.

## Looker Studio iframe 넣기
`src/app/dashboard/page.tsx`의 Placeholder 영역을 실제 iframe로 교체하면 됩니다.

