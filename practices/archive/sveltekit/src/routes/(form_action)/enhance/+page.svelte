<script lang="ts">
    import { enhance } from "$app/forms";
    import type { SubmitFunction } from "@sveltejs/kit";

    const { form } = $props();

    let submitting = $state(false);

    const handleSubmit: SubmitFunction = () => {
        submitting = true;

        return async ({ result, update }) => {
            if (result.type === "success") {
                alert("Message send successfully");
            }

            await update();

            submitting = false;
        };
    };
</script>

<h1>Contact Us</h1>

{#if form?.success}
    <p style="color: green">Thanks for your message</p>
{/if}

<form method="post" use:enhance={handleSubmit}>
    <label for="name">Name</label>
    <input id="name" name="name" type="text" />
    <br />
    <label for="message">Message</label>
    <textarea id="message" name="message"></textarea>
    <br />
    <button type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Send"}
    </button>
</form>
