export const posts: PostModel[] = [
  {
    by: "jamilbk",
    id: 35908337,
    time: 1683838872,
    title: "Firezone (YC W22) is hiring Elixir and Rust engineers",
    url: "https://www.ycombinator.com/companies/firezone/jobs",
  },
  {
    by: "sarah_tech",
    id: 35908338,
    time: 1683839000,
    title: "OpenAI is looking for ML engineers and researchers",
    url: "https://openai.com/careers",
  },
  {
    by: "mike_dev",
    id: 35908339,
    time: 1683839120,
    title: "Stripe hiring senior backend engineers",
    url: "https://stripe.com/jobs",
  },
  {
    by: "alex_ai",
    id: 35908340,
    time: 1683839240,
    title: "Anthropic seeking AI safety researchers",
    url: "https://anthropic.com/careers",
  },
  {
    by: "jen_ux",
    id: 35908341,
    time: 1683839360,
    title: "Figma is hiring product designers",
    url: "https://figma.com/careers",
  },
  {
    by: "david_data",
    id: 35908342,
    time: 1683839480,
    title: "Databricks looking for data engineers",
    url: "https://databricks.com/careers",
  },
  {
    by: "lisa_cloud",
    id: 35908343,
    time: 1683839600,
    title: "AWS hiring cloud architects",
    url: "https://aws.amazon.com/careers",
  },
  {
    by: "tom_mobile",
    id: 35908344,
    time: 1683839720,
    title: "Apple seeking iOS developers",
    url: "https://jobs.apple.com",
  },
];

export interface PostModel {
  by: string;
  id: number;
  time: number;
  title: string;
  url: string;
}
