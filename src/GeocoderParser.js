const { filterType, filterComponents} = require('./utils/filters.js');

class GeocoderParser {
  constructor(data = {}) {
    this.data = this.__internals_GetResults(data);
  }

  __internals_GetResults(data) {
    const results = data;
    return results ? results[0] : null;
  }

  getComponent(key, useShort = false) {
    return filterComponents(this.data.address_components, key, useShort);
  }

  isType(type = []) {
    return filterType(this.data, type);
  }

  isCity() {
    return this.isType(['locality', 'sublocality', 'sublocality_level_1', 'sublocality_level_2', 'sublocality_level_3', 'sublocality_level_4', 'sublocality_level_5']);
  }

  isNeighborhood() {
    return this.isType(['sublocality_level_1', 'neighborhood']);
  }

  isDistrictOrCounty() {
    return this.isType(['administrative_area_level_2']);
  }

  isAddress() {
    return this.isType(['street_address', 'street_number', 'route', 'premise', 'subpremise', 'neighborhood', 'point_of_interest', 'park', 'airport']);
  }

  isProvince() {
    return this.isType(['administrative_area_level_1']);
  }

  isCounty() {
    return this.isType(['administrative_area_level_2']);
  }

  isPostalCode() {
    return this.isType(['postal_code']);
  }

  parse() {
    return {
      formatted: this.data.formatted_address,
      address: this.getComponent('street_address'),
      city: this.getComponent('locality'),
      neighborhood: (this.getComponent('neighborhood')) ? this.getComponent('neighborhood') : this.getComponent('sublocality_level_1'),
      district: this.getComponent('administrative_area_level_2'),
      province: this.getComponent('administrative_area_level_1'),
      postal_code: this.getComponent('postal_code'),
    }
  }
}


module.exports = GeocoderParser;
