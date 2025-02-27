<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import type { PaginationProps } from 'naive-ui';
import { getServiceList } from '@/service/api/device';
const router = useRouter();
const pagination: PaginationProps = reactive({
  page: 1,
  pageSize: 20,
  pageCount: 1
});
const queryParams = reactive({
  page_size: 12,
  service_type: 2
});
const deviceTemplateList = ref([] as any[]);

const getData = async () => {
  const res = await getServiceList({
    page: pagination.page as number,
    ...queryParams
  });
  if (!res.error) {
    deviceTemplateList.value = res.data.list;
    // eslint-disable-next-line require-atomic-updates
    pagination.pageCount = Math.ceil(res.data.total / 12);
  }
};

getData();

const clickDevice = async row => {
  router.push(
    `/device/service-details?id=${row.id}&service_type=${row.service_type}&service_name=${row.name}&service_identifier=${row.service_identifier}`
  );
};
</script>

<template>
  <div>
    <n-card>
      <NGrid x-gap="20" y-gap="20" cols="1 s:2 m:3 l:4" responsive="screen">
        <NGridItem v-for="item in deviceTemplateList" :key="item.id" @click="clickDevice(item)">
          <NCard hoverable style="height: 190px">
            <div class="title text-16px font-600">
              {{ item.name }}
            </div>
            <div class="mt-4">
              {{ item.description }}
            </div>
          </NCard>
        </NGridItem>
      </NGrid>
      <div class="pagination-box">
        <NPagination
          v-model:page="pagination.page"
          :page-count="pagination.pageCount"
          @update:page="
            page => {
              pagination.page = page;
              getData();
            }
          "
        />
      </div>
    </n-card>
  </div>
</template>

<style lang="scss" scoped>
.pagination-box {
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
}

.description {
  height: 40px;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.title {
  height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
