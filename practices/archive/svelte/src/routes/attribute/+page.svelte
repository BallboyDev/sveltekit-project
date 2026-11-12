<script>
    // Component 사용
    import SvelteLogo from "./SvelteLogo.svelte";

    // 속성 전달
    import Button from "./Button.svelte";
    // let buttonLabel = "전송";

    // 문자열 이외의 속성
    import UserProfile from "./UserProfile.svelte";
    let ballboy = { name: "yang", id: "ballboy", bio: "franciscus" };
</script>

<!-- Component 사용 -->
<div>Svelte Logo 이미지 삽입</div>
<SvelteLogo />

<!-- 속성 전달 -->
<Button />

<!-- 문자열 이외의 속성 -->
<UserProfile user={ballboy} />
