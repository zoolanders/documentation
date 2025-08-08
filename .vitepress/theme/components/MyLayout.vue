<script setup>
import { watch, nextTick, ref } from 'vue';
import { useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

const route = useRoute();
const { isDark } = useData();
const { Layout } = DefaultTheme;

const previousRoute = ref(null);

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
    (newPath) => {
        if (newPath.startsWith('/essentials-for-yootheme-pro/addons')) {
            previousRoute.value = '/essentials-for-yootheme-pro/';
        } else {
            previousRoute.value = null;
        }

        toggleResourceIconsColor(isDark.value);
    },
    {
        immediate: true,
    }
);
</script>

<template>
    <Layout>
        <template #sidebar-nav-before>
            <div v-if="previousRoute">
                <a
                    :href="previousRoute"
                    style="display: inline-flex; align-items: center; margin-bottom: 20px"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                        style="margin-right: 4px"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L2.707 7.5H14.5A.5.5 0 0 1 15 8z"
                            stroke-width="2"
                        />
                    </svg>
                    <span>Essentials</span>
                </a>
            </div>
        </template>
    </Layout>
</template>
