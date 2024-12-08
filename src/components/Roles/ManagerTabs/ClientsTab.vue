<template>
  <div class="dataset-container">
    <div class="data-container">
      <div class="num-cards-container">
        <NumChartCard cardID="num-counter-1" title="Conversion of visitors to buyers" prefix="%" :value="38.6" :footer-value="12.1"
          footer-suffix="%" :footer-display-prefix="true" :footer-is-toogle-up="true" description="more then last month">
        </NumChartCard>
        <NumChartCard cardID="num-counter-2" title="Average CLTV" prefix="$" :value="545050" :footer-value="-32"
          footer-suffix="%" :footer-display-prefix="true" description="less than last month">
        </NumChartCard>
      </div>
      <PieChartCard cardID="pie-chart-1" title="Loyalty"
        :labels="['Battery', 'Cars', 'Service', 'Additional', 'Detail']" :data="[11323, 40234, 25371, 21324, 12351]">
      </PieChartCard>
    </div>
    <div class="data-container">
      
      <BarChartCard cardID="line-chart-2" title="Client"
        :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']"
        :datasets="[
          { label: 'Men', data: [12, 15, 23, 16, 19, 23, 11, 8, 2, 14, 13, 12] },
          { label: 'Women', data: [14, 11, 18, 13, 14, 17, 16, 12, 9, 11, 15, 13] }
        ]">
      </BarChartCard>
    </div>
  </div>
  <div class="dataset-container" style="overflow: hidden;">
    <TableCard :columns="[
      { key: 'client', value: 'Client' },
      { key: 'reg_date', value: 'Registration date' },
      { key: 'num_of_purchases', value: 'Number of purchases' },
      { key: 'avarage_check', value: 'Avarage check' },
    ]" :data="[
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },

          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },{
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          {
            'client': {'type':'text', 'data':'Name Surename'},
            'reg_date': {'type':'text', 'data':'10.11.2024'},
            'num_of_purchases': {'type':'text', 'data': 3},
            'avarage_check': {'type':'text', 'data':'$ 20312.31'} 
          },
          
        ]"></TableCard>
  </div>
</template>

<script>
import PieChartCard from '@/components/Metrics/PieChartCard.vue';
import NumChartCard from '@/components/Metrics/NumChartCard.vue';
import TableCard from '@/components/Metrics/TableCard.vue';
import BarChartCard from '@/components/Metrics/BarChartCard.vue';

export default {
  name: "ClientsTab",
  components: {
    PieChartCard, NumChartCard, TableCard, BarChartCard
  }
}
</script>

<style scoped>
@import url(/src/assets/styles/index.css);
.num-cards-container {
  grid-template-columns: repeat(1, minmax(350px, 1fr)); 
}
</style>