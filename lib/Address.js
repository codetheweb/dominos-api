class Address {
  constructor(address) {
    this.addressType = address.AddressType;
    this.street = address.Street;
    this.streetNumber = address.StreetNumber;
    this.streetName = address.StreetName;
    this.city = address.City;
    this.region = address.Region;
    this.postalCode = address.PostalCode;
    this.deliveryInstructions = address.DeliveryInstructions;
    this.name = address.Name;
    this.isDefault = address.IsDefault;
    this.lastUpdated = new Date(address.UpdateTime)
  }
}

module.exports = Address;
