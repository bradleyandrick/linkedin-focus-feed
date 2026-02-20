const FILTERS = [
  { key: "hideSuggested",      label: "Suggested posts" },
  { key: "hideRecommended",    label: "Recommended for you" },
  { key: "hideJobsRecommended",label: "Jobs recommended for you" },
  { key: "hidePromoted",       label: "Promoted posts" },
  { key: "hideJobsPosts",      label: "Jobs-related posts" },
  { key: "hideSearchOpenJobs", label: "Search Open Jobs posts" },
  { key: "hideLearnMore",      label: '"Learn More" posts' },
  { key: "hideExplore",        label: '"Explore" posts' },
];

const DEFAULT_SETTINGS = Object.fromEntries(FILTERS.map((f) => [f.key, true]));

const container = document.getElementById("filters");

FILTERS.forEach(({ key, label }) => {
  const item = document.createElement("div");
  item.className = "filter-item";

  const span = document.createElement("span");
  span.className = "filter-label";
  span.textContent = label;

  const toggleWrapper = document.createElement("label");
  toggleWrapper.className = "toggle-wrapper";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = key;

  const slider = document.createElement("span");
  slider.className = "toggle-slider";

  toggleWrapper.appendChild(input);
  toggleWrapper.appendChild(slider);

  item.appendChild(span);
  item.appendChild(toggleWrapper);
  container.appendChild(item);

  input.addEventListener("change", () => {
    chrome.storage.sync.set({ [key]: input.checked });
  });
});

chrome.storage.sync.get(DEFAULT_SETTINGS, (stored) => {
  FILTERS.forEach(({ key }) => {
    const input = document.getElementById(key);
    if (input) input.checked = stored[key];
  });
});
