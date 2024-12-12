<script setup>
import tags from './_data/tags.json';

</script>

# Introduction

Essential Guides is your go-to resource for all things ZOOlanders. You'll find easy-to-follow guides, tutorials, and troubleshooting tips to help you get the most out of our products.

- *Get started*. Learn how to set up and configure your Zoolanders products.
- *Learn the basics*. Understand the core features and functionalities.
- *Troubleshoot issues*. Find solutions to common problems.

## Tags

<ul>
    <li v-for="tag in tags" :key="tag">
        <a :href="`/guides/tagged/${tag.name}`">{{ tag.label }}</a>
    </li>
</ul>
