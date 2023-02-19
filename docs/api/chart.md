# Chart

This is the main object of AstroChart. You will use it to create the Radix chart, and also it defines all the configuration.


### constructor
```typescript
const chart = new Chart( 'paper', 800, 800, settings)
```
| Param       | Type        | Description | Required |
| ----------- | ----------- |------------ |--------- |
| id          | `string`    | id of the HTML node that will be the container of the svg| YES      |
| width       | `number`    | width of the chart svgs| YES      |
| height      | `number`    | height of the chart svg| YES      |
| settings    | `object`    | object containing all the configurations of the Chart. See more in Settings| NO       |

### Radix
```typescript
const radix = chart.radix(data)
```
| Param        | Type      | Description | Required |
| -----------  | --------- |------------ |--------- |
| data.planets | `object`  | object with all planets as keys and an array as value| YES      |
| data.cusps   | `number[]`| array with 12 positions each one representing a cusp | YES      |

```typescript
//data example
const data = {
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
}
```

For more information, checkout [Radix component](radix.md)