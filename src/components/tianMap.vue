<template>
    <l-map
    v-if="mapOptions.showMap"
    :minZoom="mapOptions.minZoom"
    :maxZoom="mapOptions.maxZoom"
    :zoom="mapOptions.zoom"
    :center="mapOptions.center"
    @update:center="centerUpdate"
    @update:zoom="zoomUpdate"
    ref="myMap">
        <l-wms-tile-layer
            v-for="layer in layers"
            :key="layer.name"
            :base-url="baseUrl"
            :layers="layer.layers"
            :visible="layer.visible"
            :name="layer.name"
            :options="layer"
            layer-type="base">
        </l-wms-tile-layer>
        <l-geo-json :geojson="geojson"></l-geo-json>
        <l-marker :lat-lng="[31.60605277312842,120.46010971069336]">
            <l-icon icon-url="/images/baseball-marker.png"></l-icon>
        </l-marker>
    </l-map>
</template>

<script>
import geoJson from '../assets/json/geojson_xishan.json'  // 引入无锡市锡山区地图json
export default {
    data() {
        return {
            icon: L.icon({
                iconUrl: '/images/baseball-marker.png',
                iconSize: [32, 37],
                iconAnchor: [16, 37]
            }),
            items:[
                [31.598117,120.518487],
                [120.518487,31.598117],
            ],
            attribution1: 'xxxxx',
            mapOptions: {
                minZoom: 12,
                maxZoom: 18,
                showMap: true,
                zoom: 12,
                center: L.latLng(31.60605277312842,120.46010971069336)
            },
            layers: [
                {
                    name: 'Weather Data',
                    visible: true,
                    format: 'image/png',
                    layers: 'nexrad-n0r-900913',
                    transparent: true,
                    attribution: "锡山国土"

                }
            ],
            baseUrl: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
            // baseUrl: 'http://t2.tianditu.gov.cn/img_w/wmts?service=WMTS&x={x}&y={y}&z={z}&request=GetTile',
            // baseUrl: 'https://t2.tianditu.gov.cn/DataServer?T=img_c&x={x}&y={y}&l=7&tk=b2b8f791570d96f6cf46898747e7ce1a',
            // mapKey: '40c0e9e544a4d2e2da86098fa87e44e3',
            // mapKey: '56e2ef8967b3a0dbb746b7a40b7faa94',
            geojson: geoJson,
        }
    },
    mounted() {
        this.$nextTick(() => {
            // console.log(this.$refs.myMap.mapObject);
        });
    },
    methods: {
        zoomUpdate(zoom) {
            this.currentZoom = zoom;
        },
        centerUpdate(center) {
            this.currentCenter = center;
        },
    },
}
</script>

<style scoped>
.mapBox {
    display: flex;
    width: 100%;
    height: 100%;
    /* background: red; */
}
#mapid {
    flex: 1;
    width: 100%;
    height: 100%;
}
.leaflet-pane {
    width: 100%;
    height: 100%;
}
.leaflet-control-container {
    width: 100%;
    height: 100%;
}
</style>