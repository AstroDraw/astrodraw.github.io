# Chart

This is the main object of AstroChart. You will use it to create the Radix chart, and also it defines all the configuration.


| Param       | Type        | Description | Required |
| ----------- | ----------- |------------ |--------- |
| id          | `string`    | id of the HTML node that will be the container of the svg| YES      |
| width       | `number`    | width of the chart svgs| YES      |
| height      | `number`    | height of the chart svg| YES      |
| settings    | `object`    | object containing all the configurations of the Chart. See more in Settings| NO       |

### constructor
**id**: string  
id of the HTML node that will be the container of the svg

**width**: number  
width of the chart svg

**height**: number  
height of the chart svg

**settings**: object (optional)  
object containing all the configurations of the Chart. See more in Settings

```typescript
const chart = new Chart( 'paper', 800, 800, settings)
```