// Crop metadata to enrich the results screen with premium cards
const CROP_METADATA = {
  "rice": {
    "displayName": "Rice",
    "image": "https://images.unsplash.com/photo-1536631980011-791a500207e9?auto=format&fit=crop&w=600&q=80",
    "category": "Cereal Grain",
    "description": "Rice is a primary staple crop requiring high moisture and standing water. It thrives in hot, humid climates with heavy clay or loamy soils that retain water well.",
    "growthDuration": "120-150 days",
    "waterRequirement": "Very High"
  },
  "maize": {
    "displayName": "Maize (Corn)",
    "image": "https://images.unsplash.com/photo-1551754625-702377370d6a?auto=format&fit=crop&w=600&q=80",
    "category": "Cereal Grain",
    "description": "Maize is a versatile cereal crop requiring well-drained loamy soils and warm, sunny weather. It is highly efficient in water usage but sensitive to severe drought during flowering.",
    "growthDuration": "90-120 days",
    "waterRequirement": "Moderate"
  },
  "chickpea": {
    "displayName": "Chickpea",
    "image": "https://images.unsplash.com/photo-1547050068-d4844822a490?auto=format&fit=crop&w=600&q=80",
    "category": "Legume/Pulse",
    "description": "Chickpeas are cool-season pulse crops that enrich the soil by fixing atmospheric nitrogen. They require low moisture and thrive in heavy soils that retain residual moisture.",
    "growthDuration": "110-140 days",
    "waterRequirement": "Low"
  },
  "kidneybeans": {
    "displayName": "Kidney Beans",
    "image": "https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=600&q=80",
    "category": "Legume/Pulse",
    "description": "Kidney beans are nutritious pulses requiring moderate rainfall and cool-to-warm temperatures. They grow best in rich, organic, well-draining soils with a neutral pH.",
    "growthDuration": "80-110 days",
    "waterRequirement": "Moderate"
  },
  "pigeonpeas": {
    "displayName": "Pigeon Peas",
    "image": "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80",
    "category": "Legume/Pulse",
    "description": "Pigeon peas are deep-rooted, drought-tolerant legumes that can grow in poor soils. They are excellent for intercropping and improve soil structure significantly.",
    "growthDuration": "150-180 days",
    "waterRequirement": "Low"
  },
  "mothbeans": {
    "displayName": "Moth Beans",
    "image": "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80",
    "category": "Legume/Pulse",
    "description": "Moth bean is an exceptionally drought-resistant legume grown in arid and semi-arid regions. It forms a dense ground cover, preventing soil erosion and conserving moisture.",
    "growthDuration": "75-90 days",
    "waterRequirement": "Very Low"
  },
  "mungbean": {
    "displayName": "Mung Bean",
    "image": "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=600&q=80",
    "category": "Legume/Pulse",
    "description": "Mung beans are short-duration, warm-season legumes. They require minimal water and are often cultivated in crop rotations to boost nitrogen content in soil.",
    "growthDuration": "60-75 days",
    "waterRequirement": "Low"
  },
  "blackgram": {
    "displayName": "Black Gram",
    "image": "https://images.unsplash.com/photo-1606757389105-64e824c11067?auto=format&fit=crop&w=600&q=80",
    "category": "Legume/Pulse",
    "description": "Black gram is a highly nutritious pulse that thrives in hot, humid conditions. It prefers heavier loamy soils and is widely used in traditional Asian agriculture.",
    "growthDuration": "90-120 days",
    "waterRequirement": "Low to Moderate"
  },
  "lentil": {
    "displayName": "Lentil",
    "image": "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?auto=format&fit=crop&w=600&q=80",
    "category": "Legume/Pulse",
    "description": "Lentils are cool-season annual pulses with high tolerance to drought. They prefer well-drained, sandy loam soils and are sensitive to waterlogging.",
    "growthDuration": "100-130 days",
    "waterRequirement": "Low"
  },
  "pomegranate": {
    "displayName": "Pomegranate",
    "image": "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80",
    "category": "Fruit Crop",
    "description": "Pomegranates are high-value fruits that prefer semi-arid conditions. They thrive in warm temperatures and are tolerant to moderate drought and slightly alkaline soils.",
    "growthDuration": "2-3 years to fruit",
    "waterRequirement": "Low to Moderate"
  },
  "banana": {
    "displayName": "Banana",
    "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80",
    "category": "Fruit Crop",
    "description": "Bananas are tropical plants requiring rich, organic, well-drained soil and high levels of nitrogen and potassium. They need continuous moisture and high humidity.",
    "growthDuration": "9-12 months to harvest",
    "waterRequirement": "Very High"
  },
  "mango": {
    "displayName": "Mango",
    "image": "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    "category": "Fruit Crop",
    "description": "Mango is the 'king of fruits', thriving in tropical and subtropical climates. It requires a dry spell before flowering to fruit successfully and prefers deep, loamy soils.",
    "growthDuration": "3-5 years to fruit",
    "waterRequirement": "Moderate"
  },
  "grapes": {
    "displayName": "Grapes",
    "image": "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80",
    "category": "Fruit Crop",
    "description": "Grapes require warm, dry summers and mild winters. Good soil drainage is critical to prevent root diseases. They are highly responsive to potassium and moderate pH levels.",
    "growthDuration": "2-3 years to fruit",
    "waterRequirement": "Moderate"
  },
  "watermelon": {
    "displayName": "Watermelon",
    "image": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    "category": "Fruit Crop",
    "description": "Watermelons grow on long vines in sandy, well-aerated soils. They demand hot temperatures, plenty of sunlight, and consistent moisture during the early growth stages.",
    "growthDuration": "80-100 days",
    "waterRequirement": "Moderate to High"
  },
  "muskmelon": {
    "displayName": "Muskmelon",
    "image": "https://images.unsplash.com/photo-1571244856003-885e3e19d443?auto=format&fit=crop&w=600&q=80",
    "category": "Fruit Crop",
    "description": "Muskmelons prefer warm climates and sandy loam soils. They require moderate watering, high solar radiation, and dry atmospheric conditions during ripening to develop sweetness.",
    "growthDuration": "75-90 days",
    "waterRequirement": "Moderate"
  },
  "apple": {
    "displayName": "Apple",
    "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    "category": "Fruit Crop",
    "description": "Apples thrive in temperate zones requiring a specific number of 'chill hours' in winter. They prefer well-aerated, deep, loamy soils with rich organic matter and moderate moisture.",
    "growthDuration": "3-4 years to fruit",
    "waterRequirement": "Moderate"
  },
  "orange": {
    "displayName": "Orange",
    "image": "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80",
    "category": "Fruit Crop",
    "description": "Oranges are citrus fruits requiring a warm climate with ample sunshine. They prefer well-drained, sandy loam soils and are highly sensitive to waterlogging and frost.",
    "growthDuration": "3-4 years to fruit",
    "waterRequirement": "Moderate to High"
  },
  "papaya": {
    "displayName": "Papaya",
    "image": "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=600&q=80",
    "category": "Fruit Crop",
    "description": "Papaya is a fast-growing herb-like tropical plant. It requires high temperatures, rich and extremely well-drained soil, and consistent moisture but cannot tolerate standing water.",
    "growthDuration": "9-10 months to fruit",
    "waterRequirement": "Moderate to High"
  },
  "coconut": {
    "displayName": "Coconut",
    "image": "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80",
    "category": "Commercial Plantation",
    "description": "Coconuts are classic tropical plantation trees growing in coastal, sandy soils. They demand high humidity, high temperatures, and can tolerate saline water and coastal winds.",
    "growthDuration": "5-6 years to fruit",
    "waterRequirement": "High"
  },
  "cotton": {
    "displayName": "Cotton",
    "image": "https://images.unsplash.com/photo-1594731818274-1296c09b8b60?auto=format&fit=crop&w=600&q=80",
    "category": "Fiber Crop",
    "description": "Cotton is an important cash crop thriving in black cotton soils (regur) which retain moisture. It requires high temperatures, a long frost-free period, and moderate rainfall.",
    "growthDuration": "150-180 days",
    "waterRequirement": "Moderate"
  },
  "jute": {
    "displayName": "Jute",
    "image": "https://images.unsplash.com/photo-1584947913346-6c7c5a085d7f?auto=format&fit=crop&w=600&q=80",
    "category": "Fiber Crop",
    "description": "Jute (the golden fiber) requires a hot, wet climate with heavy monsoon rainfall and high humidity. It grows exceptionally well in alluvial soils of river basins.",
    "growthDuration": "120-150 days",
    "waterRequirement": "Very High"
  },
  "coffee": {
    "displayName": "Coffee",
    "image": "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    "category": "Beverage Crop",
    "description": "Coffee thrives on mountain slopes with well-drained volcanic soils, rich organic matter, and shade. It demands moderate, distributed rainfall and frost-free cool temperatures.",
    "growthDuration": "3-4 years to fruit",
    "waterRequirement": "High"
  }
};

// Fallback image if Unsplash fails
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80";

document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements - Navigation
  const screenInput = document.getElementById("screen-input");
  const screenResults = document.getElementById("screen-results");
  const btnRecommend = document.getElementById("btn-recommend");
  const btnBack = document.getElementById("btn-back");
  const loaderOverlay = document.getElementById("loader-overlay");
  const loaderMessage = document.getElementById("loader-message");

  // DOM Elements - Weather inputs & buttons
  const inputLocation = document.getElementById("input-location");
  const btnFetchWeather = document.getElementById("btn-fetch-weather");
  const inputTemp = document.getElementById("input-temp");
  const inputHumidity = document.getElementById("input-humidity");
  const tempStatus = document.getElementById("temp-status");
  const humidityStatus = document.getElementById("humidity-status");
  
  // Weather override switch
  const toggleOverride = document.getElementById("toggle-override");

  // DOM Elements - Soil parameters
  const inputN = document.getElementById("input-n");
  const valN = document.getElementById("val-n");
  const inputP = document.getElementById("input-p");
  const valP = document.getElementById("val-p");
  const inputK = document.getElementById("input-k");
  const valK = document.getElementById("val-k");
  const inputPh = document.getElementById("input-ph");
  const valPh = document.getElementById("val-ph");

  // DOM Elements - Results Page
  const resultsContainer = document.getElementById("results-container");

  // Sync range slider indicators
  inputN.addEventListener("input", (e) => valN.textContent = e.target.value);
  inputP.addEventListener("input", (e) => valP.textContent = e.target.value);
  inputK.addEventListener("input", (e) => valK.textContent = e.target.value);
  inputPh.addEventListener("input", (e) => valPh.textContent = parseFloat(e.target.value).toFixed(1));

  // Enable/disable manual override for weather
  toggleOverride.addEventListener("change", (e) => {
    const isManual = e.target.checked;
    inputTemp.disabled = !isManual;
    inputHumidity.disabled = !isManual;
    if (isManual) {
      inputTemp.focus();
      tempStatus.textContent = "Manual Input Mode";
      humidityStatus.textContent = "Manual Input Mode";
    } else {
      tempStatus.textContent = "Fetched from location";
      humidityStatus.textContent = "Fetched from location";
    }
  });

  // Weather Fetching Logic
  btnFetchWeather.addEventListener("click", async () => {
    const query = inputLocation.value.trim();
    if (!query) {
      showToast("Please enter a valid place name first.", "warning");
      inputLocation.focus();
      return;
    }

    setWeatherLoading(true);
    showToast("Searching location...", "info");

    try {
      // 1. Geocode location using Open-Meteo Geocoding API
      const geocodeUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=1&language=en&format=json`;
      const geoRes = await fetch(geocodeUrl);
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error("Location not found. Try entering a larger city or adding the country.");
      }

      const location = geoData.results[0];
      const { latitude, longitude, name, country } = location;
      const countryStr = country ? `, ${country}` : "";
      
      showToast(`Location resolved: ${name}${countryStr}. Fetching weather...`, "info");
      
      // Update location input with formatted name
      inputLocation.value = `${name}${countryStr}`;

      // 2. Fetch current weather using Open-Meteo Forecast API
      const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m`;
      const weatherRes = await fetch(weatherUrl);
      const weatherData = await weatherRes.json();

      if (!weatherData.current) {
        throw new Error("Could not fetch current weather data.");
      }

      const temp = weatherData.current.temperature_2m;
      const humidity = weatherData.current.relative_humidity_2m;

      // Populate inputs
      inputTemp.value = temp;
      inputHumidity.value = humidity;

      // Temporary update text status
      tempStatus.textContent = `Temperature for ${name}`;
      humidityStatus.textContent = `Humidity for ${name}`;

      // Remove disabled state temporarily for animation, then restore
      inputTemp.classList.add("input-success-highlight");
      inputHumidity.classList.add("input-success-highlight");
      setTimeout(() => {
        inputTemp.classList.remove("input-success-highlight");
        inputHumidity.classList.remove("input-success-highlight");
      }, 2000);

      showToast(`Successfully fetched weather! Temp: ${temp}°C, Humidity: ${humidity}%`, "success");
    } catch (err) {
      console.error(err);
      showToast(err.message || "Failed to fetch weather.", "error");
    } finally {
      setWeatherLoading(false);
    }
  });

  // Recommend Crops Button Logic
  btnRecommend.addEventListener("click", () => {
    // 1. Gather values
    const n = parseFloat(inputN.value);
    const p = parseFloat(inputP.value);
    const k = parseFloat(inputK.value);
    const ph = parseFloat(inputPh.value);
    const temp = parseFloat(inputTemp.value);
    const humidity = parseFloat(inputHumidity.value);

    // 2. Validate weather parameters
    if (isNaN(temp) || isNaN(humidity)) {
      showToast("Weather parameters are missing. Please fetch weather or enable manual weather override.", "error");
      if (!toggleOverride.checked) {
        inputLocation.focus();
      } else {
        inputTemp.focus();
      }
      return;
    }

    const inputs = { N: n, P: p, K: k, ph, temperature: temp, humidity };

    // 3. Trigger loader animation
    showLoader("Running AI model matching...", "Analyzing soil macronutrients (N, P, K)...");
    
    setTimeout(() => {
      showLoader("Running AI model matching...", "Evaluating atmospheric micro-climate (Temp, Humidity)...");
    }, 800);

    setTimeout(() => {
      showLoader("Running AI model matching...", "Optimizing soil pH suitability thresholds...");
    }, 1500);

    setTimeout(() => {
      // 4. Compute recommendations
      const recommendations = getTopRecommendations(inputs);
      
      // 5. Render results
      renderResults(recommendations, inputs);
      
      // 6. Transition Screen
      hideLoader();
      transitionToResults();
    }, 2200);
  });

  // Back Button Logic
  btnBack.addEventListener("click", () => {
    transitionToInput();
  });

  // core ML model logic: Gaussian Radial Basis matching
  function getTopRecommendations(inputs) {
    const list = [];

    // Loop through all crops in our database
    for (const cropKey in CROPS_DATA) {
      const stats = CROPS_DATA[cropKey];
      let totalSim = 0;
      const features = ['N', 'P', 'K', 'temperature', 'humidity', 'ph'];
      const details = {};

      for (const feat of features) {
        const val = inputs[feat];
        const stat = stats[feat];

        // Smooth standard deviations to ensure matching is robust and doesn't collapse
        // minStd keeps it from division by zero and smooths extreme narrow distributions
        const rangeSpread = stat.max - stat.min;
        const minStd = Math.max(stat.std, rangeSpread * 0.15, 1.0);
        
        // Z-score calculation
        const z = (val - stat.mean) / (1.5 * minStd);
        // Gaussian probability score
        const sim = Math.exp(-0.5 * z * z);
        
        totalSim += sim;

        // Store breakdown stats
        details[feat] = {
          userVal: val,
          cropMean: stat.mean,
          cropMin: stat.min,
          cropMax: stat.max,
          match: Math.round(sim * 100)
        };
      }

      // Compute final matching score (percentage)
      const avgSim = totalSim / features.length;
      
      // Curve response slightly to reward high matches and separate top picks
      const curvedAccuracy = Math.pow(avgSim, 1.3) * 100;
      
      list.push({
        key: cropKey,
        accuracy: parseFloat(curvedAccuracy.toFixed(1)),
        details: details
      });
    }

    // Sort by accuracy descending
    list.sort((a, b) => b.accuracy - a.accuracy);

    // Return top 3
    return list.slice(0, 3);
  }

  // Render results to DOM
  function renderResults(recommendations, inputs) {
    resultsContainer.innerHTML = "";

    recommendations.forEach((rec, index) => {
      const cropMeta = CROP_METADATA[rec.key] || {
        displayName: rec.key.charAt(0).toUpperCase() + rec.key.slice(1),
        image: FALLBACK_IMAGE,
        category: "General Crop",
        description: "A suitable agricultural crop matching your parameters.",
        growthDuration: "N/A",
        waterRequirement: "Moderate"
      };

      const card = document.createElement("div");
      card.className = "crop-card glass-panel fade-in-up";
      card.style.animationDelay = `${index * 0.15}s`;

      // Define accuracy accent colors
      let accuracyColor = "var(--accent-primary)";
      if (rec.accuracy < 70) accuracyColor = "#e6a23c";
      if (rec.accuracy < 50) accuracyColor = "#f56c6c";

      // Render feature match badges
      let breakdownHtml = "";
      const featureLabels = {
        N: { name: "Nitrogen", unit: " mg/kg" },
        P: { name: "Phosphorus", unit: " mg/kg" },
        K: { name: "Potassium", unit: " mg/kg" },
        ph: { name: "Soil pH", unit: "" },
        temperature: { name: "Temp", unit: "°C" },
        humidity: { name: "Humidity", unit: "%" }
      };

      for (const [feat, dat] of Object.entries(rec.details)) {
        const isOptimal = dat.userVal >= dat.cropMin && dat.userVal <= dat.cropMax;
        const badgeClass = isOptimal ? "badge-optimal" : "badge-suboptimal";
        const badgeLabel = isOptimal ? "Optimal" : "Sub-optimal";
        
        breakdownHtml += `
          <div class="stat-bar-item">
            <div class="stat-bar-meta">
              <span class="stat-bar-name">${featureLabels[feat].name}</span>
              <span class="stat-bar-value">${dat.userVal}${featureLabels[feat].unit} <span class="ideal-range">(Ideal: ${dat.cropMin}-${dat.cropMax})</span></span>
            </div>
            <div class="stat-progress-track">
              <div class="stat-progress-bar" style="width: ${dat.match}%"></div>
            </div>
            <span class="stat-badge ${badgeClass}">${badgeLabel} (${dat.match}%)</span>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="crop-rank-badge">#${index + 1}</div>
        <div class="crop-card-image-wrapper">
          <img class="crop-card-image" src="${cropMeta.image}" alt="${cropMeta.displayName}" onerror="this.src='${FALLBACK_IMAGE}'">
          <div class="crop-image-overlay">
            <span class="crop-category-tag">${cropMeta.category}</span>
          </div>
        </div>
        <div class="crop-card-content">
          <div class="crop-card-header">
            <div class="crop-title-group">
              <h3 class="crop-display-name">${cropMeta.displayName}</h3>
              <p class="crop-duration"><i class="fas fa-clock"></i> Duration: ${cropMeta.growthDuration}</p>
            </div>
            <div class="crop-accuracy-circle" style="--accuracy-color: ${accuracyColor}; --accuracy-percent: ${rec.accuracy}%">
              <svg viewBox="0 0 36 36" class="circular-chart">
                <path class="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path class="circle" stroke-dasharray="${rec.accuracy}, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              </svg>
              <div class="accuracy-percentage">${rec.accuracy}%<span class="acc-label">Match</span></div>
            </div>
          </div>
          <p class="crop-desc">${cropMeta.description}</p>
          
          <div class="crop-quick-info">
            <div class="info-pill"><i class="fas fa-tint"></i> Water: <strong>${cropMeta.waterRequirement}</strong></div>
            <div class="info-pill"><i class="fas fa-flask"></i> Soil pH Range: <strong>${CROPS_DATA[rec.key].ph.min.toFixed(1)} - ${CROPS_DATA[rec.key].ph.max.toFixed(1)}</strong></div>
          </div>

          <div class="crop-breakdown-toggle">
            <button class="btn-toggle-breakdown" onclick="toggleDetails(this)">
              Show Matching Details <i class="fas fa-chevron-down"></i>
            </button>
            <div class="crop-breakdown-details hidden">
              <h4 class="breakdown-title">Soil & Environmental Alignment</h4>
              <div class="breakdown-list">
                ${breakdownHtml}
              </div>
            </div>
          </div>
        </div>
      `;

      resultsContainer.appendChild(card);
    });
  }

  // Animation helpers
  function showLoader(title, subtitle) {
    loaderOverlay.classList.remove("hidden");
    loaderOverlay.classList.add("active");
    document.getElementById("loader-title").textContent = title;
    loaderMessage.textContent = subtitle;
  }

  function hideLoader() {
    loaderOverlay.classList.remove("active");
    setTimeout(() => {
      loaderOverlay.classList.add("hidden");
    }, 300);
  }

  // Uses high-quality fade & slide animations for transitions
  function transitionToResults() {
    screenInput.classList.add("hidden-fade");
    setTimeout(() => {
      screenInput.classList.add("hidden");
      screenResults.classList.remove("hidden");
      setTimeout(() => {
        screenResults.classList.remove("hidden-fade");
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 50);
    }, 450);
  }

  function transitionToInput() {
    screenResults.classList.add("hidden-fade");
    setTimeout(() => {
      screenResults.classList.add("hidden");
      screenInput.classList.remove("hidden");
      setTimeout(() => {
        screenInput.classList.remove("hidden-fade");
      }, 50);
    }, 450);
  }

  function setWeatherLoading(isLoading) {
    if (isLoading) {
      btnFetchWeather.disabled = true;
      btnFetchWeather.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Fetching...';
      btnFetchWeather.classList.add("btn-loading");
    } else {
      btnFetchWeather.disabled = false;
      btnFetchWeather.innerHTML = '<i class="fas fa-cloud-sun"></i> Fetch Weather';
      btnFetchWeather.classList.remove("btn-loading");
    }
  }

  // Toast notifications for user feedback
  function showToast(message, type = "info") {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type} fade-in`;
    
    let icon = "info-circle";
    if (type === "success") icon = "check-circle";
    if (type === "warning") icon = "exclamation-triangle";
    if (type === "error") icon = "times-circle";

    toast.innerHTML = `
      <i class="fas fa-${icon}"></i>
      <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Remove toast after duration
    setTimeout(() => {
      toast.classList.add("fade-out");
      toast.addEventListener("transitionend", () => toast.remove());
    }, 4000);
  }
});

// Global function used in card toggle click handlers
function toggleDetails(btn) {
  const details = btn.nextElementSibling;
  const icon = btn.querySelector("i");
  const isHidden = details.classList.contains("hidden");

  if (isHidden) {
    details.classList.remove("hidden");
    btn.innerHTML = 'Hide Matching Details <i class="fas fa-chevron-up"></i>';
    btn.classList.add("active");
  } else {
    details.classList.add("hidden");
    btn.innerHTML = 'Show Matching Details <i class="fas fa-chevron-down"></i>';
    btn.classList.remove("active");
  }
}
