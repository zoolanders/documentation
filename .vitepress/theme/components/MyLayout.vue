<script setup>
import { watch, nextTick } from 'vue';
import { useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

const route = useRoute();
const { isDark } = useData();
const { Layout } = DefaultTheme;

function toggleResourceIconsColor(isDark) {
    if (typeof document === 'undefined') {
        return;
    }

    nextTick(() => {
        const svgElements = document.querySelectorAll('.tm-resource-icon svg > *');

        svgElements.forEach((el) => {
            if (el.getAttribute('fill') !== 'none') {
                el.setAttribute('fill', isDark ? '#fffff5db' : '#444');
            }
            if (el.getAttribute('stroke') !== 'none') {
                el.setAttribute('stroke', isDark ? '#fffff5db' : '#444');
            }
        });
    });
}

watch(() => isDark.value, toggleResourceIconsColor, {
    immediate: true,
});

watch(
    () => route.path,
    () => {
        toggleResourceIconsColor(isDark.value);
    },
    {
        immediate: true,
    }
);
</script>

<template>
    <Layout>
        <template #sidebar-nav-before></template>
    </Layout>
</template>
