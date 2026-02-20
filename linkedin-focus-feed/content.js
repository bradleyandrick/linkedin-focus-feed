const DEFAULT_SETTINGS = {
  hideSuggested: true,
  hideRecommended: true,
  hideJobsRecommended: true,
  hidePromoted: true,
  hideJobsPosts: true,
  hideSearchOpenJobs: true,
  hideLearnMore: true,
  hideExplore: true,
};

let settings = { ...DEFAULT_SETTINGS };

function hideElement(el, filterKey) {
  if (el.dataset.lffHidden) return;
  el.style.display = "none";
  el.dataset.lffHidden = filterKey;
}

function unhideFilter(filterKey) {
  document.querySelectorAll(`[data-lff-hidden="${filterKey}"]`).forEach((el) => {
    el.style.display = "";
    delete el.dataset.lffHidden;
  });
}

// Returns the closest feed post container, supporting both the old class-based
// layout and the new role="listitem" layout LinkedIn now uses.
function closestPostContainer(el) {
  let node = el;
  while (node) {
    if (node.classList && node.classList.contains("feed-shared-update-v2")) return node;
    if (node.getAttribute && node.getAttribute("role") === "listitem") return node;
    if (node.tagName === "LI") return node;
    node = node.parentElement;
  }
  return null;
}

// Searches both <span> and <p> elements for text content matching the predicate,
// then hides the closest post container.
function hideByText(selector, predicate, filterKey) {
  document.querySelectorAll(selector).forEach((el) => {
    // Only match leaf-like nodes to avoid matching large containers whose
    // textContent includes many nested strings.
    const text = el.textContent.trim().toLowerCase();
    if (predicate(text)) {
      const container = closestPostContainer(el);
      if (container) hideElement(container, filterKey);
    }
  });
}

function hideSuggestedPosts() {
  hideByText("span, p", (t) => t === "suggested", "hideSuggested");
}

function hideRecommendedForYou() {
  hideByText("span, p", (t) => t === "recommended for you", "hideRecommended");
}

function hideJobsRecommendedForYou() {
  hideByText("span, p", (t) => t === "jobs recommended for you", "hideJobsRecommended");
}

function hidePromotedPosts() {
  hideByText("span, p", (t) => t === "promoted", "hidePromoted");
}

function hideSearchOpenJobs() {
  hideByText("span, p", (t) => t === "search open jobs", "hideSearchOpenJobs");
}

function hidePostsContainingJobs() {
  hideByText("span, p", (t) => t.includes("jobs"), "hideJobsPosts");
}

function hideLearnMoreLinks() {
  document.querySelectorAll("a").forEach((anchor) => {
    if (anchor.textContent.trim().toLowerCase().includes("learn more")) {
      const container = closestPostContainer(anchor);
      if (container) hideElement(container, "hideLearnMore");
    }
  });
}

function hideExploreLinks() {
  document.querySelectorAll("a").forEach((anchor) => {
    if (anchor.textContent.trim().toLowerCase().includes("explore")) {
      const container = closestPostContainer(anchor);
      if (container) hideElement(container, "hideExplore");
    }
  });
}

function runFilters() {
  if (settings.hideSuggested) hideSuggestedPosts();
  if (settings.hideRecommended) hideRecommendedForYou();
  if (settings.hideJobsRecommended) hideJobsRecommendedForYou();
  if (settings.hidePromoted) hidePromotedPosts();
  if (settings.hideJobsPosts) hidePostsContainingJobs();
  if (settings.hideSearchOpenJobs) hideSearchOpenJobs();
  if (settings.hideLearnMore) hideLearnMoreLinks();
  if (settings.hideExplore) hideExploreLinks();
}

chrome.storage.sync.get(DEFAULT_SETTINGS, (stored) => {
  settings = stored;
  runFilters();
});

chrome.storage.onChanged.addListener((changes) => {
  for (const [key, { newValue }] of Object.entries(changes)) {
    const wasEnabled = settings[key];
    settings[key] = newValue;
    if (!newValue && wasEnabled) {
      unhideFilter(key);
    }
  }
});

setInterval(runFilters, 500);
