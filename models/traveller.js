const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.reduce((prev, cur) => {
    if (prev.indexOf(cur.transport) < 0) prev.push(cur.transport);
    return prev;
  }, []);
};

// returns count of unique modes of transport keys

// const uniqueTransportTypes = [];
//
// for (const journey of this.journeys) {
//   if (uniqueTransportTypes[journey.transport] === journey.transport) {
//     uniqueTransportTypes[journey.transport] += 0;
//   }
//   else {
//     uniqueTransportTypes[journey.transport] = 1;
//   };
// };
//
// return uniqueTransportTypes;


module.exports = Traveller;
