<template>
    <div><MdiAccountBox/>{{ title }}<MdiAccountBoxOutline/></div>
</template>

<script lang="ts" setup>
import MdiAccountBox from '~icons/mdi/account-box';
import MdiAccountBoxOutline from '~icons/mdi/account-box-outline';

const title = '这是个测试';
</script>
