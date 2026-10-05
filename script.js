function showAdvice() {
    let soil = document.getElementById("soil").value;
    let advice = document.getElementById("advice");

    if (!soil) {
        alert("Please select a soil type.");
        return;
    }

    let recommendation = "";

    if (soil === "clay") {
        recommendation = `
            <h3>🌾 Recommended Crops</h3>
            <p>Rice, Wheat and Cotton are suitable choices.</p>
            <p>Tip: Maintain proper drainage.</p>
        `;
    } 
    else if (soil === "sandy") {
        recommendation = `
            <h3>🥕 Recommended Crops</h3>
            <p>Groundnut, Carrot and Watermelon can be suitable.</p>
            <p>Tip: Maintain adequate irrigation.</p>
        `;
    } 
    else {
        recommendation = `
            <h3>🌱 Recommended Crops</h3>
            <p>Vegetables, Rice and Pulses can grow well.</p>
            <p>Tip: Maintain balanced irrigation and nutrients.</p>
        `;
    }

    advice.innerHTML = recommendation;
}