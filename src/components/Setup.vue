<template lang="html">
  <v-flex>
    <h1 class="text-center text-uppercase mt-5">my devices</h1>
    <v-layout row wrap ml-3 mr-3 mt-5 mb-5 justify-center>
      <v-flex xs12 sm9 md6 lg4 xl3 v-for="device in devices" :key="device.name">
        <v-card class="mt-3 mx-2" outlined height="100%">
            <v-list-item>
              <v-list-item-content>
                <v-card-title class="justify-center text-uppercase blue--text">{{device.name}}</v-card-title>
                <v-card-text>
                  <b v-if="device.os" class="text-wrap"><v-icon size="24px">mdi-disc</v-icon> {{device.os}}</b><br>
                  <b v-if="device.cpu" class="text-wrap"><v-icon size="24px">mdi-cpu-64-bit</v-icon> {{device.cpu}}</b><br>
                  <b v-if="device.gpu" class="text-wrap"><v-icon size="24px">mdi-expansion-card</v-icon> {{device.gpu}}</b><br>
                  <b v-if="device.ram" class="text-wrap"><v-icon size="24px">mdi-memory</v-icon> {{device.ram}}</b><br>
                  <b v-if="device.mb" class="text-wrap"><v-icon size="24px">mdi-clipboard</v-icon> {{device.mb}}</b><br>
                  <b v-if="device.psu" class="text-wrap"><v-icon size="24px">mdi-power-socket</v-icon> {{device.psu}}</b><br>
                  <b v-if="device.disk" class="text-wrap"><v-icon size="24px">mdi-harddisk</v-icon> {{device.disk}}</b><br>
                </v-card-text>
              </v-list-item-content>
            </v-list-item>
        </v-card>
      </v-flex>
    </v-layout>
  </v-flex>
</template>

<script>
  export default {
    data() {
      return {
        devices: [
          {os: 'Win 10', name: 'Gaming-System', cpu: 'AMD Ryzen 7 2700X', gpu: 'Nvidia RTX 2070', ram: '2x 8GB DDR4-3200',mb: 'Gigabyte X470 Aorus Ultra Gaming', psu: '500 Watt be quiet! Pure Power 10 ', disk: '1x 1TB NVMe M.2, 1x 500GB NVMe M.2, 1 x ,1 x'},
          {os: 'Manjaro Linux', name: 'ThinkPad T470', cpu: 'Intel Core i5-7200U', gpu: 'CPU', ram: '8 GB',mb: 'default', psu: 'default', disk: '500GB M.2'},
          {os: 'Manjaro Linux', name: 'ThinkPad W500', cpu: 'Intel', gpu: 'Nvidia', ram: '16GB',mb: 'default', psu: 'default', disk: '500GB SSD'},
          {os: 'XCP-ng, CentOS', name: '"Server"', cpu: 'AMD Ryzen 5 2600', gpu: 'Nvidia GeForce 8400 GS', ram: '2x 8GB DDR4-3200',mb: 'Gigabyte B450 Aorus m', psu: '630 Watt be quiet! Pure Power', disk: '2x 4TB WD-RED'}
        ],
      }
    },
    methods: {
    },
    computed: {
    },
    created() {
  },
}

</script>
