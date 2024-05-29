<script setup>
import { useRoute } from 'vitepress';
import DefaultTheme, { useSidebar } from 'vitepress/theme';

const { Layout } = DefaultTheme;
const route = useRoute();
// const sidebar = useSidebar();
</script>

<template>
    <Layout>
        <template #sidebar-nav-before>
            <!-- {{ route.path }} -->
            <!-- <img src="/zoolanders-docs.svg" alt="Logo" width="150px"/> -->
            <!-- <img src="/essentials-yoothemepro.svg" alt="Logo" width="80px" style="margin-left: 20px;" /> -->
        </template>
    </Layout>
</template>
