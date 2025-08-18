<script lang="ts">
	import favicon from "$lib/assets/favicon.svg";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="nav">
	<a href="/">[ Main ]</a>
	<a href="/render">[ 데이터 흐름과 페이지 구성 ]</a>
	<a href="/error">[ 에러 페이지 ]</a>
	<a href="/server">[ +server.ts ]</a>
	<a href="/route_group">[ 라우트 그룹 ]</a>
	<a href="/path_param">[ 경로 변수 ]</a>
	<a href="/page_data">[ 페이지 데이터 ]</a>
	<a href="/url_data">[ URL 데이터 ]</a>
	<a href="/actions">[ 폼 액션 ]</a>
</div>

<h1>Main Layout</h1>

<div class="page">
	{@render children?.()}
</div>

<style>
	.nav {
		margin-bottom: 1rem;
		padding: 0.5rem;
		border: 1px solid black;
		display: flex;
		flex-wrap: wrap;
	}
	.nav > a {
		margin-right: 0.5rem;
	}
	.page {
		padding: 1rem;
		border: 1px solid black;
	}
</style>
