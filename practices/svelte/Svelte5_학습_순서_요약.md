# Svelte 5 학습 순서 요약

## 1단계. 개념 & 철학 이해
- Svelte 5 핵심 철학
- 컴파일러 기반 프레임워크 개념
- Runes API 개요

## 2단계. 기본 문법 & 컴포넌트
- 컴포넌트 구조 (`<script>`, markup, `<style>`)
- props, 이벤트, 조건/리스트 렌더링
- 기본 상태 처리

## 3단계. 반응성 핵심 (Runes)
- `$state`
- `$derived`
- `$effect`
- 반응성 흐름 이해

## 4단계. 폼 & 사용자 입력
- `bind:value`
- 양방향 바인딩
- 폼 처리 패턴

## 5단계. 컴포넌트 통신
- props & events
- slot
- context API

## 6단계. 상태 관리
- 로컬 상태
- store vs rune
- 전역 상태 설계

## 7단계. 라이프사이클 & 사이드 이펙트
- `onMount`, `onDestroy`
- SSR 환경 고려

## 8단계. SvelteKit & SSR
- 파일 기반 라우팅
- `load` 함수
- 서버/클라이언트 데이터 패칭
- form actions & API routes

## 9단계. 스타일링
- Scoped CSS
- 글로벌 스타일
- Tailwind 연동

## 10단계. 성능 최적화
- 컴파일 결과 이해
- `$derived` 활용
- 리스트 최적화

## 11단계. 테스트 & 빌드
- Vitest
- Playwright
- 빌드 전략

## 12단계. 실전 패턴
- React 사고방식에서 전환
- 실전 컴포넌트 설계
- 마이그레이션 관점 정리
