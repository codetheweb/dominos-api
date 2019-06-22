class Card {
  constructor(card) {
    this.billingZip = Number(card.billingZip);
    this.cardType = card.cardType;
    this.expirationMonth = card.expirationMonth;
    this.expirationYear = card.expirationYear;
    this.id = card.id;
    this.isDefault = card.isDefault;
    this.isExpired = card.isExpired;
    this.lastFour = Number(card.lastFour);
    this.lastUpdated = new Date(card.lastUpdated);
    this.nameOnCard = card.nameOnCard;
    this.nickName = card.nickName;
    this.timesCharged = card.timesCharged;
    this.timesChargedIsValid = card.timesChargedIsValid;
  }
}

module.exports = Card;
