function hideSuggestedPosts() {
  document.querySelectorAll("span.update-components-header__text-view").forEach(span => {
    if (span.textContent.trim() === "Suggested") {
      let postContainer = span.closest("div.feed-shared-update-v2");
      if (postContainer) {
        postContainer.style.display = "none";
      }
    }
  });
}

function hidePromotedPosts() {
  document.querySelectorAll("span").forEach(span => {
    if (span.textContent.trim().toLowerCase().includes("promoted")) {
      let postContainer = span;
      while (postContainer && !postContainer.classList.contains("feed-shared-update-v2")) {
        postContainer = postContainer.parentElement;
      }
      if (postContainer) {
        postContainer.style.display = "none";
      }
    }
  });
}

function hideSearchOpenJobs() {
  document.querySelectorAll("span").forEach(span => {
    if (span.textContent.trim().toLowerCase().includes("search open jobs")) {
      let postContainer = span;
      while (postContainer && !postContainer.classList.contains("feed-shared-update-v2")) {
        postContainer = postContainer.parentElement;
      }
      if (postContainer) {
        postContainer.style.display = "none";
      }
    }
  });
}
  
function hideJobsRecommendedForYou() {
  document.querySelectorAll("span").forEach(span => {
    if (span.textContent.trim().toLowerCase().includes("jobs")) {
      let postContainer = span;
      while (postContainer && !postContainer.classList.contains("feed-shared-update-v2")) {
        postContainer = postContainer.parentElement;
      }
      if (postContainer) {
        postContainer.style.display = "none";
      }
    }
  });
}

function hidePostsContainingJobs() {
  document.querySelectorAll("span").forEach(span => {
    if (span.textContent.trim().toLowerCase().includes("jobs")) {
      let postContainer = span;
      while (postContainer && 
             !postContainer.classList.contains("feed-shared-update-v2") && 
             !postContainer.classList.contains("feed-shared-update-v2__control-menu-container")) {
        postContainer = postContainer.parentElement;
      }
      if (postContainer) {
        postContainer.style.display = "none";
      }
    }
  });
}

function hideLearnMoreLinks() {
  document.querySelectorAll("a").forEach(anchor => {
    if (anchor.textContent.trim().toLowerCase().includes("learn more")) {
      let postContainer = anchor;
      while (postContainer && 
             !postContainer.classList.contains("feed-shared-update-v2") && 
             !postContainer.classList.contains("feed-shared-update-v2__control-menu-container")) {
        postContainer = postContainer.parentElement;
      }
      if (postContainer) {
        postContainer.style.display = "none";
      }
    }
  });
}

function hideExploreLinks() {
  document.querySelectorAll("a").forEach(anchor => {
    if (anchor.textContent.trim().toLowerCase().includes("explore")) {
      let postContainer = anchor;
      while (postContainer && 
             !postContainer.classList.contains("feed-shared-update-v2") && 
             !postContainer.classList.contains("feed-shared-update-v2__control-menu-container")) {
        postContainer = postContainer.parentElement;
      }
      if (postContainer) {
        postContainer.style.display = "none";
      }
    }
  });
}

// Run all functions when the page loads
hideSuggestedPosts();
hidePromotedPosts();
hidePostsContainingJobs();
hideSearchOpenJobs();
hideJobsRecommendedForYou();
hideLearnMoreLinks();
hideExploreLinks();


// Run periodically to handle dynamically loaded content
setInterval(() => {
  hideSuggestedPosts();
  hidePromotedPosts();
  hidePostsContainingJobs();
  hideSearchOpenJobs();
hideJobsRecommendedForYou();
hideLearnMoreLinks();
hideExploreLinks();
}, 500);
