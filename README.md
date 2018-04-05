# Google Geocoder Parser

This is a utility to help parse raw geocoded data returned from Google Geocode API services.

## Usage

```
$ npm install --save-dev @roncodes/geocoder-parser
```

```
const GeocoderParser = require('geocoder-parser');
const request = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=247%20water%20street%20brooklyn');
const results = await request.json();
const parsed = new GeocoderParser(results);
```

## API

### getComponent(key, useShort)

Gets an adddress component by `key`. Returns string

#### Params

- `key`: String: Type value (any valid keys from address_components).
- `useShort`: Bool: Returns `short_name` value.

### isType([type])

Verifies if results is a certain type. Returns bool.

#### Params

- `type`: Array: Values to verify

### parse()

Returns a parsed output of the results.

#### Sample

```
{
    formatted,
    address,
    city,
    state,
    zip
}
```

## Helpers

These are simple built in functions designed to quickly parse results returned from the Google Geocode service.

- `isCity()`
- `isAddress()`
- `isState()`
- `isCounty()`
- `isZip()` 
