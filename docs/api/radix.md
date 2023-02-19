# Radix chart

```typescript
const chart = new Chart( 'paper', 800, 800)
const radix = chart.radix( data )
```

### aspects
Draws the aspects of the radix chart. You can pass the aspects or let the AstroChart calculate them based on the data passed to built the radix chart.

```typescript
radix.aspects(customAspects)
```
| Param         | Type      | Description | Required |
| -----------   | --------- |------------ |--------- |
| customAspects | `FormedAspect[]`  | array containing all aspects that should be drawn| NO      |


### transit
Draw transit data

```typescript
const transit = radix.transit(data)
```
| Param        | Type      | Description | Required |
| -----------  | --------- |------------ |--------- |
| data.planets | `object`  | object with all planets as keys and an array as value| YES      |
| data.cusps   | `number[]`| array with 12 positions each one representing a cusp | YES      |