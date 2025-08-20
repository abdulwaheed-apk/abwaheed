<script>
  import {
    IconBrandGithub,
    IconBrandLeetcode,
    IconBrandLinkedin,
    IconBrandWhatsapp,
    IconFileTypePdf,
    IconMail,
  } from "@tabler/icons-svelte";

  const title = "Pardon the Interruption | My Portfolio";
  const description =
    "My personal full-stack developer portfolio is currently being revamped. I'm building new features and updating my projects to bring you an amazing experience. Stay tuned!";
  const url = "https://abwaheed.com";
  const twitterHandle = "@abdulwaheed_apk";
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="robots" content="noindex, nofollow" />

  <link rel="canonical" href={url} />

  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <meta property="og:image" content="/og-image.jpg" />
  <meta
    property="og:image:alt"
    content="A screenshot of my portfolio website's coming soon page."
  />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={twitterHandle} />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content="/og-image.jpg" />
  <meta
    name="twitter:image:alt"
    content="A screenshot of my portfolio website's coming soon page."
  />
</svelte:head>

<main
  class="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 to-stone-100 text-stone-900 dark:from-stone-900 dark:to-stone-950 dark:text-stone-100 transition-colors duration-500"
>
  <div class="text-center p-6 max-w-4xl">
    <div class="py-6">
      <h1
        class="inline text-4xl sm:text-6xl lg:text-8xl tracking-tight font-semibold text-center"
      >
        Portfolio Under
        <span
          class="inline bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600 bg-clip-text font-display text-4xl sm:text-6xl lg:text-8xl tracking-tight text-transparent px-2 font-bold"
        >
          Renovation
        </span>
      </h1>
      <p
        class="my-6 text-lg md:text-xl tracking-tight text-stone-600 dark:text-stone-300 max-w-md md:max-w-3xl text-center mx-auto leading-relaxed"
      >
        I'm redesigning my site to make it better. In the meantime, you can
        connect with me or explore my work through the links below.
      </p>
    </div>

    <!-- Social Links -->
    <div class="flex justify-center items-center space-x-6 sm:space-x-8 mb-8">
      <a
        href="mailto:abdul.waheed7@proton.me"
        class="text-stone-500 hover:text-orange-600 dark:text-stone-400 dark:hover:text-orange-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="Email Contact"
      >
        <IconMail size={40} />
      </a>
      <a
        href="https://github.com/abdulwaheed-apk"
        target="_blank"
        rel="noopener noreferrer"
        class="text-stone-500 hover:text-orange-600 dark:text-stone-400 dark:hover:text-orange-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="GitHub Profile"
      >
        <IconBrandGithub size={40} />
      </a>
      <a
        href="https://linkedin.com/in/abdulwaheed-apk"
        target="_blank"
        rel="noopener noreferrer"
        class="text-stone-500 hover:text-orange-600 dark:text-stone-400 dark:hover:text-orange-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="LinkedIn Profile"
      >
        <IconBrandLinkedin size={40} />
      </a>
      <a
        href="https://wa.me/966549090833"
        target="_blank"
        rel="noopener noreferrer"
        class="text-stone-500 hover:text-orange-600 dark:text-stone-400 dark:hover:text-orange-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="Whatsapp chat"
      >
        <IconBrandWhatsapp size={40} />
      </a>
      <a
        href="https://leetcode.com/u/abdulwaheed-apk/"
        target="_blank"
        rel="noopener noreferrer"
        class="text-stone-500 hover:text-orange-600 dark:text-stone-400 dark:hover:text-orange-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
        aria-label="LeetCode Profile"
      >
        <IconBrandLeetcode size={40} />
      </a>
    </div>

    <!-- Download CV Button -->
    <a
      href="/ABDUL_WAHEED_FULL_STACK_ENGINEER.pdf"
      download
      class="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 dark:from-orange-500 dark:to-orange-600 dark:hover:from-orange-400 dark:hover:to-orange-500 text-white px-8 py-4 rounded-full font-semibold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
    >
      <span class="mr-2">Download CV</span>
      <IconFileTypePdf />
    </a>
  </div>
</main>

<style lang="postcss">
  @reference "tailwindcss";
  :global(html) {
    background-color: theme(--color-gray-100);
  }
</style>
