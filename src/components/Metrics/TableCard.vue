<template>
  <div class="bi-card-container">
    <div id="table-container" class="bi-flex-column" v-if="getDataByColumns(data).length > 0">
      <div class="table-header-container bi-flex-row">
        <div v-for="column in this.columns" :key="column.key">
          <span>{{ column.value }}</span>
        </div>
      </div>
      <div class="table-body-container" @scroll="scrollEventHandler">
        <div class="table-body bi-flex-column" ref="table-scroll">
          <div class="table-row bi-flex-row" v-for="row, index in data" :key="row">
            <div class="table-column" v-for="col in this.columns" :key="col">
              <span v-if="row[col.key]['type'] == 'text'">{{ row[col.key]['data'] }}</span>
              <LineChartCard v-else
                :cardID="'table-line-chart-'+index"
                :labels="row[col.key]['data']['labels']"
                :datasets="row[col.key]['data']['datasets']"
                :notUseContainer="true">
              </LineChartCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="table-null-container" v-else>
      <span>{{ notFoundTitle || "Данных по данному запросу не было найдено" }}</span>
    </div>
  </div>
</template>

<script>
import LineChartCard from './LineChartCard.vue';
export default {
  name: 'DataTable',
  emits: ['scrollOnBottom'],
  props: {
    columns: Array,
    notFoundTitle: String,
    data: Object
  },
  components: {
    LineChartCard
  },
  methods: {
    scrollEventHandler(event) {
      let container = event.target.getBoundingClientRect()
      let currentTable = this.$refs['table-scroll'].getBoundingClientRect()
      if (currentTable.bottom - container.bottom < 1) {
        this.$emit('scrollOnBottom')
      }
    },
    getDataByColumns(items) {
      let result = []
      for (let item of items) {
        let itemArray = []
        for (let element in item) {
          if (this.getIdsFromColumns.includes(element)) {
            let index = this.getIdsFromColumns.indexOf(element)
            itemArray.splice(index, 0, item[element])
          }
        }
        result.push(itemArray)
      }
      return result
    }
  },
  computed: {
    getIdsFromColumns() {
      let result = []
      for (let item of this.columns) {
        result.push(item.key)
      }
      return result
    }
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/index.css);
@import url(/src/assets/styles/forms.css);

.table-body-container {
  overflow: auto;
  border-radius: 10px;
  height: 100%;
}

.header-column {
  max-height: 400px;
  overflow: hidden;
}

.table-body-container::-webkit-scrollbar {
  display: none;
}

#table-container {
  width: 100%;
  height: 100%;
  gap: 20px;
}

.table-body {
  width: 100%;
  gap:10px;
  overflow: overlay;
}

.table-header-container {
  width: 100%;
  background-color: #656565;
  border-radius: 10px;
}

.table-header-container div {
  width: 100%;
  text-align: center;
  width: 100%;
  padding: 10px;
}

.table-column {
  display: flex;
  flex: auto;
  justify-content: center;
  padding: 10px;
  align-items: center;
  word-break: break-all;
  width: 100%;
  border-radius: 10px;
  background-color: #414141;
}

.table-column .chart {
  width: 100%;
}
.table-row { 
  gap:10px; 
  width: 100%;
}

#table-container::-webkit-scrollbar {
  background: none;
  width: 10px;
}

#table-null-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>

<style>
.dark {
  background-color: #000000c0;
  border: 1px solid #fff;
  backdrop-filter: blur(1px)
}
</style>