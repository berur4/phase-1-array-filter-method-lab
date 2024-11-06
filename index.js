const drivers = [
    { name: "Alex", hometown: "New York" },
    { name: "Ben", hometown: "Los Angeles" },
    { name: "Charlie", hometown: "Chicago" },
    { name: "David", hometown: "Miami" },
    { name: "Emily", hometown: "Houston" },
  ];
  
  function findMatching(names, query) {
    return names.filter(function(name) {
      return name.toLowerCase().includes(query.toLowerCase());
    });
  }
  
  function fuzzyMatch(names, query) {
    return names.filter(function(name) {
      return name.toLowerCase().startsWith(query.toLowerCase());
    });
  }
  
  function matchName(drivers, query) {
    return drivers.filter(function(driver) {
      return driver.name.toLowerCase() === query.toLowerCase();
    });
  }
  const matchingNames = findMatching(["Alex", "Ben", "Charlie"], "lie");
console.log(matchingNames);