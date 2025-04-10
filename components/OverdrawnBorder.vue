<script setup lang="ts">

const props = defineProps<{ label?: string }>()

</script>

<template>
    <div class="relative">
        <span class="absolute top-0 -inset-x-2 h-px bg-muted"></span>
        <span class="absolute left-0 -inset-y-2 w-px bg-muted"></span>
        <span class="absolute bottom-0 -inset-x-2 h-px bg-muted"></span>
        <span class="absolute right-0 -inset-y-2 w-px bg-muted"></span>
        <slot />
        <div v-if="label" aria-hidden="true"
            class="absolute left-1 -bottom-4 text-[10px] font-mono text-muted-foreground">
            {{ label }}
        </div>
    </div>
</template>