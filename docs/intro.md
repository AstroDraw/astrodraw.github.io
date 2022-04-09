---
sidebar_position: 1
---

:::caution

The documentation is under construction. If you want to contribute, please check [our repo](https://github.com/AstroDraw/astrodraw.github.io)

:::  

# Getting Started

### What you'll need

- latest version of AstroChart: download the release directly from [github](https://github.com/AstroDraw/AstroChart/releases). You will find the normal version and the minified.

## Adding AstroChart to your project

Add astrochart library in your folder struct, then import it into your html using `script` tag.

```html
<script src="js/astrochart.min.js"></script>
```


## Start using

First you need to create a node in the html where the svg chart will be created:

```html
<div id="paper"></div>
```

We will use the `id` to let the library know, where to create the chart.

The next step is create the `Chart` object, for this we need to pass:
 - `id` of the node that will be the container of the svg;
 - `width` of the svg chart;
 - `height` of the svg chart; 


```js
  var chart = new astrology.Chart( 'paper', 800, 800);
```

### Drawing a radix chart

The chart object has the `radix` method, it receives a `data` object. It should have the following properties:
 - `planets`: object containing with the key as an astrological point and the value an array containing the degree of the point
 - `cusps`: array with 12 positions, containing all houses cusps degrees 

```js
//data example
var data = {
  "planets":{
    "Pluto":[63], 
    "Neptune":[110], 
    "Uranus":[318], 
    "Saturn":[201], 
    "Jupiter":[192], 
    "Mars":[210], 
    "Moon":[268], 
    "Sun":[281],
    "Mercury":[312], 
    "Venus":[330]},
  "cusps":[296, 350, 30, 56, 75, 94, 116, 170, 210, 236, 255, 274]			
};

var radix = chart.radix( data );
```