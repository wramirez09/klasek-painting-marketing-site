<script lang="ts">
  import ColumnTemplateSection from "$lib/common/sections/ColumnTemplateSection.svelte";

  let classes = "";
  export { classes as class };
</script>

<ColumnTemplateSection class={classes}>
  <div slot="left-column">
    <h2>Reliable Service You Can Trust</h2>

    <p>
      At Klasek Painting, reliability is at the core of our service. We
      understand the importance of completing projects on time and within
      budget, with minimal disruption to your daily life. Our team of
      professional painters is committed to delivering consistent, high-quality
      results, ensuring that your exterior painting project is handled with
      precision and genuine attention to detail. From start to finish, we work
      closely with you to make sure the process is seamless and the outcome
      exceeds your expectations.
    </p>
  </div>

  <div slot="right-column">
    <strong>What you can expect:</strong>

    <ul>
      <li>Timely project completion</li>
      <li>Clear and consistent communication</li>
      <li>Minimal disruption to your daily routine</li>
      <li>Attention to every detail</li>
      <li>A clean, professional worksite</li>
    </ul>
  </div>
</ColumnTemplateSection>
