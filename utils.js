exports.buildClassifications = () => {

  const classifications = [
    { name: "Bug", value: "bug" },
    { name: "Duplicate", value: "duplicate" },
    { name: "Enhancement", value: "enhancement" },
    { name: "Invalid", value: "invalid" },
    { name: "Question", value: "question" },
  ];

  return classifications.map((c) => ({
    name: c.name,
    value: c.value,
  }));
};
