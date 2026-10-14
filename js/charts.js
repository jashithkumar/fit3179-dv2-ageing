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
  "#chart-population-pyramid",
  "js/charts/population_pyramid.vg.json",
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

vegaEmbed(
  "#chart-older-population-map",
  "js/charts/older_population_symbols.vg.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#chart-rank-comparison",
  "js/charts/share_count_rank.vg.json",
  embedOptions
).catch(console.error);