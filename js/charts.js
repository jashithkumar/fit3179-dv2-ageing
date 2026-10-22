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
  "#chart-lga-older-population-top10",
  "js/charts/lga_older_population_top10.vg.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#chart-rank-comparison",
  "js/charts/share_count_rank.vg.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#chart-ageing-change-map",
  "js/charts/ageing_change_map.vg.json",
  embedOptions
).catch(console.error);

vegaEmbed(
  "#chart-lga-ageing-slope",
  "js/charts/lga_ageing_slope.vg.json",
  embedOptions
).catch(console.error);


vegaEmbed(
  "#chart-state-tile-map",
  "js/charts/state_tile_map.vg.json",
  embedOptions
).catch(console.error);
