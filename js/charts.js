const embedOptions = {
  actions: false,
  renderer: "svg"
};

vegaEmbed(
  "#chart-national-history",
  "js/charts/national_ageing_trend.vg.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#chart-ageing-map",
  "js/charts/ageing_choropleth.vg.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#chart-oldest-lgas",
  "js/charts/oldest_lgas.vg.json",
  embedOptions
).catch(console.error);