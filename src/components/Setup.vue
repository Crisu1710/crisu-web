<template lang="html">
  <v-flex>
    <h1 class="text-center text-uppercase mt-5">my devices</h1>
    <v-layout row wrap ml-2 mr-2 mt-2 mb-5 justify-center>
      <v-flex xs12 sm9 md6 lg4 xl3 v-for="device in devices" :key="device.name" class="mb-4">
        <v-card class="mt-3 mx-2" outlined height="100%">
            <v-list-item>
              <v-list-item-content>
                <v-card-title class="justify-center text-uppercase blue--text"><v-icon size="24px">{{device.icon}}</v-icon>{{device.name}}<v-icon size="24px">{{device.icon}}</v-icon></v-card-title>
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
          {icon: 'mdi-microsoft-windows', os: 'Win 10', name: 'Gaming-System', cpu: 'AMD Ryzen 7 2700X', gpu: 'Nvidia RTX 2070', ram: '2x 8 GB DDR4-3200',mb: 'Gigabyte X470 Aorus Ultra Gaming', psu: '500 Watt be quiet! Pure Power 10 ', disk: '1x 1 TB NVMe M.2, 1x 500 GB NVMe M.2'},
          {icon: 'mdi-laptop', os: 'Manjaro Linux (KDE)', name: 'ThinkPad T570', cpu: 'Intel Core i5-7200U', gpu: 'CPU', ram: '16 GB',mb: 'default', psu: 'default', disk: '500 GB M.2'},
          {icon: 'mdi-laptop', os: 'Manjaro Linux', name: 'ThinkPad W500', cpu: 'Intel', gpu: 'Nvidia', ram: '16 GB',mb: 'default', psu: 'default', disk: '500 GB SSD'},
          {icon: 'mdi-server', os: 'CentOS 8', name: 'k3s Server', cpu: 'AMD Ryzen 5 2600', gpu: 'Nvidia GeForce GT 710', ram: '4x 8 GB DDR4-3200',mb: 'Gigabyte B450 Aorus m', psu: '630 Watt be quiet! Pure Power', disk: '2x 4 TB WD-RED'},
          {icon: 'mdi-wall', os: 'OPNsense 21', name: 'Firewall', cpu: 'Intel® Core™ i5-5257U', gpu: 'Intel® Iris® Graphics 6100', ram: '1x 8 GB DDR3',mb: 'Minisforum U700', psu: 'default', disk: '128 GB M.2'}
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
