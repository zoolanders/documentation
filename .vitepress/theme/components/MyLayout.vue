<script setup>
import { watch, nextTick, ref, computed } from 'vue';
import { useData, useRoute } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

// Import all nav configurations
import NavDefault from '../../nav.json';
import NavYoo from '../../nav-yoo.json';

const route = useRoute();
const { isDark, theme } = useData();
const { Layout } = DefaultTheme;

const previousRoute = ref(null);

// Compute current documentation section
const currentDocSection = computed(() => {
    const path = route.path;

    if (path.startsWith('/essentials-for-yootheme-pro/')) {
        return 'Essentials for YOOtheme Pro';
    }

    if (path.startsWith('/essentials-for-zoo/')) {
        return 'Essentials for ZOO';
    }

    return null;
});

// Compute which nav to use based on current route
const currentNav = computed(
    () => {
        const path = route.path;

        if (path.startsWith('/essentials-for-yootheme-pro/')) {
            // Check if path contains version pattern /vx.x
            const versionMatch = path.match(/\/v(\d+\.\d+)/);
            const versionText = versionMatch ? `v${versionMatch[1]}` : 'v3.0-beta';

            // Return a new object to ensure Vue reactivity
            return [
                {
                    ...NavYoo[0],
                    text: versionText,
                    items: NavYoo[0].items,
                },
            ];
        }

        if (path.startsWith('/essentials-for-zoo/')) {
            return [];
        }

        return NavDefault;
    },
    { cache: false }
);

// Update theme nav when route changes
watch(
    currentNav,
    (newNav) => {
        if (theme.value) {
            theme.value.nav = newNav;
        }
    },
    { immediate: true }
);

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
        // Check if path is in addons section, either versioned or unversioned
        if (/^\/essentials-for-yootheme-pro\/(v[\d.]+\/)?(addons|auths)/.test(newPath)) {
            // Extract version if present, otherwise use root
            const versionMatch = newPath.match(/^\/essentials-for-yootheme-pro\/(v[\d.]+)\//);
            previousRoute.value = versionMatch
                ? `/essentials-for-yootheme-pro/${versionMatch[1]}/`
                : '/essentials-for-yootheme-pro/';
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
        <template #nav-bar-content-before>
            <div v-if="currentDocSection">
                <span style="font-weight: 600; color: white; font-size: 15px; margin-left: 10px">{{
                    currentDocSection
                }}</span>
            </div>
        </template>
        <template #sidebar-nav-before>
            <div
                v-if="!route.path.includes('/v2.4')"
                class="warning custom-block"
                style="margin-bottom: 20px"
            >
                <p>
                    You are viewing <strong>Essentials 3 Beta</strong> documentation. If not
                    intended, check <a href="./v2.4">current stable release</a> instead.
                </p>
            </div>
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
