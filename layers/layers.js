var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CESIS_CONTORNOS_1 = new ol.format.GeoJSON();
var features_CESIS_CONTORNOS_1 = format_CESIS_CONTORNOS_1.readFeatures(json_CESIS_CONTORNOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CESIS_CONTORNOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CESIS_CONTORNOS_1.addFeatures(features_CESIS_CONTORNOS_1);
var lyr_CESIS_CONTORNOS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CESIS_CONTORNOS_1, 
                style: style_CESIS_CONTORNOS_1,
                popuplayertitle: "CESIS_CONTORNOS",
                interactive: true,
    title: 'CESIS_CONTORNOS<br />\
    <img src="styles/legend/CESIS_CONTORNOS_1_0.png" /> 1<br />\
    <img src="styles/legend/CESIS_CONTORNOS_1_1.png" /> 2<br />\
    <img src="styles/legend/CESIS_CONTORNOS_1_2.png" /> 3<br />\
    <img src="styles/legend/CESIS_CONTORNOS_1_3.png" /> 4<br />\
    <img src="styles/legend/CESIS_CONTORNOS_1_4.png" /> 5<br />\
    <img src="styles/legend/CESIS_CONTORNOS_1_5.png" /> <br />'
        });
var format_EDO_MEXCONTORNO_2 = new ol.format.GeoJSON();
var features_EDO_MEXCONTORNO_2 = format_EDO_MEXCONTORNO_2.readFeatures(json_EDO_MEXCONTORNO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EDO_MEXCONTORNO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EDO_MEXCONTORNO_2.addFeatures(features_EDO_MEXCONTORNO_2);
var lyr_EDO_MEXCONTORNO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EDO_MEXCONTORNO_2, 
                style: style_EDO_MEXCONTORNO_2,
                popuplayertitle: "EDO_MEX CONTORNO",
                interactive: true,
                title: '<img src="styles/legend/EDO_MEXCONTORNO_2.png" /> EDO_MEX CONTORNO'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_CESIS_CONTORNOS_1.setVisible(true);lyr_EDO_MEXCONTORNO_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_CESIS_CONTORNOS_1,lyr_EDO_MEXCONTORNO_2];
lyr_CESIS_CONTORNOS_1.set('fieldAliases', {'id': 'id', 'CESI': 'CESI', 'NUM': 'NUMERO', });
lyr_EDO_MEXCONTORNO_2.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'NOMGEO': 'NOMGEO', });
lyr_CESIS_CONTORNOS_1.set('fieldImages', {'id': 'TextEdit', 'CESI': 'TextEdit', 'NUM': 'TextEdit', });
lyr_EDO_MEXCONTORNO_2.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'NOMGEO': 'TextEdit', });
lyr_CESIS_CONTORNOS_1.set('fieldLabels', {'id': 'no label', 'CESI': 'inline label - always visible', 'NUM': 'inline label - always visible', });
lyr_EDO_MEXCONTORNO_2.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'NOMGEO': 'no label', });
lyr_EDO_MEXCONTORNO_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});