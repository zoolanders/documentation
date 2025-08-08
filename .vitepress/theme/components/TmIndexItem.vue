<script setup>
import VPLink from 'vitepress/dist/client/theme-default/components/VPLink.vue';
import VPImage from 'vitepress/dist/client/theme-default/components/VPImage.vue';

defineProps({
    icon: String,
    title: String,
    details: String,
    link: String,
    rel: String,
    target: String,
});
</script>

<template>
    <VPLink
        class="TmIndexItem"
        :href="link"
        :rel="rel"
        :target="target"
        :no-icon="true"
        :tag="link ? 'a' : 'div'"
    >
        <article class="box">
            <div v-if="icon" class="icon">
                <VPImage
                    :image="icon"
                    :alt="title"
                    :height="icon.height || 40"
                    :width="icon.width || 40"
                />
            </div>
            <div>
                <span class="title" v-html="title"></span>
                <p v-if="details" class="details" v-html="details"></p>
            </div>
        </article>
    </VPLink>
</template>

<style scoped>
.TmIndexItem {
    display: block;
    border: 1px solid transparent;
    border-radius: 12px;
    height: 100%;
    /* background-color: var(--vp-c-bg-soft); */
    transition: border-color 0.25s;
}

.TmIndexItem.link:hover {
    border-color: var(--vp-c-brand-1);
    text-decoration: none !important;
}

.box {
    display: flex;
    padding: 20px;
    height: 100%;
}

.box > :deep(.VPImage) {
    margin-bottom: 20px;
}

.icon {
    margin: 2px 20px 0 0;
}

.title {
    line-height: 24px;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    color: var(--vp-c-text-2);
}

.details {
    flex-grow: 1;
    margin: 0;
    line-height: 24px;
    font-size: 14px;
    color: var(--vp-c-text-2);
}
</style>
