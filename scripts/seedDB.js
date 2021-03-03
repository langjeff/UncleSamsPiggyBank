const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Data

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/unclesam");

const dataSeed = [
  {
    category: "People making under $50,000 a year",
    type: "income",
    returns: 88928000,
    base: 1759742000000,
    rate: 0.0408,
    amount: 71778438199,
    caption:
      "Over 88 million people in the US make less than $50,000.  This is more than 50% of the population, and they make up 4% of income taxes paid to the government.",
  },
  {
    category: "People making between $50k and $200k a year",
    type: "income",
    returns: 56293000,
    base: 5385519000000,
    rate: 0.1041,
    amount: 560531379711,
    caption:
      "56 million people in the US make between $50,000 and $200,000 a year.  This is 37% of the population, and they make up 33% of income taxes paid to the government.",
  },
  {
    category: "People making between $200k and $500k a year",
    type: "income",
    returns: 6906000,
    base: 1971306000000,
    rate: 0.1837,
    amount: 362157960785,
    caption:
      "Only 6 million people in the US make between $200,000 and $500,000 a year.  This is 4% of the population, and they make up 21% of income taxes paid to the government.",
  },
  {
    category: "People making between $500k and $1m a year",
    type: "income",
    returns: 1108000,
    base: 746778000000,
    rate: 0.2563,
    amount: 191366818110,
    caption:
      "Only 1% of people make between $500k and $1 million a year.  They make up 11% of income taxes paid to the government.",
  },
  {
    category: "People making between more than $1m a year",
    type: "income",
    returns: 540000,
    base: 1780074000000,
    rate: 0.288,
    amount: 514165403194,
    caption:
      "Only 1/3 of a 1% of people make more than $1 million a year.  On average they make $3.3m a year. They make up 30% of income taxes paid to the government.",
  },
  {
    category: "Social Security and Disability Taxes",
    type: "income",
    returns: 0,
    base: 14741935483871,
    rate: 0.062,
    amount: 914000000000,
    caption:
      "We pay for social security out of wages on the first $132k in earnings, and a small percentage on disability. This works out to ~6.2% rate and $914 billion to the government.",
  },
  {
    category: "Medicare and Medicaid Taxes",
    type: "income",
    returns: 0,
    base: 22689655172413,
    rate: 0.0145,
    amount: 329000000000,
    caption:
      "We pay about 1.45% on wages for Medicare taxes.  This amounts to $329 billion to the government.",
  },
  {
    category: "Corporate Taxes",
    type: "income",
    returns: 35060997,
    base: 1095238095238,
    rate: 0.21,
    amount: 230000000000,
    caption:
      "Corporations pay a 21% tax rate on income. There are around 35 million corporations that file tax returns, on around $1 trillion in earnings, they pay $230 billion in taxes.",
  },
  {
    category: "Social Security Benefits",
    type: "expense",
    rate: 1,
    amount: 1141284000000,
    caption:
      "Cost of Social Security are one of the largest government expense representing around 30% of government spending in 2019. 70 million people receive social security at around $16k a piece.",
  },
  {
    category: "Medicare and Medicaid Expense",
    type: "expense",
    rate: 1,
    amount: 1337731000000,
    caption:
      "Medicare is for individuals over 65 and Medicaid is for low income individuals.  The two overlap and in 2019 around 100 million people were covered by these programs.",
  },
  {
    category: "Department of Defense",
    type: "expense",
    rate: 1,
    amount: 654000000000,
    caption:
      "The Defense budget of $650 billion in 2019 was about 25% for salaries of DoD personnel, around 40% for operating and maintaining bases and equipment, around 20% for new vehicles and procurement, and around 10% for research and development.",
  },
  {
    category: "Department of Health and Human Services",
    type: "expense",
    rate: 1,
    amount: 182584000000,
    caption:
      "The Department of Health and Human Services contains many key federal agencies that provide for the safety of people, including the FDA, CDC, NIH, and federal welfare.  Federal welfare programs are around $25 billion a year, covering 2 million families",
  },
  {
    category: "Department of Education",
    type: "expense",
    rate: 1,
    amount: 154984000000,
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar, dolor vel lobortis vehicula, justo mauris pellentesque nisl, ac ornare neque velit pharetra dui. Phasellus",
  },
  {
    category: "Department of Labor",
    type: "expense",
    rate: 1,
    amount: 244026000000,
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar, dolor vel lobortis vehicula, justo mauris pellentesque nisl, ac ornare neque velit pharetra dui. Phasellus",
  },
  {
    category: "Department of Agriculture",
    type: "expense",
    rate: 1,
    amount: 224952000000,
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar, dolor vel lobortis vehicula, justo mauris pellentesque nisl, ac ornare neque velit pharetra dui. Phasellus",
  },
  {
    category: "COVID-19 Relief Funds",
    type: "expense",
    rate: 1,
    amount: 3500000000000,
    caption:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar, dolor vel lobortis vehicula, justo mauris pellentesque nisl, ac ornare neque velit pharetra dui. Phasellus",
  },
];

db.TaxData.remove({})
  .then(() => db.TaxData.collection.insertMany(dataSeed))
  .then((data) => {
    console.log(data.result.n + " Records Inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
